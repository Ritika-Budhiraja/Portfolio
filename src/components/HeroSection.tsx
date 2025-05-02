import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; radius: number; color: string; velocity: { x: number; y: number } }[] = [];

    function createParticles() {
      for (let i = 0; i < 100; i++) {
        const radius = Math.random() * 2 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = `rgba(155, 135, 245, ${Math.random() * 0.8 + 0.2})`;
        const velocity = {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5
        };

        particles.push({ x, y, radius, color, velocity });
      }
    }

    function animateParticles() {
      requestAnimationFrame(animateParticles);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Update position
        p.x += p.velocity.x;
        p.y += p.velocity.y;

        // Bounce off walls
        if (p.x < 0 || p.x > canvas.width) p.velocity.x *= -1;
        if (p.y < 0 || p.y > canvas.height) p.velocity.y *= -1;

        // Connect particles that are close to each other
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(155, 135, 245, ${0.2 - distance / 500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    }

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    }

    createParticles();
    animateParticles();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Variants for text animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center mb-6">
            {/* First name in purple */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl font-bold font-futuristic text-purple tracking-wider mr-4"
            >
              Ritika
            </motion.h1>
            
            {/* Last name in pink */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl font-bold font-futuristic text-pink-500 tracking-wider"
            >
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
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
