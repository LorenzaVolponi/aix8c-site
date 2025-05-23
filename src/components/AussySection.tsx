
import React, { useEffect, useRef } from 'react';

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
    <section id="aussy" className="py-24 relative min-h-screen flex items-center bg-aix-darkgray overflow-hidden">
      <div className="absolute inset-0 bg-neural-gradient opacity-40 z-0"></div>
      
      {/* Partículas Flutuantes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 rounded-full bg-aix-cyan/30 animate-pulse-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto relative">
          {/* Card Glassmorphism Principal */}
          <div className="glass-card shimmer-border animate-float p-12 md:p-16 relative overflow-hidden">
            {/* Moeda 3D Neural */}
            <div ref={coinRef} className="relative w-36 h-36 mx-auto mb-12 coin-3d">
              <div className="coin-face absolute inset-0 rounded-full bg-gradient-gold flex items-center justify-center shadow-2xl">
                <div className="text-black text-6xl animate-neural-pulse">🧠</div>
              </div>
              <div className="coin-face coin-back absolute inset-0 rounded-full bg-gradient-purple flex items-center justify-center shadow-2xl">
                <div className="text-white text-6xl animate-neural-pulse">💫</div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-serif">
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
    </section>
  );
};

export default AussySection;
