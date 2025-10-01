import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, RotateCcw, Trophy, Target, CheckCircle2, XCircle } from "lucide-react";

// --- Styled Components (within the same file) ---

const ScoreCard = ({ score, total }) => {
  if (total === 0) return null;
  const percentage = Math.round((score / total) * 100);

  const getGradeInfo = () => {
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-500', bg: 'bg-green-50', border: 'border-green-200' };
    if (percentage >= 70) return { grade: 'B', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' };
    if (percentage >= 60) return { grade: 'C', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
    return { grade: 'D', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
  };

  const gradeInfo = getGradeInfo();

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`${gradeInfo.bg} rounded-2xl p-8 border-2 ${gradeInfo.border}`}
      >
        <div className="flex items-center justify-between mb-4">
          <Trophy className={`w-8 h-8 ${gradeInfo.color}`} />
          <span className="text-sm font-medium opacity-70">Your Grade</span>
        </div>
        <div className={`text-6xl font-bold ${gradeInfo.color} mb-2`}>{gradeInfo.grade}</div>
        <div className="text-lg font-semibold opacity-70">{percentage}% Score</div>
      </motion.div>

      <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col justify-center">
        <Target className="w-6 h-6 text-indigo-500 mb-3" />
        <div className="text-5xl font-bold text-gray-900">{score}<span className="text-3xl text-gray-400">/{total}</span></div>
        <div className="text-sm text-gray-500 mt-1">Correct Answers</div>
      </div>
    </div>
  );
};

const AnswerReviewCard = ({ result, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className={`p-6 rounded-xl border-2 ${
      result.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
    }`}
  >
    <div className="flex items-start gap-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
        result.isCorrect ? 'bg-green-500' : 'bg-red-500'
      }`}>
        {result.isCorrect ? <CheckCircle2 className="w-6 h-6 text-white" /> : <XCircle className="w-6 h-6 text-white" />}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-bold text-gray-500">Q{index + 1}</span>
          <span className={`text-sm font-semibold ${result.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {result.isCorrect ? 'Correct' : 'Incorrect'}
          </span>
        </div>
        <p className="text-lg font-semibold text-gray-800 mb-4">{result.questionId}</p>
        <div className="space-y-2 text-sm">
          {!result.isCorrect && (
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-600">Your answer:</span>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-lg font-semibold">
                {result.userAnswer || "Not answered"}
              </span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-600">Correct answer:</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg font-semibold">
              {result.correctAnswer}
            </span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- Main Page Component ---

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { resultData } = location.state || {};

  // Styled "No results" state
  if (!resultData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
        <div className="text-center bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No results found!</h2>
          <p className="text-gray-600 mb-8">It seems you've landed here without completing a quiz.</p>
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 w-full h-12 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const { score, totalQuestions, results } = resultData;
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Quiz Complete! 🎉
          </h1>
          <p className="text-xl text-gray-600">
            {percentage >= 80 ? "Outstanding performance!" : percentage >= 60 ? "Good job!" : "Keep practicing!"}
          </p>
        </motion.div>

        <ScoreCard score={score} total={totalQuestions} />

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 flex-1 h-14 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <RotateCcw className="w-5 h-5" />
            Retry Quiz
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 flex-1 h-14 text-lg bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Answer Review</h2>
          {results.map((res, idx) => (
            <AnswerReviewCard key={idx} result={res} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;