import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <h2 className="text-2xl font-black italic mb-4">JEDDAH GG</h2>
          <p className="text-white/40 max-w-sm text-sm">
            The premier esports destination for the Kingdom of Saudi Arabia. 
            Powered by next-gen tech and high-performance gameplay.
          </p>
        </div>
        
        <div>
          <h3 className="text-[10px] font-bold tracking-widest text-blue-400 mb-6 uppercase">Platform</h3>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Tournaments</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pro League</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-bold tracking-widest text-purple-400 mb-6 uppercase">Support</h3>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-white/20 tracking-widest uppercase">
          © 2026 JEDDAH GG. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6 text-[10px] text-white/20 tracking-widest uppercase">
          <span>DEVELOPED FOR JEDDAH ESPORTS FEDERATION</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
