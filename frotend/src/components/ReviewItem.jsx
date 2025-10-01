import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReviewItem({ question, userAnswer, index }) {
  const isCorrect = userAnswer.is_correct;
  const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`p-6 rounded-xl border-2 ${
        isCorrect 
          ? 'bg-green-50 border-green-200' 
          : 'bg-red-50 border-red-200'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
          isCorrect ? 'bg-green-500' : 'bg-red-500'
        }`}>
          {isCorrect ? (
            <CheckCircle2 className="w-6 h-6 text-white" />
          ) : (
            <XCircle className="w-6 h-6 text-white" />
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-bold text-gray-500">Q{index + 1}</span>
            <span className={`text-sm font-semibold ${
              isCorrect ? 'text-green-700' : 'text-red-700'
            }`}>
              {isCorrect ? 'Correct' : 'Incorrect'}
            </span>
          </div>
          
          <p className="text-lg font-semibold text-gray-900 mb-4">
            {question.text}
          </p>

          <div className="space-y-2">
            {!isCorrect && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">Your answer:</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-semibold">
                  {optionLabels[userAnswer.selected_option_index]}) {question.options[userAnswer.selected_option_index]}
                </span>
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Correct answer:</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-semibold">
                {optionLabels[question.correct_option_index]}) {question.options[question.correct_option_index]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}