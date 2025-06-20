
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Zap } from 'lucide-react';

const PersonalPresentation = () => {
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
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
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
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-20"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
      >
        <Sparkles className="w-8 h-8 text-aix-gold opacity-60" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-24"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2 }}
      >
        <Star className="w-6 h-6 text-aix-purple opacity-50" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-32"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2.5 }}
      >
        <Zap className="w-7 h-7 text-cyan-400 opacity-40" />
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 text-center max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Name Display */}
        <motion.div
          variants={itemVariants}
          className="mb-8 relative"
        >
          {/* Glow Effect Behind Name */}
          <motion.div 
            className="absolute inset-0 rounded-full opacity-20 blur-3xl"
            style={{
              background: `
                radial-gradient(circle, rgba(245, 158, 11, 0.6) 0%, transparent 70%),
                radial-gradient(circle, rgba(139, 92, 246, 0.4) 30%, transparent 70%)
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
          
          <motion.h1 
            className="relative text-5xl md:text-8xl font-bold mb-6 font-serif tracking-tight"
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

        {/* Professional Title */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <motion.h2 
            className="text-2xl md:text-4xl text-white font-light mb-4 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 1.5, delay: 1.2 }
            }}
          >
            ESTRATEGISTA DE INTELIGÊNCIA ARTIFICIAL
          </motion.h2>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-aix-gold to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: 1,
              transition: { duration: 1.5, delay: 1.8 }
            }}
          />
        </motion.div>

        {/* Professional Description */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <motion.p 
            className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 1.8, delay: 2.2 }
            }}
          >
            Pioneira brasileira em{" "}
            <motion.span 
              className="text-aix-gold font-medium"
              animate={{
                textShadow: [
                  "0 0 10px rgba(245, 158, 11, 0.5)",
                  "0 0 20px rgba(245, 158, 11, 0.8)",
                  "0 0 10px rgba(245, 158, 11, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              prompt engineering
            </motion.span>
            {" "}e automação de chatbots, transformando a comunicação entre humanos e máquinas através de estratégias inovadoras de{" "}
            <motion.span 
              className="text-aix-purple font-medium"
              animate={{
                textShadow: [
                  "0 0 10px rgba(139, 92, 246, 0.5)",
                  "0 0 20px rgba(139, 92, 246, 0.8)",
                  "0 0 10px rgba(139, 92, 246, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              inteligência artificial conversacional
            </motion.span>
            .
          </motion.p>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { title: "Prompt Engineering", desc: "Líder em otimização de comunicação IA" },
            { title: "Vibe Coding", desc: "Inovação em metodologias de desenvolvimento" },
            { title: "Mentoria IA", desc: "Formação de especialistas em IA conversacional" }
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
                <h3 className="text-aix-gold font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle Call to Action */}
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
            Preparando experiência completa...
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PersonalPresentation;
