import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="relative bg-[#050505] text-white selection:bg-white/20 selection:text-[#F97316] ">
      {/* Main Content Sections */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
