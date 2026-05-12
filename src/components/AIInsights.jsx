import React from 'react';

const AIInsights = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-12">
    {[
      { label: "PROBABILITY", val: "Team Nexus 74%", desc: "Likely Finalist" },
      { label: "MOMENTUM", val: "Alpha +12%", desc: "Rising Performance" },
      { label: "MVP PREDICTION", val: "Shadow-X", desc: "Highest K/D Ratio" },
      { label: "WIN STREAK", val: "8 Games", desc: "Jeddah Record" }
    ].map((item, i) => (
      <div key={i} className="border border-white/5 bg-white/[0.02] p-4 rounded-lg">
        <p className="text-[9px] text-blue-400 tracking-widest font-bold uppercase mb-1">{item.label}</p>
        <p className="text-lg font-bold italic">{item.val}</p>
        <p className="text-xs text-indigo-400/60">{item.desc}</p>
      </div>
    ))}
  </div>
);

export default AIInsights;
