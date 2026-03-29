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
      className="py-32 relative z-10 overflow-hidden bg-[#050505]"
      style={{ background: 'linear-gradient(145deg, #050505 0%, #0a0c0a 50%, #121812 100%)' }}
    >
      {/* Structural Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

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
            <h2 className="text-[3rem] md:text-[5.5rem] lg:text-[6rem] tracking-tighter text-white leading-none mb-6 uppercase py-2" 
                style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              TECHNICAL <span className="text-[#F97316]">SKILLS</span>
            </h2>
            <div className="w-32 h-[1px] bg-[#F97316]" />
          </div>
          <p className="text-[#596345] font-mono tracking-[0.4em] uppercase text-[10px] md:mb-8 italic">
            [ Core Competencies // Systems Architecture ]
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              // Trigger once and when 10% is visible for stability
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-10 bg-[#080808] hover:bg-[#0a0c0a] transition-all duration-700 min-h-[400px]"
            >
              {/* Numbering */}
              <span className="absolute top-8 right-10 text-[10px] font-mono text-[#596345] group-hover:text-[#F97316] transition-colors">
                // {skill.id}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 mb-12 text-white/20 group-hover:text-[#F97316] transition-all duration-500">
                {skill.icon}
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-white mb-4 tracking-tight uppercase" 
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                {skill.name}
              </h4>
              <p className="text-white/40 text-xs leading-relaxed mb-8 font-light">
                {skill.desc}
              </p>

              {/* Tags/Tools */}
              <div className="flex flex-wrap gap-2">
                {skill.tools.map(tag => (
                  <span key={tag} className="text-[8px] font-mono uppercase tracking-widest px-2 py-1 border border-white/5 text-[#596345] group-hover:text-white group-hover:border-white/20 transition-all">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                   style={{ background: 'radial-gradient(circle at center, rgba(249,115,22,0.03) 0%, transparent 70%)' }} />
            </motion.div>
          ))}

          {/* AI Module Card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative p-10 bg-gradient-to-br from-[#121812] to-[#080808] flex flex-col justify-between min-h-[400px]"
          >
            <span className="text-[10px] font-mono text-[#F97316] italic tracking-widest">
              [ AUXILIARY MODULE ]
            </span>
            <div className="my-10">
              <p className="text-sm leading-relaxed text-[#E5E7EB]/50 italic font-light">
                "Integrating AI-driven workflows for hyper-efficient engineering documentation and BIM management."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
              <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em]">AI Synthesis Active</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}