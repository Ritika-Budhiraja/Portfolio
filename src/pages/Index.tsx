
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
import { motion } from 'framer-motion';

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
        
        {/* Animated geometric shapes */}
        <div className="absolute top-[20%] right-[10%]">
          <motion.div
            className="w-12 h-12 border border-purple/40 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
              rotate: 360
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div 
              className="w-8 h-8 text-purple flex items-center justify-center"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="13" r="8"></circle>
                <path d="M12 9v4l2 2"></path>
                <path d="M5 3 2 6"></path>
                <path d="m22 6-3-3"></path>
                <path d="M6 19l-2 2"></path>
                <path d="m18 19 2 2"></path>
                <path d="M12 2v1"></path>
              </svg>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Digital data flow effect */}
        <div className="absolute inset-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <g filter="url(#glow)">
              <motion.path 
                d="M0,100 Q300,180 600,100 T1200,100" 
                stroke="rgba(155, 135, 245, 0.15)" 
                strokeWidth="2" 
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 0.5,
                  pathOffset: [0, 1]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.path 
                d="M0,300 Q300,220 600,300 T1200,300" 
                stroke="rgba(155, 135, 245, 0.1)" 
                strokeWidth="2" 
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 0.5,
                  pathOffset: [0, 1]
                }}
                transition={{ 
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5
                }}
              />
            </g>
          </svg>
        </div>
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
