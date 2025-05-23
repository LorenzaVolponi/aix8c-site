
import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-aix-black">
      <div className="absolute inset-0 bg-constellation opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center font-serif">
            <span className="gold-text-gradient">Arquiteta de Futuros Digitais</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Timeline Neural */}
            <div className="col-span-1 relative hidden lg:flex justify-center">
              <div className="w-px h-full bg-gradient-to-b from-aix-gold via-aix-purple to-aix-cyan absolute left-1/2 transform -translate-x-1/2"></div>
              
              {timelineNodes.map((node, index) => (
                <div 
                  key={index}
                  className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-aix-black border-2 border-aix-cyan z-10 left-1/2 transform -translate-x-1/2 animate-neural-pulse"
                  style={{ top: `${(index + 1) * 20}%` }}
                >
                  <div className="text-2xl">{node.icon}</div>
                </div>
              ))}
            </div>
            
            {/* Blocos de Conteúdo */}
            <div className="col-span-2 space-y-16">
              <ContentBlock
                title="Visão Estratégica em IA"
                content="Especialista em identificar pontos de inflexão onde a Inteligência Artificial pode gerar transformações exponenciais. Tradução de necessidades complexas de negócio em arquiteturas tecnológicas que entregam resultados mensuráveis e impacto sustentável."
                accent="cyan"
              />
              
              <ContentBlock
                title="Automação Cognitiva"
                content="Desenvolvimento de ecossistemas inteligentes que não apenas automatizam processos, mas evoluem continuamente. Criação de fluxos que integram sistemas legados com tecnologias emergentes, gerando eficiência operacional e vantagem competitiva."
                accent="purple"
              />
              
              <ContentBlock
                title="UX Conversacional Avançada"
                content="Arquitetura de interfaces de diálogo que transcendem a interação tradicional. Design de experiências conversacionais que conectam objetivos estratégicos com necessidades humanas, criando jornadas intuitivas e resultados excepcionais."
                accent="gold"
              />
              
              <ContentBlock
                title="Inteligência Preditiva"
                content="Implementação de modelos de machine learning que antecipam tendências e comportamentos com precisão científica. Transformação de dados em insights acionáveis que orientam decisões estratégicas e aceleram crescimento."
                accent="cyan"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContentBlock = ({ 
  title, 
  content, 
  accent 
}: { 
  title: string; 
  content: string; 
  accent: 'cyan' | 'purple' | 'gold' 
}) => {
  const accentClasses = {
    cyan: 'border-aix-cyan hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]',
    purple: 'border-aix-purple hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]',
    gold: 'border-aix-gold hover:shadow-[0_0_25px_rgba(251,191,36,0.3)]'
  };

  return (
    <div className={`glass-card p-8 hover:transform hover:scale-105 transition-all duration-500 ${accentClasses[accent]}`}>
      <h3 className="text-2xl font-bold mb-4 purple-text-gradient font-serif">{title}</h3>
      <p className="text-white/85 leading-relaxed text-lg">{content}</p>
    </div>
  );
};

const timelineNodes = [
  { icon: '🧠' },
  { icon: '⚡' },
  { icon: '🎯' },
  { icon: '🚀' }
];

export default AboutSection;
