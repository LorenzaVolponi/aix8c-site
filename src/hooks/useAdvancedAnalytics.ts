
import { useEffect } from 'react';

// Declare gtag as a global function
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const useAdvancedAnalytics = () => {
  useEffect(() => {
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(console.log);
      onINP(console.log);
      onFCP(console.log);
      onLCP(console.log);
      onTTFB(console.log);
    });

    const handleAIInteractions = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactionElement = target.closest('[data-ai-interaction]') as HTMLElement | null;
      if (interactionElement && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'ai_interaction', {
          event_category: 'AI Features',
          event_label: interactionElement.dataset.aiInteraction || 'unknown',
          value: 1
        });
      }
    };

    document.addEventListener('click', handleAIInteractions);

    return () => {
      document.removeEventListener('click', handleAIInteractions);
    };
  }, []);
};
