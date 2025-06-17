
import React from 'react';
import { motion } from 'framer-motion';

interface LogoSubtitleProps {
  animationPhase: number;
}

const LogoSubtitle = ({ animationPhase }: LogoSubtitleProps) => {
  return (
    <motion.div
      className="relative text-center max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={animationPhase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay: 2, duration: 1.5 }}
    >
      <motion.p
        className="text-lg md:text-xl lg:text-2xl text-cyan-300 font-light tracking-[0.2em] uppercase mb-4"
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Artificial Intelligence Experience Creative
      </motion.p>
      
      <motion.div
        className="flex items-center justify-center gap-3 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, type: "spring", stiffness: 200 }}
      >
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-aix-gold to-transparent"></div>
        <div className="w-3 h-3 bg-aix-gold rounded-full animate-pulse"></div>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-aix-gold to-transparent"></div>
      </motion.div>
      
      <motion.p
        className="text-sm md:text-base text-gray-400 font-light italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        Navegando pelos mares da inovação digital
      </motion.p>
    </motion.div>
  );
};

export default LogoSubtitle;
