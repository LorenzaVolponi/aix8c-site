
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-aix-darkgray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center font-serif">
            <span className="purple-text-gradient">Ativar Conexão</span>
          </h2>
          
          <div className="glass-card p-8">
            <div className="mb-6 text-center">
              <div className="inline-block w-10 h-1 bg-aix-gold mb-4"></div>
              <p className="text-xl text-white/80">Inicie uma conversa estratégica</p>
              <div className="inline-block w-10 h-1 bg-aix-gold mt-4"></div>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-white/70">Nome</label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    className="bg-aix-black/50 border-aix-purple/30 focus:border-aix-cyan"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-white/70">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-aix-black/50 border-aix-purple/30 focus:border-aix-cyan"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-white/70">Assunto</label>
                <Input
                  id="subject"
                  placeholder="Assunto da mensagem"
                  className="bg-aix-black/50 border-aix-purple/30 focus:border-aix-cyan"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-white/70">Mensagem</label>
                <Textarea
                  id="message"
                  placeholder="Sua mensagem..."
                  rows={6}
                  className="bg-aix-black/50 border-aix-purple/30 focus:border-aix-cyan resize-none"
                />
              </div>
              
              <div className="pt-4 flex justify-center">
                <Button className="bg-gradient-gold text-black hover:opacity-90 transition-opacity text-base py-6 px-10 font-bold">
                  Ativar Conexão Neural
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
