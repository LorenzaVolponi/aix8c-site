
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Brain, Zap, Target, Users, ExternalLink, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AussySection = () => {
  const aussyLinks = [
    {
      title: "Aussy Instructor Obsidian",
      description: "Especialista em ajudar em seu aprendizado na ferramenta Obsidian",
      url: "https://chatgpt.com/g/g-Vs3gdvCWd-aussy-instructor-obsidian",
      icon: Brain,
      gradient: "from-aix-gold to-yellow-400"
    },
    {
      title: "Aussy Creator Content Supreme", 
      description: "Especialista em criar conteúdos de sucesso para suas mídias sociais",
      url: "https://chatgpt.com/g/g-MTbSg56J5-aussy-creator-content-supreme",
      icon: Sparkles,
      gradient: "from-yellow-400 to-aix-gold"
    },
    {
      title: "Aussy Smart Business",
      description: "Especialista em analisar negócios, criar estratégias de vendas e desenvolver propostas para clientes",
      url: "https://chatgpt.com/g/g-7BFuU6mGC-aussy-smart-business", 
      icon: Target,
      gradient: "from-aix-gold to-orange-400"
    }
  ];

  const stats = [
    {
      number: "1º",
      label: "Mascote Brasileiro de IA",
      icon: Brain,
      description: "Inovação futurista nacional"
    },
    {
      number: "∞",
      label: "Possibilidades Criativas",
      icon: Sparkles,
      description: "Sem limites para a imaginação"
    },
    {
      number: "100%",
      label: "Conexão Humano-Máquina",
      icon: Zap,
      description: "Soluções criativas e eficientes"
    }
  ];

  return (
    <section id="aussy" className="py-24 bg-gradient-to-br from-aix-black via-gray-900 to-aix-black relative overflow-hidden">
      {/* Enhanced Background Effects with Gold Focus */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-aix-gold/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-aix-gold/5 to-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8 holographic-text font-serif"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, type: "spring", damping: 20 }}
            >
              AUSSY
            </motion.h2>
            
            <motion.div
              className="text-2xl md:text-3xl font-bold mb-6 gold-text-gradient"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Assistente Universal de Soluções Sistemáticas Yottabyte
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-6xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              O Aussy nasceu de uma brincadeira guardada em segredo, um codinome especial que se tornou realidade. 
              Como as duas faces de uma moeda, ele representa infinitas possibilidades sem limites para a imaginação.
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl text-aix-gold/90 max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="font-bold">O primeiro mascote brasileiro de IA e Engenharia de Prompt</span> - uma inovação futurista 
              que conecta humanos e máquinas de forma criativa e eficiente, criando uma marca inesquecível 
              que gera conexão instantânea com todos que a experimentam.
            </motion.p>
            
            <motion.div 
              className="w-32 h-1 bg-gradient-gold mx-auto mt-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </ScrollReveal>

        {/* Stats Section */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group glass-card p-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-gold rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"
                  >
                    <IconComponent className="w-10 h-10 text-aix-black" />
                  </motion.div>
                  
                  <motion.div
                    className="text-4xl md:text-5xl font-bold mb-3 gold-text-gradient"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-aix-gold transition-colors duration-300">
                    {stat.label}
                  </h4>
                  
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Aussy Links Grid */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 gold-text-gradient font-serif">
              Explore as Capacidades do Aussy
            </h3>
            <p className="text-white/80 text-lg mb-12">
              Três especializações poderosas para transformar seu trabalho e negócio
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {aussyLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <ScrollReveal key={index} direction="up" delay={0.1 * (index + 1)}>
                <motion.div
                  className="glass-card p-8 group cursor-pointer relative overflow-hidden"
                  whileHover={{ y: -15, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => window.open(link.url, '_blank')}
                >
                  {/* Hover Effect Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                  
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${link.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-aix-black" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-aix-gold transition-colors duration-300">
                    {link.title}
                  </h4>
                  
                  <p className="text-white/80 leading-relaxed mb-6 group-hover:text-white/95 transition-colors duration-300">
                    {link.description}
                  </p>

                  <motion.div
                    className="flex items-center text-aix-gold group-hover:text-yellow-300 transition-colors duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <span className="mr-2 font-semibold">Explorar Aussy</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                  
                  <motion.div
                    className="mt-6 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-500"
                  />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="text-center">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-gold hover:bg-gradient-to-r hover:from-yellow-300 hover:to-orange-400 text-aix-black font-bold px-16 py-8 text-xl rounded-2xl shadow-2xl relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  <Sparkles className="w-6 h-6 mr-3" />
                  Descubra o Poder do Aussy
                  <Sparkles className="w-6 h-6 ml-3" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AussySection;
