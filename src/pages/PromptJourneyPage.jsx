import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Terminal, Lightbulb, Zap, RefreshCw, Cpu, Code2 } from 'lucide-react';
import { useSound } from '../context/SoundContext';

const PromptJourneyPage = () => {
  const { playSFX } = useSound();

  const steps = [
    {
      title: "Initial Concept Prompt",
      icon: <Lightbulb size={24} className="text-yellow-500" />,
      description: "Defining the core aesthetic: Cinematic dark UI, glassmorphism, and esports broadcast character.",
      prompt: "Act as a senior frontend developer. Build a high-end React landing page for 'Jeddah GG'. Use Tailwind CSS and Framer Motion. Focus on a deep-space background (#050816) with neon blue accents. Create a live scoreboard for the hero section.",
      result: "Basic landing page with hero scoreboard and match cards."
    },
    {
      title: "Audio Engine Refinement",
      icon: <Zap size={24} className="text-neon-blue" />,
      description: "Iterating on audio robustness. Switching from external assets to programmatic Web Audio synthesis.",
      prompt: "The MP3 files are failing to load. Rebuild the sound system using Web Audio API synthesis. Generate futuristic synth tones for clicks (Heavy Digital Snap) and hovers (Aero-Whoosh) directly in the browser to ensure 100% reliability.",
      result: "Zero-latency, high-fidelity audio engine built with zero external dependencies."
    },
    {
      title: "Semantic Identity System",
      icon: <RefreshCw size={24} className="text-neon-purple" />,
      description: "Creating a smart component that generates logos based on team name meaning.",
      prompt: "Build a dynamic TeamBadge component. It should parse the team name and automatically generate a geometric SVG logo. Keywords like 'Flame' should generate angular shapes, 'Void' should be glitchy rings, and 'Titan' should be heavy blocks. Add unique hover animations for each archetype.",
      result: "Automated branding system across the entire platform."
    },
    {
      title: "AAA Product Activation",
      icon: <Cpu size={24} className="text-neon-pink" />,
      description: "Final push for product-level polish: AI Dashboard, Brackets, and full page activation.",
      prompt: "Transform this into a competition-ready product. Activate all pages (Matches, Teams, News). Add a Tactical AI Dashboard with live analysis feel. Build an interactive tournament bracket. Add a countdown timer. Ensure every interaction feels cinematic.",
      result: "Complete, interactive esports ecosystem ready for demo."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6 mb-6"
          >
             <div className="w-16 h-16 rounded-2xl bg-neon-blue/10 flex items-center justify-center border border-neon-blue/30 shadow-[0_0_20px_rgba(91,95,255,0.2)]">
                <Code2 size={32} className="text-neon-blue" />
             </div>
             <div>
                <h1 className="text-6xl font-black italic tracking-tighter uppercase">Prompt Journey</h1>
                <p className="text-neon-blue tracking-[0.4em] text-[10px] font-bold uppercase italic">Iterative AI Engineering & Design</p>
             </div>
          </motion.div>
          <p className="text-white/40 max-w-2xl text-sm leading-relaxed italic">
            Behind every pixel of Jeddah GG is a deliberate sequence of prompt engineering. 
            We iterated from a simple concept to a robust, programmatic AAA platform through 
            continuous refinement and AI collaboration.
          </p>
        </header>

        <div className="space-y-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-[31px] top-10 bottom-10 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent opacity-20 hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => playSFX('hover')}
              className="relative pl-0 md:pl-20 group"
            >
              {/* Step Icon */}
              <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-primary border border-white/10 flex items-center justify-center z-10 group-hover:border-neon-blue/50 transition-all duration-500 hidden md:flex">
                {step.icon}
              </div>

              <div className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all">
                <div className="flex flex-col lg:flex-row gap-12">
                   <div className="lg:w-1/2">
                      <h3 className="text-2xl font-black italic mb-4 tracking-tight uppercase flex items-center gap-4">
                        <span className="text-white/20">0{i+1}</span>
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/60 mb-8 italic leading-relaxed font-medium">
                        {step.description}
                      </p>
                      <div className="p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-[11px] text-neon-blue/70 leading-relaxed relative overflow-hidden">
                        <Terminal size={14} className="absolute right-4 top-4 opacity-30" />
                        <span className="text-white/20 block mb-2">// COLLABORATIVE PROMPT</span>
                        "{step.prompt}"
                      </div>
                   </div>

                   <div className="lg:w-1/2 flex flex-col justify-center">
                      <div className="p-8 rounded-3xl bg-neon-blue/5 border border-neon-blue/20">
                         <span className="text-[10px] font-bold tracking-widest text-neon-blue uppercase block mb-4">OUTCOME ACHIEVED</span>
                         <p className="text-xl font-black italic tracking-tight text-white/90">
                           {step.result}
                         </p>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PromptJourneyPage;
