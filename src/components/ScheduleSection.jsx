import React from 'react';

const ScheduleSection = () => {
  const events = [
    { time: '14:00', event: 'Group Stage A', status: 'COMPLETED' },
    { time: '16:00', event: 'Group Stage B', status: 'COMPLETED' },
    { time: '18:00', event: 'Quarter Finals', status: 'LIVE' },
    { time: '20:00', event: 'Semi Finals', status: 'UPCOMING' },
    { time: '22:00', event: 'Grand Final', status: 'UPCOMING' },
  ];

  return (
    <div className="space-y-4">
      {events.map((e, i) => (
        <div key={i} className="glass-card flex items-center justify-between p-4 rounded-lg">
          <div className="flex items-center gap-6">
            <span className="text-neon-blue font-bold tracking-tighter">{e.time}</span>
            <span className="font-bold text-sm tracking-wide">{e.event}</span>
          </div>
          <span className={`text-[9px] font-bold px-3 py-1 rounded-full border ${
            e.status === 'LIVE' ? 'border-pink-500 text-pink-500 bg-pink-500/10' : 
            e.status === 'COMPLETED' ? 'border-indigo-500 text-indigo-500/50' : 
            'border-white/10 text-white/40'
          }`}>
            {e.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ScheduleSection;
