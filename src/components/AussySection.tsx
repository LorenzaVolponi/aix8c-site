
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

  // Floating Code Elements
  const codeElements = [
    "const aussy = 'unlimited';",
    "AI + Human = ∞",
    "creativity.level = 'max';",
    "connection.established();",
    "future.now();",
    "8Experience.activate();"
  ];

  return (
    <motion.section 
      ref={sectionRef}
      id="aussy" 
      className="py-32 bg-gradient-to-br from-aix-black via-aix-darkgray to-aix-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeElements.map((code, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-aix-gold/20 whitespace-nowrap"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${15 + (i * 12)}%`,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              x: [0, 50, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 2,
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* Neural Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-aix-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
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
              className="text-4xl md:text-6xl font-bold mb-8 font-serif"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="holographic-text">AUSSY</span>
            </motion.h2>
            
            <motion.div
              className="w-16 h-1 bg-gradient-gold mx-auto mb-8 rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            
            <motion.p 
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
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
              className="relative w-64 h-64 cursor-pointer"
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
                  className="absolute inset-0 rounded-full glass-card border-2 border-aix-gold/30 flex items-center justify-center"
                  style={{ 
                    backfaceVisibility: "hidden",
                    background: "radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, rgba(10, 10, 10, 0.9) 100%)"
                  }}
                >
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 text-aix-gold mx-auto mb-3" />
                    <h3 className="text-xl font-bold gold-text-gradient mb-2">CRIATIVIDADE</h3>
                    <p className="text-white/60 text-sm">Sem limites para imaginar</p>
                  </div>
                </motion.div>

                {/* Face 2 - Tecnologia */}
                <motion.div
                  className="absolute inset-0 rounded-full glass-card border-2 border-aix-purple/30 flex items-center justify-center"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, rgba(10, 10, 10, 0.9) 100%)"
                  }}
                >
                  <div className="text-center">
                    <Code className="w-12 h-12 text-aix-purple mx-auto mb-3" />
                    <h3 className="text-xl font-bold purple-text-gradient mb-2">TECNOLOGIA</h3>
                    <p className="text-white/60 text-sm">Conexões que transformam</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Subtle Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-30 blur-xl"
                style={{
                  background: isFlipped 
                    ? "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)"
                    : "radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)"
                }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Story Grid */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <StoryCard
              title="Possibilidades Infinitas"
              description="Como o símbolo do infinito, AUSSY representa que não há barreiras para a criatividade e inovação."
              code="const possibilities = ∞;"
            />
            
            <StoryCard
              title="Conexão Instantânea"
              description="Criado para gerar lembrança duradoura, uma marca que conecta e permanece na memória."
              code="connect(human, memory);"
            />
          </div>
        </ScrollReveal>

        {/* Minimalist CTA */}
        <ScrollReveal direction="scale" delay={0.8}>
          <div className="text-center">
            <motion.div
              className="inline-block group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative overflow-hidden rounded-lg border border-aix-gold/20 bg-black/20 backdrop-blur-sm">
                <div className="px-8 py-4">
                  <span className="text-lg font-medium text-white group-hover:text-aix-gold transition-colors duration-300">
                    Descubra o AUSSY em Ação
                  </span>
                </div>
                
                {/* Subtle shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-aix-gold/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </motion.section>
  );
};

const StoryCard = ({ 
  title, 
  description, 
  code 
}: { 
  title: string; 
  description: string;
  code: string;
}) => {
  return (
    <motion.div
      className="glass-card p-6 hover:transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
      whileHover={{ y: -5 }}
    >
      {/* Code background */}
      <motion.div
        className="absolute top-4 right-4 font-mono text-xs text-aix-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: 10 }}
        whileHover={{ x: 0 }}
      >
        {code}
      </motion.div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:gold-text-gradient transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-white/70 leading-relaxed text-sm">
        {description}
      </p>
      
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"
        initial={false}
      />
    </motion.div>
  );
};

export default AussySection;
