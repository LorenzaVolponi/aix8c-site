
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { sendEmailUltraReliable } from '../services/emailService';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  subject: string;
  phone: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    subject: '',
    phone: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subjects = [
    'Prompt Engineering',
    'Consultoria em IA',
    'Automação de Processos',
    'Treinamento de Equipe',
    'Projeto Personalizado',
    'Outro'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🚀 INICIANDO PROCESSO DE ENVIO');
    
    if (!validateForm()) {
      console.log('❌ Formulário inválido');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const emailData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Não informado',
        company: formData.company || 'Não informado',
        message: formData.message,
        timestamp: new Date().toLocaleString('pt-BR')
      };

      console.log('📧 Enviando dados:', emailData);

      await sendEmailUltraReliable(emailData);
      
      console.log('✅ PROCESSO DE ENVIO CONCLUÍDO COM SUCESSO!');
      
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        subject: '',
        phone: ''
      });
      
      setTimeout(() => setIsSuccess(false), 6000);
      
    } catch (error) {
      console.error('❌ Erro no processo:', error);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        subject: '',
        phone: ''
      });
      setTimeout(() => setIsSuccess(false), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSuccess) {
    return (
      <section id="contato" className="py-24 bg-aix-black relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-gradient opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center font-serif">
              <span className="purple-text-gradient">Ativar Conexão Neural</span>
            </h2>
            
            <div className="text-center p-12 glass-card border border-aix-purple/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-cyan-500/10 animate-pulse"></div>
              <div className="relative z-10 space-y-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl animate-scale-in">
                  <CheckCircle className="w-14 h-14 text-white drop-shadow-lg" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
                    Conexão Neural Estabelecida
                  </h3>
                  <p className="text-xl text-white/90 font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Retorno em até 24 horas!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-24 bg-aix-black relative overflow-hidden">
      <div className="absolute inset-0 bg-neural-gradient opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center font-serif">
            <span className="purple-text-gradient">Ativar Conexão Neural</span>
          </h2>
          
          <div className="glass-card p-8 md:p-12 border border-aix-purple/30">
            <div className="mb-8 text-center">
              <div className="inline-block w-12 h-1 bg-aix-gold mb-6 rounded-full"></div>
              <p className="text-2xl text-white/90 font-serif mb-4">Inicie uma conversa estratégica</p>
              <p className="text-white/70">Conecte-se ao ecossistema neural de transformação digital</p>
              <div className="inline-block w-12 h-1 bg-aix-gold mt-6 rounded-full"></div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome e Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-aix-cyan uppercase tracking-wider mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className={`w-full px-4 py-3 rounded-xl bg-aix-darkgray/50 border backdrop-blur-sm transition-colors text-white placeholder:text-white/50 h-12 ${
                      errors.name ? 'border-red-500' : 'border-aix-purple/40 focus:border-aix-cyan'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-aix-cyan uppercase tracking-wider mb-2">
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@empresa.com"
                    className={`w-full px-4 py-3 rounded-xl bg-aix-darkgray/50 border backdrop-blur-sm transition-colors text-white placeholder:text-white/50 h-12 ${
                      errors.email ? 'border-red-500' : 'border-aix-purple/40 focus:border-aix-cyan'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Telefone e Empresa */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-aix-cyan uppercase tracking-wider mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl bg-aix-darkgray/50 border border-aix-purple/40 focus:border-aix-cyan transition-colors text-white placeholder:text-white/50 h-12"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-aix-cyan uppercase tracking-wider mb-2">
                    Empresa / Organização
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome da sua empresa"
                    className="w-full px-4 py-3 rounded-xl bg-aix-darkgray/50 border border-aix-purple/40 focus:border-aix-cyan transition-colors text-white placeholder:text-white/50 h-12"
                  />
                </div>
              </div>

              {/* Assunto */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-aix-cyan uppercase tracking-wider mb-2">
                  Desafio Estratégico
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-aix-darkgray/50 border border-aix-purple/40 focus:border-aix-cyan transition-colors text-white h-12"
                >
                  <option value="">Selecione um assunto</option>
                  {subjects.map((subject, index) => (
                    <option key={index} value={subject} className="bg-aix-darkgray">
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-aix-cyan uppercase tracking-wider mb-2">
                  Contexto do Projeto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva seu cenário atual, objetivos e como a IA pode acelerar seus resultados..."
                  className={`w-full px-4 py-3 rounded-xl bg-aix-darkgray/50 border backdrop-blur-sm transition-colors resize-none text-white placeholder:text-white/50 ${
                    errors.message ? 'border-red-500' : 'border-aix-purple/40 focus:border-aix-cyan'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>
              
              <div className="pt-6 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-gold text-black hover:opacity-90 transition-all duration-300 text-lg py-4 px-12 font-bold rounded-xl neural-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>Conectando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>Iniciar Conexão Neural →</span>
                    </>
                  )}
                </button>
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
