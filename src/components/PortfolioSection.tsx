import React from 'react';
import { motion } from 'framer-motion';

type PortfolioItem = {
  id: string;
  title: string;
  line: string;
  echo: string;
  image: string;
  gradient: string;
  size: 'tall' | 'wide' | 'square' | 'panorama';
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 'oceano-interno',
    title: 'Oceano Interno',
    line: 'Maré silenciosa de memórias em azul profundo.',
    echo: 'respira sob a pele do tempo',
    image: '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png',
    gradient: 'radial-gradient(circle at 20% 20%, rgba(6,182,212,.55), rgba(2,6,23,.86) 58%)',
    size: 'tall',
  },
  {
    id: 'diamante-em-ruptura',
    title: 'Diamante em Ruptura',
    line: 'Luz em fratura, beleza nascida no corte.',
    echo: 'faíscas no silêncio mineral',
    image: '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png',
    gradient: 'radial-gradient(circle at 70% 35%, rgba(139,92,246,.58), rgba(2,6,23,.88) 56%)',
    size: 'wide',
  },
  {
    id: 'horizonte-de-vidro',
    title: 'Horizonte de Vidro',
    line: 'A cidade dissolve-se no reflexo da aurora.',
    echo: 'céu quebrado em geometrias lentas',
    image: '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png',
    gradient: 'radial-gradient(circle at 50% 0%, rgba(245,158,11,.42), rgba(2,6,23,.9) 62%)',
    size: 'square',
  },
  {
    id: 'atlas-de-cinzas',
    title: 'Atlas de Cinzas',
    line: 'Territórios antigos desenhados por fogo e vento.',
    echo: 'onde o fim ainda ilumina',
    image: '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png',
    gradient: 'radial-gradient(circle at 20% 70%, rgba(34,197,94,.35), rgba(2,6,23,.88) 60%)',
    size: 'tall',
  },
  {
    id: 'jardim-do-vazio',
    title: 'Jardim do Vazio',
    line: 'Pétalas de sombra pairam no ar imóvel.',
    echo: 'o silêncio também floresce',
    image: '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png',
    gradient: 'radial-gradient(circle at 80% 20%, rgba(236,72,153,.45), rgba(2,6,23,.9) 62%)',
    size: 'square',
  },
  {
    id: 'constelacao-submersa',
    title: 'Constelação Submersa',
    line: 'Estrelas afogadas desenham novas rotas.',
    echo: 'toda profundidade guarda um céu',
    image: '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png',
    gradient: 'radial-gradient(circle at 40% 10%, rgba(59,130,246,.45), rgba(2,6,23,.92) 64%)',
    size: 'panorama',
  },
];

const cardSizeClass: Record<PortfolioItem['size'], string> = {
  tall: 'md:row-span-2 min-h-[540px]',
  wide: 'md:col-span-2 min-h-[500px] md:min-h-[460px]',
  square: 'min-h-[460px]',
  panorama: 'md:col-span-2 min-h-[420px]',
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative bg-aix-black overflow-hidden">
      <motion.div
        className="section-cinematic-mask absolute top-0 left-0 right-0 h-28 z-20 pointer-events-none"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.1 }}
      />

      <div className="absolute inset-0 bg-constellation opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center font-serif">
          <span className="gold-text-gradient">Fragmentos de Eternidade</span>
        </h2>
        <p className="text-center text-white/75 mb-14 max-w-2xl mx-auto lowercase">
          galeria viva em camadas de luz, matéria e intervalo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.id}
              data-magnetic
              className={`portfolio-case group relative overflow-hidden rounded-[30px] border border-white/15 ${cardSizeClass[item.size]}`}
              initial={{ opacity: 0, y: 50, clipPath: 'inset(20% 0 0 0)' }}
              whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className="portfolio-bg absolute inset-0 scale-[1.02]"
                style={{
                  backgroundImage: `${item.gradient}, url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                whileInView={{ y: index % 2 === 0 ? -16 : 16, scale: 1.06 }}
                transition={{ duration: 1.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.15 }}
              />

              <div className="portfolio-overlay absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />

              <div className="absolute inset-0 z-10 p-8 md:p-10 flex items-end">
                <motion.div
                  className="max-w-xl"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <p className="text-aix-gold font-mono text-xs mb-3 tracking-[0.2em] uppercase">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 font-serif leading-tight">{item.title}</h3>
                  <p className="text-white/85 text-base md:text-lg mb-3">{item.line}</p>
                  <p className="text-white/65 italic text-sm md:text-base">{item.echo}</p>
                </motion.div>
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-8 bg-white/10 blur-2xl" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
