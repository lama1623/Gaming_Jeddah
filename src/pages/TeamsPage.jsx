import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamBadge from '../components/TeamBadge';
import { motion } from 'framer-motion';
import { Trophy, Users, Star, TrendingUp } from 'lucide-react';
import { useSound } from '../context/SoundContext';

const TeamsPage = () => {
  const { playSFX } = useSound();

  const teams = [
    {
      name: "Team Nexus",
      region: "JEDDAH",
      rank: "#1",
      earnings: "$240,000",
      winRate: "78%",
      roster: ["Shadow", "Nexus-X", "Blade", "Zenith", "Pulse"],
      achievements: ["Jeddah Open 2025 Winner", "Desert Storm Runner-up"]
    },
    {
      name: "Team Alpha",
      region: "RIYADH",
      rank: "#4",
      earnings: "$110,000",
      winRate: "62%",
      roster: ["Alpha-1", "Specter", "Titan", "Ghost", "Void"],
      achievements: ["Neom Invitational Finalist"]
    },
    {
      name: "Tuwaiq Knights",
      region: "TUWAIQ",
      rank: "#2",
      earnings: "$185,000",
      winRate: "71%",
      roster: ["Knight-X", "Shield", "Mace", "Storm", "Lance"],
      achievements: ["KSA Pro League S1 Winner"]
    },
    {
      name: "Red Sea Kraken",
      region: "NEOM",
      rank: "#6",
      earnings: "$95,000",
      winRate: "58%",
      roster: ["Tentacle", "Deep", "Abyss", "Kraken-1", "Ink"],
      achievements: ["Sea Open Semifinalist"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl font-black italic tracking-tighter mb-4"
          >
            PRO TEAMS
          </motion.h1>
          <div className="flex flex-wrap gap-4">
             {["ALL REGIONS", "JEDDAH", "RIYADH", "NEOM", "DAMMAM"].map((tag, i) => (
               <button 
                 key={i} 
                 onClick={() => playSFX('click')}
                 className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest hover:border-neon-blue hover:text-neon-blue transition-all"
               >
                 {tag}
               </button>
             ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teams.map((team, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => playSFX('hover')}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group border-white/5 hover:border-neon-blue/30 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                   <TeamBadge name={team.name} size="lg" className="mb-2" />
                   <p className="text-white/40 text-xs font-bold tracking-widest uppercase ml-12">{team.region} • PRO DIVISION</p>
                </div>
                <div className="text-right">
                   <div className="text-4xl font-black italic text-neon-blue glow-text">{team.rank}</div>
                   <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">GLOBAL RANK</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8 border-y border-white/5 py-8">
                <StatItem icon={<Trophy size={14} className="text-yellow-500" />} label="EARNINGS" value={team.earnings} />
                <StatItem icon={<TrendingUp size={14} className="text-green-500" />} label="WIN RATE" value={team.winRate} />
                <StatItem icon={<Users size={14} className="text-neon-blue" />} label="ROSTER" value="5 ACTIVE" />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-3 flex items-center gap-2">
                    <Star size={12} className="text-neon-purple" />
                    ACTIVE ROSTER
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {team.roster.map((player, pi) => (
                      <span key={pi} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium hover:border-neon-blue/50 hover:text-neon-blue transition-colors cursor-default">
                        {player}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-3">RECENT ACHIEVEMENTS</h4>
                  <ul className="space-y-2">
                    {team.achievements.map((ach, ai) => (
                      <li key={ai} className="text-sm text-white/70 italic flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-neon-blue rounded-full" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                 <TeamBadge name={team.name} size="lg" className="scale-[5]" />
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const StatItem = ({ icon, label, value }) => (
  <div className="space-y-1">
    <div className="flex items-center gap-2 text-[9px] font-bold tracking-widest text-white/40 uppercase">
      {icon}
      {label}
    </div>
    <div className="text-xl font-black italic tracking-tighter">{value}</div>
  </div>
);

export default TeamsPage;
