
import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  timestamp: string;
}

export const sendEmailUltraReliable = async (data: EmailData) => {
  console.log('📧 Enviando para: contato.lorenzavolponi@gmail.com');
  
  try {
    // Configuração do EmailJS para Lorenza Volponi
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_lorenza';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contato';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
    if (!publicKey) {
      throw new Error('VITE_EMAILJS_PUBLIC_KEY não configurada');
    }
    
    const templateParams = {
      to_email: 'contato.lorenzavolponi@gmail.com',
      to_name: 'Lorenza Volponi',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      company: data.company,
      message: data.message,
      timestamp: data.timestamp,
      subject: `Novo contato de ${data.name} - ${data.company || 'Pessoa Física'}`
    };

    console.log('📧 Enviando email com dados:', templateParams);

    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    console.log('✅ Email enviado com sucesso para contato.lorenzavolponi@gmail.com!', result);
    return { success: true, result };
    
  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    
    // Backup local
    const backupData = {
      ...data,
      id: Date.now(),
      status: 'pending',
      destinatario: 'contato.lorenzavolponi@gmail.com'
    };
    
    const existingContacts = JSON.parse(localStorage.getItem('pending_contacts') || '[]');
    existingContacts.push(backupData);
    localStorage.setItem('pending_contacts', JSON.stringify(existingContacts));
    
    console.log('💾 Dados salvos como backup para contato.lorenzavolponi@gmail.com');
    return { success: false, backup: true };
  }
};
