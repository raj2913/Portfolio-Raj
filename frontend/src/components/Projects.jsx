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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10" />
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
            Featured Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="text-gray-400 mt-6 text-lg"
          >
            A showcase of my technical expertise and creative solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-red-900/30 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden hover:border-red-500/40 transition-all duration-300 cursor-pointer group hover:bg-red-900/50"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                <div className="text-6xl opacity-50 group-hover:opacity-70 transition-opacity">
                  {project.technologies[0] === 'Python' ? '🐍' : 
                   project.technologies[0] === 'Django' ? '🎯' : 
                   project.technologies[0] === 'AI' ? '🤖' : '🚀'}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Eye className="text-white text-2xl" />
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork size={14} className="text-blue-400" />
                      <span>{project.stats.forks}</span>
                    </div>
                  </div>
                  <span className="text-red-400">{project.stats.language}</span>
                </div>
              </div>
            </motion.div>
          ))}
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
              className="bg-red-900/90 backdrop-blur-md border border-red-500/20 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-red-800/50 rounded-lg transition-colors"
                  >
                    <X size={24} className="text-gray-400" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="h-64 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center mb-6">
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
                          className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm font-medium"
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
                          className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
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
                          className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors"
                        >
                          <ExternalLink size={20} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                    <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2 mb-6">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-300">
                          <span className="text-red-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-red-800/30 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-3">Project Stats</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-yellow-400">{selectedProject.stats.stars}</div>
                          <div className="text-sm text-gray-400">Stars</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-400">{selectedProject.stats.forks}</div>
                          <div className="text-sm text-gray-400">Forks</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-red-400">{selectedProject.stats.language}</div>
                          <div className="text-sm text-gray-400">Language</div>
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