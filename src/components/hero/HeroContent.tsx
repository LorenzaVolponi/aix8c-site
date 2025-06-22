
import React from 'react';
import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <div className="container mx-auto px-4 z-30 text-center relative">
      {/* Informações Pessoais - SEM ANIMAÇÃO, LEGÍVEL */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl text-aix-gold font-semibold mb-2 tracking-wide">
          Capitã da Nave AIX8C
        </h2>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-serif tracking-tight text-white">
          LORENZA VOLPONI
        </h1>
        
        <p className="text-lg md:text-xl text-cyan-300 font-light mb-3 tracking-wider">
          Pioneira em Engenharia de Prompts
        </p>
      </div>

      {/* ARQUITETA DE FUTUROS DIGITAIS - COM DESTAQUE */}
      <motion.div className="mb-8">
        <motion.h3 
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-aix-gold via-yellow-400 to-aix-gold bg-clip-text mb-4"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            backgroundSize: "200% 200%"
          }}
        >
          ARQUITETA DE FUTUROS DIGITAIS
        </motion.h3>
        
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-aix-gold to-transparent mx-auto mb-6" />
      </motion.div>

      {/* Frase Pessoal - LEGÍVEL */}
      <div className="mb-8">
        <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
          "Sou a soma infinita de ideias fora da caixa, unindo{" "}
          <span className="text-aix-gold font-medium">tecnologia</span>
          {" "}e{" "}
          <span className="text-aix-purple font-medium">emoção</span>
          . ✦"
        </p>
      </div>

      {/* Destaques Profissionais - LEGÍVEL */}
      <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
        {[
          { title: "Prompt Engineering", desc: "Líder mundial em otimização de IA" },
          { title: "Navegação Digital", desc: "Conduzindo expedições tecnológicas" },
          { title: "Inovação Criativa", desc: "Unindo arte e inteligência artificial" }
        ].map((item, index) => (
          <div
            key={index}
            className="text-center bg-white/5 backdrop-blur-sm border border-aix-gold/20 rounded-lg p-4"
          >
            <h5 className="text-aix-gold font-semibold text-base mb-2">{item.title}</h5>
            <p className="text-white/70 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Descrição Profissional - LEGÍVEL */}
      <div className="mb-12">
        <p className="text-white/90 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed font-light">
          Transformando dados em estratégias, algoritmos em resultados e desafios complexos em{" "}
          <span className="text-aix-gold font-semibold">oportunidades exponenciais</span>
          {" "}para empresas visionárias que buscam transcender os limites do possível.
        </p>
      </div>

      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-gradient-to-r from-aix-gold to-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          Explorar Projetos
        </button>
        <button className="border-2 border-aix-cyan text-aix-cyan px-8 py-3 rounded-lg font-semibold hover:bg-aix-cyan hover:text-black transition-all duration-300">
          Falar Comigo
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
