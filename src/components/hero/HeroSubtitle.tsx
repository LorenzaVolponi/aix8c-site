
import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';

const HeroSubtitle = () => {
  const itemVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 0.8
      }
    }
  };

  return (
    <ScrollReveal direction="up" delay={0.4}>
      <motion.div 
        className="w-full max-w-5xl mx-auto overflow-hidden mb-12"
        variants={itemVariants}
      >
        <motion.h2 
          className="text-3xl md:text-5xl text-white font-bold mb-8 relative reverse-scroll-text"
          animate={{
            color: ["#06b6d4", "#8b5cf6", "#f59e0b", "#06b6d4"]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{
            textShadow: "0 0 20px rgba(6, 182, 212, 0.4)"
          }}
        >
          ARQUITETA DE FUTUROS DIGITAIS
        </motion.h2>
      </motion.div>
    </ScrollReveal>
  );
};

export default HeroSubtitle;
