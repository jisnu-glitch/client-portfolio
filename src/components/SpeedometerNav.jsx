import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const SECTIONS = [
  { id: 'about', label: 'About', angle: -60 },
  { id: 'skills', label: 'Skills', angle: -30 },
  { id: 'projects', label: 'Projects', angle: 0 },
  { id: 'experience', label: 'Experience', angle: 30 },
  { id: 'contact', label: 'Contact', angle: 60 }
];

export default function SpeedometerNav() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [hoveredSection, setHoveredSection] = useState(null);

  // Show nav when scrolled past hero (e.g., 500px)
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsVisible(latest > 300);
    });
  }, [scrollY]);

  // Determine active section based on scroll position natively, or let simple IntersectionObserver handle it
  useEffect(() => {
    const handleScroll = () => {
      let current = 'about';
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentSectionInfo = SECTIONS.find(s => s.id === (hoveredSection || activeSection));
  const needleAngle = currentSectionInfo ? currentSectionInfo.angle : 0;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          {/* Semicircle Base */}
          <div className="relative w-[320px] h-[160px] bg-glass backdrop-blur-md bg-graphite/90 rounded-t-[160px] shadow-[0_-8px_32px_rgba(44,44,44,0.3)] border-t border-concrete/20 pointer-events-auto overflow-hidden">
            
            {/* Speedometer Arc Line */}
            <div className="absolute top-4 left-4 right-4 bottom-[-16px] rounded-t-[150px] border-t-2 border-l-2 border-r-2 border-dashed border-concrete/30" />

            {/* Central Hub / Dot */}
            <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-6 h-6 bg-concrete rounded-full z-20 shadow-lg" />

            {/* Needle */}
            <motion.div
              className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-1 h-[130px] rounded-t-full origin-bottom z-10"
              style={{ background: 'linear-gradient(to top, #EE7828 0%, rgba(238, 120, 40, 0) 100%)' }}
              animate={{ rotate: needleAngle }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />

            {/* Ticks & Labels */}
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.id;
              const isHovered = hoveredSection === section.id;
              
              return (
                <div
                  key={section.id}
                  className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[140px] origin-bottom flex flex-col justify-start items-center"
                  style={{ transform: `translateX(-50%) rotate(${section.angle}deg)` }}
                >
                  <button
                    onClick={() => scrollTo(section.id)}
                    onMouseEnter={() => setHoveredSection(section.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                    className={`group relative flex flex-col items-center justify-start h-full gap-2 pt-2 cursor-pointer
                      ${isActive || isHovered ? 'text-bright' : 'text-concrete/70'}`}
                    style={{ transform: `rotate(${-section.angle}deg)` }} // keep text horizontal
                  >
                    <motion.div
                      className={`w-1.5 rounded-full bg-current`}
                      animate={{ 
                        height: isHovered ? 24 : isActive ? 16 : 12,
                        opacity: isHovered || isActive ? 1 : 0.5
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                    <span className="text-xs font-semibold tracking-wider uppercase transition-colors duration-200">
                      {section.label}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
