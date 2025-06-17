import React, { useEffect, lazy, Suspense, useState } from "react";
import Navbar from "@/components/Navbar";
import IntelligentLoader from "@/components/ui/IntelligentLoader";
import MicroInteractions from "@/components/ui/MicroInteractions";
import { usePerformanceMonitor } from "@/hooks/usePerformanceMonitor";

// Lazy load components with intelligent loading
const CinematicHeroSection = lazy(() => 
  import("@/components/hero/CinematicHeroSection").then(module => ({ 
    default: module.default 
  }))
);

const AboutSection = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      resolve(import("@/components/AboutSection"));
    }, 100);
  })
);

const SobreNosSection = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      resolve(import("@/components/SobreNosSection"));
    }, 200);
  })
);

const JornadaSection = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      resolve(import("@/components/JornadaSection"));
    }, 300);
  })
);

const PortfolioSection = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      resolve(import("@/components/PortfolioSection"));
    }, 400);
  })
);

const AussySection = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      resolve(import("@/components/AussySection"));
    }, 500);
  })
);

const ContactSection = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      resolve(import("@/components/ContactSection"));
    }, 600);
  })
);

const Footer = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      resolve(import("@/components/Footer"));
    }, 700);
  })
);

const PremiumLoader = ({ message }: { message?: string }) => (
  <div className="flex items-center justify-center h-96 bg-aix-black">
    <IntelligentLoader 
      isLoading={true} 
      progress={75} 
      message={message || "Carregando seção..."} 
      type="premium"
    />
  </div>
);

const OptimizedIndex = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const { isLowPerformance } = usePerformanceMonitor();

  useEffect(() => {
    // Simulate progressive loading
    const loadingSteps = [
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

    // Enhanced smooth scroll with performance optimization
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const id = target.getAttribute('href')?.substring(1);
        if (!id) return;
        
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Performance-optimized scroll handler
    let ticking = false;
    const handleScroll = () => {
      if (!ticking && !isLowPerformance) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const rate = scrolled * -0.2;
          
          // Apply parallax effects only if performance allows
          const parallaxElements = document.querySelectorAll('.parallax-bg');
          parallaxElements.forEach((element) => {
            (element as HTMLElement).style.transform = `translateY(${rate}px)`;
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    if (!isLowPerformance) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    // Preload critical resources with priority
    const preloadCriticalResources = () => {
      // Preload hero image with high priority
      const img = new Image();
      img.src = "/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png";
      img.loading = 'eager';
      
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      fontLink.onload = () => {
        fontLink.rel = 'stylesheet';
      };
      document.head.appendChild(fontLink);

      // Preload critical CSS
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Use idle time for non-critical preloading
          const cssLink = document.createElement('link');
          cssLink.rel = 'prefetch';
          cssLink.href = '/src/index.css';
          document.head.appendChild(cssLink);
        });
      }
    };
    
    preloadCriticalResources();
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(loadingInterval);
    };
  }, [isLowPerformance]);

  // Show initial loading screen
  if (isInitialLoading) {
    return (
      <div className="min-h-screen bg-aix-black">
        <IntelligentLoader 
          isLoading={true} 
          progress={loadingProgress} 
          message="Preparando experiência AIX8C..."
          type="neural"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-aix-black text-white relative">
      <Navbar />
      <MicroInteractions />
      
      <main>
        <Suspense fallback={<PremiumLoader message="Carregando experiência heroica..." />}>
          <CinematicHeroSection />
        </Suspense>
        
        <Suspense fallback={<PremiumLoader message="Carregando sobre..." />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<PremiumLoader message="Carregando nossa história..." />}>
          <SobreNosSection />
        </Suspense>
        
        <Suspense fallback={<PremiumLoader message="Carregando jornada..." />}>
          <JornadaSection />
        </Suspense>
        
        <Suspense fallback={<PremiumLoader message="Carregando portfólio..." />}>
          <PortfolioSection />
        </Suspense>
        
        <Suspense fallback={<PremiumLoader message="Carregando Aussy..." />}>
          <AussySection />
        </Suspense>
        
        <Suspense fallback={<PremiumLoader message="Carregando contato..." />}>
          <ContactSection />
        </Suspense>
      </main>
      
      <Suspense fallback={<PremiumLoader message="Finalizando..." />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default OptimizedIndex;
