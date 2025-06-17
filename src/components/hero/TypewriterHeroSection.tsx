
import React, { useRef, Suspense, lazy } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import AnimatedTypingLogo from './AnimatedTypingLogo';
import MissionVisionCards from './MissionVisionCards';
import ProfessionalImage from './ProfessionalImage';
import CTAButton from './CTAButton';
import NavalScrollIndicator from './NavalScrollIndicator';

// Lazy load components for optimal performance
const OptimizedNeuralCanvas = lazy(() => import('./OptimizedNeuralCanvas'));
const AdvancedVisualEffects = lazy(() => import('../enhanced/AdvancedVisualEffects'));

const TypewriterHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30,
    mass: 0.8
  });
  
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const logoOpacity = useTransform(smoothProgress, [0, 0.5, 0.8], [1, 1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.8, 1], [0, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"]);

  return (
    <motion.section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-aix-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Advanced Visual Effects Layer */}
      <Suspense fallback={null}>
        <AdvancedVisualEffects />
      </Suspense>

      {/* Neural Canvas Background */}
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-aix-black via-gray-900/50 to-aix-black" />
      }>
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          <OptimizedNeuralCanvas />
        </motion.div>
      </Suspense>
      
      {/* Enhanced Space/Naval Cinematic Overlay */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(245, 158, 11, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(251, 191, 36, 0.08) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 20%, rgba(6, 182, 212, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.92) 0%, 
              rgba(10, 10, 10, 0.8) 30%,
              rgba(5, 15, 20, 0.85) 50%,
              rgba(10, 10, 10, 0.8) 70%,
              rgba(0, 0, 0, 0.92) 100%
            )
          `
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Main Typing Logo Section - Prominently Centered */}
      <motion.div 
        className="flex-1 flex items-center justify-center z-30 relative"
        style={{ opacity: logoOpacity }}
      >
        <div className="w-full max-w-7xl mx-auto px-4">
          <AnimatedTypingLogo />
        </div>
      </motion.div>

      {/* Additional Content Section - Slides up after logo animation */}
      <motion.div 
        className="absolute inset-0 z-25 flex items-center justify-center"
        style={{ 
          opacity: contentOpacity,
          y: contentY
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left Column - Mission & Vision */}
            <div className="space-y-8">
              <MissionVisionCards />
              <CTAButton />
            </div>

            {/* Right Column - Professional Image */}
            <div className="flex justify-center">
              <ProfessionalImage />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-40"
        style={{ opacity: logoOpacity }}
      >
        <NavalScrollIndicator />
      </motion.div>

      {/* Premium vignette effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: `radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.3) 85%)`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      />
    </motion.section>
  );
};

export default TypewriterHeroSection;
