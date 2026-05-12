import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '../context/SoundContext';
import { motion, AnimatePresence } from 'framer-motion';

const AudioToggle = () => {
  const { isMuted, toggleMute, playEASFX, initAudio } = useSound();

  const handleToggle = () => {
    // Crucial: initAudio must be called within the user interaction (onClick)
    const success = initAudio();
    if (success) {
      if (isMuted) {
        // We are unmuting, play a confirmation sound immediately
        // Note: isMuted is still true here, we need to pass true/false or just play directly
        // I'll update the toggleMute in context to handle this better, but for now:
      }
      toggleMute();
      // Play sound after state might have changed or just play a neutral one
      playEASFX('click');
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Equalizer Visualization */}
      <AnimatePresence>
        {!isMuted && (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="flex items-end h-3"
          >
            <div className="eq-bar eq-bar-1" />
            <div className="eq-bar eq-bar-2" />
            <div className="eq-bar eq-bar-3" />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={handleToggle}
        onMouseEnter={() => !isMuted && playEASFX('hover')}
        className={`relative p-2 rounded-full border transition-all duration-300 group ${
          isMuted 
            ? 'border-white/10 hover:border-white/30 text-white/40' 
            : 'border-neon-blue/50 text-neon-blue neon-pulse bg-neon-blue/5'
        }`}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        
        {/* Glow Ring */}
        {!isMuted && (
          <motion.div
            layoutId="glow-ring"
            className="absolute inset-0 rounded-full border border-neon-blue/30 scale-125"
            animate={{ scale: [1.2, 1.4, 1.2], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </button>
    </div>
  );
};

export default AudioToggle;
