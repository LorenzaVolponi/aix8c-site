
import React, { useRef, Suspense, lazy } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Anchor } from 'lucide-react';
import AIX8CLogoAnimation from './AIX8CLogoAnimation';
import MissionVisionCards from './MissionVisionCards';
import AboutSection from './AboutSection';
import ProfessionalImage from './ProfessionalImage';
import CTAButton from './CTAButton';
import NavalScrollIndicator from './NavalScrollIndicator';

// Lazy load components for optimal performance
const OptimizedNeuralCanvas = lazy(() => import('./OptimizedNeuralCanvas'));
const AdvancedVisualEffects = lazy(() => import('../enhanced/AdvancedVisualEffects'));

const CinematicHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
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
  const contentOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 1, 0.3]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    
    mouseX.set((clientX - left - width / 2) / 20);
    mouseY.set((clientY - top - height / 2) / 20);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
        ease: "easeOut"
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
      onMouseMove={handleMouseMove}
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
            radial-gradient(ellipse at 20% 30%, rgba(245, 158, 11, 0.2) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(251, 191, 36, 0.15) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.9) 0%, 
              rgba(10, 10, 10, 0.7) 30%,
              rgba(5, 15, 20, 0.8) 50%,
              rgba(10, 10, 10, 0.7) 70%,
              rgba(0, 0, 0, 0.9) 100%
            )
          `
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      />

      {/* AIX8C Logo Animation - Centro da tela */}
      <motion.div 
        className="absolute inset-0 z-20 flex items-center justify-center"
        style={{ opacity: contentOpacity }}
      >
        <AIX8CLogoAnimation />
      </motion.div>

      {/* Floating Navigation Elements */}
      <motion.div className="absolute top-8 left-8 z-40">
        <motion.div
          className="flex items-center gap-3 px-4 py-2 glass-card border border-aix-gold/30"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Anchor className="w-5 h-5 text-aix-gold" />
          <span className="text-aix-gold font-medium text-sm">Welcome aboard, marujos!</span>
        </motion.div>
      </motion.div>

      {/* Main Content Container */}
      <motion.div 
        className="container mx-auto px-4 z-30 relative"
        style={{ opacity: contentOpacity }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Mission & Vision Cards */}
            <MissionVisionCards />

            {/* About Section Enhanced */}
            <AboutSection />

            {/* CTA Button */}
            <CTAButton />
          </div>

          {/* Right Column - Professional Image with 3D Effects */}
          <ProfessionalImage />
        </div>

        {/* Enhanced Scroll Indicator with Naval Theme */}
        <NavalScrollIndicator />
      </motion.div>

      {/* Premium vignette effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: `radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 80%)`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      />
    </motion.section>
  );
};

export default CinematicHeroSection;
