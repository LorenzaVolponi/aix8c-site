
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoIntro from './LogoIntro';
import PersonalIntroduction from './PersonalIntroduction';

const IntroSequence = () => {
  const [currentPhase, setCurrentPhase] = useState<'logo' | 'personal' | 'transition'>('logo');
  const [showPersonal, setShowPersonal] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    // Timing otimizado para melhor legibilidade
    const logoTimer = setTimeout(() => {
      setCurrentPhase('personal');
      setShowPersonal(true);
    }, 3000); // 3 segundos para logo

    const personalTimer = setTimeout(() => {
      setCurrentPhase('transition');
      setShowTransition(true);
    }, 9000); // 6 segundos para apresentação pessoal (total 9 segundos)

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(personalTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-aix-black overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
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
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          >
            <LogoIntro />
          </motion.div>
        )}

        {showPersonal && currentPhase === 'personal' && (
          <motion.div
            key="personal-introduction"
            className="absolute inset-0"
            initial={{ 
              opacity: 0
            }}
            animate={{ 
              opacity: 1,
              transition: { 
                duration: 1, 
                ease: "easeOut"
              }
            }}
            exit={{
              opacity: 0,
              transition: { 
                duration: 1, 
                ease: "easeInOut" 
              }
            }}
          >
            <PersonalIntroduction />
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
                duration: 1,
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
