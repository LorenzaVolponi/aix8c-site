
import React, { useEffect, Suspense, useState } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import MicroInteractions from "@/components/ui/MicroInteractions";
import HeroSection from "@/components/HeroSection";
import SEOManager from "@/components/SEO/SEOManager";
import SchemaMarkup from "@/components/SEO/SchemaMarkup";
import PerformanceOptimizer from "@/components/SEO/PerformanceOptimizer";
import { Calendar } from "lucide-react";

// Import intro sequence
import IntroSequence from "@/components/hero/intro/IntroSequence";

// Import refactored components
import LoadingScreen from "@/components/OptimizedIndex/LoadingScreen";
import PremiumLoader from "@/components/OptimizedIndex/PremiumLoader";
import {
  AboutSection,
  SobreNosSection,
  JornadaSection,
  PortfolioSection,
  AussySection,
  Footer
} from "@/components/OptimizedIndex/LazyComponents";

// Import refactored hooks
import { useLoadingProgress } from "@/hooks/useLoadingProgress";
import { usePerformanceOptimization } from "@/hooks/usePerformanceOptimization";
import { useAdvancedAnalytics } from "@/hooks/useAdvancedAnalytics";
import { useAdvancedSEO } from "@/hooks/useAdvancedSEO";
import { injectAdvancedMeta, preloadCriticalResources } from "@/utils/seoOptimizations";

const OptimizedIndexContent = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isReady, setIsReady] = useState(false);
  
  // Always call hooks - never conditionally
  const { loadingProgress, isInitialLoading } = useLoadingProgress();
  
  // Always call other hooks too
  usePerformanceOptimization();
  useAdvancedAnalytics();
  useAdvancedSEO({
    title: "Lorenza Volponi - Mentora de IA e Engenharia de Prompts",
    description:
      "Especialista em mentoria de IA, engenharia de prompts e soluções criativas com IA. Lorenza Volponi lidera a transformação digital com inovação e impacto global.",
    keywords: [
      "IA",
      "Mentoria de IA",
      "Engenharia de Prompts",
      "Agentes de IA",
      "IA Criativa",
      "Arquiteta de IA",
      "Automação Inteligente",
      "Lorenza Volponi"
    ],
    canonical: "https://aix8c.com"
  });

  useEffect(() => {
    // Initialize React properly
    const timer = setTimeout(() => {
      setIsReady(true);
      preloadCriticalResources();
      injectAdvancedMeta();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const gaScript = document.createElement('script');
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX';
    gaScript.async = true;
    document.head.appendChild(gaScript);

    const gaInit = document.createElement('script');
    gaInit.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXX');
    `;
    document.head.appendChild(gaInit);

    const verificationMeta = document.createElement('meta');
    verificationMeta.name = 'google-site-verification';
    verificationMeta.content = 'verification_token';
    document.head.appendChild(verificationMeta);

    const generateSitemap = async () => {
      const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
            <loc>https://aix8c.com</loc>
            <priority>1.0</priority>
          </url>
          <url>
            <loc>https://aix8c.com/mentoria-de-ia</loc>
            <priority>0.9</priority>
          </url>
          <url>
            <loc>https://aix8c.com/engenharia-de-prompts</loc>
            <priority>0.9</priority>
          </url>
        </urlset>`;
      const blob = new Blob([sitemapContent], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'sitemap.xml';
      link.click();
    };

    generateSitemap();

    return () => {
      document.head.removeChild(gaScript);
      document.head.removeChild(gaInit);
      document.head.removeChild(verificationMeta);
    };
  }, []);

  useEffect(() => {
    if (isReady && !isInitialLoading) {
      // Reduzido para 8 segundos - muito mais rápido
      const introTimer = setTimeout(() => {
        setShowIntro(false);
      }, 8000);

      return () => clearTimeout(introTimer);
    }
  }, [isReady, isInitialLoading]);

  // Show loading screen while initializing or during initial loading
  if (!isReady || isInitialLoading) {
    return <LoadingScreen progress={loadingProgress} />;
  }

  if (showIntro) {
    return <IntroSequence />;
  }

  return (
    <div className="min-h-screen bg-aix-black text-white relative">
      <SEOManager
        title="Lorenza Volponi - Mentora de IA e Engenharia de Prompts"
        description="Especialista em mentoria de IA, engenharia de prompts e soluções criativas com IA. Lorenza Volponi lidera a transformação digital com inovação e impacto global."
        keywords="IA, Mentoria de IA, Engenharia de Prompts, Agentes de IA, IA Criativa, Arquiteta de IA, Automação Inteligente, Lorenza Volponi"
      />
      <SchemaMarkup />
      <PerformanceOptimizer />
      
      <Navbar />
      <MicroInteractions />
      
      <main className="w-full">
        <HeroSection />
        
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
      </main>
      
      <Suspense fallback={<PremiumLoader message="Finalizando..." />}>
        <Footer />
      </Suspense>

      {/* Calendly Embed Popup Widget */}
      <div
        className="calendly-inline-widget fixed bottom-8 right-8 z-50 cursor-pointer"
        data-url="https://calendly.com/lorenzavolponi"
        style={{
          minWidth: '320px',
          height: '630px',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          background: '#ffffff',
          display: 'none'
        }}
        id="calendly-popup"
      ></div>
      <button
        className="fixed bottom-8 right-8 z-50 bg-aix-gold text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 flex items-center gap-2"
        onClick={() => {
          const calendlyPopup = document.getElementById('calendly-popup');
          if (calendlyPopup && calendlyPopup.style.display === 'none') {
            calendlyPopup.style.display = 'block';
            const head = document.getElementsByTagName('head')[0];
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            head.appendChild(script);
          } else if (calendlyPopup) {
            calendlyPopup.style.display = 'none';
          }
        }}
      >
        <Calendar className="w-5 h-5" />
        Agendar Consultoria
      </button>
    </div>
  );
};

const OptimizedIndex = () => {
  return (
    <HelmetProvider>
      <TooltipProvider>
        <OptimizedIndexContent />
      </TooltipProvider>
    </HelmetProvider>
  );
};

export default OptimizedIndex;
