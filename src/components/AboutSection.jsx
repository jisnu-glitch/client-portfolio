import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutSection() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects refined for mobile (less aggressive movement on small screens)
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50], { clamp: false });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full min-h-screen overflow-hidden flex flex-col md:flex-row items-center bg-[#080808] pt-12 pb-20 md:py-0"
    >
      {/* --- LAYER 0: Background Accents --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Architectural Grid - Scale adjusts for mobile */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)`, 
            backgroundSize: 'clamp(40px, 10vw, 60px) clamp(40px, 10vw, 60px)' 
          }} 
        />
        <div className="absolute top-[10%] left-[5%] w-40 md:w-72 h-40 md:h-72 bg-[#596345] rounded-full blur-[80px] md:blur-[120px] opacity-20" />
      </div>

      {/* --- LAYER 1: Image Section --- 
          Mobile: Acts as a background with a heavy fade
          Desktop: Half-screen parallax
      */}
      <motion.div
        style={{ y: yImage }}
        className="absolute md:relative w-full md:w-1/2 h-full md:h-[110vh] z-10 md:order-2 opacity-40 md:opacity-100"
      >
        {/* Cinematic Fades for Mobile & Desktop Integration */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#080808] via-transparent to-[#080808] md:hidden" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#080808] via-[#080808]/40 to-transparent" />
        <div className="absolute inset-0 z-20 hidden md:block bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
        
        <motion.div 
          initial={{ clipPath: 'inset(10% 10% 10% 10%)' }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full overflow-hidden"
        >
          <img 
            src="/about.jpg" 
            alt="About" 
            className="w-full h-full object-cover scale-110 grayscale-[30%] md:grayscale-0" 
          />
        </motion.div>
      </motion.div>

      {/* --- LAYER 2: Content Area --- */}
      <motion.div
        style={{ y: yText }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-30 w-full md:w-1/2 px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col justify-center md:order-1 items-center md:items-start text-center md:text-left"
      >
        {/* Background Outline Text - Responsive scale */}
        <div className="absolute top-0 md:-top-10 left-1/2 md:left-0 -translate-x-1/2 md:-translate-x-10 pointer-events-none select-none">
          <h3 className="text-[20vw] md:text-[15rem] font-bold text-white/[0.02] leading-none uppercase">
            About
          </h3>
        </div>

        {/* Mission Tag */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
          <div className="w-8 md:w-12 h-[1px] bg-[#596345]" />
          <span className="text-[#596345] font-mono tracking-[0.3em] text-[10px] md:text-sm uppercase italic">About Me</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-[#F97316] text-[12vw] sm:text-[10vw] md:text-[5rem] lg:text-[6rem] leading-none mb-8 md:mb-10 drop-shadow-2xl"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          CAREER <br />
          <span className="text-white/10" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>OBJECTIVE</span>
        </motion.h2>

        {/* Body Text */}
        <motion.div variants={itemVariants} className="relative group max-w-sm sm:max-w-md md:max-w-lg">
          {/* Vertical line hidden on mobile for cleaner look */}
          <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F97316] to-transparent hidden md:block" />
          
          <p className="font-light text-[#E5E7EB] text-base md:text-xl lg:text-[1.3rem] leading-relaxed">
            A motivated and detail-oriented <span className="text-[#F97316] font-medium italic">Civil Engineering student</span> seeking to apply technical knowledge in a professional construction environment. 
          </p>
          
          <p className="mt-4 md:mt-6 font-light text-[#E5E7EB]/70 text-base md:text-xl lg:text-[1.3rem] leading-relaxed">
            Eager to contribute to impactful projects, strengthen industry expertise, and grow alongside a forward-thinking organization.
          </p>
        </motion.div>

        {/* Button */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ x: 10 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 md:mt-12 flex w-fit items-center gap-4 text-white text-[4rem]font-mono text-[10px] md:text-sm tracking-widest group border border-white/5 py-3 px-6 rounded-full bg-white/5 md:bg-transparent md:border-none md:p-0"
        >
          VIEW MY RESUME
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#F97316] transition-colors ">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:text-[#F97316] transition-colors">
              <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}