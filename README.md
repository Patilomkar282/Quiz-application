# 📝 Online Quiz Application

An end-to-end quiz platform built with **ReactJS** (frontend), **Node.js** (backend), **MySQL** (database), and **TailwindCSS** (UI styling).  
This app allows users to take a quiz, navigate through questions, submit answers, and view their final score.

---

## 🚀 Features

### 🔹 Core Features
**Backend (Node.js + MySQL)**
- Stores quiz questions, options, and correct answers.
- API endpoint to fetch quiz questions (without revealing answers).
- API endpoint to submit answers, calculate score, and return results.

**Frontend (React + TailwindCSS)**
- Start page with quiz introduction and **Start Quiz** button.
- Displays one question at a time with multiple-choice options.
- Navigation with **Next** and **Previous** buttons.
- **Submit** button to finalize the quiz.
- Results page showing the final score.

### ✨ Bonus Features
- Quiz timer on the frontend.
- Results page shows correct and incorrect answers.
- Backend unit tests for scoring logic.

---

## 🛠️ Tech Stack
- **Frontend**: ReactJS, TailwindCSS  
- **Backend**: Node.js, Express  
- **Database**: MySQL  
- **State Management**: React Hooks (`useState`, `useEffect`)
  
---

## ⚡ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/online-quiz-app.git
cd online-quiz-app
```

### 2️⃣ Backend Setup
```
cd backend
npm installcd frontend
npm install
npm start


DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=quiz_app
PORT=5000
npm start
```

### 3️⃣ Frontend Setup
```
cd frontend
npm install
npm start
```

## 🎯 Usage Flow
- Start the quiz from the homepage.  
- Navigate through questions using **Next/Previous**.  
- Submit the quiz after answering all questions.  
- View the final score (and correct/incorrect answers if enabled).  

---

## 📌 Future Enhancements
- User authentication & leaderboards.  
- Support for multiple quiz categories.  
- Analytics dashboard for admins.  
- Mobile responsiveness improvements.  
