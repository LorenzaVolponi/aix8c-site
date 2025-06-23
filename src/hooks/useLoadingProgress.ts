
import { useState, useEffect } from 'react';

interface LoadingStep {
  progress: number;
  message: string;
}

export const useLoadingProgress = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Add a small delay to ensure React is fully initialized
    const initTimer = setTimeout(() => {
      const loadingSteps: LoadingStep[] = [
        { progress: 20, message: "Inicializando experiência..." },
        { progress: 40, message: "Carregando interface..." },
        { progress: 60, message: "Preparando conteúdo..." },
        { progress: 80, message: "Otimizando performance..." },
        { progress: 100, message: "Finalizando..." }
      ];

      let currentStep = 0;
      const loadingInterval = setInterval(() => {
        if (currentStep < loadingSteps.length) {
          setLoadingProgress(loadingSteps[currentStep].progress);
          currentStep++;
        } else {
          clearInterval(loadingInterval);
          setTimeout(() => setIsInitialLoading(false), 500);
        }
      }, 400);

      return () => clearInterval(loadingInterval);
    }, 50);

    return () => clearTimeout(initTimer);
  }, []);

  return { loadingProgress, isInitialLoading };
};
