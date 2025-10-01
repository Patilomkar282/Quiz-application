📝 Online Quiz Application

An end-to-end quiz platform built with ReactJS (frontend), Node.js (backend), MySQL (database), and TailwindCSS (UI styling).
This app allows users to take a quiz, navigate through questions, submit answers, and view their final score.


🚀 Features
🔹 Core Features

Backend (Node.js + MySQL)
Stores quiz questions, options, and correct answers.
API endpoint to fetch quiz questions (without revealing answers).
API endpoint to submit answers, calculate score, and return results.

Frontend (React + Tailwind)
Start page with quiz introduction and "Start Quiz" button.
Displays one question at a time with multiple-choice options.
Navigation with Next and Previous buttons.
Submit button to finalize the quiz.
Results page showing the final score.

✨ Bonus Features
Quiz timer on the frontend.
Results page shows correct and incorrect answers.
Backend unit tests for scoring logic.

🛠️ Tech Stack
Frontend: ReactJS, TailwindCSS
Backend: Node.js, Express
Database: MySQL
State Management: React Hooks (useState, useEffect)

📂 Project Structure

online-quiz-app/
│── backend/
│   ├── server.js         # Express server setup
│   ├── config/db.js      # MySQL connection
│
│── frontend/
│   ├── src/
│   │   ├── components/   # Quiz UI components
│   │   ├── App.js        # Main entry
│   │   ├── index.js      # React root
│   │   └── styles/       # Tailwind styles
│
│── package.json
│── README.md


⚡ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/online-quiz-app.git
cd online-quiz-app

2️⃣ Backend Setup
cd backend
npm install


Create a .env file in backend/ with:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=quiz_app
PORT=5000


Run database migrations (or import provided quiz_app.sql).

Start backend:

npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm start

🎯 Usage Flow
Start the quiz from the homepage.
Navigate through questions using Next/Previous.
Submit the quiz after answering all questions.
View the final score (and correct/incorrect answers if enabled).






