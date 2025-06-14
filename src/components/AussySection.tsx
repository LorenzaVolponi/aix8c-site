
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Brain, Zap, Target, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AussySection = () => {
  const features = [
    {
      title: "Estratégia de IA Personalizada",
      description: "Desenvolvimento de soluções de inteligência artificial sob medida para revolucionar seus processos de negócio.",
      icon: Brain,
      delay: 0.2,
      gradient: "from-aix-purple to-aix-cyan"
    },
    {
      title: "Automação Inteligente",
      description: "Implementação de sistemas automatizados que otimizam operações e maximizam resultados.",
      icon: Zap,
      delay: 0.4,
      gradient: "from-aix-cyan to-aix-gold"
    },
    {
      title: "Consultoria Estratégica",
      description: "Orientação especializada para integração eficaz de IA em sua estrutura organizacional.",
      icon: Target,
      delay: 0.6,
      gradient: "from-aix-gold to-aix-purple"
    }
  ];

  const stats = [
    {
      number: "500+",
      label: "Projetos de IA Implementados",
      icon: Brain,
      description: "Soluções personalizadas entregues com excelência"
    },
    {
      number: "98%",
      label: "Taxa de Satisfação",
      icon: Users,
      description: "Clientes que recomendam nossos serviços"
    },
    {
      number: "50M+",
      label: "Dados Processados",
      icon: Zap,
      description: "Volume de informações analisadas mensalmente"
    }
  ];

  return (
    <section id="aussy" className="py-24 bg-gradient-to-br from-aix-black via-gray-900 to-aix-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-aix-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-aix-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6 holographic-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AUSSY
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Assistente Universal de Soluções Sistemáticas Yottabyte
            </motion.p>
            <motion.div 
              className="w-32 h-1 bg-gradient-gold mx-auto mt-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <ScrollReveal key={index} direction="up" delay={feature.delay}>
                <motion.div
                  className="glass-card p-8 group cursor-pointer"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-aix-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  <motion.div
                    className="mt-6 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-500"
                  />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Stats Section */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-aix-purple to-aix-cyan rounded-full mb-4 group-hover:scale-110 transition-transform duration-300"
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="text-4xl md:text-5xl font-bold mb-2 gold-text-gradient"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-aix-cyan transition-colors duration-300">
                    {stat.label}
                  </h4>
                  
                  <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="text-center">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-gold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 text-black font-bold px-12 py-6 text-lg rounded-xl shadow-2xl relative overflow-hidden group">
                <span className="relative z-10">Explorar AUSSY</span>
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
