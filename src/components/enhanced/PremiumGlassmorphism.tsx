
import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  intensity?: 'light' | 'medium' | 'strong';
}

const PremiumGlassmorphism: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  intensity = 'medium' 
}) => {
  const intensityStyles = {
    light: 'bg-white/5 backdrop-blur-sm border-white/10',
    medium: 'bg-white/8 backdrop-blur-md border-white/15',
    strong: 'bg-white/12 backdrop-blur-lg border-white/20'
  };

  const hoverStyles = hoverEffect ? 
    'hover:bg-white/15 hover:border-aix-gold/30 hover:shadow-2xl hover:shadow-aix-gold/10 hover:scale-[1.02]' : 
    '';

  return (
    <motion.div
      className={`
        ${intensityStyles[intensity]}
        ${hoverStyles}
        rounded-2xl border shadow-xl
        transition-all duration-500 ease-out
        relative overflow-hidden
        ${className}
      `}
      whileHover={hoverEffect ? { y: -4 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-aix-gold/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ['0%', '200%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default PremiumGlassmorphism;
