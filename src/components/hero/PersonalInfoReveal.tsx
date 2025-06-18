
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Star, Zap, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PersonalInfoReveal = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(3px)" },
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background premium com partículas flutuantes */}
      <div className="absolute inset-0">
        {/* Gradient de fundo sofisticado */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(245, 158, 11, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 70%, rgba(251, 191, 36, 0.1) 0%, transparent 55%),
              radial-gradient(ellipse at 50% 20%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
              linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 10, 0.8) 50%, rgba(0, 0, 0, 0.95) 100%)
            `
          }}
        />
        
        {/* Partículas flutuantes elegantes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-aix-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-6 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          {/* Logo AIX8C refinado no topo */}
          <motion.div 
            className="text-center mb-16"
            variants={logoVariants}
          >
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold font-mono bg-gradient-to-br from-aix-gold via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4"
              animate={{
                textShadow: [
                  "0 0 20px rgba(245, 158, 11, 0.4)",
                  "0 0 40px rgba(6, 182, 212, 0.3)",
                  "0 0 20px rgba(245, 158, 11, 0.4)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              AIX8C
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-cyan-300 font-light tracking-[0.2em] uppercase"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Artificial Intelligence Experience Creative
            </motion.p>
          </motion.div>

          {/* Grid com informações pessoais */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Coluna esquerda - Informações principais */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Card sobre mim - destaque principal */}
              <motion.div 
                className="glass-card p-8 border border-aix-gold/30 hover:border-aix-gold/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-6 h-6 text-aix-gold" />
                  <h2 className="text-2xl font-bold text-aix-gold">Lorenza Volponi</h2>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    <span className="text-cyan-300 font-medium">Brasileira, polímata e nexialista.</span> 
                    <br />Tradutora entre almas humanas e mentes artificiais.
                  </p>
                  <p>
                    Pioneira na engenharia de prompts no Brasil, certificada pelo 
                    <span className="text-aix-gold font-medium"> MTF de Portugal</span>, 
                    democratizando o conhecimento em IA com impactos transformadores.
                  </p>
                  <blockquote className="text-purple-300 italic text-lg border-l-4 border-aix-gold pl-4 my-6">
                    "Sou a soma infinita de ideias fora da caixa, unindo tecnologia e emoção. ✦"
                  </blockquote>
                </div>
              </motion.div>

              {/* Navegação temática naval */}
              <motion.div 
                className="glass-card p-6 border border-cyan-400/20"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Navigation className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-cyan-300 font-semibold">🌊 Navegando pelos mares da inovação</h3>
                </div>
                <p className="text-gray-400 text-sm italic">
                  Welcome aboard, marujos! Embarque nesta jornada de descobertas digitais.
                </p>
              </motion.div>
            </motion.div>

            {/* Coluna direita - Missão e call-to-action */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Cards de missão e visão */}
              <motion.div 
                className="glass-card p-6 border border-purple-400/20"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <h3 className="text-purple-300 font-semibold">🎯 Missão</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Democratizar a IA criativa, tornando tecnologias avançadas acessíveis para transformar ideias em realidade digital.
                </p>
              </motion.div>

              <motion.div 
                className="glass-card p-6 border border-blue-400/20"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <h3 className="text-blue-300 font-semibold">🔮 Visão</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Um futuro onde humanos e IA colaboram harmoniosamente, criando soluções inovadoras que transcendem limitações tradicionais.
                </p>
              </motion.div>

              {/* Call-to-action premium */}
              <motion.div 
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-aix-gold to-yellow-500 hover:from-yellow-500 hover:to-aix-gold text-black font-bold px-10 py-6 text-xl rounded-xl transition-all duration-300 transform hover:shadow-2xl hover:shadow-aix-gold/30"
                  onClick={() => window.open('https://calendly.com/lorenzavolponi', '_blank')}
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  Embarcar na Jornada IA
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PersonalInfoReveal;
