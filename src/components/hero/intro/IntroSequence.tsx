
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoIntro from './LogoIntro';

const IntroSequence = () => {
  const [currentPhase, setCurrentPhase] = useState<'logo' | 'transition'>('logo');
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    // Reduzido para 8 segundos total
    const logoTimer = setTimeout(() => {
      setCurrentPhase('transition');
      setShowTransition(true);
    }, 8000);

    return () => {
      clearTimeout(logoTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-aix-black overflow-hidden">
      {/* Background Grid - Responsivo */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px sm:60px sm:60px"
        }}
      />

      {/* Simple Gradient Overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(245, 158, 11, 0.08) 0%, transparent 60%),
            linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%)
          `
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <AnimatePresence mode="wait">
        {currentPhase === 'logo' && (
          <motion.div
            key="logo-intro"
            className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 2, ease: "easeInOut" }
            }}
          >
            <LogoIntro />
          </motion.div>
        )}

        {showTransition && (
          <motion.div
            key="transition-overlay"
            className="absolute inset-0 bg-aix-black"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { 
                duration: 2,
                ease: "easeInOut"
              }
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroSequence;
