
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 bg-aix-darkgray relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center font-serif">
          <span className="purple-text-gradient">Expertise</span>
        </h2>
        
        <Tabs defaultValue="automation" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-3 bg-aix-black/50 p-1">
              <TabsTrigger value="automation" className="data-[state=active]:bg-aix-purple data-[state=active]:text-white">AUTOMAÇÃO</TabsTrigger>
              <TabsTrigger value="uxstrategy" className="data-[state=active]:bg-aix-purple data-[state=active]:text-white">UX STRATEGY</TabsTrigger>
              <TabsTrigger value="conversational" className="data-[state=active]:bg-aix-purple data-[state=active]:text-white">IA CONVERSACIONAL</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="automation" className="space-y-8 animate-fade-in">
            <ExpertiseCard 
              title="Automação de Processos Inteligentes"
              description="Desenvolvimento de soluções que combinam automação robótica de processos (RPA) com aprendizado de máquina para criar sistemas que não apenas executam tarefas repetitivas, mas também aprendem e se adaptam."
              bulletPoints={[
                "Redução de até 70% em processos operacionais",
                "Integração com sistemas legados através de APIs inteligentes",
                "Escalabilidade e adaptação contínua baseada em dados"
              ]}
            />
            
            <ExpertiseCard 
              title="Workflows Cognitivos"
              description="Criação de fluxos de trabalho que incorporam capacidades de IA para tomada de decisão, análise documental e processamento de linguagem natural."
              bulletPoints={[
                "Análise automática de documentos não-estruturados",
                "Reconhecimento de padrões e anomalias em tempo real",
                "Automação contextual adaptativa"
              ]}
            />
          </TabsContent>
          
          <TabsContent value="uxstrategy" className="space-y-8 animate-fade-in">
            <ExpertiseCard 
              title="Arquitetura de Experiência Cognitiva"
              description="Design de interações que integram perfeitamente humanos e IA, criando experiências personalizadas e contextuais que evoluem com o comportamento do usuário."
              bulletPoints={[
                "Mapeamento de jornadas preditivas personalizadas",
                "Design de interfaces adaptativas",
                "Integração de feedback em tempo real para ajuste contínuo"
              ]}
            />
            
            <ExpertiseCard 
              title="Estratégia UX Baseada em Dados"
              description="Utilização de análise avançada de dados de comportamento para informar decisões de design e testar hipóteses de experiência do usuário."
              bulletPoints={[
                "A/B testing alimentado por algoritmos de ML",
                "Segmentação comportamental dinâmica",
                "Otimização contínua baseada em métricas de engajamento"
              ]}
            />
          </TabsContent>
          
          <TabsContent value="conversational" className="space-y-8 animate-fade-in">
            <ExpertiseCard 
              title="Design de Sistemas Conversacionais"
              description="Criação de arquiteturas de diálogo que combinam linguística computacional com estratégias de negócio para criar interfaces conversacionais eficientes."
              bulletPoints={[
                "Desenvolvimento de personas de IA alinhadas à marca",
                "Criação de fluxos de conversação baseados em objetivos",
                "Otimização de prompts para máxima eficiência"
              ]}
            />
            
            <ExpertiseCard 
              title="Integração Multimodal"
              description="Implementação de sistemas que combinam texto, voz, imagem e outros canais para criar experiências conversacionais ricas e contextuais."
              bulletPoints={[
                "Reconhecimento e resposta a inputs multimodais",
                "Adaptação contextual baseada em canais de comunicação",
                "Entrega de informação personalizada através da modalidade ideal"
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
    <Card className="glass-card border-0 overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-4 gold-text-gradient">{title}</h3>
        <p className="text-white/80 mb-6">{description}</p>
        
        <ul className="space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-aix-cyan mr-2">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExpertiseSection;
