
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoIntro from './LogoIntro';
import PersonalPresentation from './PersonalPresentation';

const IntroSequence = () => {
  const [currentPhase, setCurrentPhase] = useState<'logo' | 'personal' | 'transition'>('logo');
  const [showPersonal, setShowPersonal] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    // Enhanced timing for smoother transitions
    const logoTimer = setTimeout(() => {
      setCurrentPhase('personal');
      setShowPersonal(true);
    }, 4000); // 4 seconds for logo animation

    const personalTimer = setTimeout(() => {
      setCurrentPhase('transition');
      setShowTransition(true);
    }, 7000); // 3 more seconds for personal presentation

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(personalTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-aix-black overflow-hidden">
      {/* Enhanced Neural Grid Background */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px"
        }}
      />

      {/* Enhanced Cinematic Gradient Overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(245, 158, 11, 0.12) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 70%, rgba(251, 191, 36, 0.10) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 20%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.95) 0%, 
              rgba(10, 10, 10, 0.85) 30%,
              rgba(5, 15, 20, 0.90) 50%,
              rgba(10, 10, 10, 0.85) 70%,
              rgba(0, 0, 0, 0.95) 100%
            )
          `
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Atmospheric Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: i % 2 === 0 ? '#f59e0b' : '#06b6d4',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
            boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}

      <AnimatePresence mode="wait">
        {currentPhase === 'logo' && (
          <motion.div
            key="logo-intro"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 0.98,
              filter: "blur(2px)",
              transition: { duration: 1.2, ease: "easeInOut" }
            }}
          >
            <LogoIntro />
          </motion.div>
        )}

        {showPersonal && currentPhase === 'personal' && (
          <motion.div
            key="personal-presentation"
            className="absolute inset-0"
            initial={{ 
              opacity: 0,
              scale: 1.02,
              filter: "blur(8px)"
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              transition: { 
                duration: 1.8, 
                ease: "easeOut",
                delay: 0.3
              }
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              y: -20,
              filter: "blur(2px)",
              transition: { 
                duration: 1.5, 
                ease: "easeInOut" 
              }
            }}
          >
            <PersonalPresentation />
          </motion.div>
        )}

        {showTransition && (
          <motion.div
            key="transition-overlay"
            className="absolute inset-0 bg-aix-black"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 1],
              transition: { 
                duration: 1.5,
                times: [0, 0.7, 1],
                ease: "easeInOut"
              }
            }}
          />
        )}
      </AnimatePresence>

      {/* Enhanced vignette effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
      />
    </div>
  );
};

export default IntroSequence;
