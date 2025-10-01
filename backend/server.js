import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// DB connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "quizdb",
});

app.get("/api/testdb", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS solution");
    res.json({ success: true, result: rows[0].solution });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Database connection failed" });
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("Quiz API is running...");
});


//routes
// Fetch all quiz questions (without correct answers)
app.get("/api/questions", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, question_text, option_a, option_b, option_c, option_d FROM questions"
    );
    res.json({ success: true, questions: rows });
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ success: false, message: "Failed to fetch questions" });
  }
});


// Submit answers and calculate score
app.post("/api/submit", async (req, res) => {
  try {
    const userAnswers = req.body.answers; // { "1": "C", "2": "A", ... }

    // Fetch correct answers from DB
    const [rows] = await pool.query("SELECT id, correct_option FROM questions");

    let score = 0;
    let results = [];

    rows.forEach((q) => {
      const userAnswer = userAnswers[q.id];
      const isCorrect = userAnswer === q.correct_option;
      if (isCorrect) score++;

      results.push({
        questionId: q.id,
        userAnswer: userAnswer || null,
        correctAnswer: q.correct_option,
        isCorrect,
      });
    });

    res.json({
      success: true,
      totalQuestions: rows.length,
      score,
      results, // Bonus: frontend can show which were right/wrong
    });
  } catch (error) {
    console.error("Error submitting quiz:", error);
    res.status(500).json({ success: false, message: "Failed to submit quiz" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
