import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Timeline */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">Career Timeline</h2>
            
            {/* Timeline container */}
            <div className="relative">
              {/* Central line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-blue-600"></div>
              
              {/* Timeline nodes */}
              {[
                { year: '2020', title: 'BBA Graduate', desc: 'Foundation in business analytics' },
                { year: '2022', title: 'Master\'s Degree', desc: 'Advanced analytics expertise' },
                { year: '2022', title: 'First BA Role', desc: 'Junior Business Analyst' },
                { year: '2024', title: 'Current Role', desc: 'Senior Business Analyst' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center mb-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                  <div className="ml-6 bg-card p-4 rounded-lg shadow-md border-l-4 border-primary">
                    <div className="font-semibold text-foreground">{item.title}</div>
                    <div className="text-sm text-primary font-medium">{item.year}</div>
                    <div className="text-muted-foreground text-sm mt-1">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 3 years of experience in business analytics, I specialize in transforming 
                complex data into actionable insights that drive strategic decision-making for 
                top-tier consulting firms. My expertise spans financial analytics, process 
                optimization, and data-driven business intelligence.
              </p>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { metric: '50%', desc: 'Reduction in Query Response Time' },
                { metric: '30+', desc: 'Automated Dashboards' },
                { metric: '$200K', desc: 'Cost Savings Generated' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-lg text-center border border-border hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30, rotateY: -90 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5, 
                    rotateX: 5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 mb-2">
                    {item.metric}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;