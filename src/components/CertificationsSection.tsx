
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Link, X } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  description?: string;
}

const CertificationsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const certPerPage = 6;

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Introduction to Programming Using Python",
      issuer: "Scaler",
      issueDate: "Jul 2024",
      skills: ["Python (Programming Language)"],
      description: "Completed comprehensive Python programming fundamentals course"
    },
    {
      id: 2,
      title: "SQL Intermediate Level",
      issuer: "HackerRank",
      issueDate: "Jul 2024",
      skills: ["SQL", "Database Management System (DBMS)"],
      description: "Attained intermediate proficiency in SQL queries and database management"
    },
    {
      id: 3,
      title: "Hack&Chill'24",
      issuer: "Dr Akhilesh Das Gupta Institute of Technology & Management",
      issueDate: "Mar 2024",
      credentialId: "de6ee8dc-ad30-4de8-abaf-71fb5be7e195",
      skills: []
    },
    {
      id: 4,
      title: "Certified NodeJs Learner",
      issuer: "Scaler",
      issueDate: "Feb 2024",
      skills: ["Node.js"],
      description: "Completed the Fundamentals of NodeJs"
    },
    {
      id: 5,
      title: "Honorable Mention CodeKshetra'24",
      issuer: "Jagan Institute Of Management Studies(JIMS Rohini)",
      issueDate: "Feb 2024",
      skills: ["GitHub", "Team Management", "Ui/ux"],
      description: "Top 4- PS(HealthTech)"
    },
    {
      id: 6,
      title: "Ambassador Challenge: Azure Fundamentals Expedition",
      issuer: "Dr Akhilesh Das Gupta Institute of Technology & Management",
      issueDate: "Jan 2024",
      credentialId: "d20f9b1a-dbb9-4f40-a380-a138618441bf",
      skills: []
    },
    {
      id: 7,
      title: "Byte Bazaar",
      issuer: "Netaji Subhas University of Technology (NSUT, Formerly NSIT)",
      issueDate: "Jan 2024",
      skills: ["Teamwork", "Financial Analysis"],
      description: "Hold 2nd Position at this event!! ✨Round 1 was to Bid and choose Question from the Given Dataset and Round 2 was to Solve the DSA Ques in Given Time!"
    },
    {
      id: 8,
      title: "Cloud Computing",
      issuer: "NPTEL",
      issueDate: "Nov 2023",
      credentialId: "NPTEL23CS89S634306109",
      skills: ["Cloud Security", "Cloud Storage", "Cloud Applications", "Cloud Computing", "Cloud Computing IaaS"]
    },
    {
      id: 9,
      title: "Live the Code 2.0",
      issuer: "United Latino Students Association",
      issueDate: "Sep 2023",
      credentialId: "0fef5325-ace9-44ac-9d1b-fb06fd8ea522",
      skills: ["GitHub"]
    },
    {
      id: 10,
      title: "HackOdisha 3.0",
      issuer: "National Institute of Technology Rourkela",
      issueDate: "Aug 2023",
      credentialId: "4fe9061a-85c9-4486-a1bf-a3950832a7ef",
      skills: ["Statistical Data Analysis", "Graphic Design"]
    },
    {
      id: 11,
      title: "Data Narrative: A Technical Story Telling Competition",
      issuer: "Paradox, IIT Madras",
      issueDate: "Jul 2023",
      skills: ["Storytelling", "Statistical Data Analysis", "Data Analysis"]
    },
    {
      id: 12,
      title: "Microsoft Certified Learning Consultant",
      issuer: "Microsoft learning 365",
      issueDate: "Jul 2023",
      skills: ["Machine Learning", "Machine Operation"]
    },
    {
      id: 13,
      title: "PixelMind-AI",
      issuer: "Paradox, IIT Madras",
      issueDate: "Jul 2023",
      skills: ["Image Editing"]
    },
    {
      id: 14,
      title: "Nation Notion:Position Paper Writing Competition",
      issuer: "IIT Madras BS in Data Science Programme",
      issueDate: "Jun 2023",
      skills: ["Research Skills", "Analytical Skills"]
    },
    {
      id: 15,
      title: "IBM Certified Solution Architect - Cloud Computing Infrastructure V1",
      issuer: "IBM",
      issueDate: "Apr 2023",
      credentialId: "2f3953404e1b4ec0930a15fd71bcfa80",
      skills: []
    }
  ];

  const totalPages = Math.ceil(certifications.length / certPerPage);
  const indexOfLastCert = currentPage * certPerPage;
  const indexOfFirstCert = indexOfLastCert - certPerPage;
  const currentCerts = certifications.slice(indexOfFirstCert, indexOfLastCert);

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

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

  const cardVariants = {
    hidden: { y: 20, opacity: 0, rotateY: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6
      }
    },
    hover: {
      y: -10,
      rotateY: 10,
      transition: {
        duration: 0.3
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

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4">
            <span className="text-purple">Certifications</span> & Credentials
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-purple mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-3xl mx-auto">
            Professional certifications and credentials showcasing my technical expertise and continuous learning.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentCerts.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover="hover"
              className="card-3d glass-card rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="p-6 border-b border-purple/20">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-purple">{cert.issuer}</p>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-300">Issued: {cert.issueDate}</span>
                  {cert.credentialId && (
                    <span className="bg-purple/20 text-purple-light px-2 py-1 rounded text-xs">
                      ID: {cert.credentialId.substring(0, 8)}...
                    </span>
                  )}
                </div>
                
                {cert.skills.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-white text-sm mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="bg-purple/10 text-purple-light px-2 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="bg-purple/10 text-purple-light px-2 py-1 rounded-full text-xs">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
                
                <button className="mt-4 text-purple hover:text-purple-light text-sm font-medium flex items-center">
                  View details <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : 'text-white hover:bg-purple/20'}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentPage === index + 1 
                      ? 'bg-purple text-white' 
                      : 'text-white hover:bg-purple/20'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-500 cursor-not-allowed' : 'text-white hover:bg-purple/20'}`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal for certificate details */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedCert(null)}>
          <motion.div 
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            className="glass-card max-w-2xl w-full rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-purple/20">
              <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
              <button 
                className="text-white hover:text-purple transition-colors"
                onClick={() => setSelectedCert(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-purple text-lg">{selectedCert.issuer}</p>
                    <p className="text-gray-300">Issued: {selectedCert.issueDate}</p>
                  </div>
                  
                  {selectedCert.credentialId && (
                    <div className="bg-purple/20 px-3 py-2 rounded">
                      <p className="text-white text-xs mb-1">Credential ID:</p>
                      <p className="text-purple-light text-xs">{selectedCert.credentialId}</p>
                    </div>
                  )}
                </div>
                
                {selectedCert.description && (
                  <div className="mb-4">
                    <h4 className="text-white text-sm mb-2">Description:</h4>
                    <p className="text-gray-300">{selectedCert.description}</p>
                  </div>
                )}
                
                {selectedCert.skills.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-white text-sm mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, i) => (
                        <span key={i} className="bg-purple/20 text-purple-light px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedCert.credentialUrl && (
                  <div className="mt-8">
                    <a 
                      href={selectedCert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-purple hover:bg-purple-medium text-white px-4 py-2 rounded-lg transition-all w-fit"
                    >
                      <Link className="w-4 h-4" />
                      Verify Credential
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
