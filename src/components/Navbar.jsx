import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Trophy, Calendar, Users } from 'lucide-react';
import AudioToggle from './AudioToggle';
import { useSound } from '../context/SoundContext';

const Navbar = () => {
  const { playSFX } = useSound();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="glass-card flex items-center gap-8 px-8 py-3 rounded-full border-white/10">
        <Link 
          to="/" 
          onClick={() => playSFX('click.mp3')}
          className="flex items-center gap-2 font-black italic tracking-tighter text-xl"
        >
          <span className="text-neon-blue">J</span>GG
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/matches" icon={<Gamepad2 size={16} />} label="MATCHES" />
          <NavLink to="/tournaments" icon={<Trophy size={16} />} label="TOURNAMENTS" />
          <NavLink to="/schedule" icon={<Calendar size={16} />} label="SCHEDULE" />
          <NavLink to="/teams" icon={<Users size={16} />} label="TEAMS" />
        </div>

        <div className="flex items-center gap-4">
          <AudioToggle />
          <button 
            onClick={() => playSFX('click.mp3')}
            onMouseEnter={() => playSFX('hover.mp3', 0.1)}
            className="bg-neon-blue/20 hover:bg-neon-blue/40 border border-neon-blue/50 text-neon-blue text-[10px] font-bold px-4 py-1.5 rounded-full transition-all tracking-widest"
          >
            CONNECT WALLET
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, label }) => {
  const { playSFX } = useSound();
  return (
    <Link 
      to={to} 
      onClick={() => playSFX('click.mp3')}
      onMouseEnter={() => playSFX('hover.mp3', 0.1)}
      className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-white/60 hover:text-white transition-colors"
    >
      {icon}
      {label}
    </Link>
  );
};

export default Navbar;
