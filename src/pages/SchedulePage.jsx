import React from 'react';
import Navbar from '../components/Navbar';
import ScheduleSection from '../components/ScheduleSection';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Filter, Bell } from 'lucide-react';
import { useSound } from '../context/SoundContext';

const SchedulePage = () => {
  const { playSFX } = useSound();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <header className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-6xl font-black italic tracking-tighter mb-2">TOURNAMENT SCHEDULE</h1>
            <p className="text-neon-blue tracking-[0.3em] text-xs font-bold uppercase italic">JEDDAH GG SEASON 1 — GLOBAL CALENDAR</p>
          </motion.div>

          <div className="flex items-center gap-4">
             <button 
               onClick={() => playSFX('click')}
               className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold tracking-widest hover:border-neon-blue transition-all"
             >
                <Filter size={16} /> FILTER
             </button>
             <button 
               onClick={() => playSFX('click')}
               className="flex items-center gap-3 px-6 py-3 bg-neon-blue text-white rounded-xl text-[10px] font-bold tracking-widest hover:bg-neon-blue/80 transition-all shadow-lg shadow-neon-blue/20"
             >
                <Bell size={16} /> NOTIFY ME
             </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Calendar View */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                 <h2 className="text-xl font-bold italic flex items-center gap-4">
                    <CalendarIcon className="text-neon-blue" size={24} />
                    MAY 15 — FRIDAY
                 </h2>
                 <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Day 3 of 5</span>
              </div>
              <ScheduleSection />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card p-8 rounded-3xl opacity-60 grayscale hover:grayscale-0 transition-all"
            >
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                 <h2 className="text-xl font-bold italic flex items-center gap-4 text-white/60">
                    <CalendarIcon size={24} />
                    MAY 16 — SATURDAY
                 </h2>
                 <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase italic">Registration Closed</span>
              </div>
              <div className="space-y-4">
                 {[1, 2, 3].map((_, i) => (
                    <div key={i} className="h-16 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                       <p className="text-[9px] font-bold tracking-[0.2em] text-white/10 uppercase">Match Slot Pending</p>
                    </div>
                 ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <aside className="lg:col-span-4 space-y-8">
             <div className="glass-card p-8 rounded-3xl border-neon-purple/30">
                <h3 className="text-sm font-bold tracking-widest text-neon-purple uppercase mb-6 italic">Quick Stats</h3>
                <div className="space-y-6">
                   <StatRow label="Total Matches" value="24" />
                   <StatRow label="Active Teams" value="16" />
                   <StatRow label="Venues" value="3" />
                   <StatRow label="Prize Distributed" value="45%" />
                </div>
             </div>

             <div className="glass-card p-8 rounded-3xl bg-neon-pink/5 border-neon-pink/20">
                <h3 className="text-sm font-bold tracking-widest text-neon-pink uppercase mb-4 italic">Live Update</h3>
                <p className="text-xs text-white/60 leading-relaxed italic">
                  Semi-final brackets will be drawn automatically after tonight's final match. Stay tuned for the live stream.
                </p>
             </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const StatRow = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
     <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{label}</span>
     <span className="text-xl font-black italic text-white tracking-tighter">{value}</span>
  </div>
);

export default SchedulePage;
