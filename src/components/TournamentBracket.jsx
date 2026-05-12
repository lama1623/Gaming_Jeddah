import React from 'react';
import { motion } from 'framer-motion';
import TeamBadge from './TeamBadge';

const TournamentBracket = () => {
  const rounds = [
    {
      title: "QUARTER FINALS",
      matches: [
        { teamA: "Team Nexus", teamB: "Team Alpha", scoreA: 3, scoreB: 1, winner: "Team Nexus" },
        { teamA: "Tuwaiq Knights", teamB: "Riyadh Stars", scoreA: 2, scoreB: 0, winner: "Tuwaiq Knights" },
        { teamA: "KAU Wolves", teamB: "KFUPM Eagles", scoreA: 1, scoreB: 2, winner: "KFUPM Eagles" },
        { teamA: "Red Sea Kraken", teamB: "Neom Nexus", scoreA: 0, scoreB: 3, winner: "Neom Nexus" },
      ]
    },
    {
      title: "SEMI FINALS",
      matches: [
        { teamA: "Team Nexus", teamB: "Tuwaiq Knights", scoreA: "?", scoreB: "?", winner: null },
        { teamA: "KFUPM Eagles", teamB: "Neom Nexus", scoreA: "?", scoreB: "?", winner: null },
      ]
    },
    {
      title: "GRAND FINAL",
      matches: [
        { teamA: "TBD", teamB: "TBD", scoreA: "?", scoreB: "?", winner: null },
      ]
    }
  ];

  return (
    <div className="flex overflow-x-auto pb-12 gap-12 scrollbar-hide">
      {rounds.map((round, rIndex) => (
        <div key={rIndex} className="flex-shrink-0 w-80">
          <h4 className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase mb-8 text-center">{round.title}</h4>
          <div className="space-y-12">
            {round.matches.map((match, mIndex) => (
              <motion.div
                key={mIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: mIndex * 0.1 }}
                className="relative"
              >
                {/* Connector Lines */}
                {rIndex < rounds.length - 1 && (
                  <div className="absolute top-1/2 -right-12 w-12 h-px bg-white/10" />
                )}
                
                <div className="glass-card rounded-2xl overflow-hidden border-white/5 hover:border-neon-blue/30 transition-all group">
                  <div className={`p-4 flex items-center justify-between border-b border-white/5 ${match.winner === match.teamA ? 'bg-neon-blue/10' : ''}`}>
                    <TeamBadge name={match.teamA} size="sm" />
                    <span className="text-sm font-black italic">{match.scoreA}</span>
                  </div>
                  <div className={`p-4 flex items-center justify-between ${match.winner === match.teamB ? 'bg-neon-blue/10' : ''}`}>
                    <TeamBadge name={match.teamB} size="sm" />
                    <span className="text-sm font-black italic">{match.scoreB}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TournamentBracket;
