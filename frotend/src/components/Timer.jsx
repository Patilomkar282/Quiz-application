import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Timer({ onTimeUp, isActive }) {
  const QUIZ_DURATION = 600; // 10 minutes in seconds
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSeconds(prev => {
        const newSeconds = prev + 1;
        if (newSeconds >= QUIZ_DURATION) {
          clearInterval(interval);
          onTimeUp();
          return QUIZ_DURATION;
        }
        return newSeconds;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, onTimeUp]);

  const formatTime = (totalSeconds) => {
    const timeRemaining = QUIZ_DURATION - totalSeconds;
    const mins = Math.floor(timeRemaining / 60);
    const remainingSecs = timeRemaining % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const percentage = (seconds / QUIZ_DURATION) * 100;
  const isLowTime = percentage > 80;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all ${
        isLowTime 
          ? 'bg-red-50 border-red-200 text-red-700' 
          : 'bg-white border-gray-200 text-gray-700'
      }`}
    >
      <Clock className={`w-5 h-5 ${isLowTime ? 'animate-pulse' : ''}`} />
      <div>
        <div className="text-xs font-medium opacity-70">Time Remaining</div>
        <div className="text-lg font-bold">{formatTime(seconds)}</div>
      </div>
    </motion.div>
  );
}