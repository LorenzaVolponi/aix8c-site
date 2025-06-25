
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import ScrollReveal from '../OptimizedIndex/ScrollReveal';

const HeroButtons = () => {
  const itemVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 0.8
      }
    }
  };

  return (
    <ScrollReveal direction="up" delay={0.8}>
      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-8"
        variants={itemVariants}
      >
        <motion.div
          whileHover={{ scale: 1.08, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-gold rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <Button className="relative bg-gradient-gold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 transition-all duration-500 text-black font-bold px-12 py-8 text-lg rounded-xl shadow-2xl">
            <a href="#contato" className="relative z-10">Iniciar Conexão Neural</a>
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-xl"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </Button>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.08, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <motion.div
            className="absolute inset-0 border-2 border-aix-purple rounded-xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              borderColor: ["#8b5cf6", "#06b6d4", "#f59e0b", "#8b5cf6"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <Button 
            variant="outline" 
            className="relative border-2 border-aix-purple bg-aix-purple/10 hover:bg-aix-purple/20 backdrop-blur-md transition-all duration-500 px-12 py-8 text-lg rounded-xl text-white font-semibold"
          >
            <a href="#portfolio" className="relative z-10">Explorar Projetos</a>
          </Button>
        </motion.div>
      </motion.div>
    </ScrollReveal>
  );
};

export default HeroButtons;
