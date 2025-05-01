
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
  }, []);

  return (
    <div className="min-h-screen bg-space-dark relative">
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
