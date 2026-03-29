import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: '3D Model of Dillon House, USA',
    subtitle: 'Structural & Architectural Documentation',
    tools: ['Autodesk Revit', 'BIM'],
    description: 'Recreated a detailed 3D BIM model of the Dillon House, producing comprehensive drawings aligned with international standards.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Residential Building Design',
    subtitle: 'Autodesk Revit BIM Modeling',
    tools: ['Autodesk Revit', 'Landscaping'],
    description: 'Developed a complete BIM model including professional construction sheet sets (plans, elevations) and detailed interior elements.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'AutoCAD Residential Building',
    subtitle: '2D Drafting & Design',
    tools: ['AutoCAD', 'Bye-laws'],
    description: 'Prepared complete 2D floor plans, elevations, and sections, applying standard conventions and building bye-laws for precise drafting.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Soil Investigation Analysis',
    subtitle: 'Site Suitability for Construction',
    tools: ['Field Testing', 'Report'],
    description: 'Conducted tests to assess bearing capacity, analyzed characteristics, and presented a report recommending foundation types.',
    image: 'https://images.unsplash.com/photo-1669170941335-07ca7e9dcd73?q=80&w=688&auto=format&fit=crop',
  }
];

function ProjectCard({ project, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: idx * 0.1, duration: 0.8 }}
      className={`group relative h-[500px] md:h-[650px] w-full bg-white/[0.02] backdrop-blur-sm overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 shadow-2xl ${idx % 2 === 1 ? 'md:mt-28' : ''}`}
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10" />
      </div>

      <div className="relative z-20 w-full h-full p-8 md:p-12 flex flex-col justify-end">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map(tool => (
            <span key={tool} className="px-3 py-1 text-[10px] font-mono tracking-widest bg-white/10 border border-white/10 text-white/80 rounded-full">
              {tool}
            </span>
          ))}
        </div>

        {/* Updated Font: Archivo Black */}
        <h3 className="text-3xl md:text-4xl lg:text-[2.2rem] mb-4 text-white leading-none tracking-tighter group-hover:text-[#F97316] transition-colors py-1" 
            style={{ fontFamily: "'Archivo Black', sans-serif" }}>
          {project.title}
        </h3>

        <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-8">
          {project.description}
        </p>
        
        <div className="flex items-center gap-4 text-[#F97316] font-mono text-[10px] tracking-widest uppercase">
            <span>Explore Case Study</span>
            <div className="w-6 h-6 rounded-full border border-[#F97316]/30 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                  <path d="M1 11L11 1M11 1H1M11 1V11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section 
      id="projects" 
      className="py-20 md:py-40 relative z-10 overflow-hidden bg-[#050505]"
      style={{ background: 'linear-gradient(145deg, #050505 0%, #0a0c0a 50%, #121812 100%)' }}
    >
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="overflow-visible"> 
            {/* Updated Font: Archivo Black */}
            <h2 className="text-[3rem] md:text-[5rem] lg:text-[5.5rem] tracking-tighter text-white leading-none mb-4 uppercase py-2" 
                style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              MY <br /><span className="text-[#F97316]">PROJECTS</span>
            </h2>
            <div className="w-20 h-[1px] bg-[#F97316]" />
          </div>
          <p className="text-[#596345] font-mono tracking-[0.3em] uppercase text-[10px]">
            [ Technical Documentation // BIM Execution ]
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}