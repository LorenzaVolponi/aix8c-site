
import React, { useState } from 'react';
import { Upload, Image, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useImageUploadNotification } from '@/services/imageNotificationService';

const ImageUploadDemo = () => {
  const [dragActive, setDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { notifyImportantImage } = useImageUploadNotification();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      await handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione apenas arquivos de imagem.');
      return;
    }

    setIsUploading(true);
    
    try {
      // Simula upload e marca como importante
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Envia notificação por email
      await notifyImportantImage(file, true);
      
      alert('✅ Imagem importante enviada! Notificação por email enviada para contato.lorenzavolponi@gmail.com');
    } catch (error) {
      console.error('Erro no upload:', error);
      alert('❌ Erro ao processar imagem. Tente novamente.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-aix-darkgray/30 rounded-2xl border border-aix-purple/30">
      <div className="text-center mb-4">
        <h3 className="text-white font-semibold mb-2">Sistema de Imagens Importantes</h3>
        <p className="text-aix-gold text-sm">Upload de imagem com notificação automática por email</p>
      </div>

      <motion.div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
          dragActive 
            ? 'border-aix-cyan bg-aix-cyan/10' 
            : 'border-aix-purple/50 hover:border-aix-purple'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        whileHover={{ scale: 1.02 }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={isUploading}
        />
        
        <div className="flex flex-col items-center space-y-4">
          {isUploading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Upload className="w-12 h-12 text-aix-cyan" />
            </motion.div>
          ) : (
            <Image className="w-12 h-12 text-aix-purple" />
          )}
          
          <div>
            <p className="text-white font-medium">
              {isUploading ? 'Processando...' : 'Clique ou arraste uma imagem'}
            </p>
            <p className="text-white/60 text-sm mt-1">
              {isUploading ? 'Enviando notificação por email...' : 'PNG, JPG, GIF até 10MB'}
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mt-4 p-3 bg-aix-gold/10 rounded-lg border border-aix-gold/30">
        <div className="flex items-start space-x-2">
          <AlertTriangle className="w-4 h-4 text-aix-gold mt-0.5 flex-shrink-0" />
          <div className="text-xs text-aix-gold">
            <p className="font-medium">Sistema Ativo</p>
            <p>Notificações automáticas para contato.lorenzavolponi@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUp
