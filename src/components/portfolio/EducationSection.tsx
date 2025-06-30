
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const certifications = [
    { name: 'CBAP', org: 'IIBA', year: '2023', id: 'CBAP-2023-001' },
    { name: 'Google Data Analytics', org: 'Google', year: '2022', id: 'GDA-2022-456' },
    { name: 'SQL for Data Science', org: 'IBM', year: '2022', id: 'SQL-2022-789' }
  ];

  return (
    <div ref={ref} className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Education</h3>
            
            <div className="space-y-6">
              <motion.div
                className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl border border-gray-200"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-white font-bold">🎓</span>
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Master's in Business Analytics</h4>
                    <p className="text-teal-600 font-medium">Webster University • 2022</p>
                    <p className="text-sm text-gray-600 mt-1">GPA: 3.6/4.0</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Relevant coursework: Statistical Analysis, Data Mining, Business Intelligence, 
                      Predictive Analytics, Database Management
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-gray-200"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-white font-bold">📚</span>
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Bachelor of Business Administration</h4>
                    <p className="text-blue-600 font-medium">State University • 2020</p>
                    <p className="text-sm text-gray-600 mt-1">GPA: 3.4/4.0</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Concentration: Finance and Analytics, Minor in Computer Science
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Certifications</h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 cursor-pointer perspective-1000"
                  initial={{ opacity: 0, rotateY: -90 }}
                  animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -4,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="preserve-3d">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{cert.name}</h4>
                        <p className="text-teal-600 font-medium">{cert.org}</p>
                        <p className="text-sm text-gray-500">Issued: {cert.year}</p>
                        <p className="text-xs text-gray-400 mt-1">ID: {cert.id}</p>
                      </div>
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <motion.span
                          className="text-white text-2xl"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                        >
                          ✓
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
