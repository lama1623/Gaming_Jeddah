import React, { createContext, useContext, useState, useRef } from 'react';

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  const audioCtxRef = useRef(null);
  
  const initAudio = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      return true;
    } catch (e) {
      console.error("AudioContext initialization failed", e);
      return false;
    }
  };

  const playEASFX = (type) => {
    // If muted, we don't play anything
    if (isMuted) return;
    
    // Ensure context is running
    const initialized = initAudio();
    if (!initialized) return;

    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;

    if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.1);
      
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } 
    
    else if (type === 'hover') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.15);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1000, now);
      filter.Q.setValueAtTime(5, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.1, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.15);
    } 
    
    else if (type === 'match-result') {
      const boom = ctx.createOscillator();
      const boomGain = ctx.createGain();
      boom.type = 'sine';
      boom.frequency.setValueAtTime(100, now);
      boom.frequency.exponentialRampToValueAtTime(40, now + 0.5);
      boomGain.gain.setValueAtTime(0.5, now);
      boomGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      boom.connect(boomGain);
      boomGain.connect(ctx.destination);
      boom.start(now);
      boom.stop(now + 0.6);
    }
  };

  const toggleMute = () => {
    const success = initAudio();
    if (success) {
      setIsMuted(prev => !prev);
    }
  };

  const playSFX = (filename) => {
    if (filename.includes('match-result')) playEASFX('match-result');
    else if (filename.includes('click')) playEASFX('click');
    else if (filename.includes('hover')) playEASFX('hover');
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playSFX, playEASFX, initAudio }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};
