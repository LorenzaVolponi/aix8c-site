
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
    <section id="aussy" className="py-24 relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-neural-gradient opacity-30 z-0"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
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
        <div className="max-w-4xl mx-auto relative">
          {/* The glassmorphism card */}
          <div className="glass-card shimmer-border animate-float p-10 md:p-14">
            {/* 3D Coin */}
            <div ref={coinRef} className="relative w-32 h-32 mx-auto mb-10">
              <div className="absolute inset-0 rounded-full bg-gradient-gold"></div>
              <div className="absolute inset-0 rounded-full flex items-center justify-center bg-gradient-to-r from-aix-gold to-aix-gold-light">
                <div className="text-black text-5xl">🧠</div>
              </div>
              <div className="absolute inset-0 backface-hidden rounded-full flex items-center justify-center bg-gradient-to-r from-aix-purple to-aix-cyan" style={{ transform: 'rotateY(180deg)' }}>
                <div className="text-white text-5xl">❤️</div>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              <span className="font-serif gold-text-gradient">Aussy</span>
              <span className="mx-2 text-white">—</span>
              <span className="purple-text-gradient">As duas faces de uma moeda</span>
            </h2>
            
            <div className="text-center mb-8">
              <p className="text-xl mb-6">Um nome. Dois universos.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="font-mono">
                  <p className="mb-4 text-aix-cyan">De um lado, a lógica implacável das máquinas.</p>
                </div>
                <div className="font-serif">
                  <p className="mb-4 text-aix-gold-light">Do outro, a sensibilidade que só uma alma criativa carrega.</p>
                </div>
              </div>
            </div>
            
            <p className="text-center text-xl font-bold mb-8">
              <span className="bg-gradient-cyber bg-clip-text text-transparent bg-[length:400%_100%] animate-shimmer">
                Aussy é o equilíbrio entre precisão e expressão.
              </span>
              <br />
              <span className="text-white/80">Estratégia de dados com essência humana.</span>
            </p>
            
            <p className="text-center italic text-white/70">
              Porque toda inteligência, por mais artificial que seja,<br />
              precisa refletir as duas faces de uma moeda:<br />
              <span className="font-bold text-white">Razão e Emoção.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AussySection;
