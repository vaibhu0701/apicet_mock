# AP ICET Mock Test Platform

This is a full-stack AP ICET mock test web application built using HTML, CSS, JavaScript, and a Node.js backend with MySQL database.


## Live Project

(https://apicet-mocktest.onrender.com)


## Overview

This platform allows students to:

* Register and securely log in
* Attempt a structured mock test
* Track performance with detailed analytics
* Improve speed, accuracy, and exam strategy


## Tech Stack

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript

### Backend

* Node.js (without frameworks)
* Built using core `http` module

### Database

* MySQL (Cloud-hosted)

### Deployment

* Backend: Render
* Database: Railway

## Project Structure

APICET-MOCKTEST/
│
├── index.html          # Login & Registration
├── instructions.html   # Exam instructions
├── test.html           # Mock test interface
├── analysis.html       # Result dashboard
│
├── styles.css          # UI styling
├── script.js           # Frontend logic (questions, timer, analysis)
│
├── server.js           # Backend server (Node.js + MySQL)
├── package.json        # Dependencies
├── .env                # Environment variables (not pushed)
```

## Features

### Authentication

* User registration with validation
* Secure login system
* Password hashing using PBKDF2
* Session management with cookies

### Mock Test System

* Section-based question flow
* Timer-based exam
* Attempt / skip tracking
* Auto submission

### Performance Analytics

* Marks scored
* Accuracy calculation
* Attempted vs unattempted
* Correct / incorrect answers
* Time taken
* Full attempt data stored


## 🗄️ Database Schema

### `users` Table

Stores user information:

* id (Primary Key)
* name
* email (unique)
* phone
* state
* city
* degree
* college
* password_hash
* password_salt
* created_at

### `attempts` Table

Stores test performance:

* id
* user_id (Foreign Key)
* marks_scored
* total_marks
* attempted
* unattempted
* correct_count
* incorrect_count
* accuracy
* pace
* time_taken
* analysis_json
* created_at

##  Running Locally

1. Install dependencies:

npm install

2. Start server:

node server.js

3. Open browser:

http://localhost:3000

## Deployment

### Backend Deployment (Render)

1. Connect GitHub repository
2. Configure:

   * **Build Command:** `npm install`
   * **Start Command:** `node server.js`
3. Add Environment Variable:

### Database (Railway)

* MySQL database hosted on Railway
* Tables:

  * `users`
  * `attempts`

## Security

* Passwords hashed using PBKDF2
* Sessions handled with HTTP-only cookies
* SQL queries use parameterized inputs
* Sensitive data stored in environment variables

---

##  Data Handling

* User data stored in Railway MySQL
* Test attempts saved in database
* Temporary state stored in browser `localStorage`

---

## Important Notes

* SQLite has been replaced with MySQL
* Application runs fully on cloud infrastructure
* Backend uses connection pooling for stability
* Designed without frameworks for learning purposes

---

## Future Enhancements

* Admin dashboard
* Leaderboard system
* Question randomization
* Dark mode UI
* Mobile responsiveness
* JWT authentication
* Multi-test support

##  Author

Developed as a full-stack learning project for building real-world exam platforms.

##  If you like this project

Give it a star on GitHub ⭐
