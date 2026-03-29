import React, { useRef, useState } from 'react';
import { motion, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handlePointerMove = (e) => {
    // Only apply hover parallax for mouse. Mobile scroll should not trigger jiggery recalculations.
    if (e.pointerType !== 'mouse') return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const imageMoveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), springConfig);
  const imageMoveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);

  const containerVariants = {
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
  };

  const nameVariants = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", y: 50 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative w-full min-h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center md:justify-end"
      // SECTION GRADIENT: Midnight Obsidian to Deep Forest Moss
      style={{ background: 'linear-gradient(145deg, #050505 0%, #0a0c0a 50%, #121812 100%)' }}
    >
      {/* --- PREMIUM NAVIGATION BAR (Desktop Top & Mobile Elements) --- */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center pointer-events-auto"
      >
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
           <span className="text-white font-mono tracking-[0.4em] text-[11px] md:text-sm uppercase opacity-90 group-hover:opacity-100 transition-opacity">
              Athul <span className="text-[#F97316]">//</span> VS
           </span>
        </div>

        {/* Desktop Links - Premium Rectangle Box */}
        <div className="hidden lg:flex items-center gap-10 bg-white/[0.02] border border-white/5 backdrop-blur-1xl px-12 py-4 rounded-full shadow-2xl">
          {['About', 'Skills', 'Projects', 'Experience'].map((item, idx) => (
            <a 
              key={idx} 
              href={`#${item.toLowerCase()}`} 
              className="text-white/60 hover:text-white text-[11px] font-mono tracking-[0.3em] uppercase transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-[#F97316] group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop CTA Button */}
          <a 
            href="#contact" 
            className="hidden lg:block px-6 py-3 border border-white/10 rounded-sm text-white/80 hover:bg-[#F97316] hover:text-black hover:border-[#F97316] text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-md"
          >
            Initialize<span className="hidden sm:inline"> Contact</span>
          </a>

          {/* Mobile Menu Toggle (Rectangle box) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden px-4 py-3 border border-[#F97316]/30  rounded-full backdrop-blur-md text-white/90 hover:text-[#F97316] hover:border-[#F97316] transition-all flex items-center gap-3"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">{isMobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE DROPDOWN MENU (Ultra Premium Glass) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-[90px] left-4 right-4 bg-[#0a0c0a]/95 border border-[#F97316]/20 backdrop-blur-md flex flex-col z-50 rounded-2xl overflow-hidden shadow-2xl will-change-transform"
          >
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, idx) => (
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={idx} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center gap-4 px-8 py-6 text-white/50 hover:text-white hover:bg-white/[0.03] text-xs font-mono tracking-[0.4em] uppercase transition-all border-b border-white/5 last:border-b-0"
              >
                <span className="w-0 h-[1px] bg-[#F97316] group-hover:w-6 transition-all duration-300 ease-out" />
                <span className="group-hover:translate-x-2 transition-transform duration-300 ease-out">{item}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- LAYER 0: Architectural Grid --- */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)',
            backgroundSize: 'clamp(60px, 8vw, 100px) clamp(60px, 8vw, 100px)'
          }} />
      </div>

      {/* --- LAYER 1: Parallax Image with Deep Green-Black Fade --- */}
      <motion.div
        style={{ x: imageMoveX, y: imageMoveY }}
        className="absolute inset-0 md:inset-auto md:left-0 md:top-0 w-full md:w-[60%] h-full z-10 select-none pointer-events-none"
      >
        <div
          className="relative w-full h-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] md:[mask-image:linear-gradient(to_right,black_50%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_right,black_50%,transparent_100%)]"
        >
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }} // Original color, high clarity
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            src="/dp.jpg"
            alt="Athul Vs"
            className="w-full h-full object-cover object-center"
          />

          {/* Mobile Overlay: Fades deeply only at the very bottom text area */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent md:hidden z-20" />

          {/* Unified Smooth Blur Transition matching the fade */}
          <div
            className="absolute inset-0 z-10 hidden md:block pointer-events-none"
            style={{
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              maskImage: 'linear-gradient(to right, transparent 50%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 50%, black 100%)'
            }}
          />

          {/* Subtle edges vignette to maintain focus without harsh lines */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/20 via-transparent to-[#050505]/40 z-20 hidden md:block pointer-events-none" />
        </div>
      </motion.div>

      {/* --- LAYER 2: Floating Typography --- */}
      <div className="relative z-30 w-full max-w-[1600px] mx-auto px-6 md:px-16 mt-[50vh] md:mt-0 flex flex-col items-center md:items-end text-center md:text-right">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center md:items-end"
        >
          {/* Ghost Title */}
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.03, x: 0 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="hidden lg:block absolute -top-16 md:-top-24 right-0 text-[14vw] font-bold text-white select-none pointer-events-none"
            style={{ WebkitTextStroke: '1px white', color: 'transparent', fontFamily: "'Archivo Black', sans-serif" }}
          >
            ARCHITECT
          </motion.h2>

          {/* Main Title - Cleaned Spacing */}
          <div className="overflow-visible py-2"> 
            <motion.h1
              variants={nameVariants}
              className="text-[#F97316] text-[12vw] sm:text-[11vw] md:text-[8rem] lg:text-[7.5rem] xl:text-[9.5rem] leading-none tracking-tighter drop-shadow-2xl"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              ATHUL <span className="text-white/5" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)', color: 'transparent' }}>VS</span>
            </motion.h1>
          </div>

          {/* Bio & Signature */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="flex flex-col items-center md:items-end space-y-4 md:space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-[#F97316]" />
              <h3 className="text-white/60 font-mono text-[10px] sm:text-[10px] md:text-xs tracking-[0.5em] uppercase">
                Precision <span className="text-[#F97316]">meets</span> Narrative
              </h3>
            </div>


          </motion.div>

          
        </motion.div>
      </div>

      {/* Decorative Bloom (Bottom Left) */}
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-[#596345]/10 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default HeroSection;