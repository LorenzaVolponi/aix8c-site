
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 bg-aix-darkgray relative overflow-hidden">
      <div className="absolute inset-0 bg-neural-gradient opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center font-serif">
          <span className="purple-text-gradient">Domínios de Expertise</span>
        </h2>
        
        <Tabs defaultValue="automacao" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-3xl grid-cols-3 bg-aix-black/60 p-2 rounded-2xl border border-aix-purple/30">
              <TabsTrigger 
                value="automacao" 
                className="data-[state=active]:bg-gradient-purple data-[state=active]:text-white text-lg py-4 rounded-xl"
              >
                AUTOMAÇÃO COGNITIVA
              </TabsTrigger>
              <TabsTrigger 
                value="ux" 
                className="data-[state=active]:bg-gradient-purple data-[state=active]:text-white text-lg py-4 rounded-xl"
              >
                UX ESTRATÉGICA
              </TabsTrigger>
              <TabsTrigger 
                value="ia" 
                className="data-[state=active]:bg-gradient-purple data-[state=active]:text-white text-lg py-4 rounded-xl"
              >
                IA CONVERSACIONAL
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="automacao" className="space-y-8 animate-fade-in">
            <ExpertiseCard 
              title="Automação de Processos Neurais"
              description="Desenvolvimento de soluções que combinam automação robótica com aprendizado de máquina avançado, criando sistemas que não apenas executam tarefas, mas evoluem e se adaptam autonomamente aos padrões emergentes."
              bulletPoints={[
                "Redução de até 75% em tempo de processos operacionais críticos",
                "Integração inteligente com sistemas legados através de APIs neurais",
                "Escalabilidade exponencial com adaptação contínua baseada em dados"
              ]}
            />
            
            <ExpertiseCard 
              title="Workflows Cognitivos Avançados"
              description="Criação de fluxos de trabalho que incorporam capacidades de IA para tomada de decisão contextual, análise documental multi-modal e processamento de linguagem natural em tempo real."
              bulletPoints={[
                "Análise automática de documentos não-estruturados com 95% de precisão",
                "Reconhecimento de padrões e anomalias em tempo real com alertas preditivos",
                "Automação contextual que se adapta a cenários complexos e imprevistos"
              ]}
            />
          </TabsContent>
          
          <TabsContent value="ux" className="space-y-8 animate-fade-in">
            <ExpertiseCard 
              title="Arquitetura de Experiência Neural"
              description="Design de interações que integram harmoniosamente humanos e IA, criando experiências personalizadas e contextuais que evoluem dinamicamente com o comportamento e preferências do usuário."
              bulletPoints={[
                "Mapeamento de jornadas preditivas personalizadas com IA comportamental",
                "Design de interfaces adaptativas que se moldam ao usuário em tempo real",
                "Integração de feedback neural contínuo para otimização experiencial"
              ]}
            />
            
            <ExpertiseCard 
              title="Estratégia UX Data-Driven"
              description="Utilização de análise avançada de dados comportamentais e algoritmos de machine learning para informar decisões de design e validar hipóteses de experiência através de testes inteligentes."
              bulletPoints={[
                "A/B testing alimentado por algoritmos de ML com otimização automática",
                "Segmentação comportamental dinâmica baseada em padrões neurais",
                "Otimização contínua orientada por métricas de engajamento preditivo"
              ]}
            />
          </TabsContent>
          
          <TabsContent value="ia" className="space-y-8 animate-fade-in">
            <ExpertiseCard 
              title="Design de Sistemas Conversacionais Neurais"
              description="Criação de arquiteturas de diálogo que combinam linguística computacional avançada com estratégias de negócio, desenvolvendo interfaces conversacionais que transcendem a interação tradicional."
              bulletPoints={[
                "Desenvolvimento de personas de IA alinhadas à essência da marca",
                "Criação de fluxos conversacionais baseados em objetivos estratégicos",
                "Otimização neural de prompts para máxima eficiência e impacto"
              ]}
            />
            
            <ExpertiseCard 
              title="Integração Multimodal Avançada"
              description="Implementação de sistemas que combinam texto, voz, imagem e outros canais sensoriais para criar experiências conversacionais ricas, contextuais e profundamente imersivas."
              bulletPoints={[
                "Reconhecimento e resposta inteligente a inputs multimodais complexos",
                "Adaptação contextual dinâmica baseada em canais de comunicação preferidos",
                "Entrega de informação personalizada através da modalidade neural ideal"
              ]}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ExpertiseCard = ({ 
  title, 
  description, 
  bulletPoints 
}: { 
  title: string; 
  description: string; 
  bulletPoints: string[] 
}) => {
  return (
    <Card className="glass-card border-0 overflow-hidden hover:transform hover:scale-105 transition-all duration-500">
      <CardContent className="p-8">
        <h3 className="text-3xl font-bold mb-6 gold-text-gradient font-serif">{title}</h3>
        <p className="text-white/85 mb-8 text-lg leading-relaxed">{description}</p>
        
        <ul className="space-y-4">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-aix-cyan mr-3 text-xl">◆</span>
              <span className="text-white/90">{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExpertiseSection;
