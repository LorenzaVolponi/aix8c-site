import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface PortfolioItem {
  title: string;
  category: string;
  year: string;
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
    year: '2026',
    description:
      'Jornadas orquestradas em WhatsApp, web e voz com roteamento inteligente e resposta contextual em escala.',
    impact: '−47% no TMA · +68% na satisfação.',
    tags: ['AI Agents', 'Omnichannel', 'NLP', 'CX'],
    link: '#',
    accent: '#06b6d4'
  },
  {
    title: 'Motor Preditivo para Decisão Financeira',
    category: 'Fintech',
    year: '2025',
    description:
      'Camada de previsão em tempo real para priorizar decisão e risco com sinais contínuos de mercado.',
    impact: '83% de precisão · ROI 340%.',
    tags: ['Forecast', 'ML Ops', 'Realtime', 'Risk'],
    link: '#',
    accent: '#8b5cf6'
  },
  {
    title: 'Plataforma Adaptativa de Aprendizado',
    category: 'EdTech',
    year: '2024',
    description:
      'Trilhas personalizadas por IA com feedback em tempo real e evolução por perfil cognitivo.',
    impact: '+65% retenção · −40% tempo de aprendizado.',
    tags: ['LLM', 'Learning', 'Analytics', 'Personalização'],
    link: '#',
    accent: '#f59e0b'
  },
  {
    title: 'Assistente de Conversão para E-commerce',
    category: 'Retail',
    year: '2023',
    description:
      'UX conversacional para descoberta de produtos, recomendação e suporte pós-venda com contexto.',
    impact: '+23% conversão · −18% devoluções.',
    tags: ['Retail AI', 'Conversational UX', 'Recsys', 'CRO'],
    link: '#',
    accent: '#22c55e'
  }
];

const WorkCard = ({ item, index }: { item: PortfolioItem; index: number }) => (
  <motion.a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group snap-start shrink-0 w-[88vw] sm:w-[72vw] lg:w-[54vw] xl:w-[46vw]"
    whileHover={{ y: -4 }}
    transition={{ duration: 0.25 }}
  >
    <article className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0c0d14]/90 p-5 md:p-7 min-h-[380px] md:min-h-[460px]">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 20% 10%, ${item.accent}45 0%, transparent 42%), linear-gradient(145deg, #0a0a0a 15%, #141727 60%, #0a0a0a 100%)`
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.26em] text-white/70 mb-3">
            {String(index + 1).padStart(2, '0')} · {item.category} · {item.year}
          </p>
          <h3 className="text-3xl md:text-5xl font-bold font-serif leading-tight text-white group-hover:text-aix-gold transition-colors">
            {item.title}
          </h3>
        </div>

        <div>
          <div className="mb-5 rounded-xl border border-white/15 bg-black/30 p-4">
            <div
              className="h-24 md:h-28 rounded-md border border-white/10"
              style={{
                background: `linear-gradient(110deg, ${item.accent}44 0%, transparent 55%), linear-gradient(160deg, #15182a 0%, #0b0b0b 100%)`
              }}
            />
          </div>
          <p className="text-white/80 leading-relaxed mb-3 text-sm md:text-base">{item.description}</p>
          <p className="text-aix-gold font-semibold mb-4 text-sm">{item.impact}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/25 bg-white/5 px-3 py-1.5 text-[11px] md:text-xs text-white/85">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  </motion.a>
);

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const { scrollXProgress } = useScroll({ container: scrollerRef });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
  const progressScale = useTransform(scrollXProgress, [0, 1], [0.08, 1]);

  return (
    <motion.section ref={sectionRef} id="portfolio" className="py-24 md:py-32 relative overflow-hidden bg-aix-black">
      <motion.div className="absolute inset-0 bg-constellation opacity-20" style={{ y: backgroundY }} />
      <div className="absolute inset-0 bg-gradient-to-b from-aix-black via-[#0a0b14] to-aix-black" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal direction="scale" delay={0.15}>
            <div className="mb-10 md:mb-12">
              <p className="uppercase tracking-[0.28em] text-xs text-aix-cyan/80 mb-3">Selected Work</p>
              <h2 className="text-4xl md:text-6xl font-bold font-serif leading-tight max-w-5xl">
                <span className="gold-text-gradient">Layout editorial + movimento</span>
                <br />
                <span className="text-white">no padrão premium de showcase</span>
              </h2>
            </div>
          </ScrollReveal>
        </div>

        <div ref={scrollerRef} className="overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory px-4 md:px-6 pb-4">
          <div className="flex gap-4 md:gap-6 w-max">
            {portfolioItems.map((item, index) => (
              <WorkCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 mt-4">
          <div className="h-[2px] w-full bg-white/10 overflow-hidden rounded-full">
            <motion.div className="h-full bg-gradient-to-r from-aix-cyan via-aix-gold to-aix-purple origin-left" style={{ scaleX: progressScale }} />
          </div>
          <p className="text-xs text-white/50 mt-2">Deslize horizontalmente para navegar pelos cases.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
