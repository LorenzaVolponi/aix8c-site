
import React, { useRef, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const OptimizedNeuralCanvas = lazy(() => import('./hero/OptimizedNeuralCanvas'));
const AdvancedVisualEffects = lazy(() => import('./enhanced/AdvancedVisualEffects'));
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-aix-black"
    >
      {/* Advanced Visual Effects Layer */}
      <Suspense fallback={null}>
        <AdvancedVisualEffects />
      </Suspense>

      {/* Neural Canvas Background */}
      <Suspense
        fallback={<div className="absolute inset-0 bg-aix-black" />}
      >
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          <OptimizedNeuralCanvas />
        </motion.div>
      </Suspense>
      
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
        className="absolute inset-0 z-5 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px sm:60px sm:60px"
        }}
      />
      
      {/* Profile Image - Responsivo */}
      <ProfileImage />
      
      {/* Main Content - Totalmente Responsivo */}
      <div className="w-full">
        <HeroContent />
      </div>

      {/* Scroll Indicator - Responsivo */}
      <div className="hidden sm:block">
        <ScrollIndicator />
      </div>
      
      {/* Floating elements - Responsivos */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-aix-gold/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Mobile-specific adjustments */}
      <div className="block sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
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
