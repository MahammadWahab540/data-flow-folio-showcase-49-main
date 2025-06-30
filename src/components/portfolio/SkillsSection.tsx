import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: 'Python', proficiency: 90, icon: '🐍' },
    { name: 'SQL', proficiency: 95, icon: '🗃️' },
    { name: 'Tableau', proficiency: 85, icon: '📊' },
    { name: 'Power BI', proficiency: 80, icon: '📈' },
    { name: 'Excel', proficiency: 95, icon: '📋' },
    { name: 'R', proficiency: 75, icon: '📊' }
  ];

  const methodologies = [
    'Agile/Scrum', 'EDA', 'A/B Testing', 'Data Modeling', 'Statistical Analysis', 'Business Intelligence'
  ];

  return (
    <div ref={ref} className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-4xl font-bold text-foreground text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Core Skills & Competencies
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-xl shadow-lg border border-border text-center group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5, 
                rotateX: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {skill.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">{skill.name}</h3>
              
              <div className="relative w-full h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.proficiency}%` } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                />
              </div>
              
              <motion.div
                className="text-sm text-muted-foreground mt-2 font-medium"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                {skill.proficiency}%
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Methodologies */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8">Methodologies & Frameworks</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {methodologies.map((method, index) => (
              <motion.div
                key={index}
                className="bg-secondary px-6 py-3 rounded-full border border-border flex items-center gap-2 hover:bg-accent transition-all duration-300"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <motion.span
                  className="text-primary"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1.4 + index * 0.1, type: "spring", stiffness: 300 }}
                >
                  ✓
                </motion.span>
                <span className="text-foreground font-medium">{method}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;