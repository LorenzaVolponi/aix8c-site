import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '../ScrollReveal';



const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <motion.section
      ref={sectionRef}
      id="sobre"
      className="py-24 relative overflow-hidden bg-aix-black"
    >
      <motion.div
        className="absolute inset-0 bg-constellation opacity-30"
        style={{ y: parallaxY }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="scale" delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center font-serif">
              <span className="gold-text-gradient">Arquiteta de Futuros Digitais</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Timeline */}
            <div className="col-span-1 hidden lg:flex justify-center relative">
              <ScrollReveal direction="left" delay={0.4}>
                <motion.div
                  className="w-px h-full bg-gradient-to-b from-aix-gold via-aix-purple to-aix-cyan absolute left-1/2 transform -translate-x-1/2"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  viewport={{ once: true }}
                />
                {timelineNodes.map((node, index) => (
                  <motion.div
                    key={index}
                    className="absolute flex items-center justify-center w-16 h-16 rounded-full bg-aix-black border-2 border-aix-cyan z-10 left-1/2 transform -translate-x-1/2 shadow-lg"
                    style={{ top: `${(index + 1) * 20}%` }}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.8 + index * 0.2,
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{
                      scale: 1.2,
                      boxShadow: '0 0 25px rgba(6, 182, 212, 0.5)',
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-2xl">{node.icon}</span>
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-aix-gold opacity-0"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </motion.div>
                ))}
              </ScrollReveal>
            </div>

            {/* Content blocks */}
            <div className="col-span-2 space-y-16">
              {contentBlocks.map((block, index) => (
                <ScrollReveal key={index} direction="right" delay={0.2 + index * 0.1}>
                  <ContentBlock {...block} index={index} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const ContentBlock = ({
  title,
  content,
  accent,
  index,
}: {
  title: string;
  content: string;
  accent: 'cyan' | 'purple' | 'gold';
  index: number;
}) => {
  const accentClasses = {
    cyan: 'border-aix-cyan hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]',
    purple: 'border-aix-purple hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]',
    gold: 'border-aix-gold hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]',
  };

  const glowColors = {
    cyan: 'rgba(6, 182, 212, 0.2)',
    purple: 'rgba(139, 92, 246, 0.2)',
    gold: 'rgba(251, 191, 36, 0.2)',
  };

  return (
    <motion.div
      className={`glass-card p-8 transition-all duration-700 ${accentClasses[accent]} relative overflow-hidden`}
      whileHover={{
        scale: 1.02,
        y: -5,
      }}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColors[accent]}, transparent 70%)`,
        }}
        whileHover={{ opacity: 1 }}
      />

      <motion.h3
        className="text-2xl font-bold mb-4 purple-text-gradient font-serif relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + index * 0.1 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-white/85 leading-relaxed text-lg relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 + index * 0.1 }}
      >
        {content}
      </motion.p>
    </motion.div>
  );
};

const timelineNodes = [
  { icon: '🧠' },
  { icon: '⚡' },
  { icon: '🎯' },
  { icon: '🚀' },
];

const contentBlocks = [
  {
    title: 'Visão Estratégica em IA',
    content:
      'Especialista em identificar pontos de inflexão onde a Inteligência Artificial pode gerar transformações exponenciais. Tradução de necessidades complexas de negócio em arquiteturas tecnológicas que entregam resultados mensuráveis e impacto sustentável.',
    accent: 'cyan' as const,
  },
  {
    title: 'Automação Cognitiva',
    content:
      'Desenvolvimento de ecossistemas inteligentes que não apenas automatizam processos, mas evoluem continuamente. Criação de fluxos que integram sistemas legados com tecnologias emergentes, gerando eficiência operacional e vantagem competitiva.',
    accent: 'purple' as const,
  },
  {
    title: 'UX Conversacional Avançada',
    content:
      'Arquitetura de interfaces de diálogo que transcendem a interação tradicional. Design de experiências conversacionais que conectam objetivos estratégicos com necessidades humanas, criando jornadas intuitivas e resultados excepcionais.',
    accent: 'gold' as const,
  },
  {
    title: 'Inteligência Preditiva',
    content:
      'Implementação de modelos de machine learning que antecipam tendências e comportamentos com precisão científica. Transformação de dados em insights acionáveis que orientam decisões estratégicas e aceleram crescimento.',
    accent: 'cyan' as const,
  },
];

export default AboutSection;
