import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Send, CheckCircle2 } from "lucide-react";
import Timer from "../components/Timer";
import ProgressBar from "../components/ProgressBar";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  // Fetch questions from backend (Your original logic)
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await API.get("/questions");
        setQuestions(res.data.questions);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching questions:", err);
        setLoading(false); // Stop loading on error
      }
    };
    fetchQuestions();
  }, []);

  const handleOptionSelect = (option) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: option,
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      const res = await API.post("/submit", { answers });
      navigate("/result", { state: { resultData: res.data } });
    } catch (err) {
      console.error("Error submitting quiz:", err);
      setSubmitting(false); // Allow resubmission on error
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading quiz...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const optionKeys = ["option_a", "option_b", "option_c", "option_d"];
  const optionLabels = ['A', 'B', 'C', 'D'];
  const isLastQuestion = currentIndex === questions.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Quiz in Progress</h1>
            <p className="text-gray-500 mt-1">
              {Object.keys(answers).length} of {questions.length} questions answered
            </p>
          </div>
          <Timer onTimeUp={handleSubmit} isActive={!submitting} />
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <ProgressBar current={currentIndex} total={questions.length} />
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          {currentQuestion && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 leading-relaxed mb-8">
                {currentQuestion.question_text}
              </h2>

              <div className="space-y-3">
                {optionKeys.map((optKey, index) => {
                  const optionChar = optKey.charAt(optKey.length - 1).toUpperCase();
                  const isSelected = answers[currentQuestion.id] === optionChar;
                  
                  return (
                    <motion.button
                      key={optKey}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleOptionSelect(optionChar)}
                      className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                          isSelected ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {optionLabels[index]}
                        </div>
                        <span className={`flex-1 font-medium ${
                          isSelected ? 'text-indigo-900' : 'text-gray-700'
                        }`}>
                          {currentQuestion[optKey]}
                        </span>
                        {isSelected && <CheckCircle2 className="w-6 h-6 text-indigo-500" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          {isLastQuestion ? (
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-wait transition"
            >
              {submitting ? 'Submitting...' : <><Send className="w-5 h-5" /> Submit Quiz</>}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;