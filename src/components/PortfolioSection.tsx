import React, { useState } from 'react';
import { motion } from 'framer-motion';

type PortfolioMode = 'business' | 'technical';

type PortfolioItem = {
  title: string;
  description: string;
  result: string;
  tags: string[];
  image: string;
  gradient: string;
  business: string[];
  technical: string[];
};

const PortfolioSection = () => {
  const [mode, setMode] = useState<PortfolioMode>('business');

  return (
    <section id="portfolio" className="py-24 relative bg-aix-black overflow-hidden">
      <motion.div
        className="section-cinematic-mask absolute top-0 left-0 right-0 h-28 z-20 pointer-events-none"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.1 }}
      />
      <div className="absolute inset-0 bg-constellation opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center font-serif">
          <span className="gold-text-gradient">Casos de Transformação Digital</span>
        </h2>
        <p className="text-center text-white/75 mb-8 max-w-2xl mx-auto">
          AI Command Deck: cada projeto como missão com leitura executiva e técnica.
        </p>

        <div className="flex justify-center gap-3 mb-12">
          <button
            type="button"
            onClick={() => setMode('business')}
            className={`px-5 py-2 rounded-full border transition-colors ${mode === 'business' ? 'bg-aix-gold text-black border-aix-gold' : 'border-white/30 text-white/85 hover:border-aix-gold/70'}`}
          >
            Business Impact
          </button>
          <button
            type="button"
            onClick={() => setMode('technical')}
            className={`px-5 py-2 rounded-full border transition-colors ${mode === 'technical' ? 'bg-aix-cyan text-black border-aix-cyan' : 'border-white/30 text-white/85 hover:border-aix-cyan/70'}`}
          >
            Technical Architecture
          </button>
        </div>

        <div className="portfolio-rail overflow-x-auto pb-6 -mx-2 px-2 md:mx-0 md:px-0">
          <div className="flex gap-6 md:gap-8 min-w-max md:min-w-0 md:flex-col">
            {portfolioItems.map((item, index) => (
              <motion.article
                key={item.title}
                className="portfolio-case group relative overflow-hidden rounded-[28px] border border-white/15 w-[88vw] md:w-full md:max-w-none min-h-[420px]"
                initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div
                  className="portfolio-bg absolute inset-0"
                  style={{
                    backgroundImage: `${item.gradient}, url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="portfolio-overlay absolute inset-0" />

                <div className={`absolute inset-0 z-10 p-8 md:p-14 flex ${index % 2 ? 'items-end justify-end text-right' : 'items-end justify-start text-left'}`}>
                  <div className="max-w-2xl">
                    <p className="text-aix-gold font-mono text-xs md:text-sm mb-3 tracking-[0.22em] uppercase">
                      {String(index + 1).padStart(2, '0')} • {item.result}
                    </p>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif leading-tight">{item.title}</h3>
                    <p className="text-white/85 mb-4 text-base md:text-lg">{item.description}</p>

                    <ul className={`space-y-1 text-sm mb-5 ${mode === 'business' ? 'text-white/85' : 'text-aix-cyan/95'}`}>
                      {item[mode].map((point) => (
                        <li key={point}>{mode === 'business' ? '•' : '▸'} {point}</li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 ? 'justify-end' : 'justify-start'}`}>
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-2 rounded-full bg-black/55 border border-white/20 backdrop-blur-sm">{tag}</span>
                      ))}
                    </div>
                    <a href="#contato" data-magnetic className="portfolio-cta inline-flex w-fit px-7 py-3 rounded-full border border-white/45 bg-black/45 backdrop-blur-md text-white hover:border-aix-gold">
                      Abrir Dossiê
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Orchestrator AI — Missão Enterprise',
    description: 'Orquestração multiagente com governança de contexto, roteamento e observabilidade para operações críticas.',
    result: 'Escala operacional com controle e segurança',
    tags: ['Multi-agent', 'Governance', 'Observability', 'LLMOps'],
    image: '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png',
    gradient: 'radial-gradient(circle at 20% 20%, rgba(6,182,212,.55), rgba(2,6,23,.85) 55%)',
    business: ['Redução de gargalos manuais de operação', 'Padronização de decisões de agentes', 'Aumento de confiabilidade para escala'],
    technical: ['Orquestrador central com regras de roteamento', 'Camada de memória contextual', 'Telemetria para tracing e avaliação contínua'],
  },
  {
    title: 'Clinic Intuition AI — Missão Healthcare',
    description: 'Assistência inteligente para jornadas clínicas, com foco em precisão de contexto e segurança de dados.',
    result: 'Experiência clínica mais rápida e assertiva',
    tags: ['Healthcare AI', 'Data Privacy', 'Conversational'],
    image: '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png',
    gradient: 'radial-gradient(circle at 70% 30%, rgba(139,92,246,.55), rgba(2,6,23,.85) 55%)',
    business: ['Melhoria da experiência de atendimento', 'Menor tempo de resposta ao paciente', 'Ganhos operacionais na equipe'],
    technical: ['Fluxos de prompt controlados por intenção', 'Arquitetura preparada para compliance', 'Design de fallback para segurança operacional'],
  },
  {
    title: 'Crime Scene Mapper AI — Missão Forense',
    description: 'Plataforma de análise e mapeamento com IA para leitura de cenários complexos e síntese investigativa.',
    result: 'Leitura estratégica com suporte analítico',
    tags: ['Forensic AI', 'Mapping', 'Pattern Analysis'],
    image: '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png',
    gradient: 'radial-gradient(circle at 50% 0%, rgba(245,158,11,.45), rgba(2,6,23,.85) 62%)',
    business: ['Acelera análise de informação crítica', 'Aumenta consistência de interpretação', 'Apoia tomada de decisão técnica'],
    technical: ['Pipeline de pré-processamento de evidências', 'Camada de inferência orientada a padrões', 'Output estruturado para investigação'],
  },
];

export default PortfolioSection;
