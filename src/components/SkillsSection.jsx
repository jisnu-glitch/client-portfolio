import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  { 
    name: 'AutoCAD', 
    desc: '2D Drafting & Design', 
    percent: 90, 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 22L22 2M2 2h20v20H2V2z M7 7l10 10M17 7L7 17" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) 
  },
  { 
    name: 'Revit', 
    desc: 'BIM Modelling & 3D Design', 
    percent: 85, 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M3 10h18M3 7l9-4 9 4v14H3V7z M9 21V10M15 21V10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) 
  },
  { 
    name: 'Creative Suite', 
    desc: 'Photoshop & Lightroom', 
    percent: 80, 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) 
  },
  { 
    name: 'Construction', 
    desc: 'Methods & Estimation', 
    percent: 75, 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v18M3 12h18M4.5 4.5l15 15M19.5 4.5l-15 15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) 
  },
  { 
    name: 'Site Ops', 
    desc: 'Earthwork & Operations', 
    percent: 70, 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h20M5 20V8l7-4 7 4v12M9 20v-4h6v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) 
  },
];

const LANGUAGES = [
  { name: 'English', level: 'Proficient' },
  { name: 'Malayalam', level: 'Native' },
  { name: 'Tamil', level: 'Conversational' },
];

export default function SkillsSection() {
  return (
    <section 
      id="skills" 
      className="py-32 relative z-10 overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #050505 0%, #0a0c0a 50%, #121812 100%)' }}
    >
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-[3.5rem] md:text-[6rem] tracking-tighter text-white leading-none mb-4" 
              style={{ fontFamily: 'Impact, sans-serif' }}>
            TECHNICAL <br className="md:hidden" /> <span className="text-[#F97316]">SKILLS</span>
          </h2>
          <p className="text-[#596345] font-mono tracking-[0.3em] uppercase text-xs">Engineered Precision • Creative Vision</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl overflow-hidden transition-all duration-500 hover:border-white/20"
            >
              <div className="absolute top-6 right-6 w-12 h-12">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/5" />
                  <motion.circle
                    cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="transparent"
                    strokeDasharray="125.6"
                    initial={{ strokeDashoffset: 125.6 }}
                    whileInView={{ strokeDashoffset: 125.6 - (125.6 * skill.percent) / 100 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="text-[#F97316]"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-[#F97316]">
                  {skill.percent}%
                </span>
              </div>

              {/* Updated Icon Container */}
              <div className="w-12 h-12 mb-8 text-[#596345] group-hover:text-[#F97316] transition-colors duration-500">
                {skill.icon}
              </div>

              <h4 className="text-2xl font-bold text-white/90 mb-2 tracking-tight">{skill.name}</h4>
              <p className="text-[#E5E7EB]/40 text-sm font-light leading-relaxed mb-6 italic">
                {skill.desc}
              </p>

              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-700 ${i < Math.round(skill.percent / 20) ? 'bg-[#F97316]' : 'bg-white/5'}`} />
                ))}
              </div>

              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#F97316]/5 blur-[50px] group-hover:bg-[#F97316]/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl relative overflow-hidden group">
            <h3 className="text-[#E5E7EB]/80 text-lg font-mono mb-8 flex items-center gap-3 tracking-widest">
              <span className="w-8 h-[1px] bg-[#F97316]" /> LINGUISTICS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {LANGUAGES.map((lang) => (
                <div key={lang.name} className="relative">
                  <h5 className="text-[#F97316] text-lg font-bold mb-1">{lang.name}</h5>
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-mono">{lang.level}</p>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    className="absolute -bottom-2 left-0 w-full h-[1px] bg-white/5 origin-left" 
                  />
                </div>
              ))}
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[#121812] to-transparent border border-white/5 backdrop-blur-3xl flex flex-col justify-center relative overflow-hidden"
          >
            <div className="bg-[#F97316]/10 text-[#F97316] w-10 h-10 rounded-lg flex items-center justify-center mb-6 font-bold border border-[#F97316]/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            </div>
            <p className="text-sm leading-relaxed text-[#E5E7EB]/40 italic font-light">
              "Leveraging ChatGPT & AI workflows for enhanced engineering documentation and project management efficiency."
            </p>
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#F97316]/5 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}