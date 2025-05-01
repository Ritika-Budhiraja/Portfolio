
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
            <Link to="/" className="text-white font-bold text-xl hover:text-purple transition-colors font-futuristic tracking-wider">
              <span className="text-purple">Ritika</span> Budhiraja
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6 lg:space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-purple transition-colors px-3 py-2 tracking-wider">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-purple transition-colors px-3 py-2 tracking-wider">Projects</button>
              <button onClick={() => scrollToSection('research')} className="text-white hover:text-purple transition-colors px-3 py-2 tracking-wider">Research</button>
              <button onClick={() => scrollToSection('experience')} className="text-white hover:text-purple transition-colors px-3 py-2 tracking-wider">Experience</button>
              <button onClick={() => scrollToSection('achievements')} className="text-white hover:text-purple transition-colors px-3 py-2 tracking-wider">Achievements</button>
              <button onClick={() => scrollToSection('certifications')} className="text-white hover:text-purple transition-colors px-3 py-2 tracking-wider">Certifications</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-purple transition-colors px-3 py-2 tracking-wider">Contact</button>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Ritika-Budhiraja" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple transition-all duration-300 transform hover:scale-110">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/ritika-budhiraja-/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple transition-all duration-300 transform hover:scale-110">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:ritikabudhiraja28@gmail.com" className="text-white hover:text-purple transition-all duration-300 transform hover:scale-110">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#resume" className="flex items-center gap-2 bg-purple hover:bg-purple-medium text-white px-4 py-2 rounded-lg transition-all group">
              <Download className="h-4 w-4 group-hover:animate-pulse" />
              <span className="tracking-wide">Resume</span>
            </a>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple focus:outline-none"
              aria-expanded="false"
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
            <button onClick={() => scrollToSection('about')} className="block text-white hover:text-purple px-3 py-2 w-full text-left tracking-wider">About</button>
            <button onClick={() => scrollToSection('projects')} className="block text-white hover:text-purple px-3 py-2 w-full text-left tracking-wider">Projects</button>
            <button onClick={() => scrollToSection('research')} className="block text-white hover:text-purple px-3 py-2 w-full text-left tracking-wider">Research</button>
            <button onClick={() => scrollToSection('experience')} className="block text-white hover:text-purple px-3 py-2 w-full text-left tracking-wider">Experience</button>
            <button onClick={() => scrollToSection('achievements')} className="block text-white hover:text-purple px-3 py-2 w-full text-left tracking-wider">Achievements</button>
            <button onClick={() => scrollToSection('certifications')} className="block text-white hover:text-purple px-3 py-2 w-full text-left tracking-wider">Certifications</button>
            <button onClick={() => scrollToSection('contact')} className="block text-white hover:text-purple px-3 py-2 w-full text-left tracking-wider">Contact</button>
            
            <div className="flex items-center space-x-4 px-3 py-2">
              <a href="https://github.com/Ritika-Budhiraja" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple transition-all duration-300 transform hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/ritika-budhiraja-/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:ritikabudhiraja28@gmail.com" className="text-white hover:text-purple transition-all duration-300 transform hover:scale-110">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#resume" className="flex items-center gap-2 bg-purple hover:bg-purple-medium text-white px-4 py-2 rounded-lg transition-all">
                <Download className="h-4 w-4" />
                <span className="tracking-wide">Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
