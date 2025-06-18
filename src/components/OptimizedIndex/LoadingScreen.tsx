
import React from 'react';
import IntelligentLoader from "@/components/ui/IntelligentLoader";

interface LoadingScreenProps {
  progress: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress }) => {
  return (
    <div className="min-h-screen bg-aix-black">
      <IntelligentLoader 
        isLoading={true} 
        progress={progress} 
        message="Preparando experiência AIX8C..."
        type="neural"
      />
    </div>
  );
};

export default LoadingScreen;
