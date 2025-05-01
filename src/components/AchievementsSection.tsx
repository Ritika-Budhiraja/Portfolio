
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';

const AchievementsSection = () => {
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

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8 text-purple" />,
      title: "2nd Rank at PixelMind-AI",
      description: "An image tuning event at IIT Madras",
      organization: "IIT Madras"
    },
    {
      icon: <Star className="w-8 h-8 text-purple" />,
      title: "Qualified for SMART INDIA HACKATHON 2024",
      description: "Internal hackathon stage",
      organization: "SMART India Hackathon"
    },
    {
      icon: <Trophy className="w-8 h-8 text-purple" />,
      title: "2nd Rank in Byte Bazaar event",
      description: "DSA + Quick decision-making competition",
      organization: "NSUT"
    },
    {
      icon: <Award className="w-8 h-8 text-purple" />,
      title: "Honourable Mention",
      description: "Among Top-4 in an offline Hackathon",
      organization: "JIMS Rohini, Delhi"
    },
    {
      icon: <Star className="w-8 h-8 text-purple" />,
      title: "Top 10 Scholars",
      description: "Ranked among top academic performers in 10th grade",
      organization: "School"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4">
            My <span className="text-purple">Achievements</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-purple mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-3xl mx-auto">
            Recognition and accomplishments from various competitions and events.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="glass-card p-6 rounded-xl relative overflow-hidden group"
            >
              {/* Background glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple to-blue-500 opacity-0 group-hover:opacity-70 rounded-xl blur-sm group-hover:animate-pulse-glow transition-all duration-300"></div>
              
              <div className="relative glass-card rounded-lg p-6 h-full flex flex-col items-center text-center">
                <div className="mb-4 bg-purple/10 p-4 rounded-full">
                  {achievement.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 mb-4">{achievement.description}</p>
                <div className="mt-auto">
                  <span className="inline-block bg-purple/20 text-purple-light px-3 py-1 rounded-full text-sm">
                    {achievement.organization}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
