import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    role: 'Site Intern - Civil Engineering',
    company: 'SASS Developers & Constructions',
    period: 'May 2025 - June 2025',
    // Structural/Building SVG Icon
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21V9l9-5 9 5v12M9 21v-6h6v6M2 21h20" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: [
      'Gained hands-on exposure to structural works, electrification, plumbing & sanitary systems.',
      'Participated in earthwork excavation and building set-out procedures.',
      'Assisted in preparation of architectural and structural drawings.'
    ]
  },
  {
    role: 'Sales Associate',
    company: 'Max International | Kochi',
    period: 'Past Experience',
    // Business/Sales SVG Icon
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: [
      'Assisted customers in product selection and delivered high-quality retail service.',
      'Managed floor operations and maintained product displays.'
    ]
  },
  {
    role: 'Crew Member (Part-time)',
    company: 'KFC | Kochi',
    period: 'Past Experience',
    // Team/Operations SVG Icon
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 11-8 0 4 4 0 018 0zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: [
      'Delivered efficient customer service in a high-volume quick-service environment.',
      'Demonstrated adaptability, teamwork, and time management under pressure.'
    ]
  }
];

const EDUCATION = [
  { level: 'Diploma (Civil Engg.)', inst: 'Mangalam Polytechnic College', year: '2026 (Pursuing)', score: 'CGPA: 8.04' },
  { level: 'Higher Secondary (+2)', inst: 'Aravinda Vidya Mandiram', year: '2023', score: '90.4%' },
  { level: 'SSLC', inst: 'Aravinda Vidya Mandiram', year: '2021', score: '78%' }
];

export default function ExperienceSection() {
  return (
    <section 
      id="experience" 
      className="py-40 relative z-10 overflow-hidden "
      style={{ background: 'linear-gradient(145deg, #050505 0%, #0a0c0a 50%, #121812 100%)' }}
    >
      {/* Background Architectural Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0" 
           style={{ backgroundImage: `linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32 relative z-10">
        
        {/* --- LEFT COLUMN: Experience --- */}
        <div className="relative pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-[3rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[5.5rem] tracking-tighter text-white leading-none mb-4" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              MY <br /> <span className="text-[#F97316]">EXPERIENCE</span>
            </h2>
            <p className="text-[#596345] font-mono tracking-[0.3em] uppercase text-[10px] md:text-xs italic">// Industrial Exposure</p>
          </motion.div>

          <div className="space-y-10 relative">
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#F97316] via-[#596345]/20 to-transparent z-0" />

            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-20 group"
              >
                {/* SVG ICON NODE */}
                <div className="absolute left-0 top-2 w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center justify-center p-3 z-10 group-hover:border-[#F97316]/50 group-hover:bg-[#F97316]/10 transition-all duration-500">
                  <div className="w-full h-full text-[#596345] group-hover:text-[#F97316] transition-colors duration-500">
                    {exp.icon}
                  </div>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl group-hover:bg-white/[0.03] group-hover:border-white/10 transition-all duration-500">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] text-[10px] font-bold tracking-widest uppercase mb-4">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#F97316] transition-colors">{exp.role}</h3>
                  <p className="text-[#596345] font-mono text-[10px] uppercase tracking-wider mb-6">{exp.company}</p>
                  
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-4 items-start text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F97316]/50" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- RIGHT COLUMN: Education --- */}
        <div className="relative pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 lg:ml-20"
          >
            <h2 className="text-[3rem] md:text-[5re m] lg:text-[5.5rem] xl:text-[5.5rem] tracking-tighter text-white leading-none mb-4" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              ACADEMIC <br /> <span className="text-[#F97316]">HISTORY</span>
            </h2>
            <p className="text-[#596345] font-mono tracking-[0.3em] uppercase text-[10px] md:text-xs italic">// Qualifications</p>
          </motion.div>

          <div className="space-y-8 lg:ml-20">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#596345]/50 transition-all duration-500"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.level}</h3>
                  <p className="text-white/30 text-xs italic font-light">{edu.inst}</p>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-[#F97316] font-mono text-sm font-bold tracking-tighter">{edu.score}</p>
                    <p className="text-[#596345] font-mono text-[9px] uppercase tracking-widest opacity-60">{edu.year}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#596345] group-hover:text-[#F97316] group-hover:border-[#F97316] transition-all">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div 
              className="mt-12 p-8 rounded-[2.5rem] bg-gradient-to-br from-[#121812] to-transparent border border-white/5 backdrop-blur-3xl relative overflow-hidden"
            >
               <p className="text-white/40 text-xs leading-relaxed italic font-light max-w-xs">
                 "Actively pursuing specialized training in modern construction methodologies and AI-assisted design workflows."
               </p>
               <div className="absolute top-0 right-0 w-20 h-20 bg-[#F97316]/5 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}