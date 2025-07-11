import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const socialLinks = [
    { icon: Github, href: data.social.github, label: 'GitHub' },
    { icon: Linkedin, href: data.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: data.social.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${data.email}`, label: 'Email' }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:150px_150px]" />
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
              05. What's Next?
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
              {data.subtitle}
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="bg-[#112240] border border-[#64ffda]/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-[#ccd6f6] mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 text-[#8892b0] hover:text-[#ccd6f6] transition-colors cursor-pointer"
                  >
                    <div className="p-3 bg-[#64ffda]/10 rounded-lg">
                      <Mail size={20} className="text-[#64ffda]" />
                    </div>
                    <div>
                      <p className="font-medium">{data.email}</p>
                      <p className="text-sm text-[#8892b0]">Email me anytime</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 text-[#8892b0] hover:text-[#ccd6f6] transition-colors cursor-pointer"
                  >
                    <div className="p-3 bg-[#64ffda]/10 rounded-lg">
                      <Phone size={20} className="text-[#64ffda]" />
                    </div>
                    <div>
                      <p className="font-medium">{data.phone}</p>
                      <p className="text-sm text-[#8892b0]">Call for urgent matters</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 text-[#8892b0] hover:text-[#ccd6f6] transition-colors cursor-pointer"
                  >
                    <div className="p-3 bg-[#64ffda]/10 rounded-lg">
                      <MapPin size={20} className="text-[#64ffda]" />
                    </div>
                    <div>
                      <p className="font-medium">{data.location}</p>
                      <p className="text-sm text-[#8892b0]">Based in India</p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#64ffda]/20">
                  <h4 className="text-lg font-semibold text-[#ccd6f6] mb-4">
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-[#1e2139] hover:bg-[#64ffda] hover:text-[#0a0a0a] rounded-lg transition-colors"
                      >
                        <link.icon size={20} className="text-[#64ffda] hover:text-[#0a0a0a]" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#64ffda]/20">
                  <div className="inline-block px-4 py-2 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm font-mono">
                    {data.availability}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="bg-[#112240] border border-[#64ffda]/20 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-[#ccd6f6] mb-6">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-[#8892b0] mb-2 font-mono"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1e2139] border border-[#64ffda]/20 rounded-lg text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-[#8892b0] mb-2 font-mono"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1e2139] border border-[#64ffda]/20 rounded-lg text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-[#8892b0] mb-2 font-mono"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1e2139] border border-[#64ffda]/20 rounded-lg text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-[#64ffda] text-[#0a0a0a] rounded-lg font-mono font-medium hover:bg-[#4fd1c7] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-[#0a0a0a] border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;