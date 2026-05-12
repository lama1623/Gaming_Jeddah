import React from 'react';
import { Link } from 'react-router-dom';
import { useSound } from '../context/SoundContext';

const Footer = () => {
  const { playSFX } = useSound();

  return (
    <footer className="border-t border-white/5 py-12 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <h2 className="text-3xl font-black italic mb-4 tracking-tighter">JEDDAH GG</h2>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed italic">
            THE PREMIER ESPORTS DESTINATION FOR THE KINGDOM OF SAUDI ARABIA. 
            POWERED BY NEXT-GEN TECH AND HIGH-PERFORMANCE GAMEPLAY.
          </p>
        </div>
        
        <div>
          <h3 className="text-[10px] font-bold tracking-widest text-neon-blue mb-6 uppercase">NAVIGATE</h3>
          <ul className="space-y-4 text-xs font-bold tracking-widest">
            <li><Link to="/matches" onClick={() => playSFX('click')} className="text-white/40 hover:text-white transition-colors">MATCHES</Link></li>
            <li><Link to="/tournaments" onClick={() => playSFX('click')} className="text-white/40 hover:text-white transition-colors">TOURNAMENTS</Link></li>
            <li><Link to="/teams" onClick={() => playSFX('click')} className="text-white/40 hover:text-white transition-colors">PRO TEAMS</Link></li>
            <li><Link to="/news" onClick={() => playSFX('click')} className="text-white/40 hover:text-white transition-colors">LATEST NEWS</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-bold tracking-widest text-neon-purple mb-6 uppercase">LEGAL</h3>
          <ul className="space-y-4 text-xs font-bold tracking-widest">
            <li><a href="#" className="text-white/40 hover:text-white transition-colors">PRIVACY POLICY</a></li>
            <li><a href="#" className="text-white/40 hover:text-white transition-colors">TERMS OF SERVICE</a></li>
            <li><a href="#" className="text-white/40 hover:text-white transition-colors">COOKIES</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[9px] text-white/20 font-bold tracking-[0.2em] uppercase">
          © 2026 JEDDAH GG. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6 text-[9px] text-white/20 font-bold tracking-[0.2em] uppercase">
          <span>MINISTRY OF SPORT COMPLIANT</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
