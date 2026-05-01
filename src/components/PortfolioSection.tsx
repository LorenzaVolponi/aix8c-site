import React from 'react';
import { motion } from 'framer-motion';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative bg-aix-black overflow-hidden">
      <div className="absolute inset-0 bg-constellation opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center font-serif">
          <span className="gold-text-gradient">Casos de Transformação Digital</span>
        </h2>

        <div className="space-y-8">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.title}
              className="portfolio-work-row group relative overflow-hidden rounded-3xl border border-white/15"
              initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 0.9, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src={item.image} alt={item.title} className="portfolio-image w-full h-[320px] md:h-[430px] object-cover" loading="lazy" />
              <div className="portfolio-overlay absolute inset-0" />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-10">
                <p className="text-aix-gold font-mono text-sm mb-2">{String(index + 1).padStart(2, '0')} — {item.result}</p>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 font-serif">{item.title}</h3>
                <p className="text-white/85 max-w-2xl mb-5">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => <span key={tag} className="text-xs px-3 py-2 rounded-full bg-black/50 border border-white/20">{tag}</span>)}
                </div>
                <button data-magnetic className="w-fit px-6 py-3 rounded-full border border-white/40 bg-black/40 backdrop-blur-md text-white hover:border-aix-gold transition-colors">Ver Caso</button>
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
