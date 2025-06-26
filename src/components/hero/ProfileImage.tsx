
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
      className="fixed top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-30 overflow-hidden"
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
      {/* Container com proporção perfeita e máxima qualidade */}
      <div className="relative w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 lg:w-32 lg:h-36 xl:w-36 xl:h-40">
          className="absolute inset-0 rounded-2xl p-[2px]"
          style={{
            background: "linear-gradient(45deg, #7c3aed, #06b6d4, #f59e0b, #7c3aed)"
          }}
          animate={{
            background: [
              "linear-gradient(45deg, #7c3aed, #06b6d4, #f59e0b, #7c3aed)",
              "linear-gradient(45deg, #06b6d4, #f59e0b, #7c3aed, #06b6d4)",
              "linear-gradient(45deg, #f59e0b, #7c3aed, #06b6d4, #f59e0b)",
              "linear-gradient(45deg, #7c3aed, #06b6d4, #f59e0b, #7c3aed)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-full h-full bg-aix-black rounded-[14px] p-1">
            <div className="relative w-full h-full rounded-[12px] overflow-hidden">
              {/* Imagem com máxima qualidade e sem distorção */}
              <img 
                src="/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png"
                alt="Lorenza Volponi - Especialista em Prompt Engineering e AUSSY AI"
                className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-110"
                loading="eager"
                style={{
                  objectPosition: 'center 20%',
                  filter: 'contrast(1.05) brightness(1.02) saturate(1.1)'
                }}
                onError={(e) => {
                  console.error('Erro ao carregar imagem do perfil:', e);
                }}
              />
              
              {/* Enhanced holographic overlay with AUSSY AI theme */}
              <div className="absolute inset-0 bg-gradient-to-tr from-aix-purple/20 via-transparent to-aix-cyan/15 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-bl from-aix-cyan/15 via-transparent to-aix-gold/20 mix-blend-color-dodge opacity-70" />
              
              {/* Advanced scanning light effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-aix-cyan/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut"
                }}
              />
              
              {/* AI-themed corner accents */}
              <motion.div
                className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-aix-purple"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-aix-cyan"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              
              {/* AUSSY AI signature glow */}
              <motion.div
                className="absolute top-2 left-2 text-xs font-bold text-aix-gold/80"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                AI
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced floating data particles with AI theme */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: i % 2 === 0 ? '#7c3aed' : '#06b6d4',
            right: `${-8 - i * 5}px`,
            top: `${12 + i * 10}px`
          }}
          animate={{
            x: [0, 15, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* AI pulse indicator */}
      <motion.div
        className="absolute -bottom-2 -right-2 w-4 h-4 bg-aix-cyan rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default ProfileImage;
