
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Mic, BookOpen, Award, ExternalLink, Filter, Calendar, MapPin, Trophy, Lightbulb, Heart, User, Target, Palette, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ScrollReveal from './ScrollReveal';

const JornadaSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const experiences = [
    {
      year: "2024",
      title: "Estrategista de IA & Automação",
      company: "Freelancer & Consultoria",
      description: "Criação de soluções personalizadas em IA, desenvolvimento de chatbots e automações para empresas visionárias.",
      icon: Brain,
      category: "technical",
      achievements: ["HELIA BOT - Assistente conversacional", "Automações no-code", "Prompt Engineering avançado"]
    },
    {
      year: "2023",
      title: "Copywriter & Content Strategist",
      company: "Projetos Autorais",
      description: "Desenvolvimento de narrativas estratégicas e conteúdo otimizado para conversão e engajamento.",
      icon: Mic,
      category: "creative",
      achievements: ["Storytelling para marcas tech", "UX Writing especializado", "Comunicação humanizada"]
    },
    {
      year: "2022",
      title: "Engenheira de Prompts",
      company: "Inovação em IA",
      description: "Especialização em otimização de prompts e criação de agentes conversacionais inteligentes.",
      icon: Code,
      category: "technical",
      achievements: ["Prompt Engineering certification", "AI Agent Development", "Chatbot Automation"]
    }
  ];

  const skills = [
    { name: "Prompt Engineering", level: 95, category: "technical", icon: Brain },
    { name: "Chatbot Automation", level: 90, category: "technical", icon: Zap },
    { name: "No-code Tools", level: 88, category: "technical", icon: Code },
    { name: "Storytelling Estratégico", level: 92, category: "creative", icon: BookOpen },
    { name: "UX Writing", level: 85, category: "creative", icon: Palette },
    { name: "Comunicação Humana", level: 94, category: "soft", icon: Heart },
    { name: "Liderança Intuitiva", level: 87, category: "soft", icon: User },
    { name: "Inovação Prática", level: 91, category: "soft", icon: Lightbulb }
  ];

  const certifications = [
    {
      title: "Advanced Prompt Engineering",
      issuer: "OpenAI Certified",
      year: "2024",
      icon: Award,
      badge: "AI Expert"
    },
    {
      title: "Chatbot Development Mastery",
      issuer: "Automation Institute",
      year: "2023",
      icon: Trophy,
      badge: "Bot Creator"
    },
    {
      title: "No-Code Automation",
      issuer: "Zapier Academy",
      year: "2023",
      icon: Target,
      badge: "Automation Pro"
    }
  ];

  const filterCategories = [
    { id: 'all', label: 'Todas', icon: Filter },
    { id: 'technical', label: 'Técnicas', icon: Brain },
    { id: 'creative', label: 'Criativas', icon: Palette },
    { id: 'soft', label: 'Soft Skills', icon: Heart }
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="jornada" className="py-24 bg-gradient-to-br from-aix-black via-gray-900 to-aix-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="matrix-rain absolute top-0 left-1/4 w-1 h-full opacity-20" style={{ animationDelay: '0s' }} />
        <div className="matrix-rain absolute top-0 left-2/4 w-1 h-full opacity-15" style={{ animationDelay: '1s' }} />
        <div className="matrix-rain absolute top-0 left-3/4 w-1 h-full opacity-25" style={{ animationDelay: '2s' }} />
        
        <div className="absolute top-20 left-20 w-96 h-96 bg-aix-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-aix-purple/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
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
              MINHA JORNADA CODIFICADA
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Uma narrativa visual da evolução estratégica em IA, comunicação e automações
            </motion.p>
            
            <motion.div 
              className="inline-flex items-center gap-4 glass-card p-4 rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ExternalLink className="w-5 h-5 text-aix-gold" />
              <a 
                href="https://www.linkedin.com/in/lorenzavolponi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-aix-gold transition-colors duration-300 font-medium"
              >
                Ver perfil completo no LinkedIn
              </a>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Timeline - Mapa da Consciência Criativa */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 gold-text-gradient">
              Mapa da Consciência Criativa
            </h3>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-aix-purple via-aix-cyan to-aix-gold" />
              
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <motion.div
                    key={index}
                    className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <motion.div 
                        className="glass-card p-6 group hover:bg-white/10 transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="w-4 h-4 text-aix-gold" />
                          <span className="text-aix-gold font-bold">{exp.year}</span>
                        </div>
                        
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-aix-cyan transition-colors duration-300">
                          {exp.title}
                        </h4>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="w-4 h-4 text-aix-purple" />
                          <span className="text-aix-purple font-medium">{exp.company}</span>
                        </div>
                        
                        <p className="text-white/70 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                              <div className="w-1.5 h-1.5 bg-aix-gold rounded-full" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-aix-purple to-aix-cyan rounded-full flex items-center justify-center border-4 border-aix-black">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Grid - Códigos de Potência */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-8 purple-text-gradient">
              Códigos de Potência
            </h3>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filterCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeFilter === category.id
                        ? 'bg-gradient-gold text-black'
                        : 'glass-card text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.label}
                  </motion.button>
                );
              })}
            </div>
            
            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={`${skill.name}-${activeFilter}`}
                    className="glass-card p-6 group hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-aix-purple to-aix-cyan rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-white group-hover:text-aix-gold transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                    
                    <div className="relative mb-2">
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-aix-gold to-aix-cyan rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className="text-aix-gold font-bold">{skill.level}%</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Certifications - Selos da Jornada */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 gold-text-gradient">
              Selos da Jornada
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <motion.div
                    key={index}
                    className="glass-card p-8 text-center group hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-aix-gold to-aix-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <div className="inline-block bg-aix-purple/20 text-aix-purple px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {cert.badge}
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-aix-gold transition-colors duration-300">
                      {cert.title}
                    </h4>
                    
                    <p className="text-white/70 mb-2">{cert.issuer}</p>
                    <p className="text-aix-gold font-bold">{cert.year}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Personal Manifesto */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 holographic-text">
              Declaração Viva de Identidade Profissional
            </h3>
            
            <motion.div 
              className="glass-card p-12 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed italic mb-6">
                "Acredito que a verdadeira revolução da IA acontece quando unimos 
                <span className="gold-text-gradient font-bold"> tecnologia estratégica </span> 
                com 
                <span className="purple-text-gradient font-bold"> sensibilidade humana</span>. 
                Minha missão é criar soluções que não apenas automatizam processos, 
                mas que amplificam o potencial humano e constroem pontes entre 
                o possível e o extraordinário."
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-0.5 bg-gradient-gold" />
                <span className="text-aix-gold font-bold">Lorenza Volponi</span>
                <div className="w-16 h-0.5 bg-gradient-gold" />
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                className="bg-gradient-purple hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 text-white font-bold px-12 py-6 text-lg rounded-xl shadow-2xl relative overflow-hidden group"
              >
                <a 
                  href="https://www.linkedin.com/in/lorenzavolponi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="relative z-10">Conectar no LinkedIn</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </a>
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default JornadaSection;
