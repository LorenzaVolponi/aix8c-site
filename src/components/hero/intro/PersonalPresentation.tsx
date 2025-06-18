
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Star, Brain, Anchor } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PersonalPresentation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-aix-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Professional Content */}
          <div className="space-y-8">
            {/* Header with Naval Theme */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3 mb-6"
            >
              <Anchor className="w-6 h-6 text-aix-gold" />
              <span className="text-aix-gold font-medium">Welcome aboard, marujos!</span>
            </motion.div>

            {/* Name and Title */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-aix-gold via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Lorenza Volponi
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 font-light leading-relaxed">
                Brasileira, polímata e nexialista.<br />
                <span className="text-aix-gold">Tradutora entre almas humanas e mentes artificiais.</span>
              </p>
            </motion.div>

            {/* Professional Description */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-6 border border-purple-400/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <h3 className="text-purple-300 font-semibold text-lg">Expertise em IA</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Pioneira na engenharia de prompts no Brasil, certificada pelo 
                  <span className="text-aix-gold font-medium"> MTF de Portugal</span>, 
                  democratizando o conhecimento em IA com impactos transformadores 
                  para empresas e profissionais.
                </p>
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-6 border border-aix-gold/20 hover:border-aix-gold/30 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-aix-gold" />
                  <h3 className="text-aix-gold font-semibold text-lg">Missão</h3>
                </div>
                <p className="text-gray-300 leading-relaxed italic">
                  "Sou a soma infinita de ideias fora da caixa, unindo tecnologia e emoção 
                  para criar experiências transformadoras que elevam o potencial humano 
                  através da inteligência artificial."
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-aix-gold to-yellow-500 hover:from-yellow-500 hover:to-aix-gold text-black font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-aix-gold/25"
                onClick={() => window.open('https://calendly.com/lorenzavolponi', '_blank')}
              >
                <Calendar className="w-6 h-6 mr-3" />
                Embarcar na Jornada IA
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Professional Image */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative group">
              {/* Glowing background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-aix-gold/20 via-cyan-400/15 to-purple-500/20 blur-3xl rounded-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Professional Image Container */}
              <div className="relative glass-card p-8 rounded-3xl border border-aix-gold/30 overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-aix-gold/10 to-cyan-400/10 rounded-2xl flex items-center justify-center">
                  <img
                    src="/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png"
                    alt="Lorenza Volponi - AI Expert"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    loading="eager"
                  />
                </div>
                
                {/* Floating badge */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-aix-gold to-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  AI Pioneer 🚀
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-16"
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-gray-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Explore mais</span>
            <div className="w-px h-8 bg-gradient-to-b from-aix-gold to-transparent"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PersonalPresentation;
