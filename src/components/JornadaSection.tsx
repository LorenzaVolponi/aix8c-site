
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Mic, Gear, BookOpen, Zap, Users, Target, Code, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const JornadaSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      period: "2023 - Presente",
      role: "Estrategista de IA & Engenheira de Prompts",
      company: "AIX8C",
      description: "Criação e implementação de soluções de IA personalizadas, desenvolvimento de agentes conversacionais e automações estratégicas.",
      skills: ["Prompt Engineering", "Chatbot Automation", "AI Strategy"],
      type: "experience",
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 2,
      period: "2022 - 2023",
      role: "Copywriter & Especialista em Automação",
      company: "Projetos Autorais",
      description: "Desenvolvimento do HELIA BOT e criação de conteúdo estratégico focado em conversão e engajamento.",
      skills: ["UX Writing", "Storytelling", "Marketing Automation"],
      type: "experience",
      icon: <Mic className="w-6 h-6" />
    },
    {
      id: 3,
      period: "Formação Contínua",
      role: "Autodidatismo Estratégico",
      company: "Múltiplas Plataformas",
      description: "Especialização constante em IA, No-code Tools, Filosofia Aplicada e Comunicação Humana.",
      skills: ["Self-Learning", "Critical Thinking", "Adaptability"],
      type: "education",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  const skills = [
    { name: "Prompt Engineering", category: "technical", level: 95, color: "aix-cyan" },
    { name: "Storytelling Estratégico", category: "creative", level: 90, color: "aix-gold" },
    { name: "Chatbot Automation", category: "technical", level: 88, color: "aix-purple" },
    { name: "Liderança Intuitiva", category: "soft", level: 92, color: "aix-cyan" },
    { name: "UX Writing", category: "creative", level: 85, color: "aix-gold" },
    { name: "Filosofia Aplicada", category: "soft", level: 87, color: "aix-purple" },
    { name: "No-code Tools", category: "technical", level: 83, color: "aix-cyan" },
    { name: "Escuta Ativa", category: "soft", level: 94, color: "aix-gold" }
  ];

  const certifications = [
    {
      name: "AI Prompt Engineering",
      issuer: "Autodidata",
      year: "2023",
      badge: "🎯"
    },
    {
      name: "Automação Conversacional",
      issuer: "Projetos Práticos",
      year: "2023",
      badge: "🤖"
    },
    {
      name: "Storytelling Digital",
      issuer: "Experiência Aplicada",
      year: "2022",
      badge: "📚"
    },
    {
      name: "Filosofia & Comunicação",
      issuer: "Formação Interdisciplinar",
      year: "2021",
      badge: "🧠"
    }
  ];

  const filteredSkills = activeFilter === 'all' ? skills : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="jornada" className="py-32 bg-gradient-to-br from-aix-black via-aix-darkgray to-aix-black relative overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-aix-cyan/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              y: [0, -100, -200],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {Math.random() > 0.5 ? '01' : '10'}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="fade" delay={0.2}>
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-8 font-serif"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="holographic-text">Minha Jornada Codificada</span>
            </motion.h2>
            
            <motion.div
              className="w-20 h-1 bg-gradient-gold mx-auto mb-8 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
            
            <motion.p 
              className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Uma narrativa visual e simbólica da minha trajetória em{" "}
              <span className="gold-text-gradient font-semibold">IA, comunicação e automações</span>{" "}
              - onde cada experiência moldou a estrategista que sou hoje.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Mapa da Consciência Criativa */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 purple-text-gradient">
              Mapa da Consciência Criativa
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-aix-cyan via-aix-purple to-aix-gold rounded-full"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <motion.div
                        className="glass-card p-6 cursor-pointer group hover:scale-105 transition-all duration-300"
                        whileHover={{ y: -5 }}
                        onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-aix-gold">
                            {exp.icon}
                          </div>
                          <span className="text-sm text-aix-cyan font-mono">{exp.period}</span>
                        </div>
                        
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:gold-text-gradient transition-all">
                          {exp.role}
                        </h4>
                        
                        <p className="text-aix-purple font-semibold mb-3">{exp.company}</p>
                        
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-aix-gold/20 text-aix-gold text-xs rounded-full border border-aix-gold/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="w-2/12 flex justify-center">
                      <motion.div
                        className="w-8 h-8 rounded-full bg-gradient-gold border-4 border-aix-black shadow-lg"
                        whileHover={{ scale: 1.2 }}
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(245, 158, 11, 0.5)",
                            "0 0 40px rgba(245, 158, 11, 0.8)",
                            "0 0 20px rgba(245, 158, 11, 0.5)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Códigos de Potência */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 gold-text-gradient">
              Códigos de Potência
            </h3>
            
            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mb-12">
              {[
                { key: 'all', label: 'Todas', icon: <Sparkles className="w-4 h-4" /> },
                { key: 'technical', label: 'Técnicas', icon: <Code className="w-4 h-4" /> },
                { key: 'creative', label: 'Criativas', icon: <Brain className="w-4 h-4" /> },
                { key: 'soft', label: 'Humanas', icon: <Users className="w-4 h-4" /> }
              ].map((filter) => (
                <motion.button
                  key={filter.key}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'bg-gradient-gold text-black'
                      : 'glass-card text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.icon}
                  {filter.label}
                </motion.button>
              ))}
            </div>
            
            {/* Skills Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              layout
            >
              <AnimatePresence>
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    layout
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-white font-bold mb-4 group-hover:gold-text-gradient transition-all">
                      {skill.name}
                    </h4>
                    
                    <div className="relative">
                      <div className="w-full bg-aix-darkgray rounded-full h-2 mb-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${
                            skill.color === 'aix-cyan' ? 'from-aix-cyan to-blue-400' :
                            skill.color === 'aix-gold' ? 'from-aix-gold to-yellow-400' :
                            'from-aix-purple to-purple-400'
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="text-xs text-white/60">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Selos da Jornada */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 purple-text-gradient">
              Selos da Jornada
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{cert.badge}</div>
                  <h4 className="text-white font-bold mb-2 group-hover:gold-text-gradient transition-all">
                    {cert.name}
                  </h4>
                  <p className="text-aix-purple text-sm mb-1">{cert.issuer}</p>
                  <p className="text-aix-cyan text-xs">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Declaração de Identidade */}
        <ScrollReveal direction="scale" delay={1.0}>
          <div className="text-center">
            <motion.div
              className="max-w-4xl mx-auto glass-card p-12 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-aix-cyan/10 via-aix-purple/10 to-aix-gold/10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 holographic-text">
                  Manifesto da Estrategista
                </h3>
                
                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                  "Acredito que a verdadeira revolução da IA não está apenas na tecnologia, 
                  mas na capacidade humana de{" "}
                  <span className="gold-text-gradient font-semibold">comunicar, criar e conectar</span>. 
                  Minha missão é ser a ponte entre o potencial infinito da inteligência artificial 
                  e a autenticidade essencial da experiência humana."
                </p>
                
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  <a 
                    href="https://www.linkedin.com/in/lorenzavolponi/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-gold text-black font-bold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    <span>Ver Perfil Completo no LinkedIn</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default JornadaSection;
