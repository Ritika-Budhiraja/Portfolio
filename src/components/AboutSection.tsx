
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layers, FileText, BookOpen, GraduationCap, School } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  const skillItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      color: "#9b87f5",
      textShadow: "0 0 8px rgba(155, 135, 245, 0.8)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
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

  const education = [
    {
      degree: "Bachelor of Science in Data Science",
      institution: "Indian Institute of Technology Madras",
      duration: "2023 - 2027",
      grade: "CGPA: 8.2/10",
      logo: "/lovable-uploads/fb5318e7-08f6-4288-ac86-5292cf2d2e50.png"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Guru Gobind Singh Indraprastha University",
      duration: "2022 - 2026",
      grade: "CGPA: 9.2/10 (Until 5th Semester)",
      logo: "/lovable-uploads/e7a99813-cf63-40e9-8f61-2a8048bb944a.png"
    },
    {
      degree: "Senior Secondary (12th Grade)",
      institution: "Arwachin Bharti Bhawan Sr Sec School",
      duration: "2021 - 2022",
      grade: "Percentage: 90%",
      logo: "/lovable-uploads/423c2470-de0c-40e5-a7be-9ab68b7d3c3d.png"
    },
    {
      degree: "Secondary (10th Grade)",
      institution: "Arwachin Bharti Bhawan Sr Sec School",
      duration: "2019 - 2020",
      grade: "Percentage: 93%",
      logo: "/lovable-uploads/423c2470-de0c-40e5-a7be-9ab68b7d3c3d.png"
    }
  ]

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
            Hi, I'm Ritika! I thrive on challenges, creativity, and collaboration.
            With a strong tech foundation, I've been actively involved in initiatives that blend innovation with team building. 
            My journey has been a dynamic mix of learning, leading, and growing—whether it's organizing impactful events, 
            contributing to cutting-edge projects, or empowering my team's success.
          </motion.p>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-3xl mx-auto mt-4">
            From brainstorming ideas to solving complex problems, I believe in uplifting those around me and driving collective growth. 
            I'm always open to connecting with like-minded individuals and exploring new opportunities that spark innovation and teamwork!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10">
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
            
            <Tabs defaultValue="bachelor" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-space-dark/50">
                <TabsTrigger value="bachelor" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple data-[state=active]:to-pink-500">
                  Bachelor's Degree
                </TabsTrigger>
                <TabsTrigger value="bachelorbtech" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple data-[state=active]:to-pink-500">
                  B.Tech Degree
                </TabsTrigger>
                <TabsTrigger value="senior" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple data-[state=active]:to-pink-500">
                  Senior Secondary
                </TabsTrigger>
                <TabsTrigger value="secondary" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple data-[state=active]:to-pink-500">
                  Secondary
                </TabsTrigger>
              </TabsList>
              
              {education.map((edu, index) => (
                <TabsContent key={index} value={index === 0 ? "bachelor" : index === 1 ? "bachelorbtech" : index === 2 ? "senior" : "secondary"}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-purple/20 to-pink-500/20 p-6 rounded-xl border border-purple/30 flex flex-col md:flex-row items-center gap-6"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-r from-purple to-pink-500 p-1">
                      <img src={edu.logo} alt={edu.institution} className="w-full h-full object-cover rounded-full" />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-xl font-medium text-white">{edu.degree}</h4>
                      <p className="text-purple-light text-lg">{edu.institution}</p>
                      <p className="text-gray-400">{edu.duration}</p>
                      <p className="text-gray-300 mt-2">{edu.grade}</p>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card p-8 overflow-hidden relative"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-purple/10 rounded-full"
                  style={{
                    width: Math.random() * 100 + 50,
                    height: Math.random() * 100 + 50,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [0, Math.random() * 40 - 20],
                    y: [0, Math.random() * 40 - 20],
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>

            <motion.h3 
              variants={itemVariants} 
              className="text-2xl font-semibold text-white mb-6 relative z-10"
              animate={{ 
                textShadow: ["0px 0px 0px rgba(155, 135, 245, 0)", "0px 0px 10px rgba(155, 135, 245, 0.8)", "0px 0px 0px rgba(155, 135, 245, 0)"] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Technical Skills
            </motion.h3>
            
            <div className="space-y-6 relative z-10">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="border-b border-purple/30 pb-4 last:border-0"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  initial="hidden"
                >
                  <motion.div 
                    className="flex items-center mb-3"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      animate={{
                        rotateY: [0, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h4 className="text-xl font-medium text-white ml-2">{skill.category}</h4>
                  </motion.div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <motion.span 
                        key={i} 
                        className="bg-purple/20 text-purple-light px-3 py-1 rounded-full text-sm"
                        variants={skillItemVariants}
                        whileHover="hover"
                        whileInView="visible"
                        initial="hidden"
                        custom={i}
                        viewport={{ once: true, amount: 0.1 }}
                        animate={{
                          boxShadow: ["0px 0px 0px rgba(155, 135, 245, 0)", "0px 0px 8px rgba(155, 135, 245, 0.8)", "0px 0px 0px rgba(155, 135, 245, 0)"]
                        }}
                        transition={{
                          boxShadow: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: i * 0.2
                          }
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card p-8"
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
      </div>
    </section>
  );
};

export default AboutSection;
