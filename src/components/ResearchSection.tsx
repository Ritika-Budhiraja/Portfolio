
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ChevronDown } from 'lucide-react';

interface ResearchProject {
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  link?: string;
  keyFindings?: string[];
  methodology?: string;
  impact?: string;
}

const ResearchSection = () => {
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);

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
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const cardHoverVariants = {
    rest: { scale: 1, boxShadow: "0 0 0 rgba(155, 135, 245, 0)" },
    hover: { 
      scale: 1.03, 
      boxShadow: "0 0 25px rgba(155, 135, 245, 0.6)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const researchProjects: ResearchProject[] = [
    {
      title: "Real-Time Network Topology Optimization Using Dynamic Machine Learning Adaptation",
      description: "Research Proposes a Network Topology Optimization Framework powered by reinforcement learning to autonomously adapt network configurations based on evolving traffic patterns.",
      fullDescription: `This research introduces a groundbreaking Network Topology Optimization Framework that leverages advanced reinforcement learning algorithms to dynamically adapt network configurations in real-time.

The framework continuously monitors network traffic patterns and performance metrics, using them as input features for a multi-agent reinforcement learning system. These agents work collaboratively to optimize routing decisions, load balancing, and resource allocation.`,
      keyFindings: [
        "23% reduction in end-to-end latency",
        "18% improvement in throughput capacity",
        "15% reduction in energy consumption",
        "30% faster adaptation to sudden traffic pattern shifts"
      ],
      methodology: "The research employs a multi-agent reinforcement learning approach with dynamic exploration policy. Agents use a combination of TD-learning and policy gradient methods to optimize different aspects of the network topology. Transfer learning mechanisms allow knowledge to be shared across network segments.",
      impact: "The framework demonstrates scalability across IoT networks, 5G infrastructure, and various cyber-physical systems, making it particularly valuable for time-sensitive applications like autonomous vehicle networks, smart city infrastructure, and industrial control systems.",
      technologies: ["Reinforcement Learning", "Network Optimization", "IoT", "Cyber-physical Systems"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fit=crop&w=800&h=500",
      link: "https://github.com/Ritika-Budhiraja/network-optimization"
    },
    {
      title: "Cross Lingual and Multi Lingual NLP",
      description: "This research aims to understand how multilingual BERT (mBERT) learns crosslingual representations across high and low resource languages.",
      fullDescription: `This comprehensive study investigates the inner workings of multilingual BERT (mBERT) and its ability to learn effective cross-lingual representations across both high-resource and low-resource languages.

Using a dataset spanning 104 languages with varying amounts of training data, we analyze mBERT's performance across multiple NLP tasks.`,
      keyFindings: [
        "Strong zero-shot cross-lingual transfer capabilities between linguistically related languages",
        "14% improvement for low-resource languages with our novel fine-tuning methodology",
        "Certain linguistic features transfer more effectively across language boundaries",
        "Specialized behavior in attention heads when processing multilingual content"
      ],
      methodology: "We propose a novel fine-tuning methodology involving a strategic pre-training phase on synthetic code-switched text and a progressive attention-focusing mechanism. Our evaluation framework tests cross-lingual transfer across Named Entity Recognition, POS tagging, Machine Translation, Sentiment Analysis, and Question Answering tasks.",
      impact: "These findings have significant implications for developing more inclusive NLP technologies that can serve linguistic communities traditionally excluded from technological advances due to data scarcity.",
      technologies: ["mBERT", "Multilingual NLP", "Cross-lingual Language Models", "Transfer Learning"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?fit=crop&w=800&h=500",
      link: "https://github.com/Ritika-Budhiraja/multilingual-nlp"
    }
  ];

  return (
    <motion.section 
      id="research" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Tech background animation */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full grid-background"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple/20 blur-[100px] animate-pulse-glow"></div>
        
        {/* Animated tech particles */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-purple/30 blur-md animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 rounded-full bg-purple-medium/20 blur-lg animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-purple-light/20 blur-sm animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 rounded-full bg-purple/15 blur-md animate-float" style={{ animationDuration: '18s', animationDelay: '1s' }}></div>
        
        {/* Digital connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <line x1="0%" y1="20%" x2="100%" y2="80%" stroke="#9b87f5" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse-slow" />
          <line x1="80%" y1="0%" x2="20%" y2="100%" stroke="#9b87f5" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <line x1="30%" y1="0%" x2="70%" y2="100%" stroke="#9b87f5" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4 font-futuristic tracking-wider">
            Research <span className="text-purple">Work</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-purple mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-3xl mx-auto">
            Ongoing research projects in cutting-edge fields of Network Optimization and Natural Language Processing.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {researchProjects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card overflow-hidden rounded-xl relative group"
              onClick={() => setSelectedProject(project)}
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-space-dark z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-purple/30 via-transparent to-space-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-4">
                  <h3 className="text-2xl font-bold text-white mb-4 font-futuristic tracking-wide">{project.title}</h3>
                  <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="bg-purple/30 text-white px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-purple/30 text-white px-3 py-1 rounded-full text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <motion.div 
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <button className="flex items-center gap-2 text-purple-light">
                      <span>Read more</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </motion.div>
                </div>
              </div>
              
              <div className="absolute inset-0 border-2 border-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl shadow-[0_0_15px_rgba(155,135,245,0.5)] z-0"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for research details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              variants={modalVariants}
              className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button 
                  className="absolute top-4 right-4 bg-space-dark/80 p-2 rounded-full text-white hover:text-purple transition-colors z-30"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent z-10"></div>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute bottom-4 left-8 z-20"
                  >
                    <h2 className="text-3xl font-bold text-white font-futuristic tracking-wider drop-shadow-xl">
                      {selectedProject.title}
                    </h2>
                  </motion.div>
                </div>
              </div>
              
              <div className="p-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6 space-y-4"
                >
                  <h4 className="text-xl font-semibold text-purple-light font-futuristic tracking-wide">Abstract</h4>
                  <p className="text-gray-300 whitespace-pre-line leading-relaxed">{selectedProject.fullDescription}</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6 space-y-4"
                >
                  <h4 className="text-xl font-semibold text-purple-light font-futuristic tracking-wide">Methodology</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.methodology}</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6 space-y-4"
                >
                  <h4 className="text-xl font-semibold text-purple-light font-futuristic tracking-wide">Key Findings</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {selectedProject.keyFindings?.map((finding, index) => (
                      <motion.li 
                        key={index} 
                        className="text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (index * 0.1) }}
                      >
                        {finding}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-6 space-y-4"
                >
                  <h4 className="text-xl font-semibold text-purple-light font-futuristic tracking-wide">Impact</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.impact}</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-6 space-y-4"
                >
                  <h4 className="text-xl font-semibold text-purple-light font-futuristic tracking-wide">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span 
                        key={index} 
                        className="bg-purple/20 text-purple-light px-3 py-1 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + (index * 0.05) }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                
                {selectedProject.link && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-purple hover:bg-purple-medium text-white px-6 py-3 rounded-lg transition-all inline-block group"
                    >
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>View Research Repository</span>
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ResearchSection;
