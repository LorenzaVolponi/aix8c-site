import { useEffect, useState } from 'react';

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
    window.Calendly?.initPopupWidget({ url });
  };

  return { openPopup, isLoaded, failed };
};

export default useCalendlyPopup;
