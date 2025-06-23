
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ProfileImage = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const imageScale = useTransform(smoothProgress, [0, 0.4, 0.8], [1, 1.1, 0.7]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.3, 0.6], [1, 0.9, 0]);
  const imageRotate = useTransform(smoothProgress, [0, 1], [0, -3]);
  const imageY = useTransform(smoothProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={imageRef}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 z-30 overflow-hidden"
      style={{ 
        scale: imageScale,
        opacity: imageOpacity,
        rotate: imageRotate,
        y: imageY,
        borderRadius: "16px"
      }}
      initial={{ x: 200, opacity: 0, rotate: 15, scale: 0.8 }}
      animate={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
      transition={{ 
        type: "spring", 
        damping: 20, 
        stiffness: 100,
        delay: 2 
      }}
      whileHover={{ 
        scale: 1.15, 
        rotate: 5,
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated border with gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl p-[2px]"
        style={{
          background: "linear-gradient(45deg, #f59e0b, #06b6d4, #8b5cf6, #f59e0b)"
        }}
        animate={{
          background: [
            "linear-gradient(45deg, #f59e0b, #06b6d4, #8b5cf6, #f59e0b)",
            "linear-gradient(45deg, #06b6d4, #8b5cf6, #f59e0b, #06b6d4)",
            "linear-gradient(45deg, #8b5cf6, #f59e0b, #06b6d4, #8b5cf6)",
            "linear-gradient(45deg, #f59e0b, #06b6d4, #8b5cf6, #f59e0b)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="w-full h-full bg-aix-black rounded-[14px] p-0.5 sm:p-1">
          <div className="relative w-full h-full rounded-[12px] overflow-hidden">
            <img 
              src="/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png"
              alt="Lorenza Volponi - Estrategista de IA"
              className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-110"
              loading="eager"
              style={{
                aspectRatio: '1/1',
                objectPosition: 'center center'
              }}
            />
            
            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-aix-gold/20 via-transparent to-aix-purple/15 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-bl from-aix-cyan/15 via-transparent to-aix-gold/20 mix-blend-color-dodge opacity-70" />
            
            {/* Scanning light effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 6,
                ease: "easeInOut"
              }}
            />
            
            {/* Corner accents */}
            <motion.div
              className="absolute top-1 right-1 sm:top-2 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-r-2 border-aix-gold"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-l-2 border-aix-cyan"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>
        </div>
      </motion.div>
      
      {/* Floating data particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-aix-gold rounded-full"
          style={{
            right: `${-8 - i * 6}px`,
            top: `${15 + i * 12}px`
          }}
          animate={{
            x: [0, 15, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
};

export default ProfileImage;
