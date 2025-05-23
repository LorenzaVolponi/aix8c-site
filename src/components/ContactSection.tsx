
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-aix-black relative overflow-hidden">
      <div className="absolute inset-0 bg-neural-gradient opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center font-serif">
            <span className="purple-text-gradient">Ativar Conexão Neural</span>
          </h2>
          
          <div className="glass-card p-10 md:p-12 border border-aix-purple/30">
            <div className="mb-8 text-center">
              <div className="inline-block w-12 h-1 bg-aix-gold mb-6 rounded-full"></div>
              <p className="text-2xl text-white/90 font-serif mb-4">Inicie uma conversa estratégica</p>
              <p className="text-white/70">Conecte-se ao ecossistema neural de transformação digital</p>
              <div className="inline-block w-12 h-1 bg-aix-gold mt-6 rounded-full"></div>
            </div>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-sm font-medium text-aix-cyan uppercase tracking-wider">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    className="bg-aix-darkgray/50 border-aix-purple/40 focus:border-aix-cyan text-white placeholder:text-white/50 h-12 rounded-xl"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-sm font-medium text-aix-cyan uppercase tracking-wider">
                    Email Corporativo
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@empresa.com"
                    className="bg-aix-darkgray/50 border-aix-purple/40 focus:border-aix-cyan text-white placeholder:text-white/50 h-12 rounded-xl"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="company" className="block text-sm font-medium text-aix-cyan uppercase tracking-wider">
                  Empresa / Organização
                </label>
                <Input
                  id="company"
                  placeholder="Nome da sua empresa"
                  className="bg-aix-darkgray/50 border-aix-purple/40 focus:border-aix-cyan text-white placeholder:text-white/50 h-12 rounded-xl"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="subject" className="block text-sm font-medium text-aix-cyan uppercase tracking-wider">
                  Desafio Estratégico
                </label>
                <Input
                  id="subject"
                  placeholder="Qual transformação você busca?"
                  className="bg-aix-darkgray/50 border-aix-purple/40 focus:border-aix-cyan text-white placeholder:text-white/50 h-12 rounded-xl"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="block text-sm font-medium text-aix-cyan uppercase tracking-wider">
                  Contexto do Projeto
                </label>
                <Textarea
                  id="message"
                  placeholder="Descreva seu cenário atual, objetivos e como a IA pode acelerar seus resultados..."
                  rows={6}
                  className="bg-aix-darkgray/50 border-aix-purple/40 focus:border-aix-cyan resize-none text-white placeholder:text-white/50 rounded-xl"
                />
              </div>
              
              <div className="pt-6 flex justify-center">
                <Button className="bg-gradient-gold text-black hover:opacity-90 transition-all duration-300 text-lg py-8 px-12 font-bold rounded-xl neural-glow">
                  Iniciar Conexão Neural →
                </Button>
              </div>
            </form>
            
            <div className="mt-12 text-center">
              <p className="text-white/60 text-sm">
                Resposta em até 24 horas • Consulta estratégica inicial gratuita
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
