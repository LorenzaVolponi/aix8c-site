
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
  console.log('📧 Preparando envio para: contato.lorenzavolponi@gmail.com');
  
  try {
    // Configuração do EmailJS (você precisa configurar essas chaves no EmailJS)
    const serviceId = 'service_lorenza'; // Você precisa criar no EmailJS
    const templateId = 'template_contato'; // Você precisa criar no EmailJS  
    const publicKey = 'YOUR_PUBLIC_KEY'; // Você precisa pegar no EmailJS
    
    const templateParams = {
      to_email: 'contato.lorenzavolponi@gmail.com',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      company: data.company,
      message: data.message,
      timestamp: data.timestamp
    };

    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    console.log('✅ Email enviado com sucesso!', result);
    return { success: true, result };
    
  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    
    // Fallback: salvar no localStorage como backup
    const backupData = {
      ...data,
      id: Date.now(),
      status: 'pending'
    };
    
    const existingContacts = JSON.parse(localStorage.getItem('pending_contacts') || '[]');
    existingContacts.push(backupData);
    localStorage.setItem('pending_contacts', JSON.stringify(existingContacts));
    
    console.log('💾 Dados salvos localmente como backup');
    return { success: true, backup: true };
  }
};
