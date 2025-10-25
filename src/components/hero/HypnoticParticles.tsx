import React from 'react';
import { motion } from 'framer-motion';

const particleVariants = {
  animate: (i: number) => ({
    x: [0, Math.sin(i) * 20, Math.sin(i * 1.5) * -20, 0],
    y: [0, Math.cos(i) * 20, Math.cos(i * 1.5) * -20, 0],
    opacity: [0, 0.7, 0],
    scale: [0.8, 1.2, 0.8],
    rotate: [0, 180, 360],
  }),
};

const HypnoticParticles = () => (
  <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
    {[...Array(12)].map((_, i) => (
      <motion.span
        key={i}
        className="absolute w-1.5 h-1.5 bg-aix-cyan rounded-full shadow-lg"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate="animate"
        variants={particleVariants}
        transition={{
          duration: 10 + Math.random() * 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: Math.random() * 5,
        }}
        custom={i}
      />
    ))}
  </div>
);

export default HypnoticParticles;
