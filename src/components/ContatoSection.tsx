import React, { useState } from 'react';
import { sendEmailUltraReliable } from '@/services/emailService';

const ContatoSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const payload = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    const result = await sendEmailUltraReliable(payload);

    if (result.success) {
      const message = result.backup
        ? 'Recebemos sua mensagem e salvamos com segurança. Se necessário, envie também para contato.lorenzavolponi@gmail.com.'
        : 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
      setStatus({ ok: true, message });
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } else {
      setStatus({ ok: false, message: 'Não foi possível enviar agora. Tente novamente em instantes.' });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-24 bg-aix-black relative overflow-hidden border-t border-aix-purple/20">
      <div className="absolute inset-0 bg-constellation opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            <span className="gold-text-gradient">Vamos construir o próximo salto?</span>
          </h2>
          <p className="text-white/80 text-lg">
            Envie sua mensagem para iniciarmos uma conversa estratégica com IA aplicada ao seu contexto.
          </p>
        </div>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-4" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" value={formData.name} onChange={onChange} required placeholder="Seu nome" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white" />
            <input name="email" value={formData.email} onChange={onChange} required type="email" placeholder="Seu email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white" />
            <input name="phone" value={formData.phone} onChange={onChange} placeholder="Telefone" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white" />
            <input name="company" value={formData.company} onChange={onChange} placeholder="Empresa" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white" />
          </div>
          <textarea name="message" value={formData.message} onChange={onChange} required rows={6} placeholder="Como podemos ajudar?" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white" />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-aix-gold to-yellow-400 text-black font-semibold hover:opacity-90 transition disabled:opacity-60"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
          </button>

          {status && (
            <p className={status.ok ? 'text-emerald-300' : 'text-red-300'}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContatoSection;
