
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Compass, Anchor } from 'lucide-react';

const ProfessionalImage = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    
    mouseX.set((clientX - left - width / 2) / 20);
    mouseY.set((clientY - top - height / 2) / 20);
  };

  return (
    <motion.div 
      custom={5} 
      variants={itemVariants}
      className="relative flex justify-center lg:justify-end"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="relative group cursor-pointer"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transformPerspective: 1000,
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Enhanced glowing background with naval theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-aix-gold/20 via-blue-400/10 to-aix-gold/20 rounded-3xl blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500" />
        
        {/* Floating compass elements */}
        <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-aix-gold/30 rounded-full flex items-center justify-center backdrop-blur-md group-hover:rotate-180 transition-transform duration-700">
          <Compass className="w-6 h-6 text-aix-gold" />
        </div>
        
        {/* Main image container */}
        <div className="relative w-80 h-96 rounded-3xl overflow-hidden glass-card border-2 border-aix-gold/30 group-hover:border-aix-gold/50 transition-all duration-300">
          <img 
            src="/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png"
            alt="Lorenza Volponi - Capitã da Nave AIX8C"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="eager"
          />
          
          {/* Enhanced overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-aix-gold/10 via-transparent to-blue-400/5 group-hover:from-aix-gold/20 transition-all duration-300" />
          
          {/* Animated caption with naval theme */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-white font-bold text-lg">Lorenza Volponi</h3>
                <p className="text-aix-gold text-sm">Capitã da Nave AIX8C</p>
                <p className="text-blue-300 text-xs">Pioneira em Engenharia de Prompts</p>
              </div>
              <div className="ml-auto">
                <div className="flex items-center gap-1 px-3 py-1 bg-aix-gold/20 rounded-full">
                  <Anchor className="w-3 h-3 text-aix-gold" />
                  <span className="text-xs text-aix-gold font-medium">Navigator</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating golden particles around image */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-aix-gold rounded-full"
            style={{
              right: `${-20 - i * 15}px`,
              top: `${30 + i * 25}px`
            }}
            animate={{
              x: [0, 25, 0],
              y: [0, -15, 0],
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
      </motion.div>
    </motion.div>
  );
};

export default ProfessionalImage;
