import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = ({ data }) => {
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

  const textRevealVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  variants={textRevealVariants}
                  className="text-[#64ffda] font-mono text-lg"
                >
                  01. About Me
                </motion.p>
                <motion.h2
                  variants={textRevealVariants}
                  className="text-4xl md:text-5xl font-bold text-[#ccd6f6]"
                >
                  {data.title}
                </motion.h2>
              </div>

              <motion.div
                variants={textRevealVariants}
                className="w-16 h-1 bg-[#64ffda] rounded-full"
              />

              <motion.p
                variants={textRevealVariants}
                className="text-lg text-[#8892b0] leading-relaxed"
              >
                {data.description}
              </motion.p>

              <motion.p
                variants={textRevealVariants}
                className="text-[#64ffda] font-mono italic"
              >
                {data.tagline}
              </motion.p>

              <motion.div
                variants={textRevealVariants}
                className="space-y-4"
              >
                {data.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-[#112240] transition-all duration-300 cursor-pointer"
                  >
                    <CheckCircle className="text-[#64ffda] mt-1 flex-shrink-0" size={20} />
                    <span className="text-[#8892b0]">{highlight}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right content - Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {data.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-[#112240] border border-[#64ffda]/20 rounded-lg p-8 text-center hover:border-[#64ffda]/40 transition-all duration-300 cursor-pointer"
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="text-4xl font-bold text-[#64ffda] mb-2"
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-[#8892b0] text-sm font-mono">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;