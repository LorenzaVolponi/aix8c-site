
import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Sparkles, Star } from 'lucide-react';

const PersonalIntroduction = () => {
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
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 1.2
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: 1.5
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-aix-black">
      {/* Enhanced Neural Grid Background */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px"
        }}
      />

      {/* Atmospheric Gradient Overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(245, 158, 11, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(251, 191, 36, 0.12) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 20%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.95) 0%, 
              rgba(10, 10, 10, 0.85) 30%,
              rgba(5, 15, 20, 0.90) 50%,
              rgba(10, 10, 10, 0.85) 70%,
              rgba(0, 0, 0, 0.95) 100%
            )
          `
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Floating Decorative Icons */}
      <motion.div
        className="absolute top-20 left-20"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
      >
        <Anchor className="w-8 h-8 text-aix-gold opacity-60" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-24"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2 }}
      >
        <Sparkles className="w-6 h-6 text-aix-purple opacity-50" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-32"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2.5 }}
      >
        <Star className="w-7 h-7 text-cyan-400 opacity-40" />
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 text-center max-w-5xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Captain Title with Naval Theme */}
        <motion.div
          variants={itemVariants}
          className="mb-6 relative"
        >
          <motion.div 
            className="absolute inset-0 rounded-full opacity-20 blur-3xl"
            style={{
              background: `
                radial-gradient(circle, rgba(245, 158, 11, 0.6) 0%, transparent 70%),
                radial-gradient(circle, rgba(6, 182, 212, 0.4) 30%, transparent 70%)
              `
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.h2 
            className="relative text-2xl md:text-3xl text-aix-gold font-semibold mb-2 tracking-wide"
            animate={{
              textShadow: [
                "0 0 20px rgba(245, 158, 11, 0.6)",
                "0 0 40px rgba(245, 158, 11, 0.8)",
                "0 0 20px rgba(245, 158, 11, 0.6)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Capitã da Nave AIX8C
          </motion.h2>
        </motion.div>

        {/* Main Name Display */}
        <motion.div
          variants={itemVariants}
          className="mb-8 relative"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 font-serif tracking-tight"
            animate={{
              textShadow: [
                "0 0 30px rgba(245, 158, 11, 0.6)",
                "0 0 50px rgba(139, 92, 246, 0.4)",
                "0 0 30px rgba(6, 182, 212, 0.5)",
                "0 0 30px rgba(245, 158, 11, 0.6)"
              ]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <motion.span
              className="holographic-text bg-gradient-to-r from-aix-gold via-white to-aix-purple bg-clip-text text-transparent"
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ 
                opacity: 1, 
                letterSpacing: "0.1em",
                transition: { duration: 2, delay: 0.5 }
              }}
            >
              LORENZA VOLPONI
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Professional Subtitle */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.h3 
            className="text-xl md:text-2xl text-cyan-300 font-light mb-4 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 1.5, delay: 1.2 }
            }}
          >
            Pioneira em Engenharia de Prompts
          </motion.h3>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-aix-gold to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: 1,
              transition: { duration: 1.5, delay: 1.8 }
            }}
          />
        </motion.div>

        {/* Personal Tagline */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <motion.p 
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 1.8, delay: 2.2 }
            }}
          >
            "Sou a soma infinita de ideias fora da caixa, unindo{" "}
            <motion.span 
              className="text-aix-gold font-medium not-italic"
              animate={{
                textShadow: [
                  "0 0 10px rgba(245, 158, 11, 0.5)",
                  "0 0 20px rgba(245, 158, 11, 0.8)",
                  "0 0 10px rgba(245, 158, 11, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              tecnologia
            </motion.span>
            {" "}e{" "}
            <motion.span 
              className="text-aix-purple font-medium not-italic"
              animate={{
                textShadow: [
                  "0 0 10px rgba(139, 92, 246, 0.5)",
                  "0 0 20px rgba(139, 92, 246, 0.8)",
                  "0 0 10px rgba(139, 92, 246, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              emoção
            </motion.span>
            . ✦"
          </motion.p>
        </motion.div>

        {/* Professional Highlights */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          {[
            { title: "Prompt Engineering", desc: "Líder mundial em otimização de IA" },
            { title: "Navegação Digital", desc: "Conduzindo expedições tecnológicas" },
            { title: "Inovação Criativa", desc: "Unindo arte e inteligência artificial" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  duration: 1, 
                  delay: 2.8 + (index * 0.2),
                  type: "spring",
                  damping: 20
                }
              }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-aix-gold/20 rounded-xl p-6 hover:border-aix-gold/40 transition-all duration-500">
                <h4 className="text-aix-gold font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition Indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { duration: 2, delay: 4 }
          }}
        >
          <motion.p 
            className="text-white/60 text-sm tracking-wide"
            animate={{
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Navegando para a experiência completa...
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Atmospheric Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: i % 2 === 0 ? '#f59e0b' : '#06b6d4',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
            boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default PersonalIntroduction;
