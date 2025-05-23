
import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const AussySection = () => {
  const coinRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-rotate-coin');
          }
        });
      },
      { threshold: 0.5 }
    );
    
    if (coinRef.current) {
      observer.observe(coinRef.current);
    }
    
    return () => {
      if (coinRef.current) {
        observer.unobserve(coinRef.current);
      }
    };
  }, []);
  
  return (
    <section id="aussy" className="py-24 relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Fundo de constelação neural */}
      <div className="absolute inset-0 bg-constellation opacity-60"></div>
      
      {/* Partículas Flutuantes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-300/40 animate-pulse-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header com título principal */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white font-serif">
              Aussy AI
            </h2>
            <p className="text-lg md:text-xl text-blue-200 leading-relaxed max-w-3xl mx-auto">
              Aussy, é o primeiro mascote brasileiro de IA e Engenharia de Prompt, uma 
              inovação futurista da AIX8C! Através de soluções tecnológicas inovadoras, 
              temos potencializar seu business com 77% de cortes de gastos. Aim de 
              conectar humanos e máquinas, de forma criativa e eficiente. Transforme seu 
              negócio com a tecnologia do futuro! 🚀
            </p>
          </div>

          {/* Moeda 3D Neural */}
          <div ref={coinRef} className="relative w-32 h-32 mx-auto mb-12 coin-3d">
            <div className="coin-face absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center shadow-2xl border-4 border-yellow-300/30">
              <div className="text-white text-5xl animate-neural-pulse">🤖</div>
            </div>
            <div className="coin-face coin-back absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl border-4 border-blue-300/30">
              <div className="text-white text-5xl animate-neural-pulse">🧠</div>
            </div>
          </div>

          {/* Seção de aprendizado */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-200 mb-8">
              Confira abaixo como o Aussy pode auxiliar seu aprendizado:
            </h3>
          </div>

          {/* Cards dos serviços Aussy */}
          <div className="space-y-8">
            <AussyServiceCard
              number="01"
              title="Aussy Instructor Obsidian"
              description="Especialista em ajudar em seu aprendizado na ferramenta"
              linkText="Acessar"
              link="https://aussy-instructor-obsidian.com"
            />
            
            <AussyServiceCard
              number="02"
              title="Aussy Creator Content Supreme"
              description="Especialista em criar conteúdos de sucesso para suas mídias sociais"
              linkText="Acessar"
              link="https://aussy-creator-content.com"
            />
            
            <AussyServiceCard
              number="03"
              title="Aussy Smart Business"
              description="Especialista em analisar negócios, criar estratégias de vendas e desenvolver propostas para clientes"
              linkText="Acessar"
              link="https://aussy-smart-business.com"
            />
          </div>

          {/* Card principal com a dualidade */}
          <div className="mt-16">
            <div className="glass-card shimmer-border animate-float p-12 md:p-16 relative overflow-hidden">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-serif">
                <span className="gold-text-gradient">Aussy</span>
                <span className="mx-3 text-white">—</span>
                <span className="purple-text-gradient">As duas faces de uma moeda</span>
              </h2>
              
              <div className="text-center mb-10">
                <p className="text-2xl mb-8 font-serif text-white/90">Um nome. Dois universos.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="p-6 bg-aix-cyan/10 rounded-2xl border border-aix-cyan/30">
                    <p className="text-lg font-mono text-aix-cyan mb-2">RAZÃO ALGORÍTMICA</p>
                    <p className="text-white/90">De um lado, a lógica implacável das máquinas, processando dados em velocidade quântica.</p>
                  </div>
                  <div className="p-6 bg-aix-gold/10 rounded-2xl border border-aix-gold/30">
                    <p className="text-lg font-serif text-aix-gold mb-2">ESSÊNCIA CRIATIVA</p>
                    <p className="text-white/90">Do outro, a sensibilidade que só uma alma criativa carrega, interpretando nuances humanas.</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <p className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-cyber bg-clip-text text-transparent bg-[length:400%_100%] animate-shimmer">
                    Aussy é o equilíbrio entre precisão e expressão.
                  </span>
                </p>
                <p className="text-xl text-white/90 font-serif">
                  Estratégia de dados com essência humana.
                </p>
              </div>
              
              <div className="text-center p-8 bg-aix-black/30 rounded-2xl border border-white/10">
                <p className="text-lg italic text-white/80 leading-relaxed">
                  Porque toda inteligência, por mais artificial que seja,<br />
                  precisa refletir as duas faces de uma moeda:<br />
                  <span className="font-bold text-2xl gold-text-gradient">Razão</span>
                  <span className="mx-4 text-white">e</span>
                  <span className="font-bold text-2xl purple-text-gradient">Emoção</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AussyServiceCard = ({ 
  number, 
  title, 
  description, 
  linkText, 
  link 
}: {
  number: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
}) => {
  return (
    <div className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-500 group">
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-gradient-purple flex items-center justify-center text-white font-bold text-xl">
            {number}
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:purple-text-gradient transition-all duration-300">
            {title}
          </h3>
          <p className="text-blue-200 text-lg leading-relaxed mb-4">
            {description}
          </p>
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-aix-cyan hover:text-white transition-all duration-300 font-semibold group/link"
          >
            <span className="mr-2">{linkText}</span>
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AussySection;
