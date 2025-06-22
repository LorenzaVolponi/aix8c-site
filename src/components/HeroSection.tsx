
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
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-aix-black"
    >
      {/* Neural Canvas Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <NeuralCanvas />
      </motion.div>
      
      {/* Enhanced Gradient Overlays */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.06) 0%, transparent 70%),
            linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(10, 10, 10, 0.7) 50%, rgba(0, 0, 0, 0.85) 100%)
          `
        }}
      />
      
      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-5 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />
      
      {/* Profile Image */}
      <ProfileImage />
      
      {/* Main Content - INFORMAÇÕES LEGÍVEIS */}
      <HeroContent />

      {/* Scroll Indicator */}
      <ScrollIndicator />
      
      {/* Floating elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-aix-gold/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </section>
  );
};

export default HeroSection;
