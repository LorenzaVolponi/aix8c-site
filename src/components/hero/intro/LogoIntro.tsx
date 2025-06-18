
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LogoIntro = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const steps = [
      { delay: 500, step: 1 }, // AIX8C aparece
      { delay: 2000, step: 2 }, // Subtítulo aparece
      { delay: 3500, step: 3 }, // Efeito final de brilho
    ];

    steps.forEach(({ delay, step }) => {
      setTimeout(() => setCurrentStep(step), delay);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      {/* Partículas flutuantes */}
      {currentStep >= 1 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Nome AIX8C */}
      <motion.div
        className="relative z-10 mb-8"
        initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
        animate={currentStep >= 1 ? { 
          opacity: 1, 
          scale: 1, 
          rotateY: 0,
          transition: { 
            duration: 2, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }
        } : {}}
      >
        {/* Glow effect background */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-aix-gold/20 via-cyan-400/15 to-transparent blur-3xl"
          animate={currentStep >= 3 ? {
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1]
          } : { opacity: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ width: '200%', height: '200%', left: '-50%', top: '-50%' }}
        />

        <div className="relative flex items-center justify-center">
          {['A', 'I', 'X', '8', 'C'].map((letter, index) => (
            <motion.span
              key={letter}
              className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-br from-aix-gold via-cyan-300 to-blue-400 bg-clip-text text-transparent font-mono mx-1"
              initial={{ 
                opacity: 0, 
                y: 50, 
                rotateX: -90,
                filter: "blur(10px)"
              }}
              animate={currentStep >= 1 ? {
                opacity: 1,
                y: 0,
                rotateX: 0,
                filter: "blur(0px)",
                transition: {
                  delay: index * 0.2,
                  duration: 1,
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

      {/* Subtítulo */}
      <motion.div
        className="relative z-10 text-center max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={currentStep >= 2 ? { 
          opacity: 1, 
          y: 0,
          transition: { duration: 1.5, ease: "easeOut" }
        } : {}}
      >
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-cyan-300 font-light tracking-[0.3em] uppercase mb-6"
          animate={currentStep >= 2 ? {
            opacity: [0.8, 1, 0.8],
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Artificial Intelligence Experience Creative
        </motion.p>
        
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ scale: 0 }}
          animate={currentStep >= 2 ? { scale: 1 } : {}}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-aix-gold to-transparent"></div>
          <div className="w-4 h-4 bg-aix-gold rounded-full animate-pulse"></div>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-aix-gold to-transparent"></div>
        </motion.div>
        
        <motion.p
          className="text-base md:text-lg text-gray-400 font-light italic"
          initial={{ opacity: 0 }}
          animate={currentStep >= 2 ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
        >
          Navegando pelos mares da inovação digital
        </motion.p>
      </motion.div>

      {/* Elementos flutuantes de código */}
      {currentStep >= 2 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['AI', '{ }', '<>', '∞', 'λ', '∑'].map((symbol, index) => (
            <motion.div
              key={symbol}
              className="absolute text-cyan-400/20 font-mono text-sm md:text-base"
              style={{
                left: `${15 + index * 12}%`,
                top: `${30 + Math.sin(index) * 25}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.6, 0.2],
                rotate: [0, 360],
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
