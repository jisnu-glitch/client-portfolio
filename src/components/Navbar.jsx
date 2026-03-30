import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  // Smooth Spring configuration for the toggle and dropdown
  const transition = { duration: 0.7, ease: [0.32, 0.72, 0, 1] };

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={transition}
        className="fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-12 md:py-8 flex justify-between items-center pointer-events-auto"
      >
        {/* Brand */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
           <span className="text-white font-mono tracking-[0.4em] text-[11px] md:text-sm uppercase opacity-90 group-hover:opacity-100 transition-opacity">
             Athul <span className="text-[#F97316]">//</span> VS
           </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10 bg-white/[0.03] border border-white/10 backdrop-blur-2xl px-12 py-4 rounded-full shadow-2xl">
          {['About', 'Skills', 'Projects', 'Experience'].map((item, idx) => (
            <a 
              key={idx} 
              href={`#${item.toLowerCase()}`} 
              className="text-white/50 hover:text-white text-[11px] font-mono tracking-[0.3em] uppercase transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F97316] group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="hidden lg:block px-6 py-3 border border-white/10 rounded-full text-white/80 hover:bg-[#F97316] hover:text-black hover:border-[#F97316] text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase transition-all duration-500"
          >
            Initialize_Contact
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden px-6 py-3 border border-white/10 rounded-full backdrop-blur-2xl text-white/90 hover: transition-all flex items-center gap-3 active:scale-95"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">{isMobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
            <div className="flex flex-col gap-1 w-4">
               <motion.span animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }} className="w-full h-[1px] bg-white block" />
               <motion.span animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} className="w-full h-[1px] bg-white block" />
               <motion.span animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }} className="w-full h-[1px] bg-white block" />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE DROPDOWN --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={transition}
            className="lg:hidden fixed inset-0 bg-[#050505]/95 backdrop-blur-2xl z-[90] flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, idx) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, ...transition }}
                  key={idx} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-3xl font-bold tracking-tighter uppercase hover:text-[#F97316] transition-colors"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;