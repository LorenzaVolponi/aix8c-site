
import React, { useRef, Suspense, lazy } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Zap, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Lazy load components for optimal performance
const OptimizedNeuralCanvas = lazy(() => import('./OptimizedNeuralCanvas'));
const AdvancedVisualEffects = lazy(() => import('../enhanced/AdvancedVisualEffects'));

const CinematicHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30,
    mass: 0.8
  });
  
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 1, 0.3]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    
    mouseX.set((clientX - left - width / 2) / 20);
    mouseY.set((clientY - top - height / 2) / 20);
  };

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

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

  return (
    <motion.section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-aix-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      onMouseMove={handleMouseMove}
    >
      {/* Advanced Visual Effects Layer */}
      <Suspense fallback={null}>
        <AdvancedVisualEffects />
      </Suspense>

      {/* Neural Canvas Background */}
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-aix-black via-gray-900/50 to-aix-black" />
      }>
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          <OptimizedNeuralCanvas />
        </motion.div>
      </Suspense>
      
      {/* Premium Cinematic Overlay */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(ellipse at 30% 40%, rgba(245, 158, 11, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 60%, rgba(251, 191, 36, 0.12) 0%, transparent 55%),
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.9) 0%, 
              rgba(10, 10, 10, 0.7) 30%,
              rgba(15, 10, 5, 0.8) 50%,
              rgba(10, 10, 10, 0.7) 70%,
              rgba(0, 0, 0, 0.9) 100%
            )
          `
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      />

      {/* Main Content Container */}
      <motion.div 
        className="container mx-auto px-4 z-30 relative"
        style={{ opacity: contentOpacity }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Premium Badge */}
            <motion.div
              custom={0}
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-aix-gold/20 to-yellow-500/20 border border-aix-gold/30 backdrop-blur-md"
            >
              <Zap className="w-4 h-4 text-aix-gold" />
              <span className="text-aix-gold font-medium text-sm">IA Expert & Strategic Advisor</span>
            </motion.div>

            {/* Hero Title */}
            <motion.div custom={1} variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-white font-serif">Transformando</span>
                <span className="block bg-gradient-to-r from-aix-gold via-yellow-400 to-aix-gold bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  Negócios
                </span>
                <span className="block text-white/90 text-3xl md:text-4xl font-light mt-2">
                  com Inteligência Artificial
                </span>
              </h1>
            </motion.div>

            {/* Pain & Solution Cards */}
            <motion.div custom={2} variants={itemVariants} className="grid md:grid-cols-2 gap-4">
              <div className="glass-card p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                <h3 className="text-red-400 font-semibold mb-3">❌ Sem IA Estratégica</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Processos manuais lentos, decisões baseadas em intuição e competidores avançando com automação inteligente.
                </p>
              </div>
              
              <div className="glass-card p-6 border border-aix-gold/20 hover:border-aix-gold/40 transition-all duration-300">
                <h3 className="text-aix-gold font-semibold mb-3">✨ Com IA Estratégica</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Automação cognitiva, insights preditivos e experiências que se adaptam em tempo real aos seus clientes.
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div custom={3} variants={itemVariants}>
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-aix-gold to-yellow-500 hover:from-yellow-500 hover:to-aix-gold text-black font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-aix-gold/25"
                onClick={() => window.open('https://calendly.com/lorenzavolponi', '_blank')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consultoria Estratégica
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Professional Image with 3D Effects */}
          <motion.div 
            custom={4} 
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
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
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-aix-gold/20 to-yellow-500/20 rounded-3xl blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500" />
              
              {/* Main image container */}
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden glass-card border-2 border-aix-gold/30 group-hover:border-aix-gold/50 transition-all duration-300">
                <img 
                  src="/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png"
                  alt="Lorenza Volponi - Estrategista de IA"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                />
                
                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-aix-gold/10 via-transparent to-transparent group-hover:from-aix-gold/20 transition-all duration-300" />
                
                {/* Animated caption */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="text-white font-bold text-lg">Lorenza Volponi</h3>
                      <p className="text-aix-gold text-sm">Estrategista de IA & Automação</p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex items-center gap-1 px-3 py-1 bg-aix-gold/20 rounded-full">
                        <Zap className="w-3 h-3 text-aix-gold" />
                        <span className="text-xs text-aix-gold font-medium">Certified</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating particles around image */}
              {[...Array(6)].map((_, i) => (
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
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              const aboutSection = document.getElementById('sobre');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {/* Golden scroll line */}
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-aix-gold to-transparent relative">
              <motion.div
                className="absolute w-2 h-2 bg-aix-gold rounded-full left-1/2 transform -translate-x-1/2"
                animate={{ 
                  y: [0, 48, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
            
            <p className="text-xs text-aix-gold/70 font-medium tracking-wider group-hover:text-aix-gold transition-colors">
              EXPLORE
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Premium vignette effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: `radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 80%)`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      />
    </motion.section>
  );
};

export default CinematicHeroSection;
