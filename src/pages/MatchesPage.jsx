import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MatchCard from '../components/MatchCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, PlayCircle, History, Calendar } from 'lucide-react';
import { useSound } from '../context/SoundContext';

const MatchesPage = () => {
  const [activeTab, setActiveTab] = useState('LIVE');
  const { playSFX } = useSound();

  const tabs = [
    { id: 'LIVE', icon: <PlayCircle size={16} />, label: 'LIVE NOW' },
    { id: 'UPCOMING', icon: <Calendar size={16} />, label: 'UPCOMING' },
    { id: 'RESULTS', icon: <History size={16} />, label: 'RESULTS' },
  ];

  const matchData = {
    LIVE: [
      { teamA: "Tuwaiq Knights", teamB: "Riyadh Stars", score: "1 - 0", status: "LIVE", time: "12' MIN" },
      { teamA: "Team Nexus", teamB: "Team Alpha", score: "3 - 1", status: "LIVE", time: "88' MIN" },
    ],
    UPCOMING: [
      { teamA: "KAU Wolves", teamB: "KFUPM Eagles", status: "UPCOMING", time: "18:00" },
      { teamA: "Red Sea Kraken", teamB: "Neom Nexus", status: "UPCOMING", time: "20:30" },
      { teamA: "Jeddah Falcons", teamB: "Desert Vipers", status: "UPCOMING", time: "TOMORROW" },
    ],
    RESULTS: [
      { teamA: "Team Blaze", teamB: "Frostbyte", score: "2 - 0", status: "FINISHED", time: "YESTERDAY" },
      { teamA: "Void X", teamB: "Titan Gaming", score: "1 - 3", status: "FINISHED", time: "2 DAYS AGO" },
    ]
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-6xl font-black italic tracking-tighter mb-2">MATCH CENTER</h1>
            <p className="text-neon-blue tracking-[0.3em] text-xs font-bold uppercase">Pro League Season 1</p>
          </motion.div>

          <div className="flex items-center gap-4">
             <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-hover:text-neon-blue transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Search Teams..." 
                  className="bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-neon-blue/50 transition-all w-full md:w-64"
                />
             </div>
             <button className="glass-card p-3 rounded-full hover:border-neon-blue/50 transition-all">
                <Filter size={20} className="text-neon-blue" />
             </button>
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                playSFX('click');
              }}
              onMouseEnter={() => playSFX('hover')}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold tracking-widest text-xs transition-all border whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'bg-neon-blue/10 border-neon-blue text-neon-blue neon-pulse' 
                  : 'bg-white/5 border-white/10 text-white/40 hover:text-white hover:border-white/20'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {matchData[activeTab].map((match, i) => (
              <motion.div
                key={`${activeTab}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.1 }}
              >
                <MatchCard {...match} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {activeTab === 'LIVE' && matchData.LIVE.length === 0 && (
          <div className="flex flex-col items-center justify-center py-40 glass-card rounded-3xl opacity-50">
             <PlayCircle size={48} className="text-white/20 mb-4" />
             <p className="font-bold tracking-widest text-white/30 uppercase">No matches currently in progress</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MatchesPage;
