import { useEffect, useState } from 'react';

// Load Calendly's CSS to ensure the popup displays correctly
const ensureCalendlyStyles = () => {
  if (!document.querySelector('link[data-calendly]')) {
    const link = document.createElement('link');
    link.setAttribute('data-calendly', 'true');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);
  }
};

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

export const useCalendlyPopup = (url: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    // Preload Calendly script so the popup opens instantly when triggered
    if (!window.Calendly) {
      ensureCalendlyStyles();
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setIsLoaded(true);
      script.onerror = () => setFailed(true);
      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  const openPopup = () => {
    if (window.Calendly?.initPopupWidget) {
      ensureCalendlyStyles();
      window.Calendly.initPopupWidget({ url });

      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          window.Calendly?.closePopupWidget?.();
          document.removeEventListener('keydown', handleEsc);
        }
      };

      document.addEventListener('keydown', handleEsc);
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return { openPopup, isLoaded, failed };
};

export default useCalendlyPopup;
