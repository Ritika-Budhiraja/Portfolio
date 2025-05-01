
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

interface ResearchProject {
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  link?: string;
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

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const researchProjects: ResearchProject[] = [
    {
      title: "Real-Time Network Topology Optimization Using Dynamic Machine Learning Adaptation",
      description: "Research Proposes a Network Topology Optimization Framework powered by reinforcement learning to autonomously adapt network configurations based on evolving traffic patterns.",
      fullDescription: `This research introduces a groundbreaking Network Topology Optimization Framework that leverages advanced reinforcement learning algorithms to dynamically adapt network configurations in real-time.

The framework continuously monitors network traffic patterns and performance metrics, using them as input features for a multi-agent reinforcement learning system. These agents work collaboratively to optimize routing decisions, load balancing, and resource allocation.

Key innovations include:
• Adaptive learning rate mechanisms that respond to network volatility
• Transfer learning capabilities to apply knowledge across different network segments
• Anomaly detection integrated with the optimization pipeline
• Low-latency decision making through efficient model architecture

Performance evaluations show significant improvements across key metrics:
• 23% reduction in end-to-end latency
• 18% improvement in throughput capacity
• 15% reduction in energy consumption
• 30% faster adaptation to sudden traffic pattern shifts

The framework demonstrates scalability across IoT networks, 5G infrastructure, and various cyber-physical systems, making it particularly valuable for time-sensitive applications like autonomous vehicle networks, smart city infrastructure, and industrial control systems.`,
      technologies: ["Reinforcement Learning", "Network Optimization", "IoT", "Cyber-physical Systems"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fit=crop&w=800&h=500",
      link: "https://github.com/Ritika-Budhiraja/network-optimization"
    },
    {
      title: "Cross Lingual and Multi Lingual NLP",
      description: "This research aims to understand how multilingual BERT (mBERT) learns crosslingual representations across high and low resource languages.",
      fullDescription: `This comprehensive study investigates the inner workings of multilingual BERT (mBERT) and its ability to learn effective cross-lingual representations across both high-resource and low-resource languages.

Using a dataset spanning 104 languages with varying amounts of training data, we analyze mBERT's performance across multiple NLP tasks:
• Named Entity Recognition (NER)
• Part-of-Speech (POS) tagging
• Machine Translation
• Sentiment Analysis
• Question Answering

Our research reveals several key findings:
• mBERT demonstrates surprisingly strong zero-shot cross-lingual transfer capabilities, particularly between linguistically related languages
• The quality of representations for low-resource languages can be significantly improved through targeted fine-tuning strategies
• Certain linguistic features transfer more effectively across language boundaries than others
• The model's attention heads exhibit specialized behavior when processing multilingual content

We propose a novel fine-tuning methodology that improves performance on low-resource languages by 14% on average without degrading performance on high-resource languages. Our approach involves a strategic pre-training phase on synthetic code-switched text and a progressive attention-focusing mechanism.

These findings have significant implications for developing more inclusive NLP technologies that can serve linguistic communities traditionally excluded from technological advances due to data scarcity.`,
      technologies: ["mBERT", "Multilingual NLP", "Cross-lingual Language Models", "Transfer Learning"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?fit=crop&w=800&h=500",
      link: "https://github.com/Ritika-Budhiraja/multilingual-nlp"
    }
  ];

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Tech background animation */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full grid-background"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple/20 blur-[100px] animate-pulse-glow"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-purple/30 blur-md animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-purple-medium/20 blur-lg animate-rotate-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {researchProjects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card overflow-hidden rounded-xl relative group cursor-pointer hover:shadow-[0_0_25px_rgba(155,135,245,0.6)] transition-all duration-500"
              onClick={() => setSelectedProject(project)}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
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
                </div>
              </div>
              
              <div className="absolute inset-0 border-2 border-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl shadow-[0_0_15px_rgba(155,135,245,0.5)] z-0"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for research details */}
      {selectedProject && (
        <motion.div 
          initial="hidden"
          animate="visible"
          exit="hidden"
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
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 font-futuristic tracking-wide">{selectedProject.title}</h3>
              
              <div className="mb-6 whitespace-pre-line">
                <h4 className="text-lg font-semibold text-white mb-2">Abstract:</h4>
                <p className="text-gray-300">{selectedProject.fullDescription}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-purple/20 text-purple-light px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {selectedProject.link && (
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-purple hover:bg-purple-medium text-white px-4 py-2 rounded-lg transition-all inline-block"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Research
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ResearchSection;
