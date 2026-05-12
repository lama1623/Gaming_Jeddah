import React from 'react';
import { useSound } from '../context/SoundContext';
import TeamBadge from './TeamBadge';

const MatchCard = ({ teamA, teamB, score, status, time }) => {
  const { playSFX } = useSound();

  return (
    <div 
      onMouseEnter={() => playSFX('hover.mp3', 0.1)}
      onClick={() => playSFX('click.mp3')}
      className="glass-card p-6 rounded-xl relative group overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-500" />
      
      <div className="flex justify-between items-center mb-6">
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
          status === 'LIVE' ? 'border-pink-500 text-pink-500' : 'border-indigo-500 text-indigo-500'
        }`}>
          {status}
        </span>
        <span className="text-indigo-400/50 text-[10px]">{time}</span>
      </div>

      <div className="flex justify-between items-center">
        <TeamBadge name={teamA} size="sm" />
        <span className="text-indigo-500 text-xs px-3 font-bold italic">{score || 'VS'}</span>
        <TeamBadge name={teamB} size="sm" className="flex-row-reverse" />
      </div>
    </div>
  );
};

export default MatchCard;
