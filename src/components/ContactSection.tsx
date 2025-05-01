
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setSubmitStatus({
        success: true,
        message: 'Thanks for your message! I\'ll get back to you soon.'
      });
      
      // Reset form data
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 0.5
      }
    },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-purple" />,
      label: 'Email',
      value: 'ritikabudhiraja28@gmail.com',
      link: 'mailto:ritikabudhiraja28@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5 text-purple" />,
      label: 'Phone',
      value: '+91 8178714447',
      link: 'tel:+918178714447'
    },
    {
      icon: <MapPin className="w-5 h-5 text-purple" />,
      label: 'Location',
      value: 'Delhi, India',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-purple">Touch</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-purple mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-3xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-start">
                    <div className="bg-purple/10 p-3 rounded-full mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-white hover:text-purple transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-white mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://github.com/Ritika-Budhiraja" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={iconVariants}
                    whileHover="hover"
                    className="bg-purple/10 p-3 rounded-full text-white hover:text-purple hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/ritika-budhiraja-/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={iconVariants}
                    whileHover="hover"
                    className="bg-purple/10 p-3 rounded-full text-white hover:text-purple hover:bg-white/10 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="#resume" 
                    variants={iconVariants}
                    whileHover="hover"
                    className="bg-purple/10 p-3 rounded-full text-white hover:text-purple hover:bg-white/10 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3"
          >
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-space-dark border border-purple/30 rounded-lg focus:outline-none focus:border-purple text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-space-dark border border-purple/30 rounded-lg focus:outline-none focus:border-purple text-white"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-space-dark border border-purple/30 rounded-lg focus:outline-none focus:border-purple text-white resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                {submitStatus.message && (
                  <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 bg-purple hover:bg-purple-medium text-white px-6 py-3 rounded-lg transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
