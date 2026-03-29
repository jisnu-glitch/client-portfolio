import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-[#050505] overflow-hidden border-t border-white/5 py-12 md:py-20">
      
      {/* Background Architectural Grid (Very Faint) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" 
           style={{ backgroundImage: `linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Left Side: Brand Stack */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-[#F97316] flex items-center justify-center font-bold text-black text-sm">
                A
             </div>
             <span className="text-white font-mono tracking-[0.4em] text-[10px] uppercase">
                Athul // VS
             </span>
          </div>
          <p className="text-[#596345] font-mono text-[9px] tracking-[0.2em] uppercase max-w-[200px] text-center md:text-left">
            Design // Engineering // Cinematic Narratives
          </p>
        </div>

        {/* Center: Copyright Statement */}
        <div className="text-center">
          <p className="text-white/40 text-[11px] font-mono tracking-widest uppercase mb-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
            <span className="text-[#596345] font-mono text-[9px] tracking-[0.3em] uppercase italic">
              System Core // Active
            </span>
          </div>
        </div>

        {/* Right Side: Back to Top / Navigation */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ y: -5 }}
          className="group flex flex-col items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#F97316] group-hover:bg-[#F97316]/5 transition-all duration-500">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-white/20 font-mono text-[8px] tracking-[0.5em] uppercase group-hover:text-white transition-colors">
            Ascend
          </span>
        </motion.button>

      </div>

      {/* Extreme Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#F97316]/20 to-transparent" />
    </footer>
  );
}