import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.5
      }
    })
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:75px_75px]" />
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
              02. Skills & Technologies
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
          </div>

          <motion.div
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-8"
          >
            {data.categories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-[#112240] border border-[#64ffda]/20 rounded-lg p-8 hover:border-[#64ffda]/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#ccd6f6] mb-8 flex items-center">
                  <span className="text-[#64ffda] font-mono mr-4">
                    0{categoryIndex + 1}.
                  </span>
                  {category.name}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-[#8892b0] font-mono font-medium group-hover:text-[#ccd6f6] transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[#64ffda] font-mono font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative h-2 bg-[#1e2139] rounded-full overflow-hidden">
                        <motion.div
                          custom={skill.level}
                          variants={skillVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#64ffda] to-[#4fd1c7] rounded-full"
                        />
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.5, duration: 0.3 }}
                          className="absolute top-0 right-0 w-3 h-3 bg-[#64ffda] rounded-full -translate-y-0.5 shadow-lg"
                          style={{ right: `${100 - skill.level}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;