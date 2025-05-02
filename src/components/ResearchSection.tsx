
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const ResearchSection = () => {
  const [selectedResearch, setSelectedResearch] = useState(null);

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const researchProjects = [
    {
      id: 1,
      title: "Real-Time Network Topology Optimization Using Dynamic Machine Learning Adaptation",
      description: "Research Proposes a Network Topology Optimization Framework powered by reinforcement learning to autonomously adapt network configurations based on evolving traffic patterns. It improves key metrics like latency, throughput, and energy efficiency, offering a scalable solution for real-time management in IoT, 5G, and cyber-physical systems.",
      technologies: ["Reinforcement Learning", "Network Optimization", "IoT", "Cyber-physical Systems"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fit=crop&w=800&h=500",
      fullDescription: "This research paper introduces a novel approach to network topology optimization through the application of dynamic machine learning algorithms. The proposed framework utilizes reinforcement learning techniques to autonomously reconfigure network topologies in response to evolving traffic patterns and changing network conditions.\n\nKey contributions include:\n\n1. Development of an adaptive algorithm that continuously monitors network performance metrics and proactively adjusts topology configurations to optimize resource utilization.\n\n2. Implementation of a scalable solution capable of handling complex networks found in IoT deployments, 5G infrastructure, and cyber-physical systems.\n\n3. Empirical validation showing significant improvements in critical network metrics including latency reduction (up to 28%), throughput enhancement (up to 35%), and energy efficiency improvements (up to 42%).\n\nThe research demonstrates how machine learning can be effectively applied to solve complex networking challenges in a way that adapts to real-world conditions without manual intervention, making it particularly valuable for next-generation network infrastructure management."
    },
    {
      id: 2,
      title: "Cross Lingual and Multi Lingual NLP",
      description: "This research aims to understand how multilingual BERT (mBERT) learns crosslingual representations across high and low resource languages, analyzing its performance on various NLP Tasks using data of 104 languages.",
      technologies: ["mBERT", "Multilingual NLP", "Cross-lingual Language Models", "Transfer Learning"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?fit=crop&w=800&h=500",
      fullDescription: "This comprehensive research investigates the capabilities and limitations of multilingual BERT (mBERT) in learning cross-lingual and multi-lingual representations across a diverse set of 104 languages with varying resource availability.\n\nThe study makes several key contributions:\n\n1. Analysis of mBERT's representational capacity across both high-resource languages (e.g., English, French, German) and low-resource languages (e.g., Swahili, Kurdish, Nepali).\n\n2. Evaluation of zero-shot and few-shot transfer learning capabilities across multiple NLP tasks including named entity recognition, part-of-speech tagging, sentiment analysis, and question answering.\n\n3. Identification of specific linguistic features and typological characteristics that influence cross-lingual transfer success between language pairs.\n\n4. Proposal of novel fine-tuning strategies that significantly improve performance for low-resource languages without compromising performance on high-resource languages.\n\nThe findings reveal that while mBERT shows remarkable cross-lingual transfer abilities, its performance is strongly influenced by linguistic distance, script similarity, and training data quantity. The research provides actionable insights for practitioners working on multilingual NLP applications and contributes to our theoretical understanding of how large language models acquire cross-lingual capabilities."
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
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4 font-futuristic tracking-wide">
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
          {researchProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="glass-card overflow-hidden rounded-xl relative group"
              onClick={() => setSelectedResearch(project)}
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
                  <h3 className="text-2xl font-bold text-white mb-4 font-futuristic tracking-wider text-shadow-lg">{project.title}</h3>
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

      {/* Modal for detailed research information */}
      {selectedResearch && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedResearch(null)}
        >
          <motion.div 
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                className="absolute top-4 right-4 bg-space-dark/80 p-2 rounded-full text-white hover:text-purple transition-colors z-30"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedResearch(null);
                }}
              >
                <X className="w-6 h-6" />
              </button>
              <div className="h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent z-10"></div>
                <img 
                  src={selectedResearch.image} 
                  alt={selectedResearch.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-futuristic tracking-wider">{selectedResearch.title}</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Abstract:</h4>
                <p className="text-gray-300 mb-6">{selectedResearch.description}</p>
                
                <h4 className="text-lg font-semibold text-white mb-2">Full Research Description:</h4>
                <div className="text-gray-300 space-y-4">
                  {selectedResearch.fullDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedResearch.technologies.map((tech, index) => (
                    <span key={index} className="bg-purple/20 text-purple-light px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ResearchSection;
