
import React from 'react';
import { Users, Zap, Target } from 'lucide-react';

const SobreNosSection = () => {
  return (
    <section id="sobre-nos" className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      <div className="absolute inset-0 bg-constellation opacity-40"></div>
      
      {/* Partículas Flutuantes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-300/30 animate-pulse-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-serif">
              Sobre Nós
            </h2>
            <p className="text-lg md:text-xl text-blue-200 leading-relaxed max-w-4xl mx-auto">
              Somos pioneiros em engenharia de prompt no Brasil, dedicados a democratizar o 
              conhecimento em IA e capacitar pessoas a criarem soluções impactantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard
              icon={<Users className="w-12 h-12" />}
              title="Pioneirismo"
              description="Liderando inovação em IA no Brasil"
            />
            
            <PillarCard
              icon={<Zap className="w-12 h-12" />}
              title="Inovação Constante"
              description="Sempre na vanguarda da tecnologia em IA"
            />
            
            <PillarCard
              icon={<Target className="w-12 h-12" />}
              title="Foco no Cliente"
              description="Soluções personalizadas para cada necessidade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const PillarCard = ({ 
  icon, 
  title, 
  description 
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="glass-card p-8 text-center hover:transform hover:scale-105 transition-all duration-500 group">
      <div className="mb-6 text-aix-cyan group-hover:text-white transition-colors duration-300 flex justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:purple-text-gradient transition-all duration-300">
        {title}
      </h3>
      <p className="text-blue-200 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default SobreNosSection;
