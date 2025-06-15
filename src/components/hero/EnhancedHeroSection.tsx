
import React, { useRef, Suspense, lazy } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ProfileImage from './ProfileImage';
import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';

// Lazy load the neural canvas for better initial load performance
const OptimizedNeuralCanvas = lazy(() => import('./OptimizedNeuralCanvas'));

const EnhancedHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 120, 
    damping: 30,
    mass: 0.8
  });
  
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "40%"]);
  const overlayOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 0.9, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
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
    >
      {/* Optimized Neural Canvas Background with Suspense */}
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
      
      {/* Enhanced Cinematic Gradient Overlays */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{
          opacity: overlayOpacity,
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(124, 58, 237, 0.15) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 70%, rgba(6, 182, 212, 0.12) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 70%),
            radial-gradient(ellipse at 30% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 60%),
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.88) 0%, 
              rgba(10, 10, 10, 0.75) 30%,
              rgba(5, 5, 15, 0.8) 50%,
              rgba(10, 10, 10, 0.75) 70%,
              rgba(0, 0, 0, 0.88) 100%
            )
          `
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, ease: "easeOut" }}
      />
      
      {/* Dynamic Atmospheric Grid */}
      <motion.div
        className="absolute inset-0 z-5 opacity-8"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px"
        }}
        animate={{
          x: [0, 80],
          y: [0, 80],
          opacity: [0.05, 0.12, 0.05]
        }}
        transition={{
          x: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 25, repeat: Infinity, ease: "linear" },
          opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Enhanced Atmospheric Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#8b5cf6' : '#f59e0b',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
            boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 0.7, 0],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Profile Image with Enhanced Performance */}
      <ProfileImage />
      
      {/* Main Content with Optimized Animations */}
      <HeroContent />

      {/* Enhanced Scroll Indicator */}
      <ScrollIndicator />
      
      {/* Cinematic Vignette Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: `radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.6) 100%)`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 1 }}
      />
    </motion.section>
  );
};

export default EnhancedHeroSection;
