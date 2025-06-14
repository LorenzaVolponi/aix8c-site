
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from "@/components/ui/button";
import ScrollReveal from '../ScrollReveal';

const HeroContent = () => {
  const [isTyping, setIsTyping] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const contentY = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.6, 1], [1, 1, 0]);
  const titleScale = useTransform(smoothProgress, [0, 0.7], [1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

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
    <motion.div 
      className="container mx-auto px-4 z-30 text-center relative"
      style={{ y: contentY, opacity: contentOpacity }}
      variants={containerVariants}
    >
      <ScrollReveal direction="scale" delay={0.2}>
        <motion.div className="mb-12 relative" variants={itemVariants}>
          <motion.div 
            className="absolute inset-0 rounded-full opacity-30 blur-3xl"
            style={{
              background: `
                radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, transparent 70%),
                radial-gradient(circle, rgba(139, 92, 246, 0.3) 30%, transparent 70%)
              `
            }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.h1 
            className="relative text-4xl md:text-7xl font-bold mb-4 font-serif"
            style={{ scale: titleScale }}
          >
            <motion.span
              className="holographic-text"
              animate={{
                textShadow: [
                  "0 0 20px rgba(245, 158, 11, 0.5)",
                  "0 0 40px rgba(139, 92, 246, 0.5)",
                  "0 0 20px rgba(6, 182, 212, 0.5)",
                  "0 0 20px rgba(245, 158, 11, 0.5)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              LORENZA VOLPONI
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/80 mb-8 font-light tracking-wider overflow-hidden border-r-2 border-aix-gold whitespace-nowrap"
            style={{ 
              width: isTyping ? "100%" : "100%",
              animation: "typewriter 4s steps(40) 1s both, typewriter-blink 0.75s infinite"
            }}
            onAnimationEnd={() => setIsTyping(false)}
          >
            ESTRATEGISTA DE INTELIGÊNCIA ARTIFICIAL
          </motion.p>
        </motion.div>
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.4}>
        <motion.div 
          className="w-full max-w-5xl mx-auto overflow-hidden mb-12"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl md:text-5xl text-white font-bold mb-8 relative reverse-scroll-text"
            animate={{
              color: ["#06b6d4", "#8b5cf6", "#f59e0b", "#06b6d4"]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{
              textShadow: "0 0 20px rgba(6, 182, 212, 0.4)"
            }}
          >
            ARQUITETA DE FUTUROS DIGITAIS
          </motion.h2>
        </motion.div>
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.6}>
        <motion.p 
          className="text-white/90 max-w-4xl mx-auto mb-16 text-lg md:text-xl leading-relaxed font-light"
          variants={itemVariants}
          style={{
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)"
          }}
        >
          Transformando dados em estratégias, algoritmos em resultados e desafios complexos em 
          <motion.span 
            className="gold-text-gradient font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            {" "}oportunidades exponenciais{" "}
          </motion.span>
          para empresas visionárias que buscam transcender os limites do possível.
        </motion.p>
      </ScrollReveal>
      
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
    </motion.div>
  );
};

export default HeroContent;
