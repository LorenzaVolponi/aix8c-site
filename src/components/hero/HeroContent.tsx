
import React from 'react';
import { motion } from 'framer-motion';

const HeroContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="container mx-auto px-4 sm:px-6 lg:px-8 z-30 text-center relative max-w-7xl pt-32 sm:pt-36 md:pt-40 lg:pt-44"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Informações Pessoais - Responsivas e com espaçamento adequado */}
      <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
        <h2 className="text-lg sm:text-xl md:text-2xl text-aix-gold font-semibold mb-4 tracking-wide">
          Capitã da Nave AIX8C
        </h2>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 font-serif tracking-tight text-white leading-tight">
          LORENZA VOLPONI
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-300 font-light mb-4 tracking-wider leading-relaxed">
          Tradutora entre almas humanas e mentes artificiais
        </p>
      </motion.div>

      {/* Frase Pessoal - Responsiva */}
      <motion.div className="mb-8 sm:mb-10" variants={itemVariants}>
        <p className="text-white/90 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light px-4">
          "Sou a soma infinita de ideias fora da caixa, unindo{" "}
          <span className="text-aix-gold font-medium">tecnologia</span>
          {" "}e{" "}
          <span className="text-aix-purple font-medium">emoção</span>
          . ✦"
        </p>
      </motion.div>

      {/* Destaques Profissionais - Grid Responsivo */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-10 px-4"
        variants={itemVariants}
      >
        {[
          { title: "Prompt Engineering", desc: "Líder mundial em otimização de IA" },
          { title: "Navegação Digital", desc: "Conduzindo expedições tecnológicas" },
          { title: "Inovação Criativa", desc: "Unindo arte e inteligência artificial" }
        ].map((item, index) => (
          <div
            key={index}
            className="text-center bg-white/5 backdrop-blur-sm border border-aix-gold/20 rounded-lg p-4 sm:p-5"
          >
            <h5 className="text-aix-gold font-semibold text-sm sm:text-base lg:text-lg mb-2">{item.title}</h5>
            <p className="text-white/70 text-xs sm:text-sm lg:text-base">{item.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Descrição Profissional - Responsiva */}
      <motion.div className="mb-10 sm:mb-12 px-4" variants={itemVariants}>
        <p className="text-white/90 max-w-4xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed font-light">
          Transformando dados em estratégias, algoritmos em resultados e desafios complexos em{" "}
          <span className="text-aix-gold font-semibold">oportunidades exponenciais</span>
          {" "}para empresas visionárias que buscam transcender os limites do possível.
        </p>
      </motion.div>

      {/* Botões de Ação - Responsivos */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
        variants={itemVariants}
      >
        <button className="w-full sm:w-auto bg-gradient-to-r from-aix-gold to-yellow-400 text-black px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
          Explorar Projetos
        </button>
        <button className="w-full sm:w-auto border-2 border-aix-cyan text-aix-cyan px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-aix-cyan hover:text-black transition-all duration-300 text-sm sm:text-base">
          Falar Comigo
        </button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
