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
        duration: 0.6,
        ease: "easeOut"
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
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
          >
            {data.title}
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="text-gray-400 mt-6 text-lg"
          >
            Professional experience and educational background
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Section Navigation */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-2"
          >
            {data.sections.map((section, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveSection(section.title)}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                  activeSection === section.title
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/25'
                    : 'bg-red-900/30 text-gray-300 hover:bg-red-800/50 hover:text-white'
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
              className="w-full mt-6 p-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-red-500/25 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Download size={20} />
              <span>Download PDF</span>
            </motion.button>
          </motion.div>

          {/* Content Area */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-red-900/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
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
                      className="relative pl-8 border-l-2 border-red-500/30 hover:border-red-500/60 transition-colors"
                    >
                      <div className="absolute left-0 top-0 w-4 h-4 bg-red-500 rounded-full -ml-2 border-4 border-black" />
                      
                      {activeSection === 'Experience' && (
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-xl font-bold text-white">{item.position}</h4>
                            <div className="flex flex-wrap items-center gap-4 text-red-300 mt-2">
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
                              <li key={respIndex} className="flex items-start space-x-2 text-gray-300">
                                <span className="text-red-400 mt-1">•</span>
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {activeSection === 'Education' && (
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-xl font-bold text-white">{item.degree}</h4>
                            <div className="flex flex-wrap items-center gap-4 text-red-300 mt-2">
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
                            <div className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                              {item.gpa}
                            </div>
                          )}
                        </div>
                      )}

                      {activeSection === 'Certifications' && (
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-xl font-bold text-white">{item.name}</h4>
                            <div className="flex flex-wrap items-center gap-4 text-red-300 mt-2">
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
      </div>
    </div>
  );
};

export default Resume;