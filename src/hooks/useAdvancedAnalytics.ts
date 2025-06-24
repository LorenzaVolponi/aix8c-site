
import { useEffect } from 'react';

// Declare gtag as a global function
declare global {
    interface Window {
      gtag?: (...args: unknown[]) => void;
    }
}

export const useAdvancedAnalytics = () => {
  useEffect(() => {
    // Advanced Analytics and Performance Tracking
    const trackAdvancedMetrics = () => {
      // Core Web Vitals tracking with proper imports
      if ('web-vitals' in window) {
        import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
          onCLS(console.log);
          onINP(console.log); // Updated from onFID to onINP
          onFCP(console.log);
          onLCP(console.log);
          onTTFB(console.log);
        });
      }

      // AI-specific event tracking
      const trackAIInteractions = () => {
        document.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          if (target.closest('[data-ai-interaction]')) {
            if (typeof window.gtag !== 'undefined') {
              window.gtag('event', 'ai_interaction', {
                'event_category': 'AI Features',
                'event_label': target.dataset.aiInteraction || 'unknown',
                'value': 1
              });
            }
          }
        });
      };

      trackAIInteractions();
    };

    trackAdvancedMetrics();
  }, []);
};
