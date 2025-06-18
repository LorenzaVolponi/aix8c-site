
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoIntro from './LogoIntro';
import PersonalPresentation from './PersonalPresentation';

const IntroSequence = () => {
  const [currentPhase, setCurrentPhase] = useState<'logo' | 'personal'>('logo');
  const [showPersonal, setShowPersonal] = useState(false);

  useEffect(() => {
    // Transição da animação do logo para apresentação pessoal
    const logoTimer = setTimeout(() => {
      setCurrentPhase('personal');
      setShowPersonal(true);
    }, 6000); // 6 segundos para a animação do logo

    return () => clearTimeout(logoTimer);
  }, []);

  return (
    <div className="relative min-h-screen bg-aix-black overflow-hidden">
      {/* Neural Grid Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 75% 75%, rgba(6, 182, 212, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 10, 10, 0.7) 50%, rgba(0, 0, 0, 0.9) 100%)
          `
        }}
      />

      <AnimatePresence mode="wait">
        {currentPhase === 'logo' && (
          <motion.div
            key="logo-intro"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 0.95,
              transition: { duration: 1, ease: "easeInOut" }
            }}
          >
            <LogoIntro />
          </motion.div>
        )}

        {showPersonal && (
          <motion.div
            key="personal-presentation"
            className="absolute inset-0"
            initial={{ 
              opacity: 0,
              scale: 1.05,
              filter: "blur(10px)"
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              transition: { 
                duration: 1.5, 
                ease: "easeOut",
                delay: 0.5
              }
            }}
          >
            <PersonalPresentation />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroSequence;
