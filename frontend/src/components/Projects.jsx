import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Eye, X } from 'lucide-react';

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
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
              03. Featured Projects
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6"
            >
              Things I've Built
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-16 h-1 bg-[#64ffda] mx-auto rounded-full"
            />
            <motion.p
              variants={itemVariants}
              className="text-[#8892b0] mt-6 text-lg max-w-2xl mx-auto"
            >
              A showcase of my technical expertise and creative solutions
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {data.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-[#112240] border border-[#64ffda]/20 rounded-lg overflow-hidden hover:border-[#64ffda]/40 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-[#64ffda]/20 to-[#4fd1c7]/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50 group-hover:opacity-70 transition-opacity">
                    {project.technologies[0] === 'Python' ? '🐍' : 
                     project.technologies[0] === 'Django' ? '🎯' : 
                     project.technologies[0] === 'AI' ? '🤖' : '🚀'}
                  </div>
                  
                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-[#64ffda]/10 flex items-center justify-center"
                  >
                    <Eye className="text-[#64ffda] text-3xl" />
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-[#8892b0]">
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="text-[#64ffda]" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork size={14} className="text-[#64ffda]" />
                        <span>{project.stats.forks}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[#8892b0] text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-[#8892b0]/10 text-[#8892b0] rounded-full text-xs font-mono">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#64ffda] font-mono text-sm">
                      {project.stats.language}
                    </span>
                    <div className="flex space-x-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-[#8892b0] hover:text-[#64ffda] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-[#8892b0] hover:text-[#64ffda] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-[#112240] border border-[#64ffda]/20 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#ccd6f6]">
                    {selectedProject.title}
                  </h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-[#1e2139] rounded-lg transition-colors"
                  >
                    <X size={24} className="text-[#8892b0]" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="h-64 bg-gradient-to-br from-[#64ffda]/20 to-[#4fd1c7]/20 rounded-lg flex items-center justify-center mb-6">
                      <div className="text-8xl opacity-50">
                        {selectedProject.technologies[0] === 'Python' ? '🐍' : 
                         selectedProject.technologies[0] === 'Django' ? '🎯' : 
                         selectedProject.technologies[0] === 'AI' ? '🤖' : '🚀'}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded-lg hover:bg-[#64ffda]/10 transition-colors"
                        >
                          <Github size={20} />
                          <span>Code</span>
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-[#64ffda] text-[#0a0a0a] rounded-lg hover:bg-[#4fd1c7] transition-colors"
                        >
                          <ExternalLink size={20} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#ccd6f6] mb-4">
                      Project Details
                    </h3>
                    <p className="text-[#8892b0] mb-6">
                      {selectedProject.description}
                    </p>
                    
                    <h4 className="text-lg font-semibold text-[#ccd6f6] mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-[#8892b0]">
                          <span className="text-[#64ffda] mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-[#1e2139] rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-[#ccd6f6] mb-3">
                        Project Stats
                      </h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-[#64ffda]">
                            {selectedProject.stats.stars}
                          </div>
                          <div className="text-sm text-[#8892b0]">Stars</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#64ffda]">
                            {selectedProject.stats.forks}
                          </div>
                          <div className="text-sm text-[#8892b0]">Forks</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#64ffda]">
                            {selectedProject.stats.language}
                          </div>
                          <div className="text-sm text-[#8892b0]">Language</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;