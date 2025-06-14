
import React, { useState } from 'react';
import { Brain, Zap, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SobreNosSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const pillars = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Pioneirismo",
      shortDescription: "Liderando inovação em IA no Brasil",
      fullDescription: "Somos os primeiros especialistas em engenharia de prompt no Brasil, desenvolvendo metodologias exclusivas que revolucionam a forma como empresas interagem com IA. Nossa abordagem pioneira combina técnica avançada com criatividade humana."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Inovação Constante",
      shortDescription: "Sempre na vanguarda da tecnologia em IA",
      fullDescription: "Estamos em constante evolução, explorando as fronteiras mais avançadas da inteligência artificial. Cada projeto é uma oportunidade de quebrar paradigmas e criar soluções que antes pareciam impossíveis."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Foco no Cliente",
      shortDescription: "Soluções personalizadas para cada necessidade",
      fullDescription: "Cada cliente é único, assim como suas necessidades. Desenvolvemos estratégias sob medida que não apenas atendem, mas superam expectativas, criando valor real e transformação sustentável."
    }
  ];

  return (
    <section id="sobre-nos" className="py-24 relative overflow-hidden bg-gradient-to-br from-aix-purple-dark via-aix-black to-aix-darkgray">
      <div className="absolute inset-0 bg-constellation opacity-40"></div>
      
      {/* Partículas Flutuantes Interativas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#8b5cf6' : '#f59e0b',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 text-white font-serif"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="holographic-text">Sobre Nós</span>
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-aix-cyan leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Somos pioneiros em engenharia de prompt no Brasil, dedicados a democratizar o 
              conhecimento em IA e capacitar pessoas a criarem soluções impactantes.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <PillarCard
                key={index}
                index={index}
                {...pillar}
                isActive={activeCard === index}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PillarCard = ({ 
  icon, 
  title, 
  shortDescription,
  fullDescription,
  index,
  isActive,
  onClick
}: {
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  fullDescription: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      className="relative cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <motion.div
        className="glass-card p-8 text-center relative overflow-hidden group min-h-[300px] flex flex-col justify-center"
        layout
        animate={{
          scale: isActive ? 1.05 : 1,
          zIndex: isActive ? 10 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${
              index === 0 ? 'rgba(6, 182, 212, 0.1)' : 
              index === 1 ? 'rgba(139, 92, 246, 0.1)' : 
              'rgba(245, 158, 11, 0.1)'
            } 0%, transparent 70%)`
          }}
        />
        
        {/* Icon */}
        <motion.div
          className={`mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300 ${
            index === 0 ? 'text-aix-cyan' : 
            index === 1 ? 'text-aix-purple' : 
            'text-aix-gold'
          }`}
          animate={{
            rotateY: isActive ? 360 : 0,
            scale: isActive ? 1.2 : 1
          }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <motion.h3 
          className={`text-2xl font-bold text-white mb-4 group-hover:transition-all duration-300 ${
            index === 0 ? 'group-hover:text-aix-cyan' : 
            index === 1 ? 'group-hover:text-aix-purple' : 
            'group-hover:text-aix-gold'
          }`}
          animate={{
            scale: isActive ? 1.1 : 1
          }}
        >
          {title}
        </motion.h3>

        {/* Content */}
        <AnimatePresence mode="wait">
          {!isActive ? (
            <motion.div
              key="short"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-white/80 leading-relaxed mb-4">
                {shortDescription}
              </p>
              <motion.div
                className={`text-sm font-semibold ${
                  index === 0 ? 'text-aix-cyan' : 
                  index === 1 ? 'text-aix-purple' : 
                  'text-aix-gold'
                } opacity-60 group-hover:opacity-100 transition-opacity`}
              >
                Clique para expandir
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col justify-center"
            >
              <p className="text-white/90 leading-relaxed text-sm mb-4">
                {fullDescription}
              </p>
              <motion.div
                className={`text-sm font-semibold ${
                  index === 0 ? 'text-aix-cyan' : 
                  index === 1 ? 'text-aix-purple' : 
                  'text-aix-gold'
                }`}
              >
                Clique para recolher
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive indicator */}
        <motion.div
          className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full ${
            index === 0 ? 'bg-aix-cyan' : 
            index === 1 ? 'bg-aix-purple' : 
            'bg-aix-gold'
          }`}
          animate={{
            scaleX: isActive ? 1.5 : 1,
            opacity: isActive ? 1 : 0.5
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SobreNosSection;
