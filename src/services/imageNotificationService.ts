
import { sendEmailUltraReliable } from './emailService';

interface ImportantImageData {
  imageUrl: string;
  imageName: string;
  uploadedBy: string;
  uploadDate: string;
  description?: string;
}

export const sendImportantImageNotification = async (imageData: ImportantImageData) => {
  console.log('📧 Enviando notificação de imagem importante para contato.lorenzavolponi@gmail.com');
  
  const emailData = {
    name: 'Sistema AUSSY AI',
    email: 'noreply@aix8c.com',
    phone: '',
    company: 'AIX8C Platform',
    message: `
🚨 IMAGEM IMPORTANTE COMPARTILHADA

Detalhes da Imagem:
• Nome: ${imageData.imageName}
• Enviado por: ${imageData.uploadedBy}
• Data: ${imageData.uploadDate}
• Descrição: ${imageData.description || 'Não fornecida'}

Link para visualizar: ${imageData.imageUrl}

Esta é uma notificação automática do sistema AUSSY AI.
    `,
    timestamp: new Date().toLocaleString('pt-BR')
  };

  try {
    const result = await sendEmailUltraReliable(emailData);
    console.log('✅ Notificação de imagem importante enviada com sucesso!', result);
    return { success: true, result };
  } catch (error) {
    console.error('❌ Erro ao enviar notificação de imagem importante:', error);
    return { success: false, error };
  }
};

// Hook para detectar upload de imagens importantes
export const useImageUploadNotification = () => {
  const notifyImportantImage = async (file: File, isImportant: boolean = false) => {
    if (!isImportant) return;

    // Simula URL da imagem (em produção seria o URL real após upload)
    const imageUrl = URL.createObjectURL(file);
    
    const imageData: ImportantImageData = {
      imageUrl,
      imageName: file.name,
      uploadedBy: 'Usuário do Sistema',
      uploadDate: new Date().toLocaleString('pt-BR'),
      description: 'Imagem marcada como importante pelo usuário'
    };

    await sendImportantImageNotification(imageData);
  };

  return { notifyImportantImage };
};
