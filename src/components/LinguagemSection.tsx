import React from 'react';

const eixos = [
  { titulo: 'Verbo', texto: 'Falas curtas, densas e ritualísticas.' },
  { titulo: 'Imagem', texto: 'Contrastes, textura e presença sensorial.' },
  { titulo: 'Ritmo', texto: 'Pausas que abrem espaço para significado.' }
];

const LinguagemSection = () => (
  <section id="linguagem" className="py-24 bg-gradient-to-b from-aix-black to-aix-purple-dark/30">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center gold-text-gradient">A linguagem</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {eixos.map((eixo) => (
          <div key={eixo.titulo} className="glass-card p-7">
            <h3 className="text-2xl font-semibold text-aix-cyan mb-3">{eixo.titulo}</h3>
            <p className="text-white/85 leading-relaxed">{eixo.texto}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LinguagemSection;
