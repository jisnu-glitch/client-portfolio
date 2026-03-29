import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  { 
    id: '01',
    name: 'AutoCAD', 
    desc: 'Precision 2D drafting for structural floor plans, elevations, and detailed sections with strict adherence to building bye-laws.', 
    tools: ['Drafting', 'Sections', 'Plans'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 22L22 2M2 2h20v20H2V2z M7 7l10 10M17 7L7 17" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) 
  },
  { 
    id: '02',
    name: 'Autodesk Revit', 
    desc: 'Comprehensive BIM modeling focusing on 3D visualization, structural integrity, and automated sheet generation.', 
    tools: ['BIM', '3D Design', 'Revit'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M3 10h18M3 7l9-4 9 4v14H3V7z M9 21V10M15 21V10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) 
  },
  { 
    id: '03',
    name: 'Adobe Creative Suite', 
    desc: 'Post-production visualization, cinematic color grading in Lightroom, and architectural photo manipulation.', 
    tools: ['Photoshop', 'Lightroom', 'Editing'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) 
  },
  { 
    id: '04',
    name: 'Construction Mgmt', 
    desc: 'Expertise in modern construction methods, precise material estimation, and resource optimization.', 
    tools: ['Estimation', 'Methods', 'Planning'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v18M3 12h18M4.5 4.5l15 15M19.5 4.5l-15 15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) 
  },
  { 
    id: '05',
    name: 'Site Operations', 
    desc: 'On-site execution, earthwork calculations, and managing logistics for large-scale civil projects.', 
    tools: ['Logistics', 'Earthwork', 'Execution'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h20M5 20V8l7-4 7 4v12M9 20v-4h6v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) 
  },
];

export default function SkillsSection() {
  return (
    <section 
      id="skills" 
      className="py-24 md:py-40 relative z-10 overflow-hidden bg-[#050505]"
      style={{ background: 'linear-gradient(145deg, #050505 0%, #0a0c0a 50%, #121812 100%)' }}
    >
      {/* Structural Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="overflow-visible">
            <h2 className="text-[3rem] md:text-[5.5rem] lg:text-[6.5rem] tracking-tighter text-white leading-[0.9] mb-6 uppercase" 
                style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              TECHNICAL <span className="text-[#F97316]">SKILLS</span>
            </h2>
            <div className="w-32 h-[1px] bg-[#F97316]" />
          </div>
          <p className="text-[#596345] font-mono tracking-[0.4em] uppercase text-[10px] italic">
            [ core_competencies // v.2026 ]
          </p>
        </motion.div>

        {/* --- NEW ENGAGING CARD LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }} // amount ensures it triggers when partially visible
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Card Container with Notched Corner */}
              <div 
                className="relative p-8 bg-white/[0.01] border-l border-b border-white/10 backdrop-blur-3xl overflow-hidden transition-all duration-500 group-hover:bg-white/[0.03] group-hover:border-[#F97316]/50 min-h-[380px] flex flex-col"
                style={{ clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)' }}
              >
                {/* ID Counter */}
                <div className="text-[10px] font-mono text-[#596345] mb-8 group-hover:text-[#F97316] transition-colors">
                  SYSTEM_ID: {skill.id}
                </div>

                {/* Animated Icon Container */}
                <div className="w-12 h-12 mb-8 text-[#596345] group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {skill.icon}
                </div>

                {/* Typography */}
                <h4 className="text-2xl font-bold text-white mb-4 tracking-tighter uppercase" 
                    style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                  {skill.name}
                </h4>
                
                <p className="text-white/40 text-[13px] leading-relaxed mb-auto font-light">
                  {skill.desc}
                </p>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {skill.tools.map(tag => (
                    <span key={tag} className="text-[8px] font-mono uppercase tracking-[0.2em] px-2 py-1 bg-white/5 border border-white/5 text-white/40 group-hover:text-[#F97316] transition-all">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Scanning Laser Effect (Hover) */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#F97316] opacity-0 group-hover:opacity-100 group-hover:animate-scan z-20" />
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#F97316]/30 group-hover:border-[#F97316] transition-all" />
            </motion.div>
          ))}

          {/* Special AI Blade (Highlight Layout) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative lg:col-span-1"
          >
            <div 
              className="relative p-8 bg-gradient-to-br from-[#F97316]/10 to-transparent border border-[#F97316]/20 backdrop-blur-3xl min-h-[380px] flex flex-col"
              style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 15%)' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-[#F97316] animate-pulse rounded-full" />
                <span className="text-[9px] font-mono text-[#F97316] tracking-[0.4em] uppercase">Intelligence Active</span>
              </div>

              <h4 className="text-2xl font-bold text-white mb-6 uppercase leading-none" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                AI // <br /> Workflows
              </h4>

              <p className="text-[#F97316]/60 text-sm italic leading-relaxed font-light mb-auto">
                "Harnessing Large Language Models and Generative AI to bridge the gap between complex engineering data and cinematic project documentation."
              </p>

              <div className="mt-8 pt-6 border-t border-[#F97316]/10">
                 <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">Efficiency Multiplier: 2.5x</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 2.5s linear infinite;
        }
      `}</style>
    </section>
  );
}