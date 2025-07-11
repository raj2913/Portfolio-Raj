import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, Award, Flame } from 'lucide-react';

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statIcons = [TrendingUp, Users, Award, Flame];

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
            {data.title}
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {data.description}
            </motion.p>

            <motion.p 
              className="text-md text-red-300 italic leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {data.tagline}
            </motion.p>

            <div className="space-y-4">
              {data.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start space-x-3 p-2 rounded-lg hover:bg-red-900/20 transition-all duration-200"
                >
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block mt-8"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-red-500/25 transition-all duration-200">
                Download Resume
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {data.stats.map((stat, index) => {
              const Icon = statIcons[index];
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-red-900/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 text-center hover:border-red-500/40 transition-all duration-300 hover:bg-red-900/50"
                >
                  <Icon className="text-red-400 mx-auto mb-4" size={32} />
                  <motion.h3
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-3xl font-bold text-white mb-2"
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;