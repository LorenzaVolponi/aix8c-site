
import React, { useEffect, Suspense, useState } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import MicroInteractions from "@/components/ui/MicroInteractions";
import HeroSection from "@/components/HeroSection";
import SEOManager from "@/components/SEO/SEOManager";
import SchemaMarkup from "@/components/SEO/SchemaMarkup";
import PerformanceOptimizer from "@/components/SEO/PerformanceOptimizer";
import ChatBot from "@/components/ChatBot";

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
  ContactSection,
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
    title: "Lorenza Volponi - Capitã da Nave AIX8C | Tradutora entre almas humanas e mentes artificiais",
    description: "🚀 Conheça Lorenza Volponi, Capitã da Nave AIX8C e tradutora entre almas humanas e mentes artificiais! Sou a suma infinita de ideias fora da caixa, unindo tecnologia e emoção. Navegue pelos mares da inovação digital comigo.",
    keywords: [
      "Lorenza Volponi",
      "Capitã AIX8C",
      "tradutora almas humanas mentes artificiais",
      "prompt engineering",
      "engenharia de prompts", 
      "IA conversacional",
      "chatbot automation",
      "automação chatbot",
      "mentoria IA",
      "aprendizado com IA",
      "vibe coding",
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
      "artificial intelligence expert",
      "tecnologia e emoção",
      "inovação digital"
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
    if (isReady && !isInitialLoading) {
      // Start intro timer only when loading is complete
      const introTimer = setTimeout(() => {
        setShowIntro(false);
      }, 15000); // 15 seconds for intro

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
        title="Lorenza Volponi - Capitã da Nave AIX8C | Tradutora entre almas humanas e mentes artificiais 🚀"
        description="🌟 Lorenza Volponi, Capitã da Nave AIX8C e tradutora entre almas humanas e mentes artificiais. Sou a suma infinita de ideias fora da caixa, unindo tecnologia e emoção. Navegue pelos mares da inovação digital!"
        keywords="Lorenza Volponi, Capitã AIX8C, tradutora almas humanas mentes artificiais, prompt engineering expert, engenharia prompts Brasil, IA conversacional, chatbot automation, vibe coding, AI mentorship, conversational AI Brazil, machine learning prompts, GPT engineering, AI consultant, tecnologia e emoção"
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
        
        <Suspense fallback={<PremiumLoader message="Carregando contato..." />}>
          <ContactSection />
        </Suspense>
      </main>
      
      <Suspense fallback={<PremiumLoader message="Finalizando..." />}>
        <Footer />
      </Suspense>

      <ChatBot />
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
