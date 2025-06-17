
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const RefinedHeroContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div 
      className="relative z-30 text-center max-w-6xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Title */}
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider text-white mb-4">
          <span className="font-mono">AIX8C</span>
        </h1>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          <Sparkles className="w-4 h-4 text-white/60" />
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        </div>
        <p className="text-lg md:text-xl text-neutral-300 font-light tracking-[0.3em] uppercase">
          Artificial Intelligence Experience Creative
        </p>
      </motion.div>

      {/* Description */}
      <motion.div variants={itemVariants} className="mb-12">
        <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-3xl mx-auto">
          Navegando pelos mares da inovação digital, transformamos ideias em experiências extraordinárias através da inteligência artificial.
        </p>
      </motion.div>

      {/* Mission & Vision Cards */}
      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div 
          className="refined-glass-card p-8 text-left"
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <h3 className="text-lg font-medium text-white tracking-wide">Missão</h3>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            Democratizar o acesso à inteligência artificial, criando soluções que potencializam o potencial humano e transformam negócios.
          </p>
        </motion.div>

        <motion.div 
          className="refined-glass-card p-8 text-left"
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <h3 className="text-lg font-medium text-white tracking-wide">Visão</h3>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            Ser referência mundial em estratégias de IA, conectando inovação tecnológica com impacto social positivo.
          </p>
        </motion.div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <motion.button
          className="refined-premium-button px-8 py-4 bg-white text-black font-medium tracking-wide flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Explore Nossa Jornada
          <ArrowRight className="w-4 h-4" />
        </motion.button>

        <motion.button
          className="refined-secondary-button px-8 py-4 border border-white/30 text-white font-medium tracking-wide"
          whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.6)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Conheça Aussy
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default RefinedHeroContent;
