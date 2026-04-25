# AP ICET mock

This is a multi-page AP ICET mock test app built with plain HTML, CSS and JavaScript, plus a Node backend with SQLite for login.

## Pages

- `index.html` - login / registration form
- `instructions.html` - exam instructions page
- `test.html` - section-wise mock test interface
- `analysis.html` - result and analysis dashboard

## Files

- `styles.css` - shared styling for all pages
- `script.js` - form handling, question engine, timer, submission and analysis logic

## How to run

1. Start the backend server:
   `C:\Users\VICTUS\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe server.js`
2. Open `http://127.0.0.1:3000`
3. Register a user or login with an existing account.
4. Read instructions and click `Proceed`.
5. Attempt the test and submit it.
6. View the analysis report.

## Notes

- You can rename the project folder to `AP ICET mock` without breaking the app.
- User accounts and saved attempts are stored in SQLite under `data/apicet.db`.
- Session login is handled by the backend using cookies.
- Candidate data, active exam state and rendered analysis are still cached in `localStorage` for the current browser session.
- Question data is included in `script.js`.
- You can replace the sample questions with your real AP ICET dataset.
