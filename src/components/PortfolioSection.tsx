
import React from 'react';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative bg-aix-black overflow-hidden">
      <div className="absolute inset-0 bg-constellation opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center font-serif">
          <span className="gold-text-gradient">Casos de Transformação Digital</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard 
              key={index}
              title={item.title}
              description={item.description}
              impact={item.impact}
              tags={item.tags}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = ({ 
  title, 
  description, 
  impact,
  tags, 
  link 
}: { 
  title: string; 
  description: string; 
  impact: string;
  tags: string[]; 
  link: string 
}) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block group"
    >
      <div className="glass-card h-full p-8 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-500 border border-aix-purple/20">
        <h3 className="text-2xl font-bold mb-4 group-hover:purple-text-gradient transition-all font-serif">{title}</h3>
        <p className="text-white/80 mb-4 leading-relaxed">{description}</p>
        
        <div className="mb-6 p-4 bg-aix-purple/10 rounded-lg border border-aix-purple/30">
          <p className="text-aix-gold font-bold text-sm">IMPACTO MENSURÁVEL:</p>
          <p className="text-white/90 text-sm mt-1">{impact}</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-3 py-2 rounded-full bg-aix-cyan/20 text-aix-cyan border border-aix-cyan/40 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
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
