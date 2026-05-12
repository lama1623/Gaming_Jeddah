import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MatchCard from '../components/MatchCard';
import AIInsights from '../components/AIInsights';
import ScheduleSection from '../components/ScheduleSection';
import TournamentBracket from '../components/TournamentBracket';
import CountdownTimer from '../components/CountdownTimer';
import AiChatbot from '../components/AiChatbot';
import Footer from '../components/Footer';
import TeamBadge from '../components/TeamBadge';
import { useSound } from '../context/SoundContext';
import { Trophy, ArrowRight, Play, Zap, BrainCircuit, Activity } from 'lucide-react';

const Home = () => {
  const { playSFX } = useSound();

  return (
    <div className="min-h-screen selection:bg-neon-blue/30 overflow-x-hidden">
      <Navbar />
      <AiChatbot />
      
      <main>
        {/* Cinematic Hero */}
        <HeroSection />

        {/* Global Countdown */}
        <section className="py-20 relative overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 bg-neon-blue/5 pointer-events-none" />
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-bold tracking-[0.5em] text-neon-blue mb-10 uppercase italic">Grand Final Countdown</h3>
              <CountdownTimer targetDate="2026-05-20T22:00:00" />
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          {/* AI Insights Bar */}
          <section className="py-24">
            <div className="flex items-center gap-4 mb-12">
               <BrainCircuit className="text-neon-blue" size={32} />
               <h3 className="text-2xl font-black italic tracking-tight uppercase">Tactical AI Dashboard</h3>
               <div className="h-[1px] flex-grow bg-white/5" />
               <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30">
                  <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
                  <span className="text-[9px] font-bold tracking-widest uppercase">Live Analysis</span>
               </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <AIInsights />
            </motion.div>
          </section>

          {/* Tournament Bracket Section */}
          <section className="py-24 border-t border-white/5">
            <div className="mb-16">
              <h3 className="text-sm font-bold tracking-[0.4em] text-neon-purple uppercase mb-2 italic">Official Progression</h3>
              <h2 className="text-5xl font-black italic tracking-tighter">TOURNAMENT BRACKET</h2>
            </div>
            <TournamentBracket />
          </section>

          {/* Featured Matches Section */}
          <section className="py-24 border-t border-white/5">
            <div className="flex justify-between items-end mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-bold tracking-[0.4em] text-neon-pink uppercase mb-2 italic">Broadcast Feed</h3>
                <h2 className="text-5xl font-black italic tracking-tighter">FEATURED MATCHES</h2>
              </motion.div>
              <Link 
                to="/matches" 
                onClick={() => playSFX('click')}
                className="text-[10px] font-bold tracking-widest text-white/40 hover:text-neon-blue transition-colors flex items-center gap-2 uppercase italic"
              >
                Match Center <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MatchCard teamA="KAU Wolves" teamB="KFUPM Eagles" status="UPCOMING" time="18:00" />
              <MatchCard teamA="Tuwaiq Knights" teamB="Riyadh Stars" status="LIVE" score="1 - 0" time="NOW" />
              <MatchCard teamA="Red Sea Kraken" teamB="Neom Nexus" status="UPCOMING" time="20:30" />
            </div>
          </section>

          {/* Secondary Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-24 border-t border-white/5">
            {/* Schedule Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
               <div className="flex items-center gap-4 mb-10">
                  <Activity className="text-neon-blue" size={24} />
                  <h3 className="text-3xl font-black italic tracking-tight uppercase">Arena Schedule</h3>
               </div>
               <div className="glass-card p-8 rounded-[2.5rem]">
                  <ScheduleSection />
                  <Link to="/schedule" className="mt-10 w-full block text-center py-5 bg-white/5 hover:bg-white/10 rounded-2xl text-[10px] font-bold tracking-[0.3em] text-white/40 hover:text-white transition-all uppercase">
                    View Full 2026 Calendar
                  </Link>
               </div>
            </motion.div>
            
            {/* Voting & CTA Sidebar */}
            <aside className="lg:col-span-4 space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-black italic mb-10 border-l-4 border-neon-purple pl-6 tracking-tight uppercase">Community Poll</h3>
                <div className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden">
                  <p className="text-xs text-indigo-300 mb-10 font-bold uppercase tracking-[0.2em] italic leading-relaxed">Who is your champion for the FC 25 Jeddah Finals?</p>
                  <div className="space-y-10">
                    <VoteBar team="Team Nexus" percent={65} color="from-blue-600 to-neon-blue" />
                    <VoteBar team="Team Alpha" percent={35} color="from-purple-600 to-neon-purple" />
                  </div>
                  
                  <div className="mt-12 pt-10 border-t border-white/5 flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-neon-pink/10 flex items-center justify-center text-neon-pink shadow-[0_0_15px_rgba(255,77,109,0.2)]">
                        <Zap size={20} />
                     </div>
                     <div>
                        <span className="text-[10px] font-bold tracking-widest uppercase block">Double XP Active</span>
                        <p className="text-[11px] text-white/30 italic">Earn 200 XP for every accurate prediction.</p>
                     </div>
                  </div>
                </div>
              </motion.div>

              {/* Tournament CTA Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-[2.5rem] bg-gradient-to-br from-neon-blue/20 to-transparent border-neon-blue/30 group cursor-pointer relative overflow-hidden"
                onClick={() => playSFX('click')}
              >
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-blue/10 rounded-full blur-[80px]" />
                 <Trophy className="text-neon-blue mb-6 group-hover:scale-110 transition-transform duration-500" size={40} />
                 <h4 className="text-2xl font-black italic mb-4 tracking-tight uppercase">Pro Registration</h4>
                 <p className="text-sm text-white/50 mb-10 italic leading-relaxed font-medium">Verified pro teams can now register for the Season 2 Qualifiers starting in Neom.</p>
                 <button className="flex items-center gap-3 text-xs font-black italic tracking-widest text-white uppercase group-hover:text-neon-blue transition-all">
                    Apply for Seed <Play size={14} fill="currentColor" />
                 </button>
              </motion.div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const VoteBar = ({ team, percent, color }) => {
  const { playSFX } = useSound();
  
  return (
    <div 
      className="space-y-4 cursor-pointer group"
      onClick={() => playSFX('click')}
      onMouseEnter={() => playSFX('hover', 0.05)}
    >
      <div className="flex justify-between text-[11px] font-black tracking-[0.2em] uppercase items-center">
        <TeamBadge name={team} size="sm" />
        <span className="text-white group-hover:text-neon-blue transition-colors">{percent}%</span>
      </div>
      <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${color} shadow-[0_0_20px_rgba(91,95,255,0.5)]`}
        />
      </div>
    </div>
  );
};

export default Home;
