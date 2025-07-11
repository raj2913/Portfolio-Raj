import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Building, GraduationCap, Award, Briefcase } from 'lucide-react';

const Resume = ({ data }) => {
  const [activeSection, setActiveSection] = useState('Experience');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const handleDownload = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = data.downloadUrl;
    link.download = 'raj-vardhan-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getSectionIcon = (sectionTitle) => {
    switch (sectionTitle) {
      case 'Experience':
        return <Briefcase size={24} />;
      case 'Education':
        return <GraduationCap size={24} />;
      case 'Certifications':
        return <Award size={24} />;
      default:
        return <Briefcase size={24} />;
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:125px_125px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-16">
            <motion.p
              variants={itemVariants}
              className="text-[#64ffda] font-mono text-lg mb-4"
            >
              04. Resume
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6"
            >
              {data.title}
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-16 h-1 bg-[#64ffda] mx-auto rounded-full"
            />
            <motion.p
              variants={itemVariants}
              className="text-[#8892b0] mt-6 text-lg"
            >
              Professional experience and educational background
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Section Navigation */}
            <motion.div
              variants={itemVariants}
              className="space-y-2"
            >
              {data.sections.map((section, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveSection(section.title)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center space-x-3 font-mono ${
                    activeSection === section.title
                      ? 'bg-[#64ffda] text-[#0a0a0a] shadow-lg'
                      : 'bg-[#112240] text-[#8892b0] hover:bg-[#1e2139] hover:text-[#ccd6f6] border border-[#64ffda]/20'
                  }`}
                >
                  {getSectionIcon(section.title)}
                  <span className="font-medium">{section.title}</span>
                </motion.button>
              ))}
              
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 p-4 bg-[#64ffda] text-[#0a0a0a] rounded-lg font-mono font-medium hover:bg-[#4fd1c7] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Download size={20} />
                <span>Download PDF</span>
              </motion.button>
            </motion.div>

            {/* Content Area */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3"
            >
              <div className="bg-[#112240] border border-[#64ffda]/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-[#ccd6f6] mb-8 flex items-center space-x-3">
                  {getSectionIcon(activeSection)}
                  <span>{activeSection}</span>
                </h3>

                <div className="space-y-8">
                  {data.sections
                    .find(section => section.title === activeSection)
                    ?.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ x: 5 }}
                        className="relative pl-8 border-l-2 border-[#64ffda]/30 hover:border-[#64ffda]/60 transition-colors"
                      >
                        <div className="absolute left-0 top-0 w-4 h-4 bg-[#64ffda] rounded-full -ml-2 border-4 border-[#0a0a0a]" />
                        
                        {activeSection === 'Experience' && (
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-xl font-bold text-[#ccd6f6]">
                                {item.position}
                              </h4>
                              <div className="flex flex-wrap items-center gap-4 text-[#64ffda] mt-2">
                                <div className="flex items-center space-x-1">
                                  <Building size={16} />
                                  <span>{item.company}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Calendar size={16} />
                                  <span>{item.duration}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin size={16} />
                                  <span>{item.location}</span>
                                </div>
                              </div>
                            </div>
                            <ul className="space-y-2">
                              {item.responsibilities.map((responsibility, respIndex) => (
                                <li key={respIndex} className="flex items-start space-x-2 text-[#8892b0]">
                                  <span className="text-[#64ffda] mt-1">•</span>
                                  <span>{responsibility}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {activeSection === 'Education' && (
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-xl font-bold text-[#ccd6f6]">
                                {item.degree}
                              </h4>
                              <div className="flex flex-wrap items-center gap-4 text-[#64ffda] mt-2">
                                <div className="flex items-center space-x-1">
                                  <GraduationCap size={16} />
                                  <span>{item.institution}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Calendar size={16} />
                                  <span>{item.duration}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin size={16} />
                                  <span>{item.location}</span>
                                </div>
                              </div>
                            </div>
                            {item.gpa && (
                              <div className="inline-block px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm font-mono">
                                {item.gpa}
                              </div>
                            )}
                          </div>
                        )}

                        {activeSection === 'Certifications' && (
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-xl font-bold text-[#ccd6f6]">
                                {item.name}
                              </h4>
                              <div className="flex flex-wrap items-center gap-4 text-[#64ffda] mt-2">
                                <div className="flex items-center space-x-1">
                                  <Award size={16} />
                                  <span>{item.issuer}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Calendar size={16} />
                                  <span>{item.date}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;