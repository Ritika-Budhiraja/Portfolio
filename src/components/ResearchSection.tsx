
import React from 'react';
import { motion } from 'framer-motion';

const ResearchSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const researchProjects = [
    {
      title: "Real-Time Network Topology Optimization Using Dynamic Machine Learning Adaptation",
      description: "Research Proposes a Network Topology Optimization Framework powered by reinforcement learning to autonomously adapt network configurations based on evolving traffic patterns. It improves key metrics like latency, throughput, and energy efficiency, offering a scalable solution for real-time management in IoT, 5G, and cyber-physical systems.",
      technologies: ["Reinforcement Learning", "Network Optimization", "IoT", "Cyber-physical Systems"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fit=crop&w=800&h=500"
    },
    {
      title: "Cross Lingual and Multi Lingual NLP",
      description: "This research aims to understand how multilingual BERT (mBERT) learns crosslingual representations across high and low resource languages, analyzing its performance on various NLP Tasks using data of 104 languages.",
      technologies: ["mBERT", "Multilingual NLP", "Cross-lingual Language Models", "Transfer Learning"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?fit=crop&w=800&h=500"
    }
  ];

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4 font-futuristic">
            Research <span className="text-purple">Work</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-purple mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-3xl mx-auto">
            Ongoing research projects in cutting-edge fields of Network Optimization and Natural Language Processing.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {researchProjects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card overflow-hidden rounded-xl relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-space-dark z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-purple/30 via-transparent to-space-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-4">
                  <h3 className="text-2xl font-bold text-white mb-4 font-futuristic">{project.title}</h3>
                  <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-purple/30 text-white px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 border-2 border-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl shadow-[0_0_15px_rgba(155,135,245,0.5)] z-0"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
