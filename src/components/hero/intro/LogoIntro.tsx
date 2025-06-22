
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LogoIntro = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const steps = [
      { delay: 800, step: 1 }, // AIX8C aparece mais devagar
      { delay: 3000, step: 2 }, // Subtítulo aparece
      { delay: 5000, step: 3 }, // Efeito final de brilho
    ];

    steps.forEach(({ delay, step }) => {
      setTimeout(() => setCurrentStep(step), delay);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center w-full max-w-6xl mx-auto">
      {/* Partículas flutuantes - Responsivas */}
      {currentStep >= 1 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Nome AIX8C - Responsivo */}
      <motion.div
        className="relative z-10 mb-6 sm:mb-8"
        initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
        animate={currentStep >= 1 ? { 
          opacity: 1, 
          scale: 1, 
          rotateY: 0,
          transition: { 
            duration: 2.5, 
            ease: "easeOut",
            type: "spring",
            stiffness: 80
          }
        } : {}}
      >
        {/* Glow effect background */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-aix-gold/20 via-cyan-400/15 to-transparent blur-2xl sm:blur-3xl"
          animate={currentStep >= 3 ? {
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1]
          } : { opacity: 0 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ width: '200%', height: '200%', left: '-50%', top: '-50%' }}
        />

        <div className="relative flex items-center justify-center flex-wrap sm:flex-nowrap gap-1 sm:gap-2">
          {['A', 'I', 'X', '8', 'C'].map((letter, index) => (
            <motion.span
              key={letter}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold bg-gradient-to-br from-aix-gold via-cyan-300 to-blue-400 bg-clip-text text-transparent font-mono"
              initial={{ 
                opacity: 0, 
                y: 80, 
                rotateX: -90,
                filter: "blur(15px)"
              }}
              animate={currentStep >= 1 ? {
                opacity: 1,
                y: 0,
                rotateX: 0,
                filter: "blur(0px)",
                transition: {
                  delay: index * 0.3,
                  duration: 1.5,
                  ease: "easeOut",
                  type: "spring"
                }
              } : {}}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Subtítulo - Responsivo */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-4"
        initial={{ opacity: 0, y: 60 }}
        animate={currentStep >= 2 ? { 
          opacity: 1, 
          y: 0,
          transition: { duration: 2, ease: "easeOut" }
        } : {}}
      >
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-cyan-300 font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 leading-tight"
          animate={currentStep >= 2 ? {
            opacity: [0.8, 1, 0.8],
          } : {}}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Artificial Intelligence Experience Creative
        </motion.p>
        
        <motion.div
          className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
          initial={{ scale: 0 }}
          animate={currentStep >= 2 ? { scale: 1 } : {}}
          transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
        >
          <div className="w-12 sm:w-16 lg:w-20 h-px bg-gradient-to-r from-transparent via-aix-gold to-transparent"></div>
          <div className="w-3 sm:w-4 h-3 sm:h-4 bg-aix-gold rounded-full animate-pulse"></div>
          <div className="w-12 sm:w-16 lg:w-20 h-px bg-gradient-to-r from-transparent via-aix-gold to-transparent"></div>
        </motion.div>
        
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-400 font-light italic"
          initial={{ opacity: 0 }}
          animate={currentStep >= 2 ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          Navegando pelos mares da inovação digital
        </motion.p>
      </motion.div>

      {/* Elementos flutuantes de código - Responsivos */}
      {currentStep >= 2 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['AI', '{ }', '<>', '∞', 'λ', '∑'].map((symbol, index) => (
            <motion.div
              key={symbol}
              className="absolute text-cyan-400/20 font-mono text-xs sm:text-sm md:text-base"
              style={{
                left: `${10 + index * 13}%`,
                top: `${20 + Math.sin(index) * 30}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                rotate: [0, 180],
              }}
              transition={{
                duration: 8 + index * 2,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.5
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LogoIntro;
