require("dotenv").config();
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { URL } = require("node:url");
const mysql = require("mysql2");

const db = mysql.createPool({
  uri: process.env.MYSQL_PUBLIC_URL,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const promiseDb = db.promise();

const HOST = "127.0.0.1";
const PORT = Number(process.env.PORT || 3000);
const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, "data");
const DB_PATH = path.join(DATA_DIR, "apicet.db");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}


const sessions = new Map();



function sendJson(res, statusCode, payload, headers = {}) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    ...headers
  });
  res.end(JSON.stringify(payload));
}

function sendText(res, statusCode, payload, headers = {}) {
  res.writeHead(statusCode, {
    "Content-Type": "text/plain; charset=utf-8",
    ...headers
  });
  res.end(payload);
}

function parseCookies(req) {
  const cookieHeader = req.headers.cookie || "";
  return cookieHeader.split(";").reduce((acc, chunk) => {
    const [rawKey, ...rest] = chunk.trim().split("=");
    if (!rawKey) return acc;
    acc[rawKey] = decodeURIComponent(rest.join("=") || "");
    return acc;
  }, {});
}

function createSession(userId) {
  const token = crypto.randomBytes(24).toString("hex");
  sessions.set(token, {
    userId,
    expiresAt: Date.now() + 1000 * 60 * 60 * 12
  });
  return token;
}

function getSessionUser(req) {
  return new Promise((resolve) => {
    const cookies = parseCookies(req);
    const token = cookies.sessionId;

    if (!token || !sessions.has(token)) {
      resolve(null);
      return;
    }

    const session = sessions.get(token);

    if (Date.now() > session.expiresAt) {
      sessions.delete(token);
      resolve(null);
      return;
    }

    (async () => {
  try {
    const [rows] = await promiseDb.query(
      "SELECT id, name, email, phone, state, city FROM users WHERE id = ?",
      [session.userId]
    );
    resolve(rows[0] || null);
  } catch (err) {
    resolve(null);
  }
})();
  });
}

function clearSession(req) {
  const cookies = parseCookies(req);
  const token = cookies.sessionId;
  if (token) sessions.delete(token);
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");
  return { salt, hash };
}

function verifyPassword(password, user) {
  const { hash } = hashPassword(password, user.password_salt);
  return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(user.password_hash, "hex"));
}

function collectBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Payload too large"));
      }
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (_error) {
        reject(new Error("Invalid JSON payload"));
      }
    });
    req.on("error", reject);
  });
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function publicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    state: user.state,
    city: user.city
  };
}

async function handleApi(req, res, pathname) {
  if (pathname === "/api/auth/register" && req.method === "POST") {
    const body = await collectBody(req);
    const { name, email, phone, state, city,degree, college, password } = body;

    if (!name || !email || !phone || !state || !city || !degree || !college|| !password) {
      sendJson(res, 400, { ok: false, message: "All fields are required." });
      return true;
    }

   const [rows] = await promiseDb.query(
  "SELECT * FROM users WHERE email = ?",
  [normalizeEmail(email)]
);
const existingUser = rows[0];
    if (existingUser) {
      sendJson(res, 400, { ok: false, message: "Email is already registered. Please login." });
      return true;
    }

    const passwordData = hashPassword(password);
   const [result] = await promiseDb.query(
  `INSERT INTO users (name, email, phone, state, city, degree, college, password_hash, password_salt)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  [
    String(name).trim(),
    normalizeEmail(email),
    String(phone).trim(),
    String(state).trim(),
    String(city).trim(),
    String(degree).trim(),
    String(college).trim(),
    passwordData.hash,
    passwordData.salt
  ]
);

 const [userRows] = await promiseDb.query(
  `SELECT id, name, email, phone, state, city, degree, college FROM users WHERE id = ?`,
  [result.insertId]
);

const user = userRows[0];
    const sessionId = createSession(user.id);
    sendJson(
      res,
      200,
      { ok: true, user: publicUser(user) },
      { "Set-Cookie": `sessionId=${sessionId}; HttpOnly; Path=/; SameSite=Lax; Max-Age=43200` }
    );
    return true;
  }

  if (pathname === "/api/auth/login" && req.method === "POST") {
  const body = await collectBody(req);
  const { email, password } = body;

  if (!email || !password) {
    sendJson(res, 400, { ok: false, message: "Email and password are required." });
    return true;
  }

  const [rows] = await promiseDb.query(
    "SELECT * FROM users WHERE email = ?",
    [normalizeEmail(email)]
  );

  const user = rows[0];

  if (!user || !verifyPassword(password, user)) {
    sendJson(res, 401, { ok: false, message: "Invalid email or password." });
    return true;
  }

  const sessionId = createSession(user.id);

  sendJson(
    res,
    200,
    { ok: true, user: publicUser(user) },
    { "Set-Cookie": `sessionId=${sessionId}; HttpOnly; Path=/; SameSite=Lax; Max-Age=43200` }
  );

  return true;
}

  if (pathname === "/api/auth/session" && req.method === "GET") {
   const user = await getSessionUser(req);
    if (!user) {
      sendJson(res, 401, { ok: false, message: "No active session." });
      return true;
    }
    sendJson(res, 200, { ok: true, user: publicUser(user) });
    return true;
  }

  if (pathname === "/api/auth/logout" && req.method === "POST") {
    clearSession(req);
    sendJson(
      res,
      200,
      { ok: true },
      { "Set-Cookie": "sessionId=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0" }
    );
    return true;
  }

  if (pathname === "/api/attempts" && req.method === "POST") {
    const user = await getSessionUser(req);
    if (!user) {
      sendJson(res, 401, { ok: false, message: "Unauthorized" });
      return true;
    }

    const body = await collectBody(req);
   await promiseDb.query(
  `INSERT INTO attempts (
    user_id, marks_scored, total_marks, attempted, unattempted,
    correct_count, incorrect_count, accuracy, pace, time_taken, analysis_json
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  [
    user.id,
    Number(body.marksScored || 0),
    Number(body.totalMarks || 0),
    Number(body.attempted || 0),
    Number(body.unattempted || 0),
    Number(body.correct || 0),
    Number(body.incorrect || 0),
    Number(body.accuracy || 0),
    Number(body.pace || 0),
    Number(body.timeTaken || 0),
    JSON.stringify(body)
  ]
);

    sendJson(res, 200, { ok: true });
    return true;
  }

  return false;
}

function mimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon"
  };
  return types[ext] || "application/octet-stream";
}

function serveStatic(req, res, pathname) {
  const resolvedPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.normalize(path.join(ROOT_DIR, resolvedPath));

  if (!filePath.startsWith(ROOT_DIR)) {
    sendText(res, 403, "Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      sendText(res, 404, "Not found");
      return;
    }

    res.writeHead(200, { "Content-Type": mimeType(filePath) });
    res.end(content);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url, `http://${req.headers.host || `${HOST}:${PORT}`}`);
    const handled = await handleApi(req, res, requestUrl.pathname);
    if (handled) return;
    serveStatic(req, res, requestUrl.pathname);
  } catch (error) {
    sendJson(res, 500, { ok: false, message: error.message || "Internal server error." });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`AP ICET mock test server running at http://${HOST}:${PORT}`);
});
