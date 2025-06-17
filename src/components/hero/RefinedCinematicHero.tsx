
import React, { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import CinematicIntro from './CinematicIntro';
import RefinedHeroContent from './RefinedHeroContent';

// Lazy load background components
const OptimizedNeuralCanvas = lazy(() => import('./OptimizedNeuralCanvas'));

const RefinedCinematicHero = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleIntroComplete = () => {
    setShowMainContent(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Cinematic Intro */}
      <CinematicIntro onComplete={handleIntroComplete} />

      {/* Main Hero Section */}
      {showMainContent && (
        <motion.section 
          className="relative min-h-screen flex items-center justify-center bg-neutral-950"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Subtle Background */}
          <Suspense fallback={
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />
          }>
            <motion.div 
              className="absolute inset-0 opacity-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 3 }}
            >
              <OptimizedNeuralCanvas />
            </motion.div>
          </Suspense>
          
          {/* Refined Overlay */}
          <motion.div 
            className="absolute inset-0 z-10"
            style={{
              background: `
                radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
                linear-gradient(180deg, 
                  rgba(23, 23, 23, 0.8) 0%, 
                  rgba(38, 38, 38, 0.4) 50%,
                  rgba(23, 23, 23, 0.8) 100%
                )
              `
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />

          {/* Minimal Grid Overlay */}
          <motion.div
            className="absolute inset-0 z-5 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px"
            }}
            animate={{
              x: [0, 100],
              y: [0, 100]
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Main Content */}
          <RefinedHeroContent />

          {/* Subtle Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <motion.div
              className="w-px h-16 bg-gradient-to-b from-white/40 via-white/20 to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="text-xs text-white/40 mt-3 tracking-wider">SCROLL</p>
          </motion.div>

          {/* Premium Vignette */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              background: `radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 80%)`
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          />
        </motion.section>
      )}
    </div>
  );
};

export default RefinedCinematicHero;
