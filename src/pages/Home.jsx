import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MatchCard from '../components/MatchCard';
import AIInsights from '../components/AIInsights';
import ScheduleSection from '../components/ScheduleSection';
import Footer from '../components/Footer';
import TeamBadge from '../components/TeamBadge';
import { useSound } from '../context/SoundContext';

const Home = () => {
  const { playSFX } = useSound();

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <main className="container mx-auto px-4">
        <HeroSection />

        {/* AI Insights Bar */}
        <AIInsights />

        {/* Live Matches Slider/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <MatchCard teamA="KAU Wolves" teamB="KFUPM Eagles" status="UPCOMING" time="18:00" />
          <MatchCard teamA="Tuwaiq Knights" teamB="Riyadh Stars" status="LIVE" score="1 - 0" time="NOW" />
          <MatchCard teamA="Red Sea Kraken" teamB="Neom Nexus" status="UPCOMING" time="20:30" />
        </div>

        {/* Tournament Bracket or Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
             <h3 className="text-2xl font-bold italic mb-8 border-l-4 border-neon-blue pl-4">SCHEDULE</h3>
             <ScheduleSection />
          </div>
          
          <aside className="space-y-8">
            <h3 className="text-2xl font-bold italic mb-8 border-l-4 border-neon-purple pl-4">VOTING</h3>
            <div className="glass-card p-6 rounded-2xl">
              <p className="text-sm text-indigo-300 mb-6 font-bold uppercase tracking-tight">WHO WILL WIN FC 25 JEDDAH?</p>
              <div className="space-y-6">
                <VoteBar team="Team Nexus" percent={65} color="from-blue-600 to-neon-blue" />
                <VoteBar team="Team Alpha" percent={35} color="from-purple-600 to-neon-purple" />
              </div>
            </div>
            
            <div 
              onMouseEnter={() => playSFX('hover.mp3', 0.1)}
              className="glass-card p-6 rounded-2xl relative overflow-hidden group cursor-help"
            >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <div className="w-20 h-20 bg-neon-pink rounded-full blur-2xl" />
               </div>
               <p className="text-[10px] text-neon-pink font-bold tracking-widest mb-2 uppercase">PRO TIP</p>
               <p className="text-sm text-white/80 italic font-medium">
                 "Nexus has a 92% win rate on desert-themed maps."
               </p>
            </div>
          </aside>
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
      className="space-y-2 cursor-pointer group"
      onClick={() => playSFX('click.mp3')}
      onMouseEnter={() => playSFX('hover.mp3', 0.05)}
    >
      <div className="flex justify-between text-[10px] font-bold tracking-widest uppercase items-center">
        <TeamBadge name={team} size="sm" />
        <span className="text-white">{percent}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${color} shadow-[0_0_10px_rgba(91,95,255,0.5)]`}
        />
      </div>
    </div>
  );
};

export default Home;
