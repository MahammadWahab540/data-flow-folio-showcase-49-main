
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const navLinks = ['Home', 'About', 'Contact'];

  const handleNavClick = (section: string) => {
    const element = document.querySelector(`#${section.toLowerCase()}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            className="text-sm text-gray-400 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            © 2025 Abiram Reddy Nallagundla. All Rights Reserved.
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex gap-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleNavClick(link)}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link}
                </motion.button>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-4 bg-gray-600" />

            {/* Social Icons */}
            <div className="flex gap-3">
              <motion.a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <span className="text-xs">in</span>
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <span className="text-xs">gh</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
