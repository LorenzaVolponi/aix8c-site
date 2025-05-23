
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Parallax transforms
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const imageScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);

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
    let connectionLines: ConnectionLine[] = [];
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      pulsePhase: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = Math.random() > 0.7 ? '#f59e0b' : Math.random() > 0.5 ? '#06b6d4' : '#8b5cf6';
        this.opacity = Math.random() * 0.8 + 0.2;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulsePhase += 0.02;
        
        // Bounce off edges with smooth transition
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX * 0.8;
          this.x = Math.max(0, Math.min(canvas.width, this.x));
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY * 0.8;
          this.y = Math.max(0, Math.min(canvas.height, this.y));
        }
      }
      
      draw() {
        if (!ctx) return;
        const pulseSize = this.size + Math.sin(this.pulsePhase) * 0.5;
        const pulseOpacity = this.opacity + Math.sin(this.pulsePhase) * 0.1;
        
        // Glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.fillStyle = this.color.replace(')', `, ${pulseOpacity})`).replace('rgb', 'rgba');
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class ConnectionLine {
      p1: Particle;
      p2: Particle;
      opacity: number;
      
      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0;
      }
      
      update() {
        const dx = this.p1.x - this.p2.x;
        const dy = this.p1.y - this.p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          this.opacity = Math.min(0.3, (150 - distance) / 150 * 0.3);
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
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();
      }
    }
    
    const init = () => {
      particles = [];
      connectionLines = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 60);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
      
      // Create connection lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          connectionLines.push(new ConnectionLine(particles[i], particles[j]));
        }
      }
    };
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw connection lines first
      connectionLines.forEach(line => {
        line.update();
        line.draw();
      });
      
      // Update and draw particles
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

  // Stagger animation variants
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
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120
      }
    }
  };

  const glitchVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        repeat: 1,
        repeatType: "reverse" as const,
        repeatDelay: 3
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
      {/* Animated Canvas Background */}
      <motion.canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      />
      
      {/* Neural Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-neural-gradient z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2 }}
      />
      
      {/* Cinematic Photo Integration */}
      <motion.div
        className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32 z-20 overflow-hidden rounded-2xl border-2 border-aix-gold/30 shadow-2xl"
        style={{ 
          scale: imageScale,
          opacity: imageOpacity
        }}
        initial={{ x: 100, opacity: 0, rotate: -10 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 120,
          delay: 1.2 
        }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 5,
          boxShadow: "0 0 30px rgba(245, 158, 11, 0.4)"
        }}
      >
        <img 
          src="/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png"
          alt="Lorenza Volponi"
          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-aix-gold/20 to-aix-purple/20 mix-blend-overlay" />
      </motion.div>
      
      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 z-30 text-center relative"
        style={{ y: contentY }}
        variants={containerVariants}
      >
        <motion.div className="mb-8 relative" variants={itemVariants}>
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-purple opacity-20 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.h1 
            className="relative text-5xl md:text-7xl font-bold mb-6 font-serif"
            variants={glitchVariants}
          >
            <span className="gold-text-gradient">Lorenza Volponi</span>
          </motion.h1>
        </motion.div>
        
        <motion.div 
          className="w-full max-w-4xl mx-auto overflow-hidden mb-8"
          variants={itemVariants}
        >
          <motion.p 
            className="text-xl md:text-3xl text-white typewriter font-mono"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            Estrategista de Inteligência Artificial
          </motion.p>
        </motion.div>
        
        <motion.p 
          className="text-white/80 max-w-3xl mx-auto mb-12 text-lg leading-relaxed"
          variants={itemVariants}
        >
          Transformando dados em estratégias, algoritmos em resultados e desafios complexos em oportunidades exponenciais para empresas visionárias que buscam transcender os limites do possível.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-gold hover:opacity-90 transition-all duration-300 text-black font-bold px-10 py-6 text-lg neural-glow">
              <a href="#contato">Iniciar Conexão Neural</a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" className="border-aix-purple hover:bg-aix-purple/20 transition-all duration-300 px-10 py-6 text-lg">
              <a href="#portfolio">Explorar Projetos</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-aix-cyan rounded-full flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-aix-cyan rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
