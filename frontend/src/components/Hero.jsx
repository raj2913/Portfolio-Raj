import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Code, Zap } from 'lucide-react';

const Hero = ({ data }) => {
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
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-20, 20, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900 to-black" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 bg-[length:400%_400%]"
        />
        
        {/* Matrix-like particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/20 rounded-lg blur-xl rotate-45"
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-orange-500/20 rounded-lg blur-xl rotate-12"
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        className="absolute top-1/2 right-1/3 w-16 h-16 bg-yellow-500/20 rounded-lg blur-xl rotate-45"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative inline-block"
          >
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img 
                  src={data.profileImage} 
                  alt="Raj Vardhan" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-red-500/30 border-dashed"
            />
            
            {/* Floating Icons */}
            <motion.div
              animate={{ rotate: 360, x: [0, 20, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-2 bg-red-500/20 rounded-full backdrop-blur-sm"
            >
              <Code size={20} className="text-red-400" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360, x: [0, -20, 0], y: [0, 20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 p-2 bg-orange-500/20 rounded-full backdrop-blur-sm"
            >
              <Zap size={20} className="text-orange-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
        >
          {data.name}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
        >
          {data.title}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center space-x-2 text-red-300 mb-8"
        >
          <MapPin size={20} />
          <span className="text-lg">{data.location}</span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed"
        >
          {data.description}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-md text-red-300 mb-12 max-w-2xl mx-auto italic"
        >
          {data.tagline}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <motion.a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
          >
            <Github size={20} />
            <span>View GitHub</span>
          </motion.a>

          <motion.a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-8 py-3 border-2 border-red-500 text-red-300 rounded-full font-medium transition-all duration-200 hover:bg-red-500/10 hover:shadow-lg hover:shadow-red-500/25"
          >
            <Linkedin size={20} />
            <span>Connect</span>
          </motion.a>

          <motion.a
            href={`mailto:${data.email}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-8 py-3 border-2 border-orange-500 text-orange-300 rounded-full font-medium transition-all duration-200 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/25"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown size={32} className="text-red-400 hover:text-red-300 transition-colors" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;