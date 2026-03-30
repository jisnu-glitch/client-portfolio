import React, { useRef, useState } from 'react';
import { motion, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar'; // Ensure this path is correct

const HeroSection = () => {
  const containerRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handlePointerMove = (e) => {
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
      style={{ background: 'linear-gradient(145deg, #050505 0%, #0a0c0a 50%, #121812 100%)' }}
    >
      {/* --- SEPARATED NAVBAR COMPONENT --- */}
      <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      {/* --- LAYER 0: Architectural Grid --- */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)',
            backgroundSize: 'clamp(60px, 8vw, 100px) clamp(60px, 8vw, 100px)'
          }} />
      </div>

      {/* --- LAYER 1: Parallax Image --- */}
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
          <div className="overflow-visible py-2 "> 
            <motion.h1
              variants={nameVariants}
              className="text-[#F97316] text-[12vw] sm:text-[11vw] md:text-[8rem] lg:text-[7.5rem] xl:text-[9.5rem] leading-none tracking-tight drop-shadow-2xl"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              ATHUL <span className="text-white/5" style={{ WebkitTextStroke: '2px rgba(255, 140, 0, 0.3)', color: 'transparent' }}>VS</span>
            </motion.h1>
          </div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-[1px] bg-[#F97316]" />
            <h3 className="text-white/60 font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase">
              Precision <span className="text-[#F97316]">meets</span> Narrative
            </h3>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bloom */}
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-[#596345]/10 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default HeroSection;