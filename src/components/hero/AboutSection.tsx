
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
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
    <motion.div custom={3} variants={itemVariants}>
      <div className="glass-card p-6 border border-purple-400/20 hover:border-purple-400/30 transition-all duration-300">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-aix-gold rounded-full animate-pulse" />
          <h3 className="text-purple-300 font-semibold">🌟 Sobre Mim</h3>
        </div>
        <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
          <p>
            <span className="text-aix-gold font-medium">Lorenza Volponi</span> - 
            Brasileira, polímata e nexialista. <span className="text-blue-300">Tradutora entre almas humanas e mentes artificiais.</span>
          </p>
          <p>
            Pioneira na engenharia de prompts no Brasil, certificada pelo <span className="text-aix-gold">MTF de Portugal</span>, 
            democratizando o conhecimento em IA com impactos transformadores.
          </p>
          <p className="text-purple-300 italic">
            "Sou a soma infinita de ideias fora da caixa, unindo tecnologia e emoção. ✦"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
