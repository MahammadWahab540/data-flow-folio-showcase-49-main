import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"> {/* Changed bg-gray-950 to bg-background */}
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss how we can work together.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-card/50 backdrop-blur-md p-8 rounded-2xl border border-border mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                whileFocus={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm"
                />
              </motion.div>
              <motion.div
                whileFocus={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm"
                />
              </motion.div>
            </div>
            <motion.div
              whileFocus={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm resize-none"
              ></textarea>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/80 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-lg hover:from-primary/80 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Résumé (PDF)
          </motion.button>
          
          <motion.button
            className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a 30-Min Discussion
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {['LinkedIn', 'GitHub', 'Blog'].map((social, index) => (
            <motion.a
              key={social}
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
            >
              {social}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;