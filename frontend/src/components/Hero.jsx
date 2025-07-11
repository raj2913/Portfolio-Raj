import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';

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
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#64ffda] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -100, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              variants={itemVariants}
              className="text-[#64ffda] font-mono text-lg mb-6"
            >
              {data.greeting}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="text-[#ccd6f6]">{data.name}</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start space-x-2 text-[#8892b0] mb-8"
            >
              <MapPin size={20} />
              <span className="text-lg">{data.location}</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-[#8892b0] mb-8 max-w-2xl leading-relaxed"
            >
              {data.description}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[#64ffda] font-mono mb-12 italic"
            >
              {data.tagline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-16"
            >
              <motion.a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-mono transition-all duration-300 hover:bg-[#64ffda] hover:bg-opacity-10"
              >
                <Github size={20} />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-mono transition-all duration-300 hover:bg-[#64ffda] hover:bg-opacity-10"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                href={`mailto:${data.email}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 bg-[#64ffda] text-[#0a0a0a] rounded-lg font-mono font-semibold transition-all duration-300 hover:bg-[#4fd1c7]"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right content - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <motion.div
              animate={floatingAnimation}
              className="relative"
            >
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#64ffda] shadow-2xl">
                <img 
                  src={data.profileImage} 
                  alt="Raj Vardhan" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x400/64ffda/0a0a0a?text=RV";
                  }}
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#64ffda] opacity-30"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown size={32} className="text-[#64ffda] hover:text-[#4fd1c7] transition-colors" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;