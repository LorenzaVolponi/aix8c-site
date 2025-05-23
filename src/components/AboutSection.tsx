
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-serif">
            <span className="gold-text-gradient">Sobre</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Timeline element */}
            <div className="col-span-1 relative hidden md:flex justify-center">
              <div className="w-px h-full bg-gradient-to-b from-aix-gold via-aix-purple to-aix-cyan absolute left-1/2 transform -translate-x-1/2"></div>
              
              {timelineNodes.map((node, index) => (
                <div 
                  key={index}
                  className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-aix-black border border-white/20 z-10 left-1/2 transform -translate-x-1/2"
                  style={{ top: `${(index + 1) * 25 - 10}%` }}
                >
                  {node.icon}
                </div>
              ))}
            </div>
            
            {/* Content blocks */}
            <div className="col-span-2 space-y-16">
              <ContentBlock
                title="Visão Estratégica de IA"
                content="Especialista em identificar oportunidades para implementação de soluções de Inteligência Artificial que gerem resultados mensuráveis. Tradução de necessidades de negócio em arquiteturas tecnológicas eficientes."
              />
              
              <ContentBlock
                title="Automação de Processos"
                content="Desenvolvimento de sistemas inteligentes para automatizar fluxos operacionais complexos, reduzindo custos e aumentando eficiência. Integração perfeita entre sistemas legados e tecnologias emergentes."
              />
              
              <ContentBlock
                title="UX Conversacional"
                content="Criação de interfaces de conversação naturais que transformam a experiência do usuário. Design de prompts e jornadas de interação que convergem para objetivos estratégicos."
              />
              
              <ContentBlock
                title="Análise Preditiva"
                content="Implementação de modelos de machine learning para antecipar tendências e comportamentos. Transformação de dados em insights acionáveis para tomada de decisão."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContentBlock = ({ title, content }: { title: string; content: string }) => (
  <div className="glass-card p-6 hover:shadow-[0_0_15px_rgba(76,201,240,0.15)] transition-all duration-300">
    <h3 className="text-2xl font-bold mb-3 purple-text-gradient">{title}</h3>
    <p className="text-white/80 leading-relaxed">{content}</p>
  </div>
);

const timelineNodes = [
  {
    icon: <div className="text-aix-gold text-lg">⚙️</div>
  },
  {
    icon: <div className="text-aix-cyan text-lg">👁️</div>
  },
  {
    icon: <div className="text-aix-purple-light text-lg">💬</div>
  },
  {
    icon: <div className="text-aix-gold text-lg">📊</div>
  }
];

export default AboutSection;
