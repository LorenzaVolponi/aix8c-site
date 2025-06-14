
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import NeuralCanvas from './hero/NeuralCanvas';
import ProfileImage from './hero/ProfileImage';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "80%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-aix-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Enhanced Neural Canvas Background */}
      <motion.div style={{ y: backgroundY }}>
        <NeuralCanvas />
      </motion.div>
      
      {/* Cinematic Gradient Overlays */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 70%),
            linear-gradient(135deg, rgba(10, 10, 10, 0.8) 0%, rgba(26, 26, 26, 0.6) 100%)
          `
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      
      {/* Photo Integration */}
      <ProfileImage />
      
      {/* Main Content */}
      <HeroContent />

      {/* Enhanced Scroll Indicator */}
      <ScrollIndicator />
    </motion.section>
  );
};

export default HeroSection;
