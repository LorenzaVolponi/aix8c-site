
import React from 'react';
import IntelligentLoader from "@/components/ui/IntelligentLoader";

interface PremiumLoaderProps {
  message?: string;
}

const PremiumLoader: React.FC<PremiumLoaderProps> = ({ message }) => (
  <div className="flex items-center justify-center h-96 bg-aix-black">
    <IntelligentLoader 
      isLoading={true} 
      progress={75} 
      message={message || "Carregando seção..."} 
      type="premium"
    />
  </div>
);

export default PremiumLoader;
