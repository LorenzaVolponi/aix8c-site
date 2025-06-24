// src/components/OptimizedIndex/ScrollReveal.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
}

const directionVariants = {
  up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
  down: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  scale: { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } },
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, direction = 'up', delay = 0 }) => {
  const variants = directionVariants[direction];

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.animate}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
