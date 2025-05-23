import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.section 
      ref={sectionRef}
      id="portfolio" 
      className="py-24 relative bg-aix-black overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 bg-constellation opacity-20"
        style={{ y: backgroundY }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale" delay={0.2}>
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center font-serif">
            <span className="gold-text-gradient">Casos de Transformação Digital</span>
          </h2>
        </ScrollReveal>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioItems.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 * index}>
              <PortfolioCard {...item} index={index} />
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const PortfolioCard = ({ 
  title, 
  description, 
  impact,
  tags, 
  link,
  index
}: { 
  title: string; 
  description: string; 
  impact: string;
  tags: string[]; 
  link: string;
  index: number;
}) => {
  return (
    <motion.a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block group h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="glass-card h-full p-8 border border-aix-purple/20 relative overflow-hidden"
        whileHover={{ 
          y: -10,
          boxShadow: "0 20px 40px rgba(6,182,212,0.3)"
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-aix-purple/10 via-transparent to-aix-cyan/10 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Card number indicator */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-aix-gold/20 flex items-center justify-center text-aix-gold text-sm font-bold"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.div>

        <motion.h3 
          className="text-2xl font-bold mb-4 group-hover:purple-text-gradient transition-all font-serif relative z-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-white/80 mb-4 leading-relaxed relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className="mb-6 p-4 bg-aix-purple/10 rounded-lg border border-aix-purple/30 relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          <p className="text-aix-gold font-bold text-sm">IMPACTO MENSURÁVEL:</p>
          <p className="text-white/90 text-sm mt-1">{impact}</p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-2 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          {tags.map((tag, tagIndex) => (
            <motion.span 
              key={tagIndex} 
              className="text-xs px-3 py-2 rounded-full bg-aix-cyan/20 text-aix-cyan border border-aix-cyan/40 font-mono"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 + tagIndex * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0"
          style={{
            background: "linear-gradient(45deg, rgba(6,182,212,0.1), rgba(139,92,246,0.1))"
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.a>
  );
};

const portfolioItems = [
  {
    title: "Automação Neural Multicanal",
    description: "Sistema de atendimento integrado com IA para grande operadora de telecomunicações, processando consultas complexas através de múltiplos canais simultaneamente.",
    impact: "Redução de 47% no tempo médio de resolução e aumento de 68% na satisfação do cliente",
    tags: ["GPT-4", "Automação", "Multicanal", "NLP"],
    link: "#"
  },
  {
    title: "Modelo Preditivo Financeiro",
    description: "Implementação de arquitetura de machine learning para prever tendências de mercado com análise em tempo real de múltiplas fontes de dados financeiros.",
    impact: "Precisão preditiva de 83% com ROI de 340% em decisões de investimento",
    tags: ["ML", "Previsão", "Finanças", "Big Data"],
    link: "#"
  },
  {
    title: "Plataforma IA Educacional",
    description: "Desenvolvimento de ecossistema personalizado de aprendizado adaptativo que utiliza IA para criar percursos educacionais individualizados em tempo real.",
    impact: "Melhoria de 65% na retenção de conhecimento e 40% de redução no tempo de aprendizado",
    tags: ["EdTech", "Personalização", "LLMs", "Analytics"],
    link: "#"
  },
  {
    title: "Assistente Conversacional E-commerce",
    description: "Assistente virtual inteligente que compreende contexto e intenção do usuário, oferecendo recomendações personalizadas e suporte especializado.",
    impact: "Aumento de 23% na conversão e redução de 18% em devoluções",
    tags: ["E-commerce", "Chatbot", "NLP", "Recomendação"],
    link: "#"
  },
  {
    title: "Sistema de Forecast Neural",
    description: "Arquitetura de IA para previsão de demanda em tempo real, integrando dados de vendas, sazonalidade e fatores externos para otimização da cadeia.",
    impact: "Redução de 31% em custos operacionais e 45% de melhoria na precisão de estoque",
    tags: ["Supply Chain", "Previsão", "Otimização", "IoT"],
    link: "#"
  },
  {
    title: "UX Conversacional Bancária",
    description: "Redesenho completo da experiência digital bancária utilizando interfaces conversacionais inteligentes e análise comportamental avançada.",
    impact: "Aumento de 42% na satisfação do cliente e 28% na adoção de produtos digitais",
    tags: ["Banking", "UX", "NLP", "Behavioral"],
    link: "#"
  }
];

export default PortfolioSection;
