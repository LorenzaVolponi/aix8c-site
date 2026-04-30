import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  impact: string;
  tags: string[];
  link: string;
  accent: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Comando Multicanal de Atendimento IA',
    category: 'Telecom',
    description:
      'Redesenho da camada conversacional com jornadas orquestradas em WhatsApp, web e voz para atendimento de alta escala.',
    impact: '−47% no tempo médio de resolução · +68% na satisfação.',
    tags: ['AI Agents', 'Omnichannel', 'NLP', 'CX'],
    link: '#',
    accent: '#06b6d4'
  },
  {
    title: 'Motor Preditivo para Decisão Financeira',
    category: 'Fintech',
    description:
      'Modelo preditivo em tempo real com ingestão contínua de sinais de mercado e priorização de decisões críticas.',
    impact: '83% de precisão preditiva · ROI de 340%.',
    tags: ['Forecast', 'ML Ops', 'Realtime', 'Risk'],
    link: '#',
    accent: '#8b5cf6'
  },
  {
    title: 'Plataforma Adaptativa de Aprendizado',
    category: 'EdTech',
    description:
      'Experiência educacional personalizada por IA com trilhas dinâmicas e feedback imediato por perfil cognitivo.',
    impact: '+65% de retenção · −40% no tempo de aprendizado.',
    tags: ['LLM', 'Personalização', 'Analytics', 'Learning'],
    link: '#',
    accent: '#f59e0b'
  },
  {
    title: 'Assistente de Conversão para E-commerce',
    category: 'Retail',
    description:
      'Camada conversacional com contexto de catálogo e comportamento de compra para aumentar conversão com menos atrito.',
    impact: '+23% em conversão · −18% em devoluções.',
    tags: ['Retail AI', 'Conversational UX', 'Recsys', 'CRO'],
    link: '#',
    accent: '#22c55e'
  }
];

const PortfolioRow = ({ item, index }: { item: PortfolioItem; index: number }) => (
  <motion.a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block"
    whileHover={{ scale: 1.005 }}
    transition={{ duration: 0.25 }}
  >
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-sm">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `linear-gradient(120deg, ${item.accent}20, transparent 45%, #00000040 100%)`
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.25em] text-aix-cyan/80 mb-3">
            {String(index + 1).padStart(2, '0')} · {item.category}
          </p>
          <h3 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-white group-hover:text-aix-gold transition-colors duration-300">
            {item.title}
          </h3>
        </div>

        <div className="lg:col-span-5">
          <p className="text-white/75 text-sm md:text-base leading-relaxed mb-4">{item.description}</p>
          <p className="text-aix-gold text-sm font-semibold mb-4">{item.impact}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/85"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.a>
);

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <motion.section ref={sectionRef} id="portfolio" className="py-24 md:py-32 relative bg-aix-black overflow-hidden">
      <motion.div className="absolute inset-0 bg-constellation opacity-20" style={{ y: backgroundY }} />
      <div className="absolute inset-0 bg-gradient-to-b from-aix-black via-[#0b0b16] to-aix-black" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal direction="scale" delay={0.2}>
          <div className="mb-12 md:mb-16 text-center">
            <p className="uppercase tracking-[0.3em] text-xs text-aix-cyan/80 mb-4">Work Showcase</p>
            <h2 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
              <span className="gold-text-gradient">Projetos com linguagem</span>
              <br />
              <span className="text-white">cinemática e foco em resultado</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-6 md:space-y-8">
          {portfolioItems.map((item, index) => (
            <ScrollReveal key={item.title} direction="up" delay={index * 0.07}>
              <PortfolioRow item={item} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
