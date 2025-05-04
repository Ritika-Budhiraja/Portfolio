
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
      title: "Sentiment Analysis of Reddit Posts Using BERT",
      description: "This research explores the application of BERT models for sentiment analysis on Reddit data, specifically analyzing how language patterns in peer-to-peer networks can be classified and understood through advanced NLP techniques.",
      technologies: ["BERT", "Sentiment Analysis", "NLP", "P2P Networks"],
      image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80",
      institution: "IIT Madras",
      fullDescription: "This comprehensive research investigates the application of BERT (Bidirectional Encoder Representations from Transformers) to analyze sentiment patterns in Reddit's peer-to-peer communication networks. The study leverages advanced natural language processing techniques to classify and understand complex language patterns, sarcasm, and emotional nuances present in social media discourse.\n\nKey contributions include:\n\n1. Development of a fine-tuned BERT model specifically optimized for Reddit's unique linguistic patterns and community-specific jargon.\n\n2. Implementation of a scalable classification system capable of processing large volumes of peer-to-peer communications while maintaining high accuracy.\n\n3. Empirical validation showing significant improvements in sentiment classification accuracy (up to 87%) compared to traditional lexicon-based approaches, particularly for ambiguous or context-dependent expressions.\n\nThe research demonstrates how transformer-based language models can be effectively applied to understand complex social dynamics in online communities, with potential applications in content moderation, trend analysis, and social behavior research."
    },
    {
      id: 2,
      title: "Cross Lingual and Multi Lingual NLP",
      description: "This research aims to understand how multilingual BERT (mBERT) learns crosslingual representations across high and low resource languages, analyzing its performance on various NLP Tasks using data of 104 languages.",
      technologies: ["mBERT", "Multilingual NLP", "Cross-lingual Models", "Transfer Learning"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80",
      institution: "GGSIPU",
      fullDescription: "This comprehensive research investigates the capabilities and limitations of multilingual BERT (mBERT) in learning cross-lingual and multi-lingual representations across a diverse set of 104 languages with varying resource availability.\n\nThe study makes several key contributions:\n\n1. Analysis of mBERT's representational capacity across both high-resource languages (e.g., English, French, German) and low-resource languages (e.g., Swahili, Kurdish, Nepali).\n\n2. Evaluation of zero-shot and few-shot transfer learning capabilities across multiple NLP tasks including named entity recognition, part-of-speech tagging, sentiment analysis, and question answering.\n\n3. Identification of specific linguistic features and typological characteristics that influence cross-lingual transfer success between language pairs.\n\n4. Proposal of novel fine-tuning strategies that significantly improve performance for low-resource languages without compromising performance on high-resource languages.\n\nThe findings reveal that while mBERT shows remarkable cross-lingual transfer abilities, its performance is strongly influenced by linguistic distance, script similarity, and training data quantity. The research provides actionable insights for practitioners working on multilingual NLP applications and contributes to our theoretical understanding of how large language models acquire cross-lingual capabilities."
    },
    {
      id: 3,
      title: "Real-Time Network Topology Optimization Using ML",
      description: "This research presents a novel framework for dynamically optimizing network topologies using reinforcement learning in response to real-time traffic patterns and user demands, significantly improving network performance metrics.",
      technologies: ["Reinforcement Learning", "Network Optimization", "Machine Learning", "IoT", "5G Networks"],
      image: "https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      logo: "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80",
      institution: "Dr. Akhilesh Das Gupta Institute",
      date: "January 2025",
      doi: "https://doi.org/10.22214/ijraset.2025.66581",
      journal: "International Journal for Research in Applied Science & Engineering Technology (IJRASET)",
      fullDescription: "This pioneering research addresses the growing challenges of network topology management in dynamic environments such as IoT, 5G networks, and cyber-physical systems. The study introduces a novel framework called Dynamic Network Topology Optimization (DNTO) that leverages advanced reinforcement learning algorithms to autonomously optimize network configurations in real-time.\n\nKey contributions include:\n\n1. Development of a machine learning framework that dynamically adapts network topologies based on real-time traffic patterns and changing user demands, significantly reducing latency by 57% compared to static configurations.\n\n2. Implementation of reinforcement learning algorithms that enable networks to self-optimize without human intervention, resulting in 30% higher throughput and 25% reduced energy consumption.\n\n3. Creation of a scalable solution that continuously monitors network conditions and makes topology adjustments with response times 5 times faster than traditional methods.\n\n4. Comprehensive evaluation across simulated and real-world scenarios, demonstrating superior performance in IoT networks, smart city infrastructure, and cyber-physical systems.\n\nThe research provides a foundation for the next generation of autonomous network management systems that can adapt to evolving requirements while maintaining optimal performance, minimizing energy consumption, and enhancing overall network resilience."
    }
  ];

  // Function to handle slider navigation
  const handleSlideChange = (direction) => {
    if (!selectedResearch) return;
    
    const currentIndex = researchProjects.findIndex(p => p.id === selectedResearch.id);
    let nextIndex;
    
    if (direction > 0) {
      nextIndex = (currentIndex + 1) % researchProjects.length;
    } else {
      nextIndex = currentIndex - 1 < 0 ? researchProjects.length - 1 : currentIndex - 1;
    }
    
    setSelectedResearch(researchProjects[nextIndex]);
  };

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
            Ongoing research projects in cutting-edge fields of Natural Language Processing and Machine Learning.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {researchProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="overflow-hidden rounded-xl relative group purple-glow dark:bg-space-dark/60 light:bg-white/80 backdrop-blur-md shadow-lg transform transition-all duration-500 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedResearch(project)}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64">
                {/* Semi-transparent overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark via-space-dark/40 to-transparent z-10"></div>
                
                {/* Purple glow on hover */}
                <div className="absolute inset-0 bg-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Institution logo - moved to top-right with better positioning */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center p-1 shadow-lg">
                    <img 
                      src={project.logo} 
                      alt={project.institution}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                
                {/* Title overlay on the image - adjusted positioning */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-2 font-futuristic tracking-wider text-shadow-lg line-clamp-2 group-hover:text-purple transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Short description that appears on hover */}
                  <p className="text-gray-200 mb-3 transform transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 line-clamp-2 text-sm">
                    {project.description.substring(0, 80)}...
                  </p>
                </div>
              </div>
              
              {/* Technologies badges at the bottom */}
              <div className="p-4 bg-space-dark/90 dark:bg-space-dark/90 light:bg-white/90">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="bg-purple/30 text-white px-2 py-1 rounded-full text-xs whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-purple/20 text-white px-2 py-1 rounded-full text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Institution name below technologies */}
                <div className="mt-2 text-sm text-purple-light font-medium truncate">
                  {project.institution}
                </div>
              </div>
              
              {/* Animated border and glow effect */}
              <div className="absolute inset-0 border-2 border-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-0"></div>
              
              {/* "Read More" button that appears on hover */}
              <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-purple text-white px-3 py-1 rounded-full text-sm shadow-neon-purple animate-pulse-glow">
                  View Research
                </span>
              </div>
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
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedResearch(null)}
        >
          <motion.div 
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            className="glass-card max-w-4xl w-full max-h-[90vh] overflow-auto rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                className="absolute top-4 right-4 bg-space-dark/80 p-2 rounded-full text-white hover:text-purple transition-colors z-30 shadow-neon-purple"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedResearch(null);
                }}
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="h-64 relative overflow-hidden">
                {/* Slider navigation buttons */}
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple/80 rounded-full p-2 z-20 hover:bg-purple transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSlideChange(-1);
                  }}
                >
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple/80 rounded-full p-2 z-20 hover:bg-purple transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSlideChange(1);
                  }}
                >
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                
                {/* Image overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark via-space-dark/60 to-transparent z-10"></div>
                <img 
                  src={selectedResearch.image} 
                  alt={selectedResearch.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Institution logo in modal - repositioned */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center p-1 shadow-lg">
                    <img 
                      src={selectedResearch.logo} 
                      alt={selectedResearch.institution}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="bg-white/80 px-3 py-1 rounded-lg text-space-dark font-medium text-sm">
                    {selectedResearch.institution}
                  </span>
                </div>
                
                {/* Title positioned at the bottom of the image */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-futuristic tracking-wider text-shadow-lg">
                    {selectedResearch.title}
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-space-dark/95 dark:bg-space-dark/95 light:bg-white/95">
              {/* Meta information */}
              {selectedResearch.doi && (
                <div className="mb-4 flex flex-wrap gap-2 text-sm text-gray-400">
                  {selectedResearch.date && <span>{selectedResearch.date}</span>}
                  {selectedResearch.doi && (
                    <a 
                      href={selectedResearch.doi} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-light hover:underline"
                    >
                      {selectedResearch.doi}
                    </a>
                  )}
                  {selectedResearch.journal && <span>{selectedResearch.journal}</span>}
                </div>
              )}
            
              {/* Technologies badges */}
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedResearch.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-purple/20 text-purple-light px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-purple mb-3">Abstract:</h4>
                <p className="text-gray-300 mb-6">{selectedResearch.description}</p>
                
                <h4 className="text-xl font-semibold text-purple mb-3">Research Details:</h4>
                <div className="text-gray-300 space-y-4">
                  {selectedResearch.fullDescription.split('\n\n').map((paragraph, idx) => (
                    <motion.p 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (idx * 0.1) }}
                      className="leading-relaxed"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
              
              {/* Call to action button */}
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <button className="btn-gradient px-8 py-3 rounded-lg shadow-neon-purple transition-all hover:scale-105">
                  Download Research Paper
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ResearchSection;
