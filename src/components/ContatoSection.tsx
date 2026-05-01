import React from 'react';

const ContatoSection = () => {
  return (
    <section id="contato" className="py-24 bg-aix-black relative overflow-hidden border-t border-aix-purple/20">
      <div className="absolute inset-0 bg-constellation opacity-20" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
          <span className="gold-text-gradient">Vamos construir o próximo salto?</span>
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto text-lg mb-10">
          Agende uma conversa estratégica para transformar processos, experiência e resultado com IA aplicada ao seu contexto.
        </p>
        <a
          data-magnetic
          href="https://calendly.com"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-aix-gold to-yellow-400 text-black font-semibold hover:opacity-90 transition"
        >
          Agendar reunião
        </a>
      </div>
    </section>
  );
};

export default ContatoSection;
