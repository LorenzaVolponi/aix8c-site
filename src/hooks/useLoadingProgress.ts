import { useState, useEffect } from 'react';

interface LoadingStep {
  progress: number;
  message: string;
}

export const useLoadingProgress = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const loadingSteps: LoadingStep[] = [
      { progress: 20, message: "Inicializando experiência..." },
      { progress: 40, message: "Carregando interface..." },
      { progress: 60, message: "Preparando conteúdo..." },
      { progress: 80, message: "Otimizando performance..." },
      { progress: 100, message: "Finalizando..." }
    ];

    let currentStep = 0;
    const intervalId = window.setInterval(() => {
      if (currentStep >= loadingSteps.length) {
        window.clearInterval(intervalId);
        setIsInitialLoading(false);
        return;
      }

      setLoadingProgress(loadingSteps[currentStep].progress);
      currentStep += 1;
    }, 250);

    const safetyTimeout = window.setTimeout(() => {
      setLoadingProgress(100);
      setIsInitialLoading(false);
      window.clearInterval(intervalId);
    }, 2200);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(safetyTimeout);
    };
  }, []);

  return { loadingProgress, isInitialLoading };
};
