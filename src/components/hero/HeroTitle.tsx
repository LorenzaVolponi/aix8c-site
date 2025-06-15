
import React, { useState } from 'react';
import { motion, useTransform, useSpring, useScroll } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';

const HeroTitle = () => {
  const [isTyping, setIsTyping] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const titleScale = useTransform(smoothProgress, [0, 0.7], [1, 0.8]);

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
    <ScrollReveal direction="scale" delay={0.2}>
      <motion.div className="mb-12 relative" variants={itemVariants}>
        <motion.div 
          className="absolute inset-0 rounded-full opacity-30 blur-3xl"
          style={{
            background: `
              radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, transparent 70%),
              radial-gradient(circle, rgba(139, 92, 246, 0.3) 30%, transparent 70%)
            `
          }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.h1 
          className="relative text-4xl md:text-7xl font-bold mb-4 font-serif"
          style={{ scale: titleScale }}
        >
          <motion.span
            className="holographic-text"
            animate={{
              textShadow: [
                "0 0 20px rgba(245, 158, 11, 0.5)",
                "0 0 40px rgba(139, 92, 246, 0.5)",
                "0 0 20px rgba(6, 182, 212, 0.5)",
                "0 0 20px rgba(245, 158, 11, 0.5)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            LORENZA VOLPONI
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-white/80 mb-8 font-light tracking-wider overflow-hidden border-r-2 border-aix-gold whitespace-nowrap"
          style={{ 
            width: isTyping ? "100%" : "100%",
            animation: "typewriter 4s steps(40) 1s both, typewriter-blink 0.75s infinite"
          }}
          onAnimationEnd={() => setIsTyping(false)}
        >
          ESTRATEGISTA DE INTELIGÊNCIA ARTIFICIAL
        </motion.p>
      </motion.div>
    </ScrollReveal>
  );
};

export default HeroTitle;
