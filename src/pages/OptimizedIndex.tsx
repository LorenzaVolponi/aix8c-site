import React, { useEffect, lazy, Suspense, useState } from "react";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import IntelligentLoader from "@/components/ui/IntelligentLoader";
import MicroInteractions from "@/components/ui/MicroInteractions";
import { usePerformanceMonitor } from "@/hooks/usePerformanceMonitor";
import { useAdvancedSEO } from "@/hooks/useAdvancedSEO";
import IntroSequence from "@/components/hero/intro/IntroSequence";
import SEOManager from "@/components/SEO/SEOManager";
import SchemaMarkup from "@/components/SEO/SchemaMarkup";
import PerformanceOptimizer from "@/components/SEO/PerformanceOptimizer";

// Lazy load components with intelligent loading
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
  const [showMainContent, setShowMainContent] = useState(false);
  const { isLowPerformance } = usePerformanceMonitor();

  // Advanced SEO Configuration
  useAdvancedSEO({
    title: "AIX8C - Lorenza Volponi | Líder Mundial em Prompt Engineering e IA Conversacional",
    description: "🚀 Descubra o futuro da IA com Lorenza Volponi! Pioneira brasileira em prompt engineering, automação de chatbots, vibe coding e mentoria com IA. Transforme sua comunicação com máquinas e domine a revolução da inteligência artificial.",
    keywords: [
      "prompt engineering",
      "engenharia de prompts", 
      "IA conversacional",
      "chatbot automation",
      "automação chatbot",
      "mentoria IA",
      "aprendizado com IA",
      "vibe coding",
      "Lorenza Volponi",
      "AIX8C",
      "inteligência artificial Brasil",
      "conversational AI",
      "AI mentorship",
      "machine learning prompts",
      "GPT prompts",
      "ChatGPT engineering",
      "AI coaching",
      "prompt optimization",
      "AI consultant Brazil",
      "artificial intelligence expert"
    ],
    canonical: "https://aix8c.com"
  });

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

    // Show main content after intro sequence
    const mainContentTimer = setTimeout(() => {
      setShowMainContent(true);
    }, 8000); // 8 seconds for complete intro sequence

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

    // Advanced Analytics and Performance Tracking
    const trackAdvancedMetrics = () => {
      // Core Web Vitals tracking
      if ('web-vital' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log); 
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }

      // AI-specific event tracking
      const trackAIInteractions = () => {
        document.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          if (target.closest('[data-ai-interaction]')) {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'ai_interaction', {
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

    // SEO-optimized meta tag injection
    const injectAdvancedMeta = () => {
      const metaTags = [
        { name: 'subject', content: 'Inteligência Artificial e Prompt Engineering' },
        { name: 'topic', content: 'AI, Machine Learning, Conversational AI, Chatbots' },
        { name: 'summary', content: 'Plataforma líder em educação e consultoria de IA conversacional' },
        { name: 'classification', content: 'Technology, Artificial Intelligence, Education' },
        { name: 'designer', content: 'Lorenza Volponi' },
        { name: 'reply-to', content: 'contato@aix8c.com' },
        { name: 'owner', content: 'Lorenza Volponi - AIX8C' },
        { name: 'url', content: 'https://aix8c.com' },
        { name: 'identifier-URL', content: 'https://aix8c.com' },
        { name: 'category', content: 'AI Technology, Prompt Engineering, Conversational AI' },
        { name: 'coverage', content: 'Worldwide' },
        { name: 'distribution', content: 'Global' },
        { name: 'rating', content: 'General' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:locale:alternate', content: 'en_US' }
      ];

      metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        if (tag.name) meta.name = tag.name;
        if (tag.property) meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      });
    };

    trackAdvancedMetrics();
    injectAdvancedMeta();

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(loadingInterval);
      clearTimeout(mainContentTimer);
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

  // Show intro sequence
  if (!showMainContent) {
    return <IntroSequence />;
  }

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-aix-black text-white relative">
        {/* Advanced SEO Components */}
        <SEOManager 
          title="AIX8C - Lorenza Volponi | Referência Mundial em Prompt Engineering 🚀"
          description="🌟 Lorenza Volponi, pioneira brasileira em engenharia de prompts e IA conversacional. Domine chatbots, automação IA, vibe coding e transforme sua comunicação com máquinas. Certificada MTF Portugal. Mentoria premium em IA."
          keywords="prompt engineering expert, engenharia prompts Brasil, IA conversacional, chatbot automation, Lorenza Volponi, AIX8C, vibe coding, AI mentorship, conversational AI Brazil, machine learning prompts, GPT engineering, AI consultant"
        />
        <SchemaMarkup />
        <PerformanceOptimizer />
        
        <Navbar />
        <MicroInteractions />
        
        <main>        
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
    </HelmetProvider>
  );
};

export default OptimizedIndex;
