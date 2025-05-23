
import React from 'react';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center font-serif">
          <span className="gold-text-gradient">Portfólio</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard 
              key={index}
              title={item.title}
              description={item.description}
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
  tags, 
  link 
}: { 
  title: string; 
  description: string; 
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
      <div className="glass-card h-full p-6 hover:transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(76,201,240,0.2)] transition-all duration-300">
        <h3 className="text-2xl font-bold mb-4 group-hover:purple-text-gradient transition-all">{title}</h3>
        <p className="text-white/70 mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-3 py-1 rounded-full bg-aix-purple/20 text-aix-cyan border border-aix-purple/30"
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
    title: "Automação de Atendimento Multicanal",
    description: "Sistema de atendimento integrado com IA para grande operadora de telecomunicações, reduzindo tempo médio de resolução em 47%.",
    tags: ["GPT-4", "Automação", "Multicanal"],
    link: "#"
  },
  {
    title: "Análise Preditiva de Mercado",
    description: "Implementação de modelo de machine learning para prever tendências de mercado com precisão de 83% para empresa do setor financeiro.",
    tags: ["Machine Learning", "Previsão", "Finanças"],
    link: "#"
  },
  {
    title: "Plataforma de IA Educacional",
    description: "Desenvolvimento de sistema personalizado de aprendizado adaptativo que utiliza IA para criar percursos educacionais individualizados.",
    tags: ["EdTech", "Personalização", "LLMs"],
    link: "#"
  },
  {
    title: "Chatbot Estratégico para E-commerce",
    description: "Assistente virtual inteligente que aumentou a taxa de conversão em 23% e reduziu devoluções em 18% através de recomendações personalizadas.",
    tags: ["E-commerce", "Chatbot", "NLP"],
    link: "#"
  },
  {
    title: "Sistema de Forecast de Demanda",
    description: "Arquitetura de IA para previsão de demanda em tempo real, otimizando cadeia de suprimentos e reduzindo custos operacionais em 31%.",
    tags: ["Supply Chain", "Previsão", "Otimização"],
    link: "#"
  },
  {
    title: "UX Conversacional para Setor Bancário",
    description: "Redesenho completo da experiência digital bancária utilizando interfaces conversacionais inteligentes, aumentando satisfação do cliente em 42%.",
    tags: ["Banking", "UX", "NLP"],
    link: "#"
  }
];

export default PortfolioSection;
