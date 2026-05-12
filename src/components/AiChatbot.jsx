import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { useSound } from '../context/SoundContext';

const AiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Welcome to the Arena. I am the Jeddah GG Tactical AI. How can I assist your competition today?' }
  ]);
  const [input, setInput] = useState('');
  const { playSFX } = useSound();
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    playSFX('click');
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate AI thinking
    setTimeout(() => {
      const botResponses = [
        "Analyzing Team Nexus match history... They currently have a 74% win probability against Team Alpha.",
        "The Grand Final is scheduled for Friday at 22:00. Would you like me to set a reminder?",
        "Registration for the Desert Storm Open is 85% full. I recommend joining within the next 2 hours.",
        "I've updated your tactical dashboard with the latest MVP predictions for the FC 25 Championship."
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { role: 'bot', text: randomResponse }]);
      playSFX('hover');
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="glass-card w-[350px] h-[500px] rounded-3xl mb-4 overflow-hidden flex flex-col shadow-2xl border-neon-blue/30"
          >
            {/* Header */}
            <div className="bg-neon-blue/10 p-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neon-blue flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-black italic tracking-widest uppercase">TACTICAL AI</h4>
                  <p className="text-[9px] text-neon-blue font-bold">ONLINE / ANALYZING</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.role === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${m.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                    m.role === 'bot' 
                      ? 'bg-white/5 text-white/80 border border-white/5' 
                      : 'bg-neon-blue/20 text-white border border-neon-blue/30'
                  }`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/20 border-t border-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask the Tactical AI..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-xs focus:outline-none focus:border-neon-blue/50 transition-all"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neon-blue hover:scale-110 transition-transform"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(!isOpen);
          playSFX('click');
        }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all ${
          isOpen ? 'bg-white text-black' : 'bg-neon-blue text-white neon-pulse'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default AiChatbot;
