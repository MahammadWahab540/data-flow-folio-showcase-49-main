import React from 'react';
import { motion } from 'framer-motion';
import { SplineScene } from '@/components/ui/spline';
import { Card } from '@/components/ui/card';
// Removed: import { Spotlight } from '@/components/ui/spotlight';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <img
                src="/placeholder.svg"
                alt="Abiram Reddy Nallagundla"
                className="w-32 h-32 rounded-full mx-auto lg:mx-0 shadow-lg border-4 border-white"
              />
            </div>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4" // Changed to text-foreground
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Abiram Reddy Nallagundla
            </motion.h1>
            
            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-6" // Changed to text-primary
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Business Analyst
            </motion.h2>
            
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0" // Changed to text-muted-foreground
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Driving data-backed insights to optimize operations for top-tier consultancies.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-lg hover:from-primary/80 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg" // Changed from-teal-600 to from-primary
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Résumé
              </motion.button>
              
              <motion.button
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg" // Changed border-blue-600 and text-blue-600 to primary
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right side - Interactive Spline Scene */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Card className="w-full max-w-md h-96 bg-card relative overflow-hidden">
              {/* Removed: Spotlight component */}
              
              <div className="flex h-full">
                {/* Left content overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <h3 className="text-lg font-bold text-foreground">
                    Interactive 3D
                  </h3>
                  <p className="text-xs text-muted-foreground max-w-32">
                    Data visualization in action
                  </p>
                </div>

                {/* Spline Scene */}
                <div className="flex-1 relative">
                  <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;