import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Share2, ArrowRight } from 'lucide-react';
import { useSound } from '../context/SoundContext';

const NewsPage = () => {
  const { playSFX } = useSound();

  const articles = [
    {
      title: "JEDDAH GG SEASON 2 ANNOUNCED",
      category: "TOURNAMENTS",
      date: "MAY 12, 2026",
      summary: "Get ready for the biggest prize pool in KSA history. Registration starts June 1st.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "TEAM NEXUS DOMINATES REGIONALS",
      category: "PRO LEAGUE",
      date: "MAY 10, 2026",
      summary: "Shadow-X delivers a stunning MVP performance against Tuwaiq Knights.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "NEW GAMING HUB OPENING IN JEDDAH",
      category: "COMMUNITY",
      date: "MAY 08, 2026",
      summary: "A state-of-the-art facility featuring 100+ high-end PCs and VR zones.",
      image: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-black italic tracking-tighter mb-4 glow-text"
          >
            LATEST NEWS
          </motion.h1>
          <div className="h-1 w-24 bg-neon-blue" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Featured Article */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-8 group cursor-pointer"
            onClick={() => playSFX('click')}
            onMouseEnter={() => playSFX('hover')}
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden glass-card">
              <img 
                src={articles[0].image} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-12 w-full">
                <span className="text-neon-blue font-bold tracking-widest text-xs uppercase mb-4 block">FEATURED STORY</span>
                <h2 className="text-5xl font-black italic tracking-tighter mb-6 group-hover:text-neon-blue transition-colors leading-none">
                  {articles[0].title}
                </h2>
                <div className="flex items-center gap-6 text-white/40 text-xs font-bold tracking-widest uppercase">
                  <span className="flex items-center gap-2"><Calendar size={14} /> {articles[0].date}</span>
                  <span className="flex items-center gap-2"><Share2 size={14} /> SHARE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar News */}
          <div className="lg:col-span-4 space-y-8">
            {articles.slice(1).map((art, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => playSFX('click')}
                onMouseEnter={() => playSFX('hover')}
                className="glass-card p-6 rounded-2xl group cursor-pointer hover:border-white/20 transition-all"
              >
                <span className="text-neon-purple font-bold tracking-widest text-[9px] uppercase mb-3 block">{art.category}</span>
                <h3 className="text-xl font-black italic tracking-tight mb-4 group-hover:text-neon-blue transition-colors">
                  {art.title}
                </h3>
                <p className="text-white/40 text-sm mb-6 leading-relaxed line-clamp-2 italic">
                  {art.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-white/20 font-bold">{art.date}</span>
                  <ArrowRight size={18} className="text-neon-blue transform group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((_, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               onMouseEnter={() => playSFX('hover')}
               className="glass-card rounded-2xl overflow-hidden group border-white/5"
             >
                <div className="h-48 overflow-hidden">
                   <img 
                     src={`https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800&sig=${i}`} 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   />
                </div>
                <div className="p-6">
                   <h4 className="font-bold italic text-lg mb-4 line-clamp-1">ESPORTS GROWTH IN KSA CONTINUES...</h4>
                   <p className="text-white/40 text-xs mb-6 line-clamp-2">New investments from the Ministry of Sport are expected to...</p>
                   <button className="text-neon-blue text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                     READ ARTICLE <ArrowRight size={12} />
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

export default NewsPage;
