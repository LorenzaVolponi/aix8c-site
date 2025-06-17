
import React from 'react';
import { motion } from 'framer-motion';

interface LogoBackgroundEffectsProps {
  animationPhase: number;
}

const LogoBackgroundEffects = ({ animationPhase }: LogoBackgroundEffectsProps) => {
  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0, 1, 0.8],
      scale: [0.8, 1.1, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {/* Glowing Background Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-aix-gold/20 via-cyan-400/15 to-transparent blur-3xl"
        variants={glowVariants}
        initial="hidden"
        animate={animationPhase >= 3 ? "visible" : "hidden"}
        style={{ width: '120%', height: '120%' }}
      />

      {/* Neural Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          width: '150%',
          height: '150%'
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={animationPhase >= 2 ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 2 }}
      />
    </>
  );
};

export default LogoBackgroundEffects;
