import React from 'react';

const GaleriaSensorialSection = () => (
  <section id="galeria" className="py-24 bg-aix-black">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Galeria sensorial</h2>
      <p className="text-white/70 text-center mb-12">Texturas, luzes e símbolos em composição contínua.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="h-52 rounded-2xl border border-white/15 bg-gradient-to-br from-aix-purple/20 via-transparent to-aix-cyan/20" />
        ))}
      </div>
    </div>
  </section>
);

export default GaleriaSensorialSection;
