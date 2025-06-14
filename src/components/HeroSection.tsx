import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from "@/components/ui/button";
import ScrollReveal from './ScrollReveal';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(true);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Parallax transforms with cinematic effects - modified to keep content visible longer
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "80%"]);
  const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.1, 0.6]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.3, 0.7], [1, 0.8, 0]);
  const imageRotate = useTransform(smoothProgress, [0, 1], [0, -5]);
  const contentY = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.6, 1], [1, 1, 0]);
  const titleScale = useTransform(smoothProgress, [0, 0.7], [1, 0.8]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    let particles: Particle[] = [];
    let neuralConnections: NeuralConnection[] = [];
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      pulsePhase: number;
      glowRadius: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.color = Math.random() > 0.6 ? '#f59e0b' : Math.random() > 0.4 ? '#06b6d4' : '#8b5cf6';
        this.opacity = Math.random() * 0.9 + 0.3;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.glowRadius = Math.random() * 20 + 10;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulsePhase += 0.03;
        
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX * 0.9;
          this.x = Math.max(0, Math.min(canvas.width, this.x));
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY * 0.9;
          this.y = Math.max(0, Math.min(canvas.height, this.y));
        }
      }
      
      draw() {
        if (!ctx) return;
        const pulseSize = this.size + Math.sin(this.pulsePhase) * 1;
        const pulseOpacity = this.opacity + Math.sin(this.pulsePhase) * 0.2;
        const glowPulse = this.glowRadius + Math.sin(this.pulsePhase * 2) * 5;
        
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowPulse);
        gradient.addColorStop(0, this.color.replace(')', `, ${pulseOpacity})`).replace('rgb', 'rgba'));
        gradient.addColorStop(0.4, this.color.replace(')', `, ${pulseOpacity * 0.4})`).replace('rgb', 'rgba'));
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, glowPulse, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = this.color.replace(')', `, ${pulseOpacity})`).replace('rgb', 'rgba');
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class NeuralConnection {
      p1: Particle;
      p2: Particle;
      opacity: number;
      animated: boolean;
      animationProgress: number;
      
      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0;
        this.animated = Math.random() > 0.7;
        this.animationProgress = 0;
      }
      
      update() {
        const dx = this.p1.x - this.p2.x;
        const dy = this.p1.y - this.p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          this.opacity = Math.min(0.4, (200 - distance) / 200 * 0.4);
          if (this.animated) {
            this.animationProgress += 0.02;
            if (this.animationProgress > 1) this.animationProgress = 0;
          }
        } else {
          this.opacity = 0;
        }
      }
      
      draw() {
        if (!ctx || this.opacity <= 0) return;
        
        const gradient = ctx.createLinearGradient(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
        gradient.addColorStop(0, `rgba(6, 182, 212, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${this.opacity * 0.8})`);
        gradient.addColorStop(1, `rgba(245, 158, 11, ${this.opacity})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        
        if (this.animated) {
          ctx.setLineDash([5, 5]);
          ctx.lineDashOffset = -this.animationProgress * 10;
        } else {
          ctx.setLineDash([]);
        }
        
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();
        
        ctx.setLineDash([]);
      }
    }
    
    const init = () => {
      particles = [];
      neuralConnections = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 12), 80);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          neuralConnections.push(new NeuralConnection(particles[i], particles[j]));
        }
      }
    };
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      neuralConnections.forEach(connection => {
        connection.update();
        connection.draw();
      });
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

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
    <motion.section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-aix-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Enhanced Neural Canvas Background */}
      <motion.canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      />
      
      {/* Cinematic Gradient Overlays */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 70%),
            linear-gradient(135deg, rgba(10, 10, 10, 0.8) 0%, rgba(26, 26, 26, 0.6) 100%)
          `
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      
      {/* Photo Integration */}
      <motion.div
        ref={imageRef}
        className="absolute top-6 right-6 md:top-8 md:right-8 w-28 h-28 md:w-40 md:h-40 z-20 overflow-hidden"
        style={{ 
          scale: imageScale,
          opacity: imageOpacity,
          rotate: imageRotate,
          borderRadius: "20px",
          boxShadow: "0 0 50px rgba(245, 158, 11, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)"
        }}
        initial={{ x: 200, opacity: 0, rotate: 15, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
        transition={{ 
          type: "spring", 
          damping: 20, 
          stiffness: 100,
          delay: 1.5 
        }}
        whileHover={{ 
          scale: 1.15, 
          rotate: 3,
          boxShadow: "0 0 80px rgba(245, 158, 11, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.2)"
        }}
      >
        <div className="relative w-full h-full">
          <img 
            src="/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png"
            alt="Lorenza Volponi"
            className="w-full h-full object-cover filter sepia-0 contrast-110 brightness-105 hover:sepia-0 hover:contrast-125 hover:brightness-110 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-aix-gold/30 via-transparent to-aix-purple/20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-bl from-aix-cyan/20 via-transparent to-aix-gold/30 mix-blend-color-dodge opacity-60" />
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
      
      {/* Main Content */}
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
              className="text-3xl md:text-5xl text-white font-bold mb-8 relative"
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

        {/* Enhanced Scroll Indicator */}
        <ScrollReveal direction="fade" delay={1.2}>
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-8 h-12 border-2 border-aix-cyan rounded-full flex justify-center relative"
                animate={{ 
                  borderColor: ["#06b6d4", "#8b5cf6", "#f59e0b", "#06b6d4"],
                  boxShadow: [
                    "0 0 20px rgba(6, 182, 212, 0.3)",
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                    "0 0 20px rgba(245, 158, 11, 0.3)",
                    "0 0 20px rgba(6, 182, 212, 0.3)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.div
                  className="w-1.5 h-4 bg-aix-cyan rounded-full mt-3"
                  animate={{ 
                    y: [0, 16, 0],
                    backgroundColor: ["#06b6d4", "#8b5cf6", "#f59e0b", "#06b6d4"]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
