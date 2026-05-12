import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 md:gap-8 justify-center items-center">
      <TimeUnit value={timeLeft.days} label="DAYS" />
      <TimeSeparator />
      <TimeUnit value={timeLeft.hours} label="HOURS" />
      <TimeSeparator />
      <TimeUnit value={timeLeft.minutes} label="MINS" />
      <TimeSeparator />
      <TimeUnit value={timeLeft.seconds} label="SECS" />
    </div>
  );
};

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <motion.div 
      key={value}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-4xl md:text-6xl font-black italic tracking-tighter"
    >
      {value.toString().padStart(2, '0')}
    </motion.div>
    <div className="text-[9px] font-bold tracking-[0.3em] text-white/30 uppercase mt-2">{label}</div>
  </div>
);

const TimeSeparator = () => (
  <div className="text-2xl md:text-4xl font-black text-neon-blue/40 mt-[-20px]">:</div>
);

export default CountdownTimer;
