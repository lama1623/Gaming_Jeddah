import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad2, Trophy, Calendar, Users, Newspaper } from 'lucide-react';
import AudioToggle from './AudioToggle';
import { useSound } from '../context/SoundContext';

const Navbar = () => {
  const { playSFX } = useSound();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="glass-card flex items-center gap-6 px-8 py-3 rounded-full border-white/10">
        <Link 
          to="/" 
          onClick={() => playSFX('click')}
          className="flex items-center gap-2 font-black italic tracking-tighter text-xl mr-4"
        >
          <span className="text-neon-blue">J</span>GG
        </Link>
        
        <div className="hidden lg:flex items-center gap-6">
          <NavLink to="/matches" icon={<Gamepad2 size={16} />} label="MATCHES" active={location.pathname === '/matches'} />
          <NavLink to="/tournaments" icon={<Trophy size={16} />} label="TOURNAMENTS" active={location.pathname === '/tournaments'} />
          <NavLink to="/schedule" icon={<Calendar size={16} />} label="SCHEDULE" active={location.pathname === '/schedule'} />
          <NavLink to="/teams" icon={<Users size={16} />} label="TEAMS" active={location.pathname === '/teams'} />
          <NavLink to="/news" icon={<Newspaper size={16} />} label="NEWS" active={location.pathname === '/news'} />
        </div>

        <div className="flex items-center gap-4 ml-4">
          <AudioToggle />
          <button 
            onClick={() => playSFX('click')}
            onMouseEnter={() => playSFX('hover')}
            className="hidden sm:block bg-white text-black hover:bg-neon-blue hover:text-white text-[10px] font-bold px-6 py-2 rounded-full transition-all tracking-widest italic"
          >
            CONNECT
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, label, active }) => {
  const { playSFX } = useSound();
  return (
    <Link 
      to={to} 
      onClick={() => playSFX('click')}
      onMouseEnter={() => playSFX('hover')}
      className={`flex items-center gap-2 text-[10px] font-bold tracking-widest transition-all ${
        active ? 'text-neon-blue' : 'text-white/40 hover:text-white'
      }`}
    >
      {icon}
      {label}
    </Link>
  );
};

export default Navbar;
