
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const HeroSection = () => {
  const mountRef = useRef(null);
  
  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };
  
  // THREE.js background animation
  useEffect(() => {
    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    // Only append if it doesn't exist yet
    if (mountRef.current && !mountRef.current.querySelector('canvas')) {
      mountRef.current.appendChild(renderer.domElement);
    }
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create particle material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x9b87f5, // Purple color matching theme
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    // Create particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Add some ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      
      // Mouse movement effect
      const handleMouseMove = (event) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        particlesMesh.rotation.x += y * 0.0005;
        particlesMesh.rotation.y += x * 0.0005;
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', () => {});
      if (mountRef.current) {
        const canvas = mountRef.current.querySelector('canvas');
        if (canvas) {
          mountRef.current.removeChild(canvas);
        }
      }
      
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-space-dark to-space-dark/90">
      {/* THREE.js container */}
      <div ref={mountRef} className="absolute inset-0 z-0" />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-purple/10 to-transparent opacity-30"></div>
      
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-8">
          <div className="flex flex-wrap justify-center mb-6">
            {/* First name in purple */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-bold font-futuristic text-purple tracking-wider mr-4">
              Ritika
            </motion.h1>
            
            {/* Last name in pink */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-bold font-futuristic text-pink-500 tracking-wider">
              Budhiraja
            </motion.h1>
          </div>
          
          <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl text-white mb-6 font-futuristic tracking-wide">
            AI & Data Science Researcher
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Specializing in Deep Learning, Machine Learning, and Data Analysis with a strong foundation in computational methods and research-driven innovation.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="bg-purple hover:bg-purple-medium text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105">
              View Projects
            </a>
            <a href="#contact" className="border border-purple text-white hover:bg-purple/10 px-8 py-3 rounded-lg transition-all transform hover:scale-105">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            delay: 1.5,
            duration: 0.8
          }} 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll Down</span>
            <svg className="w-6 h-6 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
