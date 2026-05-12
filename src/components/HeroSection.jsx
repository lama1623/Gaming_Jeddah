import { motion } from 'framer-motion';
import { useSound } from '../context/SoundContext';
import { useEffect } from 'react';
import TeamBadge from './TeamBadge';

const HeroSection = () => {
  const { playSFX, isMuted } = useSound();

  // Pulse sound for LIVE status
  useEffect(() => {
    let interval;
    if (!isMuted) {
      interval = setInterval(() => {
        playSFX('live.mp3', 0.05);
      }, 2000); // Sync with pulse animation
    }
    return () => clearInterval(interval);
  }, [isMuted, playSFX]);

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-20 px-4">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Live Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 px-4 py-1 border border-pink-500/50 rounded-full bg-pink-500/10 mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
        </span>
        <span className="text-xs font-bold tracking-widest text-pink-500">LIVE NOW</span>
      </motion.div>

      <h1 
        onMouseEnter={() => playSFX('hover.mp3', 0.2)}
        className="text-7xl md:text-9xl font-black italic tracking-tighter mb-2 glow-text italic uppercase cursor-default"
      >
        JEDDAH GG
      </h1>
      <p className="text-indigo-300 tracking-[0.4em] text-sm mb-12 font-medium">
        QUARTER FINALS — FC 25 CHAMPIONSHIP
      </p>

      {/* Main Scoreboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center w-full max-w-6xl gap-8">
        {/* Team Left */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ delay: 0.2 }} 
          className="text-right"
          onMouseEnter={() => playSFX('hover.mp3', 0.1)}
        >
          <TeamBadge name="Team Nexus" size="lg" className="flex-row-reverse" />
          <p className="text-indigo-400/60 text-sm mt-2">GROUP A • SEED #1</p>
        </motion.div>

        {/* Score Center */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          onMouseEnter={() => playSFX('hover.mp3', 0.1)}
          className="glass-card py-8 px-12 rounded-2xl flex flex-col items-center border-t-2 border-t-blue-500/50"
        >
          <div className="flex items-center gap-8 text-7xl font-black italic">
            <span>3</span>
            <span className="text-2xl text-indigo-500 not-italic">VS</span>
            <span>1</span>
          </div>
          <div className="mt-4 px-6 py-1 bg-white/5 rounded-full text-[10px] tracking-widest text-indigo-300">
            MATCH 3 OF 5
          </div>
        </motion.div>

        {/* Team Right */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ delay: 0.2 }} 
          className="text-left"
          onMouseEnter={() => playSFX('hover.mp3', 0.1)}
        >
          <TeamBadge name="Team Alpha" size="lg" />
          <p className="text-indigo-400/60 text-sm mt-2">GROUP A • SEED #4</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
