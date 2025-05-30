
import React, { useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Code, Sparkles, Infinity, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AussySection = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  return (
    <motion.section 
      ref={sectionRef}
      id="aussy" 
      className="py-32 bg-gradient-to-br from-aix-black via-aix-darkgray to-aix-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Neural Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-aix-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="fade" delay={0.2}>
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8 font-serif"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="holographic-text">AUSSY</span>
            </motion.h2>
            
            <motion.div
              className="w-24 h-1 bg-gradient-gold mx-auto mb-8 rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Um codinome nascido da imaginação, representando as{" "}
              <span className="gold-text-gradient font-semibold">duas faces de uma moeda</span>{" "}
              onde não há limites para criar conexões inesquecíveis.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Interactive Coin Component */}
        <ScrollReveal direction="scale" delay={0.4}>
          <div className="flex justify-center mb-20">
            <motion.div
              className="relative w-80 h-80 cursor-pointer perspective-1000"
              style={{ 
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Coin Container */}
              <motion.div
                className="relative w-full h-full rounded-full"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Face 1 - Criatividade */}
                <motion.div
                  className="absolute inset-0 rounded-full glass-card border-4 border-aix-gold/50 flex items-center justify-center"
                  style={{ 
                    backfaceVisibility: "hidden",
                    background: "radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, rgba(10, 10, 10, 0.9) 100%)"
                  }}
                >
                  <div className="text-center">
                    <Sparkles className="w-16 h-16 text-aix-gold mx-auto mb-4" />
                    <h3 className="text-2xl font-bold gold-text-gradient mb-2">CRIATIVIDADE</h3>
                    <p className="text-white/70 text-sm">Sem limites para imaginar</p>
                  </div>
                </motion.div>

                {/* Face 2 - Tecnologia */}
                <motion.div
                  className="absolute inset-0 rounded-full glass-card border-4 border-aix-purple/50 flex items-center justify-center"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(10, 10, 10, 0.9) 100%)"
                  }}
                >
                  <div className="text-center">
                    <Code className="w-16 h-16 text-aix-purple mx-auto mb-4" />
                    <h3 className="text-2xl font-bold purple-text-gradient mb-2">TECNOLOGIA</h3>
                    <p className="text-white/70 text-sm">Conexões que transformam</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-50 blur-2xl"
                style={{
                  background: isFlipped 
                    ? "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)"
                    : "radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)"
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Story Grid */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            <StoryCard
              icon={<Infinity className="w-8 h-8" />}
              title="Possibilidades Infinitas"
              description="Como o símbolo do infinito, AUSSY representa que não há barreiras para a criatividade e inovação."
              code="const possibilities = ∞;"
            />
            
            <StoryCard
              icon={<Zap className="w-8 h-8" />}
              title="Conexão Instantânea"
              description="Criado para gerar lembrança duradoura, uma marca que conecta e permanece na memória."
              code="connect(human, memory);"
            />
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal direction="scale" delay={0.8}>
          <div className="text-center">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                initial={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}
                whileHover={{ 
                  background: "linear-gradient(135deg, #f59e0b 0%, #8b5cf6 100%)" 
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="px-12 py-6 text-xl font-bold">
                  <motion.span
                    initial={{ color: "#f59e0b" }}
                    whileHover={{ color: "#000000" }}
                    transition={{ duration: 0.3 }}
                  >
                    Descubra o AUSSY em Ação
                  </motion.span>
                </div>
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </motion.section>
  );
};

const StoryCard = ({ 
  icon, 
  title, 
  description, 
  code 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  code: string;
}) => {
  return (
    <motion.div
      className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-500 relative overflow-hidden group"
      whileHover={{ y: -10 }}
    >
      {/* Code background */}
      <motion.div
        className="absolute top-4 right-4 font-mono text-xs text-aix-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ x: 20 }}
        whileHover={{ x: 0 }}
      >
        {code}
      </motion.div>
      
      <div className="mb-6 text-aix-cyan group-hover:text-aix-gold transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:gold-text-gradient transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-white/70 leading-relaxed">
        {description}
      </p>
      
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
        initial={false}
      />
    </motion.div>
  );
};

export default AussySection;
