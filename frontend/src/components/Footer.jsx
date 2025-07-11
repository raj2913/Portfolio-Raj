import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/raj2913', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/raj-vardhan-721ba8220/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rajvardhan2913@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-[#64ffda]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#64ffda] rounded-lg flex items-center justify-center">
                <span className="text-[#0a0a0a] font-bold text-sm">RV</span>
              </div>
              <span className="text-xl font-bold text-[#ccd6f6] font-mono">
                Raj Vardhan
              </span>
            </div>
            <p className="text-[#8892b0] text-sm">
              Building innovative solutions with passion and precision
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-[#112240] hover:bg-[#64ffda] hover:text-[#0a0a0a] rounded-lg transition-colors group"
              >
                <link.icon size={20} className="text-[#64ffda] group-hover:text-[#0a0a0a]" />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#64ffda] text-[#0a0a0a] rounded-lg font-mono font-medium hover:bg-[#4fd1c7] transition-all duration-300 shadow-lg"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-[#64ffda]/20 text-center"
        >
          <p className="text-[#8892b0] text-sm flex items-center justify-center space-x-2 font-mono">
            <span>© 2025 Raj Vardhan. Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart size={16} className="text-[#64ffda]" />
            </motion.span>
            <span>using React & Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;