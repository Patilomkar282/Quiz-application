import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function QuestionCard({ question, selectedOption, onSelectOption, questionNumber }) {
  const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 px-3 py-1">
              {question.category || 'General'}
            </Badge>
            {question.difficulty && (
              <Badge 
                variant="outline" 
                className={`${
                  question.difficulty === 'easy' ? 'border-green-300 text-green-700' :
                  question.difficulty === 'medium' ? 'border-yellow-300 text-yellow-700' :
                  'border-red-300 text-red-700'
                }`}
              >
                {question.difficulty}
              </Badge>
            )}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 leading-relaxed">
            {question.text}
          </h2>
        </div>
      </div>

      <div className="space-y-3 mt-8">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectOption(index)}
            className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ${
              selectedOption === index
                ? 'border-indigo-500 bg-indigo-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                selectedOption === index
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {optionLabels[index]}
              </div>
              <span className={`flex-1 font-medium ${
                selectedOption === index ? 'text-indigo-900' : 'text-gray-700'
              }`}>
                {option}
              </span>
              {selectedOption === index && (
                <CheckCircle2 className="w-6 h-6 text-indigo-500" />
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}