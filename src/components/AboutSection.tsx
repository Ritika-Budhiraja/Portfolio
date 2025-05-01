
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layers, FileText, BookOpen } from 'lucide-react';

const AboutSection = () => {
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

  const skills = [
    {
      category: "Programming",
      icon: <Code className="w-6 h-6 text-purple" />,
      items: ["Python", "C", "C++", "JAVA", "SQL", "JS", "MATLAB"]
    },
    {
      category: "ML & DL",
      icon: <Layers className="w-6 h-6 text-purple" />,
      items: ["NLP", "CNN", "Time Series Analysis", "Image Processing", "Transfer Learning", "Transformers"]
    },
    {
      category: "Data Science",
      icon: <Database className="w-6 h-6 text-purple" />,
      items: ["Data Modeling", "Data Mining", "Statistical Analysis", "Data Visualization", "Data Warehousing"]
    },
    {
      category: "Libraries",
      icon: <FileText className="w-6 h-6 text-purple" />,
      items: ["TensorFlow", "PyTorch", "Scikit-Learn", "Keras", "Pandas", "NumPy", "OpenCV"]
    },
    {
      category: "Generative AI",
      icon: <BookOpen className="w-6 h-6 text-purple" />,
      items: ["Transformers", "Spacy", "Langchain", "Haystack", "Streamlit", "OpenAI"]
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4">
            About <span className="text-purple">Me</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-purple mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-3xl mx-auto">
            I'm a dual-degree Data Scientist and Computer Science Engineer with a passion for AI, ML, and Data Science. 
            Currently pursuing BSc in Data Science at IIT Madras (2027) and B.Tech in CSE at GGSIPU (2026).
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card p-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-white mb-6">
              Education
            </motion.h3>
            
            <motion.div variants={itemVariants} className="mb-8">
              <div className="border-l-2 border-purple pl-4 pb-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple"></div>
                <h4 className="text-xl font-medium text-white">Bachelor of Science in Data Science</h4>
                <p className="text-purple">Indian Institute of Technology Madras</p>
                <p className="text-gray-400">2023 - 2027</p>
                <p className="text-gray-300 mt-2">CGPA: 8.2/10</p>
              </div>
              
              <div className="border-l-2 border-purple pl-4 pb-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple"></div>
                <h4 className="text-xl font-medium text-white">Bachelor of Technology in Computer Science</h4>
                <p className="text-purple">Guru Gobind Singh Indraprastha University</p>
                <p className="text-gray-400">2022 - 2026</p>
                <p className="text-gray-300 mt-2">CGPA: 9.2/10 (Until 5th Semester)</p>
              </div>
              
              <div className="border-l-2 border-purple pl-4 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple"></div>
                <h4 className="text-xl font-medium text-white">Class XII (Science)</h4>
                <p className="text-purple">Arwachin Bharti Bhawan Ser Sec School</p>
                <p className="text-gray-400">2021 - 2022</p>
                <p className="text-gray-300 mt-2">Percentage: 90%</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card p-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-white mb-6">
              Technical Skills
            </motion.h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="border-b border-purple/30 pb-4 last:border-0"
                >
                  <div className="flex items-center mb-3">
                    {skill.icon}
                    <h4 className="text-xl font-medium text-white ml-2">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="bg-purple/20 text-purple-light px-3 py-1 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 glass-card p-8"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-white mb-6">
            Leadership & Memberships
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="bg-purple/10 p-6 rounded-xl border border-purple/30">
              <h4 className="text-lg font-medium text-white mb-2">President</h4>
              <p className="text-purple-light">Google Developers Group on Campus</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-purple/10 p-6 rounded-xl border border-purple/30">
              <h4 className="text-lg font-medium text-white mb-2">Core Member</h4>
              <p className="text-purple-light">Cultural Folk Dance Society</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-purple/10 p-6 rounded-xl border border-purple/30">
              <h4 className="text-lg font-medium text-white mb-2">Student Advocate</h4>
              <p className="text-purple-light">Web3</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
