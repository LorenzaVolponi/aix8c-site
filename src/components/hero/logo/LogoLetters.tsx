
import React from 'react';
import { motion } from 'framer-motion';

interface LogoLettersProps {
  animationPhase: number;
}

const LogoLetters = ({ animationPhase }: LogoLettersProps) => {
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3, 
      rotateY: -180,
      filter: 'blur(10px)',
      y: 50
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 120
      }
    })
  };

  return (
    <div className="relative z-10 flex items-center justify-center mb-8">
      {['A', 'I', 'X', '8', 'C'].map((letter, index) => (
        <motion.div
          key={letter}
          custom={index}
          variants={letterVariants}
          initial="hidden"
          animate={animationPhase >= 2 ? "visible" : "hidden"}
          className="relative mx-1"
        >
          {/* Letter Shadow/Depth */}
          <div className="absolute inset-0 transform translate-x-1 translate-y-1">
            <span className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-gray-800/30 font-mono">
              {letter}
            </span>
          </div>
          
          {/* Main Letter */}
          <motion.span
            className="relative text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-br from-aix-gold via-cyan-300 to-blue-400 bg-clip-text text-transparent font-mono"
            animate={animationPhase >= 3 ? {
              textShadow: [
                "0 0 20px rgba(245, 158, 11, 0.6)",
                "0 0 40px rgba(6, 182, 212, 0.4)",
                "0 0 20px rgba(245, 158, 11, 0.6)"
              ]
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {letter}
          </motion.span>

          {/* Pulsing Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-aix-gold/15 to-cyan-400/15 blur-xl"
            animate={animationPhase >= 3 ? {
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1]
            } : { opacity: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default LogoLetters;
