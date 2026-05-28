import React from 'react';

const fragmentos = [
  'Uma memória que não cabe no relógio.',
  'Um brilho que retorna quando o mundo escurece.',
  'O instante em que o corpo entende antes da mente.',
  'A travessia entre o nome e o mistério.'
];

const FragmentosEternidadeSection = () => (
  <section id="fragmentos" className="py-24 bg-aix-black">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center purple-text-gradient">Fragmentos de Eternidade</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {fragmentos.map((texto) => (
          <article key={texto} className="glass-card p-8 text-white/90 leading-relaxed text-lg">
            {texto}
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FragmentosEternidadeSection;
