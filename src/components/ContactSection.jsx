import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section 
      id="contact" 
      className="py-40 relative z-10 overflow-hidden" 
      style={{ background: 'linear-gradient(145deg, #050505 0%, #0a0c0a 50%, #121812 100%)' }}
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0" 
           style={{ backgroundImage: `linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADING --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 relative"
        >
          <span className="absolute -top-10 left-0 text-[12vw] font-bold text-white/[0.02] uppercase tracking-tighter select-none pointer-events-none">
            Connect
          </span>
          <h2 className="text-[4rem] md:text-[6rem] tracking-tighter text-white leading-none mb-4" style={{ fontFamily: 'Impact, sans-serif' }}>
              GET IN  <span className="text-[#F97316]">TOUCH</span>
            </h2>
          <p className="mt-8 text-[#596345] font-mono tracking-[0.3em] uppercase text-[10px] md:text-xs italic max-w-xl leading-relaxed">
            // Available for BIM coordination, structural design, and cinematic production inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- CONTACT INFO (Left) --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-12"
          >
            {[
              { label: 'Phone', value: '+91 9562414887', icon: <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /> },
              { label: 'Email', value: 'athulsatheesh1017@gmail.com', icon: <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /> },
              { label: 'Office', value: 'Varickamackal H.O, Kadayanickadu, Kottayam', icon: <><path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></> }
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="group cursor-pointer">
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center text-[#596345] group-hover:text-[#F97316] group-hover:border-[#F97316]/50 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-500">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">{item.icon}</svg>
                  </div>
                  <div>
                    <h4 className="text-[0.65rem] font-mono font-bold uppercase tracking-[0.3em] text-[#596345] mb-1">{item.label}</h4>
                    <p className="text-lg text-white/80 font-light group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="pt-10 border-t border-white/5">
              <motion.a 
                href="https://linkedin.com/in/athul-v-s" 
                target="_blank" 
                className="inline-flex items-center gap-6 group"
              >
                <span className="text-white font-mono text-xs tracking-widest uppercase">LinkedIn // Dossier</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#F97316] group-hover:text-black transition-all">
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* --- CONTACT FORM (Right) --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white/[0.01] border border-white/5 rounded-[3rem] p-8 md:p-16 backdrop-blur-3xl relative overflow-hidden"
          >
            <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[0.65rem] font-mono font-bold uppercase tracking-[0.3em] text-[#596345] ml-2">// Identification</label>
                  <input type="text" placeholder="Full Name" className="w-full bg-black/40 border-b border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[#F97316] transition-all placeholder:text-white/10 font-light" />
                </div>
                <div className="space-y-4">
                  <label className="text-[0.65rem] font-mono font-bold uppercase tracking-[0.3em] text-[#596345] ml-2">// Digital Address</label>
                  <input type="email" placeholder="Email@Network.com" className="w-full bg-black/40 border-b border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[#F97316] transition-all placeholder:text-white/10 font-light" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[0.65rem] font-mono font-bold uppercase tracking-[0.3em] text-[#596345] ml-2">// Subject Parameter</label>
                <input type="text" placeholder="Inquiry Type (e.g. Structural BIM Coordination)" className="w-full bg-black/40 border-b border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[#F97316] transition-all placeholder:text-white/10 font-light" />
              </div>

              <div className="space-y-4">
                <label className="text-[0.65rem] font-mono font-bold uppercase tracking-[0.3em] text-[#596345] ml-2">// Project Brief</label>
                <textarea rows="4" placeholder="Initialize details of the request..." className="w-full bg-black/40 border-b border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[#F97316] transition-all resize-none placeholder:text-white/10 font-light"></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-[#F97316] text-black font-bold text-xs uppercase tracking-[0.4em] rounded-2xl relative overflow-hidden group shadow-[0_20px_40px_rgba(249,115,22,0.3)]"
              >
                <span className="relative z-10">Submit</span>
                {/* Premium Shimmer Effect */}
                <motion.div 
                  initial={{ left: '-100%' }}
                  animate={{ left: '200%' }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 w-32 h-full bg-white/20 skew-x-[30deg] z-0" 
                />
              </motion.button>
            </form>

            {/* Subtle Gradient Glow in Corner */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#F97316]/5 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Bloom */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[#596345]/5 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}