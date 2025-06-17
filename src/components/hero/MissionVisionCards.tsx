
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Navigation } from 'lucide-react';

const MissionVisionCards = () => {
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

  return (
    <motion.div custom={2} variants={itemVariants} className="grid md:grid-cols-2 gap-4">
      <div className="glass-card p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-5 h-5 text-blue-400" />
          <h3 className="text-blue-400 font-semibold">🚀 Missão</h3>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">
          Transformar a comunicação entre humanos e máquinas, criando pontes tecnológicas com soluções inovadoras em IA.
        </p>
      </div>
      
      <div className="glass-card p-6 border border-aix-gold/20 hover:border-aix-gold/40 transition-all duration-300 group">
        <div className="flex items-center gap-2 mb-3">
          <Navigation className="w-5 h-5 text-aix-gold" />
          <h3 className="text-aix-gold font-semibold">✨ Visão</h3>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">
          Liderar na criação de experiências imersivas e únicas em IA, democratizando o conhecimento tecnológico.
        </p>
      </div>
    </motion.div>
  );
};

export default MissionVisionCards;
