
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      title: 'Enterprise CRM Implementation & Process Optimization',
      role: 'Lead Business Analyst',
      summary: 'Led the end-to-end implementation of Salesforce CRM for a Fortune 500 manufacturing company, including requirement gathering, process mapping, and stakeholder management across 5 departments.',
      outcomes: [
        'Increased sales team productivity by 35% through automated workflows',
        'Reduced customer response time from 48 hours to 6 hours',
        'Improved lead conversion rate by 28% with enhanced tracking',
        'Streamlined reporting processes saving 25 hours/week across teams'
      ],
      technologies: ['Salesforce', 'Tableau', 'SQL Server', 'Visio', 'JIRA', 'Confluence']
    },
    {
      title: 'Financial Risk Assessment Dashboard',
      role: 'Senior Business Analyst',
      summary: 'Designed and developed a comprehensive risk management dashboard for a regional bank to monitor credit risk, operational risk, and market volatility in real-time.',
      outcomes: [
        'Reduced risk assessment time by 60% with automated calculations',
        'Identified potential losses of $2.3M through predictive modeling',
        'Improved regulatory compliance reporting accuracy to 99.8%',
        'Enhanced decision-making speed for loan approvals by 45%'
      ],
      technologies: ['Power BI', 'R', 'Python', 'Oracle', 'Azure', 'Excel VBA']
    },
    {
      title: 'Supply Chain Analytics & Optimization Platform',
      role: 'Business Systems Analyst',
      summary: 'Built an integrated analytics platform for a retail chain to optimize inventory management, demand forecasting, and supplier performance across 200+ locations.',
      outcomes: [
        'Reduced inventory holding costs by 22% ($1.8M annual savings)',
        'Improved demand forecast accuracy from 68% to 87%',
        'Decreased stockout incidents by 40% across all locations',
        'Optimized supplier selection process reducing procurement time by 30%'
      ],
      technologies: ['Tableau', 'SAP', 'MySQL', 'Python', 'Alteryx', 'QlikView']
    },
    {
      title: 'Digital Transformation & Process Automation',
      role: 'Business Process Analyst',
      summary: 'Spearheaded digital transformation initiative for HR department, automating recruitment, onboarding, and performance management processes using workflow automation tools.',
      outcomes: [
        'Automated 12 manual HR processes saving 80 hours/week',
        'Reduced employee onboarding time from 2 weeks to 3 days',
        'Improved employee satisfaction scores by 31% through streamlined processes',
        'Decreased administrative errors by 85% with automated validations'
      ],
      technologies: ['Microsoft Power Platform', 'SharePoint', 'Power Automate', 'SQL', 'Azure AD']
    },
    {
      title: 'Customer Journey Mapping & Experience Analytics',
      role: 'Digital Business Analyst',
      summary: 'Conducted comprehensive customer journey analysis for an e-commerce platform, identifying pain points and optimization opportunities across all touchpoints.',
      outcomes: [
        'Increased customer retention rate by 23% through journey optimization',
        'Reduced cart abandonment by 18% with targeted interventions',
        'Improved Net Promoter Score (NPS) from 6.2 to 8.4',
        'Generated $650K additional revenue through conversion optimization'
      ],
      technologies: ['Google Analytics', 'Hotjar', 'Mixpanel', 'Figma', 'A/B Testing Tools', 'BigQuery']
    },
    {
      title: 'Regulatory Compliance Automation System',
      role: 'Compliance Business Analyst',
      summary: 'Developed automated compliance monitoring system for financial services firm to ensure adherence to SOX, PCI-DSS, and GDPR regulations with real-time alerting.',
      outcomes: [
        'Achieved 100% compliance audit success rate for 3 consecutive years',
        'Reduced compliance reporting time by 70% through automation',
        'Prevented potential fines of $500K+ through proactive monitoring',
        'Streamlined audit preparation reducing external audit costs by 35%'
      ],
      technologies: ['GRC Platforms', 'ServiceNow', 'Splunk', 'PowerShell', 'REST APIs', 'MongoDB']
    }
  ];

  return (
    <div ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 mb-12 rounded-2xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Business Analysis Projects</h2>
          <p className="text-xl text-blue-100 mb-4">Transforming Business Challenges into Strategic Solutions</p>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </motion.div>
      </div>

      {/* Projects container */}
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <motion.div
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                >
                  <div>
                    <span className="inline-block bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Project {index + 1}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-lg text-teal-600 font-medium mb-4">{project.role}</p>
                    <p className="text-gray-600 text-lg leading-relaxed">{project.summary}</p>
                  </div>

                  {/* Key Outcomes */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Key Business Outcomes
                    </h4>
                    <ul className="space-y-3">
                      {project.outcomes.map((outcome, outcomeIndex) => (
                        <motion.li
                          key={outcomeIndex}
                          className="flex items-start group-hover:text-gray-800 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + index * 0.1 + outcomeIndex * 0.1, duration: 0.6 }}
                        >
                          <motion.span
                            className="text-green-600 mr-3 mt-1 text-lg font-bold"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : {}}
                            transition={{ delay: 0.6 + index * 0.1 + outcomeIndex * 0.1, type: "spring" }}
                          >
                            ▲
                          </motion.span>
                          <span className="text-gray-700 font-medium">{outcome}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies & Tools */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Technologies & Tools
                    </h4>
                    <motion.div
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-full text-sm font-medium border border-gray-300 hover:border-teal-300 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all cursor-default"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.8 + index * 0.1 + techIndex * 0.05, type: "spring" }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                  >
                    <Button 
                      className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-3"
                      size="lg"
                    >
                      View Case Study
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Right content - Project visualization */}
                <motion.div
                  className={`flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                >
                  <div className="w-full max-w-lg h-96 bg-gradient-to-br from-gray-50 to-gray-150 rounded-xl flex items-center justify-center shadow-xl relative overflow-hidden border border-gray-200">
                    {/* Project mockup content */}
                    <div className="text-center p-8">
                      <div className="w-32 h-32 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <span className="text-white text-4xl">
                          {index === 0 ? '📊' : index === 1 ? '📈' : index === 2 ? '📦' : index === 3 ? '⚙️' : index === 4 ? '🎯' : '🛡️'}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Interactive Dashboard</h4>
                      <p className="text-sm text-gray-600">Real-time Analytics & Insights</p>
                      
                      {/* Metrics display */}
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Performance</span>
                          <span>95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1">
                          <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-1 rounded-full w-[95%]"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating decorative elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-teal-400 rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute bottom-6 left-4 w-2 h-2 bg-blue-500 rounded-full opacity-40 animate-bounce"></div>
                    <div className="absolute top-1/2 right-6 w-4 h-4 bg-purple-400 rounded-full opacity-30 animate-pulse"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action section */}
        <motion.div
          className="text-center py-20 mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how data-driven analysis and strategic insights can drive your next business transformation project.
          </p>
          <div className="space-x-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
            >
              View All Case Studies
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg"
            >
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
