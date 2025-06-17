
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIX8CLogoAnimation = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate digital particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);

    // Animation sequence
    const sequence = [
      () => setAnimationPhase(1), // Particles formation
      () => setAnimationPhase(2), // Letters assembly
      () => setAnimationPhase(3), // Final glow effect
    ];

    sequence.forEach((phase, index) => {
      setTimeout(phase, index * 1200);
    });
  }, []);

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3, 
      rotateY: -180,
      filter: 'blur(10px)',
      y: 50
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 120
      }
    })
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0, 1, 0.8],
      scale: [0.8, 1.1, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Digital Particles Background */}
      <AnimatePresence>
        {animationPhase >= 1 && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 2,
              delay: particle.delay,
              ease: "easeOut"
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main Logo Container - Perfectly Centered */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Glowing Background Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-aix-gold/20 via-cyan-400/15 to-transparent blur-3xl"
          variants={glowVariants}
          initial="hidden"
          animate={animationPhase >= 3 ? "visible" : "hidden"}
          style={{ width: '120%', height: '120%' }}
        />

        {/* Neural Grid Background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            width: '150%',
            height: '150%'
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={animationPhase >= 2 ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 2 }}
        />

        {/* AIX8C Letters - Main Focus */}
        <div className="relative z-10 flex items-center justify-center mb-8">
          {['A', 'I', 'X', '8', 'C'].map((letter, index) => (
            <motion.div
              key={letter}
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate={animationPhase >= 2 ? "visible" : "hidden"}
              className="relative mx-1"
            >
              {/* Letter Shadow/Depth */}
              <div className="absolute inset-0 transform translate-x-1 translate-y-1">
                <span className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-gray-800/30 font-mono">
                  {letter}
                </span>
              </div>
              
              {/* Main Letter */}
              <motion.span
                className="relative text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-br from-aix-gold via-cyan-300 to-blue-400 bg-clip-text text-transparent font-mono"
                animate={animationPhase >= 3 ? {
                  textShadow: [
                    "0 0 20px rgba(245, 158, 11, 0.6)",
                    "0 0 40px rgba(6, 182, 212, 0.4)",
                    "0 0 20px rgba(245, 158, 11, 0.6)"
                  ]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {letter}
              </motion.span>

              {/* Pulsing Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-aix-gold/15 to-cyan-400/15 blur-xl"
                animate={animationPhase >= 3 ? {
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.2, 1]
                } : { opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Subtitle Animation - Properly Positioned */}
        <motion.div
          className="relative text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={animationPhase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-cyan-300 font-light tracking-[0.2em] uppercase mb-4"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Artificial Intelligence Experience Creative
          </motion.p>
          
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 3, type: "spring", stiffness: 200 }}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-aix-gold to-transparent"></div>
            <div className="w-3 h-3 bg-aix-gold rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-aix-gold to-transparent"></div>
          </motion.div>
          
          <motion.p
            className="text-sm md:text-base text-gray-400 font-light italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            Navegando pelos mares da inovação digital
          </motion.p>
        </motion.div>

        {/* Floating Code Fragments - Optimized positioning */}
        {animationPhase >= 2 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {['AI', '{ }', '<>', '∞', 'λ', '∑'].map((symbol, index) => (
              <motion.div
                key={symbol}
                className="absolute text-cyan-400/20 font-mono text-xs md:text-sm"
                style={{
                  left: `${15 + index * 12}%`,
                  top: `${25 + Math.sin(index) * 30}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.5, 0.2],
                  rotate: [0, 180],
                }}
                transition={{
                  duration: 6 + index * 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.3
                }}
              >
                {symbol}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIX8CLogoAnimation;
