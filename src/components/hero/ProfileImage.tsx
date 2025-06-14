
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ProfileImage = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.1, 0.6]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.3, 0.7], [1, 0.8, 0]);
  const imageRotate = useTransform(smoothProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      ref={imageRef}
      className="absolute top-6 right-6 md:top-8 md:right-8 w-28 h-28 md:w-40 md:h-40 z-20 overflow-hidden"
      style={{ 
        scale: imageScale,
        opacity: imageOpacity,
        rotate: imageRotate,
        borderRadius: "20px",
        boxShadow: "0 0 50px rgba(245, 158, 11, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)"
      }}
      initial={{ x: 200, opacity: 0, rotate: 15, scale: 0.8 }}
      animate={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
      transition={{ 
        type: "spring", 
        damping: 20, 
        stiffness: 100,
        delay: 1.5 
      }}
      whileHover={{ 
        scale: 1.15, 
        rotate: 3,
        boxShadow: "0 0 80px rgba(245, 158, 11, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.2)"
      }}
    >
      <div className="relative w-full h-full">
        <img 
          src="/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png"
          alt="Lorenza Volponi"
          className="w-full h-full object-cover filter sepia-0 contrast-110 brightness-105 hover:sepia-0 hover:contrast-125 hover:brightness-110 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-aix-gold/30 via-transparent to-aix-purple/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-bl from-aix-cyan/20 via-transparent to-aix-gold/30 mix-blend-color-dodge opacity-60" />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default ProfileImage;
