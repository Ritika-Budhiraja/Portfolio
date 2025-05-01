
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ResearchSection from '../components/ResearchSection';
import ExperienceSection from '../components/ExperienceSection';
import AchievementsSection from '../components/AchievementsSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import CursorEffect from '../components/CursorEffect';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Ritika Budhiraja | Data Scientist & CS Engineer";
    
    // Hide cursor on touch devices
    const isTouchDevice = () => {
      return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
    };
    
    if (isTouchDevice()) {
      document.body.classList.add('touch-device');
    }
  }, []);

  return (
    <div className="min-h-screen bg-space-dark relative overflow-hidden">
      {/* Ambient tech background animations */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grid lines */}
        <div className="absolute top-0 left-0 w-full h-full grid-background opacity-10"></div>
        
        {/* Purple nebula effect */}
        <div className="absolute top-1/3 left-1/2 w-[1000px] h-[1000px] rounded-full bg-purple/5 -translate-x-1/2 -translate-y-1/2 blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-medium/5 blur-[80px] animate-pulse-glow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-purple-light/30 blur-sm animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 rounded-full bg-purple-light/20 blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-purple/20 blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-purple-medium/30 blur-sm animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <CursorEffect />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResearchSection />
      <ExperienceSection />
      <AchievementsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
