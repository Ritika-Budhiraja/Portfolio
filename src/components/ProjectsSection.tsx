import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Twitter Sentiment Analysis",
      description: "Analyzed sentiments of tweets using multiple models and selected the best one based on model accuracy. Determined that the LSTM model provided the most accurate and reliable sentiment analysis according to individual mood analysis.",
      techStack: ["Pandas", "NumPy", "NLTK", "SpaCy", "PyTorch", "Scikit-learn", "Matplotlib", "Seaborn"],
      image: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?fit=crop&w=800&h=500",
      githubUrl: "https://github.com/Ritika-Budhiraja/sentiment-analysis"
    },
    {
      id: 2,
      title: "Blog Generator Web App",
      description: "This application uses the LLama 2 language model to generate personalized blog content based on user inputs like topic, word count, and audience type (e.g., Researchers or Common People). Built with Streamlit for an intuitive interface and Python for backend processing.",
      techStack: ["Streamlit", "Python", "LLama 2 Language Model"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?fit=crop&w=800&h=500",
      githubUrl: "https://github.com/Ritika-Budhiraja/blog-generator"
    },
    {
      id: 3,
      title: "Fine-Tuned Chatbot",
      description: "Explored four methods for creating a chatbot. The Generative Model uses an encoder-decoder architecture with attention mechanisms to generate dynamic responses. The Supervised Learning Model employs labeled datasets to train classifiers like RandomForest for response prediction. The Unsupervised Learning Model uses TF-IDF to generate responses without labeled data. Lastly, OpenAI Models (like Ada, Babbage, Curie, and Davinci) offer pre-trained language models that can be fine-tuned for high-quality conversational capabilities.",
      techStack: ["Python", "NumPy", "Keras", "Pandas", "NLTK"],
      image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?fit=crop&w=800&h=500",
      githubUrl: "https://github.com/Ritika-Budhiraja/chatbot-tutorial"
    },
    {
      id: 4,
      title: "Image Caption Generator",
      description: "The Image Caption Generator integrates computer vision and natural language processing to produce meaningful captions for images, utilizing the FLICKR_8K dataset. The process involves cleaning captions, extracting image features via VGG-16, and training an LSTM model to generate captions, evaluated with BLEU scores. Applications span aiding visually impaired individuals, automating captions in advertising, and assisting in medical and geospatial image analysis.",
      techStack: ["Tensorflow", "Pandas", "Matplotlib", "Seaborn", "NLTK"],
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?fit=crop&w=800&h=500",
      githubUrl: "https://github.com/Ritika-Budhiraja/image-caption-generator"
    },
    {
      id: 5,
      title: "EcoAlert",
      description: "Designed and implemented a smart gas leak detection system with sensors (MQ series gas sensors), motors (servo motors for window automation), and rechargeable batteries for uninterrupted operation. Ensured real-time monitoring, triggering alarms upon detection, and sending notifications via IoT protocols for swift response and enhanced safety measures.",
      techStack: ["Python", "Arduino", "MQ-Sensor"],
      image: "https://images.unsplash.com/photo-1621846251783-6f33c0a9ea14?fit=crop&w=800&h=500",
      githubUrl: "https://github.com/Ritika-Budhiraja/eco-alert"
    },
    {
      id: 6,
      title: "BTC Price Prediction Model",
      description: "The BTC Price Prediction ML Project forecasts Bitcoin prices using historical data from CoinMarketCap, leveraging advanced statistical and machine learning models like GARCH and SARIMAX for high accuracy. The project includes seasonal decomposition, autocorrelation analysis, and hyperparameter tuning to optimize predictive performance. Results and insights are documented in a comprehensive research paper.",
      techStack: ["Python", "Tensorflow", "Colab", "Keras", "NumPy", "Pandas", "Scikit-Learn", "CoinMarketCap API"],
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?fit=crop&w=800&h=500",
      githubUrl: "https://github.com/Ritika-Budhiraja/btc-prediction"
    },
    {
      id: 7,
      title: "Crop Forecasting Prediction",
      description: "The Crop Yield Forecasting Using Machine Learning project utilizes KNIME and Python workflows to predict crop yields using historical weather, soil, and yield data. It integrates feature engineering, predictive modeling, and interpretative visualizations to support agricultural decision-making. The project delivers actionable insights via dashboards and REST APIs for real-time applications.",
      techStack: ["KNIME", "Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?fit=crop&w=800&h=500",
      githubUrl: "https://github.com/Ritika-Budhiraja/crop-forecasting"
    },
    {
      id: 8,
      title: "QRCode Generator",
      description: "The QR Code Generator is a Python-based tool that creates customizable QR codes for text, URLs, and other data formats. It supports options like size, color, and error correction levels, making it ideal for various applications like business cards, marketing materials, and Wi-Fi access sharing.",
      techStack: ["Python", "Jupyter/Colab", "VS CODE"],
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?fit=crop&w=800&h=500",
      githubUrl: "https://github.com/Ritika-Budhiraja/qrcode-generator"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4">
            My <span className="text-purple">Projects</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-purple mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of projects ranging from sentiment analysis and NLP to machine learning models and IoT applications.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="glass-card overflow-hidden rounded-xl transform perspective-1000 group hover:shadow-purple/30 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, index) => (
                    <span key={index} className="bg-purple/20 text-purple-light px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="bg-purple/20 text-purple-light px-2 py-1 rounded-full text-xs">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
                <button className="text-purple hover:text-purple-light text-sm font-medium">
                  Read more →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for project details */}
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
              <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span key={index} className="bg-purple/20 text-purple-light px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                {selectedProject.githubUrl && (
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple hover:bg-purple-medium text-white px-4 py-2 rounded-lg transition-all"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </a>
                )}
                
                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-purple text-white hover:bg-purple/10 px-4 py-2 rounded-lg transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
