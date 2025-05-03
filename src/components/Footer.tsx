
import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-purple/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-white font-bold text-xl">
              <span className="text-purple">Ritika</span> Budhiraja
            </div>
            <p className="text-gray-400 mt-2">Data Scientist & Computer Science Engineer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/Ritika-Budhiraja" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ritika-budhiraja-/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.hackerrank.com/profile/ritikabudhiraja1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple transition-colors"
              aria-label="HackerRank Profile"
            >
              <Code className="w-5 h-5" />
            </a>
            <a 
              href="mailto:ritikabudhiraja28@gmail.com" 
              className="text-gray-400 hover:text-purple transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-purple/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Ritika Budhiraja. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#about" className="text-gray-400 hover:text-purple text-sm">About</a>
            <a href="#projects" className="text-gray-400 hover:text-purple text-sm">Projects</a>
            <a href="#research" className="text-gray-400 hover:text-purple text-sm">Research</a>
            <a href="#contact" className="text-gray-400 hover:text-purple text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
