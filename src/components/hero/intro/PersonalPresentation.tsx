
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Star, Brain, Anchor, Zap, Navigation, Compass } from 'lucide-react';
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
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
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
        className="container mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-aix-gold via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Lorenza Volponi
              </h1>
              <p className="text-lg md:text-xl text-cyan-300 font-light leading-relaxed">
                Brasileira, polímata e nexialista.<br />
                <span className="text-aix-gold">Tradutora entre almas humanas e mentes artificiais.</span>
              </p>
            </motion.div>

            {/* About Section */}
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

            {/* Mission Vision Cards */}
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
          <ProfessionalImage />
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

export default PersonalPresentation;
