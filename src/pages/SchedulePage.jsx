import React from 'react';
import Navbar from '../components/Navbar';
import ScheduleSection from '../components/ScheduleSection';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const SchedulePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-black italic mb-2 tracking-tighter">TOURNAMENT SCHEDULE</h1>
          <p className="text-neon-blue tracking-widest text-xs font-bold uppercase">JEDDAH GG SEASON 1 — 2026</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-xl font-bold italic mb-8 flex items-center gap-4">
              <span className="w-2 h-8 bg-neon-blue rounded-full" />
              MAIN STAGE - DAY 3
            </h2>
            <ScheduleSection />
          </div>

          <div className="glass-card p-8 rounded-2xl opacity-50">
            <h2 className="text-xl font-bold italic mb-8 flex items-center gap-4 text-white/40">
              <span className="w-2 h-8 bg-white/10 rounded-full" />
              FINALS - DAY 4 (TOMORROW)
            </h2>
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-white/20 font-bold tracking-widest uppercase">Schedule Released After Quarter Finals</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SchedulePage;
