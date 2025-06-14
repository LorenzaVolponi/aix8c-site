
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, 
  Mic, 
  Brain, 
  Zap, 
  Code, 
  Users, 
  Award, 
  BookOpen, 
  Star, 
  ExternalLink,
  ChevronDown,
  Filter,
  Calendar,
  MapPin
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import ScrollReveal from './ScrollReveal';

const JornadaSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const experiences = [
    {
      year: '2024',
      title: 'Estrategista de IA & Automação',
      company: 'Freelancer & Consultoria',
      type: 'professional',
      icon: Brain,
      description: 'Desenvolvimento de agentes conversacionais avançados e estratégias de automação para empresas de médio e grande porte.',
      achievements: ['150+ projetos entregues', 'R$ 2M+ em economia gerada', '95% taxa de sucesso'],
      skills: ['Prompt Engineering', 'ChatGPT API', 'Make.com', 'Zapier', 'N8N'],
      location: 'Brasil - Remote',
      duration: '2024 - Presente'
    },
    {
      year: '2023',
      title: 'HELIA BOT - Projeto Autoral',
      company: 'Criação Própria',
      type: 'project',
      icon: Zap,
      description: 'Desenvolvimento de chatbot inteligente para automação de atendimento e processos empresariais.',
      achievements: ['Chatbot multi-plataforma', 'Integração WhatsApp/Telegram', 'NLP avançado'],
      skills: ['Python', 'Natural Language Processing', 'API Integration', 'Cloud Computing'],
      location: 'Projeto Digital',
      duration: '2023 - Contínuo'
    },
    {
      year: '2022-2024',
      title: 'Copywriter & Comunicação Digital',
      company: 'Múltiplos Clientes',
      type: 'professional',
      icon: Mic,
      description: 'Criação de conteúdo estratégico e campanhas de comunicação para marcas digitais.',
      achievements: ['50+ campanhas criadas', 'Aumento médio de 300% no engagement', 'ROI médio de 400%'],
      skills: ['Storytelling', 'UX Writing', 'Marketing Digital', 'Social Media', 'SEO'],
      location: 'Brasil - Híbrido',
      duration: '2022 - 2024'
    }
  ];

  const skills = [
    { name: 'Prompt Engineering', level: 95, category: 'technical', icon: Code },
    { name: 'Chatbot Automation', level: 90, category: 'technical', icon: Zap },
    { name: 'No-code Tools', level: 88, category: 'technical', icon: Settings },
    { name: 'Storytelling Estratégico', level: 92, category: 'creative', icon: BookOpen },
    { name: 'Comunicação Humana', level: 94, category: 'soft', icon: Users },
    { name: 'Escrita Criativa', level: 89, category: 'creative', icon: Mic },
    { name: 'Liderança Intuitiva', level: 87, category: 'soft', icon: Star },
    { name: 'UX Writing', level: 85, category: 'creative', icon: Code }
  ];

  const certifications = [
    {
      title: 'Prompt Engineering Specialist',
      institution: 'OpenAI Certified',
      year: '2024',
      type: 'certification',
      badge: '🤖'
    },
    {
      title: 'Advanced Automation with Make.com',
      institution: 'Make Academy',
      year: '2023',
      type: 'certification',
      badge: '⚡'
    },
    {
      title: 'Filosofia Aplicada aos Negócios',
      institution: 'Autodidata',
      year: '2023',
      type: 'self-taught',
      badge: '🧠'
    },
    {
      title: 'Curadoria Digital & Tendências',
      institution: 'Autodidata',
      year: '2022',
      type: 'self-taught',
      badge: '🎯'
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'Tudo', icon: Star },
    { id: 'technical', label: 'Técnicas', icon: Code },
    { id: 'creative', label: 'Criativas', icon: Mic },
    { id: 'soft', label: 'Comportamentais', icon: Users }
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="jornada" className="py-24 bg-gradient-to-b from-aix-black via-gray-900 to-aix-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="code-rain"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-aix-black/80 via-transparent to-aix-black/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8 font-serif"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="holographic-text">MINHA JORNADA</span>
              <br />
              <span className="gold-text-gradient reverse-scroll-text">CODIFICADA</span>
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Uma narrativa visual e simbólica da minha trajetória visionária em IA, 
              comunicação e automações. Cada marco representa uma evolução na 
              arquitetura do futuro digital.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Timeline - Mapa da Consciência Criativa */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-aix-cyan">
              📍 MAPA DA CONSCIÊNCIA CRIATIVA
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-aix-gold via-aix-purple to-aix-cyan"></div>
              
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <motion.div
                    key={index}
                    className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center border-4 border-aix-black z-10">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    
                    {/* Content Card */}
                    <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md mx-auto md:mx-0 hover:border-aix-gold/50 transition-all duration-500 cursor-pointer"
                         onClick={() => setExpandedCard(expandedCard === index ? null : index)}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-aix-gold font-bold text-lg">{exp.year}</span>
                        <ChevronDown className={`w-5 h-5 text-white/60 transition-transform duration-300 ${expandedCard === index ? 'rotate-180' : ''}`} />
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                      <p className="text-aix-purple font-medium mb-3">{exp.company}</p>
                      <p className="text-white/80 text-sm leading-relaxed">{exp.description}</p>
                      
                      <AnimatePresence>
                        {expandedCard === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-white/20"
                          >
                            <div className="flex items-center text-white/60 text-sm mb-3">
                              <MapPin className="w-4 h-4 mr-2" />
                              {exp.location}
                              <Calendar className="w-4 h-4 ml-4 mr-2" />
                              {exp.duration}
                            </div>
                            
                            <div className="mb-3">
                              <h5 className="text-aix-gold font-medium mb-2">Conquistas:</h5>
                              <ul className="text-white/80 text-sm space-y-1">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-center">
                                    <Star className="w-3 h-3 text-aix-gold mr-2 flex-shrink-0" />
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h5 className="text-aix-cyan font-medium mb-2">Skills:</h5>
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                  <span key={i} className="bg-aix-purple/20 text-aix-purple px-2 py-1 rounded-lg text-xs">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Grid - Códigos de Potência */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-aix-purple">
              ⚡ CÓDIGOS DE POTÊNCIA
            </h3>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filterOptions.map((filter) => {
                const IconComponent = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
                      activeFilter === filter.id
                        ? 'bg-gradient-gold text-black font-bold'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 mr-2" />
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence>
                {filteredSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-aix-gold/50 transition-all duration-500 group"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-black" />
                        </div>
                        <h4 className="text-white font-bold">{skill.name}</h4>
                      </div>
                      
                      <div className="relative w-full bg-white/10 rounded-full h-3 mb-2">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-gradient-gold rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                      <p className="text-aix-gold font-bold text-right">{skill.level}%</p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>

        {/* Certifications - Selos da Jornada */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-aix-cyan">
              🏆 SELOS DA JORNADA
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:border-aix-gold/50 transition-all duration-500 group"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cert.badge}
                  </div>
                  <h4 className="text-white font-bold mb-2">{cert.title}</h4>
                  <p className="text-aix-purple font-medium mb-2">{cert.institution}</p>
                  <p className="text-aix-gold">{cert.year}</p>
                  {cert.type === 'self-taught' && (
                    <span className="inline-block mt-2 bg-gradient-gold text-black px-3 py-1 rounded-full text-xs font-bold">
                      Autodidata
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Personal Manifesto */}
        <ScrollReveal direction="up" delay={0.7}>
          <div className="text-center">
            <motion.div
              className="relative max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-gold opacity-20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/20 rounded-3xl p-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 holographic-text">
                  🌟 DECLARAÇÃO VIVA DE IDENTIDADE PROFISSIONAL
                </h3>
                <blockquote className="text-xl md:text-2xl text-white/90 mb-8 italic leading-relaxed">
                  "Sou a ponte entre a complexidade técnica e a simplicidade humana. 
                  Transformo dados em narrativas, algoritmos em experiências e 
                  desafios impossíveis em oportunidades exponenciais. Minha missão 
                  é democratizar o poder da IA, tornando-a acessível, ética e 
                  profundamente humana."
                </blockquote>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-gradient-gold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 text-black font-bold px-8 py-4 text-lg rounded-xl">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      <a href="https://www.linkedin.com/in/lorenzavolponi/" target="_blank" rel="noopener noreferrer">
                        Ver Perfil Completo
                      </a>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" className="border-2 border-aix-purple bg-aix-purple/10 hover:bg-aix-purple/20 text-white font-bold px-8 py-4 text-lg rounded-xl">
                      <a href="#contato">Conectar Comigo</a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default JornadaSection;
