import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  timestamp: string;
}

const CONTACT_EMAIL = 'contato.lorenzavolponi@gmail.com';

export const sendEmailUltraReliable = async (data: EmailData) => {
  console.log(`📧 Enviando para: ${CONTACT_EMAIL}`);

  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_lorenza';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contato';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    if (!publicKey) {
      throw new Error('VITE_EMAILJS_PUBLIC_KEY não configurada');
    }

    const templateParams = {
      to_email: CONTACT_EMAIL,
      to_name: 'Lorenza Volponi',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      company: data.company,
      message: data.message,
      timestamp: data.timestamp,
      subject: `Novo contato de ${data.name} - ${data.company || 'Pessoa Física'}`,
    };

    const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

    console.log('✅ Email enviado com sucesso!', result);
    return { success: true, result, backup: false };
  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);

    const backupData = {
      ...data,
      id: Date.now(),
      status: 'pending',
      destinatario: CONTACT_EMAIL,
    };

    const existingContacts = JSON.parse(localStorage.getItem('pending_contacts') || '[]');
    existingContacts.push(backupData);
    localStorage.setItem('pending_contacts', JSON.stringify(existingContacts));

    console.log('💾 Dados salvos localmente para reenvio posterior');
    return { success: true, backup: true };
  }
};
