
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingCodeFragmentsProps {
  animationPhase: number;
}

const FloatingCodeFragments = ({ animationPhase }: FloatingCodeFragmentsProps) => {
  const codeSymbols = ['AI', '{ }', '<>', '∞', 'λ', '∑'];

  if (animationPhase < 2) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeSymbols.map((symbol, index) => (
        <motion.div
          key={symbol}
          className="absolute text-cyan-400/20 font-mono text-xs md:text-sm"
          style={{
            left: `${15 + index * 12}%`,
            top: `${25 + Math.sin(index) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180],
          }}
          transition={{
            duration: 6 + index * 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.3
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCodeFragments;
