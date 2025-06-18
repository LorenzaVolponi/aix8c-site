
import React, { useEffect, Suspense, useState } from "react";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import MicroInteractions from "@/components/ui/MicroInteractions";
import IntroSequence from "@/components/hero/intro/IntroSequence";
import SEOManager from "@/components/SEO/SEOManager";
import SchemaMarkup from "@/components/SEO/SchemaMarkup";
import PerformanceOptimizer from "@/components/SEO/PerformanceOptimizer";

// Import refactored components
import LoadingScreen from "@/components/OptimizedIndex/LoadingScreen";
import PremiumLoader from "@/components/OptimizedIndex/PremiumLoader";
import {
  AboutSection,
  SobreNosSection,
  JornadaSection,
  PortfolioSection,
  AussySection,
  ContactSection,
  Footer
} from "@/components/OptimizedIndex/LazyComponents";

// Import refactored hooks
import { useLoadingProgress } from "@/hooks/useLoadingProgress";
import { usePerformanceOptimization } from "@/hooks/usePerformanceOptimization";
import { useAdvancedAnalytics } from "@/hooks/useAdvancedAnalytics";
import { useAdvancedSEO } from "@/hooks/useAdvancedSEO";
import { injectAdvancedMeta, preloadCriticalResources } from "@/utils/seoOptimizations";

const OptimizedIndex = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const { loadingProgress, isInitialLoading } = useLoadingProgress();
  
  usePerformanceOptimization();
  useAdvancedAnalytics();

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
    // Show main content after intro sequence
    const mainContentTimer = setTimeout(() => {
      setShowMainContent(true);
    }, 8000); // 8 seconds for complete intro sequence

    // Initialize optimizations
    preloadCriticalResources();
    injectAdvancedMeta();

    return () => {
      clearTimeout(mainContentTimer);
    };
  }, []);

  // Show initial loading screen
  if (isInitialLoading) {
    return <LoadingScreen progress={loadingProgress} />;
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
