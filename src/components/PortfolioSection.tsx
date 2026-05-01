import React from 'react';
import { motion } from 'framer-motion';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative bg-aix-black overflow-hidden">
      <div className="absolute inset-0 bg-constellation opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center font-serif">
          <span className="gold-text-gradient">Casos de Transformação Digital</span>
        </h2>
        <p className="text-center text-white/75 mb-16 max-w-2xl mx-auto">
          Work grid inspirado em experiências cinematográficas: grandes previews, sobreposição editorial e CTA magnético.
        </p>

        <div className="space-y-12">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.title}
              className="portfolio-case group relative overflow-hidden rounded-[28px] border border-white/15"
              initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.05, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="portfolio-media-wrap">
                <img src={item.image} alt={item.title} className="portfolio-image w-full h-[360px] md:h-[520px] object-cover" loading="lazy" />
              </div>
              <div className="portfolio-overlay absolute inset-0" />

              <div className={`absolute inset-0 z-10 p-8 md:p-14 flex ${index % 2 ? 'items-end justify-end text-right' : 'items-end justify-start text-left'}`}>
                <div className="max-w-2xl">
                  <p className="text-aix-gold font-mono text-xs md:text-sm mb-3 tracking-[0.22em] uppercase">
                    {String(index + 1).padStart(2, '0')} • {item.result}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif leading-tight">{item.title}</h3>
                  <p className="text-white/85 mb-5 text-base md:text-lg">{item.description}</p>
                  <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 ? 'justify-end' : 'justify-start'}`}>
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-2 rounded-full bg-black/55 border border-white/20 backdrop-blur-sm">{tag}</span>
                    ))}
                  </div>
                  <button data-magnetic className="portfolio-cta w-fit px-7 py-3 rounded-full border border-white/45 bg-black/45 backdrop-blur-md text-white hover:border-aix-gold">
                    Ver Caso
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const portfolioItems = [
  { title: 'Automação Neural Multicanal', description: 'Sistema de atendimento integrado com IA para grande operadora, com roteamento inteligente e contexto contínuo.', result: 'Redução de 47% no tempo de resolução', tags: ['GPT-4', 'Automação', 'NLP'], image: '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png' },
  { title: 'Modelo Preditivo Financeiro', description: 'Arquitetura de ML para antecipar movimentos de mercado com ingestão de múltiplas fontes em tempo real.', result: 'ROI de 340% em decisões de investimento', tags: ['ML', 'Finanças', 'Forecast'], image: '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png' },
  { title: 'Plataforma IA Educacional', description: 'Ecossistema adaptativo de aprendizado personalizado com trilhas dinâmicas por perfil comportamental.', result: '65% de melhoria na retenção', tags: ['EdTech', 'LLMs', 'Analytics'], image: '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png' },
  { title: 'Assistente Conversacional E-commerce', description: 'Assistente com intenção contextual e recomendação personalizada no funil de compra.', result: 'Aumento de 23% na conversão', tags: ['E-commerce', 'Chatbot', 'Recomendação'], image: '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png' },
  { title: 'Sistema de Forecast Neural', description: 'Previsão de demanda com sazonalidade, sinais externos e otimização da cadeia.', result: '31% de redução em custos operacionais', tags: ['Supply Chain', 'Forecast', 'Otimização'], image: '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png' },
  { title: 'UX Conversacional Bancária', description: 'Redesign da experiência bancária com interfaces conversacionais inteligentes.', result: '42% de aumento em satisfação', tags: ['Banking', 'UX', 'NLP'], image: '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png' }
];

export default PortfolioSection;
