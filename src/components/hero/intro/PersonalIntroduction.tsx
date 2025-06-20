
import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Sparkles, Star } from 'lucide-react';

const PersonalIntroduction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-aix-black">
      {/* Simple Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
      />

      {/* Simple Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(245, 158, 11, 0.1) 0%, transparent 70%),
            linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)
          `
        }}
      />

      {/* Decorative Icons - Static */}
      <div className="absolute top-20 left-20 opacity-40">
        <Anchor className="w-6 h-6 text-aix-gold" />
      </div>
      
      <div className="absolute top-32 right-24 opacity-30">
        <Sparkles className="w-5 h-5 text-aix-purple" />
      </div>
      
      <div className="absolute bottom-40 left-32 opacity-35">
        <Star className="w-6 h-6 text-cyan-400" />
      </div>

      <motion.div 
        className="container mx-auto px-4 text-center max-w-4xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Captain Title */}
        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <h2 className="text-xl md:text-2xl text-aix-gold font-semibold mb-2 tracking-wide">
            Capitã da Nave AIX8C
          </h2>
        </motion.div>

        {/* Main Name Display - NO ANIMATION, CLEAR AND LEGIBLE */}
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-serif tracking-tight text-white">
            LORENZA VOLPONI
          </h1>
        </motion.div>

        {/* FOCUS: ARQUITETA DE FUTUROS DIGITAIS */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.h3 
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-aix-gold via-yellow-400 to-aix-gold bg-clip-text mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            ARQUITETA DE FUTUROS DIGITAIS
          </motion.h3>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-aix-gold to-transparent mx-auto" />
        </motion.div>

        {/* Professional Subtitle - CLEAR AND LEGIBLE */}
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <h4 className="text-lg md:text-xl text-cyan-300 font-light mb-3 tracking-wider">
            Pioneira em Engenharia de Prompts
          </h4>
        </motion.div>

        {/* Personal Tagline - CLEAR AND LEGIBLE */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            "Sou a soma infinita de ideias fora da caixa, unindo{" "}
            <span className="text-aix-gold font-medium">tecnologia</span>
            {" "}e{" "}
            <span className="text-aix-purple font-medium">emoção</span>
            . ✦"
          </p>
        </motion.div>

        {/* Professional Highlights - CLEAR AND LEGIBLE */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8"
        >
          {[
            { title: "Prompt Engineering", desc: "Líder mundial em otimização de IA" },
            { title: "Navegação Digital", desc: "Conduzindo expedições tecnológicas" },
            { title: "Inovação Criativa", desc: "Unindo arte e inteligência artificial" }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-sm border border-aix-gold/20 rounded-lg p-4"
            >
              <h5 className="text-aix-gold font-semibold text-base mb-2">{item.title}</h5>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Transition Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-12"
        >
          <p className="text-white/60 text-sm tracking-wide">
            Navegando para a experiência completa...
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PersonalIntroduction;
