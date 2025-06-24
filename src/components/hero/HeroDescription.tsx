
import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../OptimizedIndex/ScrollReveal';

const HeroDescription = () => {
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
    <ScrollReveal direction="up" delay={0.6}>
      <motion.p 
        className="text-white/90 max-w-4xl mx-auto mb-16 text-lg md:text-xl leading-relaxed font-light"
        variants={itemVariants}
        style={{
          textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)"
        }}
      >
        Transformando dados em estratégias, algoritmos em resultados e desafios complexos em 
        <motion.span 
          className="gold-text-gradient font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          {" "}oportunidades exponenciais{" "}
        </motion.span>
        para empresas visionárias que buscam transcender os limites do possível.
      </motion.p>
    </ScrollReveal>
  );
};

export default HeroDescription;
