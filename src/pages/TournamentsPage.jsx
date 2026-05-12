import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Trophy, Users, Clock, MapPin, ExternalLink } from 'lucide-react';
import { useSound } from '../context/SoundContext';

const TournamentsPage = () => {
  const { playSFX } = useSound();

  const tournaments = [
    {
      title: "FC 25 JEDDAH CHAMPIONSHIP",
      prize: "$50,000",
      status: "LIVE",
      participants: "64 TEAMS",
      location: "JEDDAH ARENA",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
      color: "neon-blue"
    },
    {
      title: "DESERT STORM OPEN",
      prize: "$25,000",
      status: "REGISTRATION OPEN",
      participants: "128 TEAMS",
      location: "ONLINE / RIYADH",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
      color: "neon-purple"
    },
    {
      title: "RED SEA INVITAIONAL",
      prize: "$100,000",
      status: "UPCOMING",
      participants: "16 PRO TEAMS",
      location: "NEOM",
      image: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&q=80&w=800",
      color: "neon-pink"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-7xl font-black italic tracking-tighter mb-6 glow-text"
          >
            TOURNAMENTS
          </motion.h1>
          <p className="text-white/60 font-medium leading-relaxed italic">
            COMPETE IN THE MOST PRESTIGIOUS ESPORTS EVENTS IN THE KINGDOM. 
            FROM AMATEUR OPENS TO GLOBAL CHAMPIONSHIPS.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12">
          {tournaments.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => playSFX('hover')}
              className="glass-card rounded-[2rem] overflow-hidden flex flex-col lg:flex-row group border-white/5 hover:border-white/20 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
                <img 
                  src={t.image} 
                  alt={t.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent lg:hidden" />
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-widest border border-white/10 bg-white/5 ${
                    t.status === 'LIVE' ? 'text-neon-pink border-neon-pink/50' : 'text-neon-blue border-neon-blue/50'
                  }`}>
                    {t.status}
                  </span>
                  <div className="h-[1px] flex-grow bg-white/10" />
                </div>

                <h2 className="text-4xl font-black italic mb-8 tracking-tighter group-hover:text-neon-blue transition-colors">
                  {t.title}
                </h2>

                <div className="grid grid-cols-2 gap-8 mb-12">
                  <TournamentInfo icon={<Trophy className="text-yellow-500" size={20} />} label="PRIZE POOL" value={t.prize} />
                  <TournamentInfo icon={<Users className="text-neon-blue" size={20} />} label="PARTICIPANTS" value={t.participants} />
                  <TournamentInfo icon={<MapPin className="text-neon-purple" size={20} />} label="LOCATION" value={t.location} />
                  <TournamentInfo icon={<Clock className="text-neon-pink" size={20} />} label="SCHEDULE" value="MAY 15-20" />
                </div>

                <button 
                  onClick={() => playSFX('click')}
                  className="w-full lg:w-max flex items-center justify-center gap-3 bg-white text-black font-black italic tracking-tighter px-10 py-4 rounded-xl hover:bg-neon-blue hover:text-white transition-all transform hover:-translate-y-1 active:translate-y-0"
                >
                  {t.status === 'REGISTRATION OPEN' ? 'REGISTER NOW' : 'VIEW DETAILS'}
                  <ExternalLink size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const TournamentInfo = ({ icon, label, value }) => (
  <div className="space-y-1">
    <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-white/40 uppercase">
      {icon}
      {label}
    </div>
    <div className="text-lg font-black italic tracking-tight">{value}</div>
  </div>
);

export default TournamentsPage;
