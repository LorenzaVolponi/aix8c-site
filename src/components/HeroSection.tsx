
import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import NeuralCanvas from './hero/NeuralCanvas';
import ProfileImage from './hero/ProfileImage';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const floatingParticles = useMemo(
    () =>
      Array.from({ length: 6 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 6 + Math.random() * 4,
        delay: Math.random() * 5,
      })),
    []
  );
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const exitMaskOpacity = useTransform(smoothProgress, [0.45, 0.9], [0, 1]);

  return (
    <section 
      id="home"
      ref={sectionRef}
      aria-label="Início"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-aix-black"
    >
      {/* Neural Canvas Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <NeuralCanvas />
      </motion.div>
      
      <div className="hero-gradient-orb" />
      <div className="hero-vignette" />
      {/* Enhanced Gradient Overlays - Responsivos */}
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
      
      {/* Grid overlay - Responsivo */}
      <div
        className="absolute inset-0 z-5 opacity-10 bg-[length:40px_40px] md:bg-[length:60px_60px]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `
        }}
      />
      
      {/* Profile Image - Responsivo */}
      <div className="block sm:block md:block lg:block">
        <ProfileImage />
      </div>
      
      {/* Main Content - Totalmente Responsivo */}
      <div className="w-full">
        <HeroContent />
      </div>

      {/* Scroll Indicator - Responsivo */}
      <div className="hidden sm:block">
        <ScrollIndicator />
      </div>
      
      {/* Floating elements - Responsivos */}
      {floatingParticles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-aix-gold/30 rounded-full"
          style={{
            left: particle.left,
            top: particle.top
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}


      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40 z-20 pointer-events-none"
        style={{ opacity: exitMaskOpacity, background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(2,6,23,.88), rgba(2,6,23,1))' }}
      />

      {/* Mobile-specific adjustments */}
      <div className="block sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-aix-gold text-xs"
        >
          ↓ Role para explorar
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
