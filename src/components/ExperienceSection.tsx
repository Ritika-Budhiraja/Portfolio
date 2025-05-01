
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const ExperienceSection = () => {
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

  const experiences = [
    {
      company: "WorldQuant Brain",
      position: "Research Consultant",
      description: "Engaged deeply with WorldQuant Brain, leveraging advanced finance and quantitative analysis concepts to drive research and generate data-driven insights for innovative trading models.",
      period: "September 2024",
      imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?fit=crop&w=800&h=500" 
    },
    {
      company: "ISI Kolkata",
      position: "Data Science Intern",
      description: "Developed a codeless machine learning application using KNIME software, focusing on crop forecasting across various districts in different Indian states.",
      period: "July 2024 - October 2024",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&h=500"
    },
    {
      company: "IISER Bhopal",
      position: "Research Intern",
      description: "Conducted a literature review of over 10+ research papers on the application of deep learning in medical AI for cancer detection. Utilized data analysis and visualization tools, such as Pandas, NumPy, and Matplotlib, for comprehensive analysis and processing of medical cancer detection datasets.",
      period: "May 2024 - July 2024",
      imageSrc: "https://images.unsplash.com/photo-1579154204601-01588f351e67?fit=crop&w=800&h=500"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4 font-futuristic">
            Work <span className="text-purple">Experience</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-purple mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-3xl mx-auto">
            My professional journey across research and data science roles.
          </motion.p>
        </motion.div>

        <div className="timeline-container pb-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <motion.div
                variants={itemVariants}
                className="glass-card p-6 rounded-xl shadow-lg hover:shadow-purple/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-purple/20">
                    <img
                      src={experience.imageSrc}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{experience.position}</h3>
                    <p className="text-purple">{experience.company}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                  <p className="text-gray-300">{experience.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
