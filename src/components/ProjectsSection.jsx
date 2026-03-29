import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

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
    image: 'https://images.unsplash.com/photo-1669170941335-07ca7e9dcd73?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
];

function ProjectCard({ project, idx }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      // Card uses a more translucent background to let the section gradient through
      className={`group relative h-[650px] w-full bg-white/[0.02] backdrop-blur-sm overflow-hidden rounded-[3.5rem] border border-white/5 shadow-2xl transition-all duration-700 hover:border-white/20 ${idx % 2 === 1 ? 'md:mt-28' : ''}`}
    >
      {/* Image Layer */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={project.image}
          alt={project.title}
          style={{ transform: "translateZ(-30px)" }} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
        />
        {/* Deep Desaturated Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-[#050505]/40 group-hover:bg-transparent transition-colors duration-700 z-0" />
      </div>

      {/* Content Layer */}
      <div 
        style={{ transform: "translateZ(60px)" }} 
        className="relative z-20 w-full h-full p-12 flex flex-col justify-end"
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map(tool => (
            <span key={tool} className="px-4 py-1.5 text-[0.6rem] font-mono tracking-widest bg-white/10 border border-white/10 text-white/80 rounded-full group-hover:bg-[#F97316]/20 group-hover:text-[#F97316] group-hover:border-[#F97316]/50 transition-all duration-500">
              {tool}
            </span>
          ))}
        </div>

        <h3 className="text-4xl md:text-5xl  mb-4 text-white leading-[0.9] tracking-tighter group-hover:text-[#F97316] transition-colors duration-500" style={{ fontFamily: 'Impact, sans-serif' }}>
          {project.title}
        </h3>

        <p className="text-[#596345] font-mono text-[0.65rem] tracking-[0.4em] uppercase mb-6 group-hover:text-white/60 transition-colors">
          // {project.subtitle}
        </p>

        <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-sm mb-12 group-hover:text-white/80 transition-colors">
          {project.description}
        </p>
        
        <a href="#" className="flex items-center gap-4 text-[#F97316] font-mono text-[0.65rem] tracking-widest uppercase group/link">
            <span className="group-hover/link:mr-2 transition-all">Explore Case Study</span>
            <div className="w-8 h-8 rounded-full border border-[#F97316]/30 flex items-center justify-center group-hover/link:bg-[#F97316] group-hover/link:text-black transition-all">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                  <path d="M1 11L11 1M11 1H1M11 1V11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section 
      id="projects" 
      className="py-40 relative z-10 overflow-hidden"
      // New Premium Gradient: Midnight Obsidian to Deep Forest Moss
      style={{ background: 'linear-gradient(145deg, #050505 0%, #0a0c0a 50%, #121812 100%)' }}
    >
      
      {/* Structural Grid Detail */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className=''> 
            <h2 className="text-[4rem] md:text-[6rem] tracking-tighter text-white leading-none mb-4" style={{ fontFamily: 'Impact, sans-serif' }}>
              MY <span className="text-[#F97316]">PROJECTS</span>
            </h2>
            <div className="w-20 h-[1px] bg-[#F97316]" />
          </div>
          
          <p className="text-[#596345] font-mono tracking-[0.3em] uppercase text-xs md:mb-4">
            [ Technical Documentation // BIM Execution ]
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>

      </div>

      {/* Background Decorative Bloom */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#596345]/10 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}