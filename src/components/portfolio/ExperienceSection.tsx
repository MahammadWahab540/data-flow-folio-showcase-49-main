import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      company: 'DataConsult Pro',
      title: 'Senior Business Analyst',
      dates: '2023 - Present',
      logo: '🏢',
      responsibilities: [
        'Led cross-functional teams to implement data-driven solutions resulting in 25% efficiency improvement',
        'Developed automated reporting systems reducing manual work by 40 hours/week',
        'Spearheaded A/B testing initiatives that increased client conversion rates by 18%'
      ]
    },
    {
      company: 'Analytics Corp',
      title: 'Business Analyst',
      dates: '2022 - 2023',
      logo: '📊',
      responsibilities: [
        'Created comprehensive dashboards for C-level executives using Tableau and Power BI',
        'Performed statistical analysis on large datasets to identify market trends and opportunities',
        'Collaborated with IT teams to optimize database queries, improving performance by 50%'
      ]
    },
    {
      company: 'TechStart Solutions',
      title: 'Junior Business Analyst',
      dates: '2021 - 2022',
      logo: '💡',
      responsibilities: [
        'Assisted in requirements gathering and documentation for multiple client projects',
        'Conducted market research and competitive analysis for strategic planning initiatives',
        'Developed Excel-based financial models for budget forecasting and variance analysis'
      ]
    },
    {
      company: 'DataEntry Plus',
      title: 'Data Analyst Intern',
      dates: '2020 - 2021',
      logo: '🎯',
      responsibilities: [
        'Processed and cleaned large datasets ensuring 99.5% data accuracy',
        'Created automated data validation scripts using Python and SQL',
        'Supported senior analysts in preparing client presentations and reports'
      ]
    }
  ];

  return (
    <div ref={ref} className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="text-4xl font-bold text-foreground text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Central timeline line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-blue-600"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          {/* Experience cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-start"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              >
                {/* Timeline node */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg z-10 flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.2, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-2xl">{exp.logo}</span>
                </motion.div>

                {/* Experience card */}
                <motion.div
                  className="ml-8 bg-card p-6 rounded-xl shadow-lg border border-border flex-1"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -4,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {exp.dates}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <motion.li
                        key={respIndex}
                        className="flex items-start text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.2 + respIndex * 0.1, duration: 0.5 }}
                      >
                        <motion.span
                          className="text-primary mr-3 mt-1"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ delay: 1 + index * 0.2 + respIndex * 0.1, type: "spring" }}
                        >
                          •
                        </motion.span>
                        <span className="text-sm leading-relaxed">{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;