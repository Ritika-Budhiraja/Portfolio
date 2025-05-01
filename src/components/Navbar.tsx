
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-space-dark/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl hover:text-purple transition-colors">
              <span className="text-purple">Ritika</span> Budhiraja
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-purple transition-colors px-3 py-2">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-purple transition-colors px-3 py-2">Projects</button>
              <button onClick={() => scrollToSection('research')} className="text-white hover:text-purple transition-colors px-3 py-2">Research</button>
              <button onClick={() => scrollToSection('experience')} className="text-white hover:text-purple transition-colors px-3 py-2">Experience</button>
              <button onClick={() => scrollToSection('achievements')} className="text-white hover:text-purple transition-colors px-3 py-2">Achievements</button>
              <button onClick={() => scrollToSection('certifications')} className="text-white hover:text-purple transition-colors px-3 py-2">Certifications</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-purple transition-colors px-3 py-2">Contact</button>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Ritika-Budhiraja" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/ritika-budhiraja-/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:ritikabudhiraja28@gmail.com" className="text-white hover:text-purple">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#resume" className="flex items-center gap-2 bg-purple hover:bg-purple-medium text-white px-4 py-2 rounded-lg transition-all">
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-card m-4 rounded-xl animate-fly-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('about')} className="block text-white hover:text-purple px-3 py-2 w-full text-left">About</button>
            <button onClick={() => scrollToSection('projects')} className="block text-white hover:text-purple px-3 py-2 w-full text-left">Projects</button>
            <button onClick={() => scrollToSection('research')} className="block text-white hover:text-purple px-3 py-2 w-full text-left">Research</button>
            <button onClick={() => scrollToSection('experience')} className="block text-white hover:text-purple px-3 py-2 w-full text-left">Experience</button>
            <button onClick={() => scrollToSection('achievements')} className="block text-white hover:text-purple px-3 py-2 w-full text-left">Achievements</button>
            <button onClick={() => scrollToSection('certifications')} className="block text-white hover:text-purple px-3 py-2 w-full text-left">Certifications</button>
            <button onClick={() => scrollToSection('contact')} className="block text-white hover:text-purple px-3 py-2 w-full text-left">Contact</button>
            
            <div className="flex items-center space-x-4 px-3 py-2">
              <a href="https://github.com/Ritika-Budhiraja" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/ritika-budhiraja-/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:ritikabudhiraja28@gmail.com" className="text-white hover:text-purple">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#resume" className="flex items-center gap-2 bg-purple hover:bg-purple-medium text-white px-4 py-2 rounded-lg transition-all">
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
