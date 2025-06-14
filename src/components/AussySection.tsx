
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Brain, Zap, Target, Users, TrendingUp, Award, CheckCircle, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AussySection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const services = [
    {
      icon: Brain,
      title: "Consultoria em IA Estratégica",
      description: "Implementação de soluções de inteligência artificial personalizadas para transformar processos empresariais e maximizar resultados.",
      features: ["Análise de viabilidade", "Roadmap personalizado", "Implementação guiada", "Treinamento de equipes"],
      price: "A partir de R$ 15.000"
    },
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Desenvolvimento de sistemas automatizados que otimizam operações, reduzem custos e aumentam a produtividade empresarial.",
      features: ["Chatbots avançados", "Workflows automatizados", "Integração de sistemas", "Monitoramento 24/7"],
      price: "A partir de R$ 8.000"
    },
    {
      icon: Target,
      title: "Estratégia Digital Completa",
      description: "Planejamento e execução de estratégias digitais integradas que conectam tecnologia, pessoas e resultados de negócio.",
      features: ["Auditoria digital", "Estratégia omnichannel", "KPIs personalizados", "Relatórios executivos"],
      price: "A partir de R$ 12.000"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      company: "TechCorp Brasil",
      role: "CEO",
      content: "Lorenza transformou completamente nossa operação com soluções de IA. Aumentamos a eficiência em 300% e reduzimos custos em 40%. Sua visão estratégica é incomparável.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Ana Silva",
      company: "InnovateLab",
      role: "CTO",
      content: "A consultoria em automação da Lorenza revolucionou nossos processos. Implementamos chatbots que atendem 80% das demandas automaticamente, liberando nossa equipe para inovação.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Roberto Santos",
      company: "FutureVision",
      role: "Diretor de Inovação",
      content: "Parceira estratégica excepcional. Lorenza não apenas implementa tecnologia, mas ensina nossa equipe a pensar digitalmente. ROI de 400% em 6 meses.",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  const stats = [
    { number: "150+", label: "Projetos Entregues", icon: CheckCircle },
    { number: "95%", label: "Taxa de Sucesso", icon: TrendingUp },
    { number: "50+", label: "Empresas Transformadas", icon: Users },
    { number: "R$ 2M+", label: "Em Economia Gerada", icon: Award }
  ];

  return (
    <section id="consultoria" className="py-24 bg-gradient-to-b from-aix-black via-gray-900 to-aix-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-aix-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-aix-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aix-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8 font-serif"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="holographic-text">CONSULTORIA AUSSIE</span>
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforme sua empresa com soluções de IA personalizadas. 
              Da estratégia à implementação, construímos o futuro digital do seu negócio.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Stats Section */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-gold rounded-full flex items-center justify-center mb-4 group-hover:shadow-2xl group-hover:shadow-aix-gold/50 transition-all duration-300">
                      <IconComponent className="w-10 h-10 text-black" />
                    </div>
                  </div>
                  <motion.h3 
                    className="text-4xl md:text-5xl font-bold gold-text-gradient mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-white/70 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Card Background with Glassmorphism */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/20 rounded-2xl group-hover:border-aix-gold/50 transition-all duration-500"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500"></div>
                  
                  <div className="relative p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-aix-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-white/70">
                          <CheckCircle className="w-5 h-5 text-aix-gold mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold gold-text-gradient">
                        {service.price}
                      </span>
                      <Button className="bg-gradient-gold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 text-black font-bold px-6 py-3 rounded-xl transition-all duration-300 group-hover:scale-105">
                        Solicitar Proposta
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 holographic-text">
              O QUE NOSSOS CLIENTES DIZEM
            </h3>
            
            <div className="relative max-w-4xl mx-auto">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-aix-gold fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-white/90 mb-8 italic leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <img 
                    src={testimonials[activeTestimonial].image} 
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-aix-gold"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-white">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-aix-gold font-medium">
                      {testimonials[activeTestimonial].role}
                    </p>
                    <p className="text-white/60">
                      {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-aix-gold scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="text-center">
            <motion.div
              className="relative max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-gold opacity-20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/20 rounded-3xl p-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 holographic-text">
                  PRONTO PARA TRANSFORMAR SEU NEGÓCIO?
                </h3>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Agende uma consulta estratégica gratuita e descubra como a IA pode 
                  revolucionar sua empresa em 90 dias.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-gold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 text-black font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl">
                    <a href="#contato">Agendar Consulta Gratuita</a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AussySection;
