
import React, { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero image
      const heroImg = new Image();
      heroImg.src = "/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png";
      heroImg.loading = 'eager';

      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap';
      fontPreload.as = 'style';
      fontPreload.crossOrigin = 'anonymous';
      document.head.appendChild(fontPreload);
    };

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src!;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      } else {
        // Fallback for older browsers
        images.forEach(img => {
          const imgElement = img as HTMLImageElement;
          imgElement.src = imgElement.dataset.src!;
        });
      }
    };

    // Service Worker for caching
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('SW registered: ', registration);
        } catch (registrationError) {
          console.log('SW registration failed: ', registrationError);
        }
      }
    };

    // Resource Hints
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//calendly.com' },
        { rel: 'dns-prefetch', href: '//google-analytics.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];

      hints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossOrigin) link.crossOrigin = hint.crossOrigin;
        document.head.appendChild(link);
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    registerServiceWorker();
    addResourceHints();

    // Critical CSS inlining
    const inlineCriticalCSS = () => {
      const criticalCSS = `
        .hero-section { min-height: 100vh; display: flex; align-items: center; }
        .glass-card { backdrop-filter: blur(16px); background: rgba(255,255,255,0.1); }
        .aix-gold { color: #f59e0b; }
        .loading-screen { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; }
      `;
      
      const style = document.createElement('style');
      style.innerHTML = criticalCSS;
      document.head.insertBefore(style, document.head.firstChild);
    };

    inlineCriticalCSS();

  }, []);

  return null;
};

export default PerformanceOptimizer;
