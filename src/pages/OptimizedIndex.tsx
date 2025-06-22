
import React, { useEffect, Suspense, useState } from "react";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import MicroInteractions from "@/components/ui/MicroInteractions";
import HeroSection from "@/components/HeroSection";
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
  const { loadingProgress, isInitialLoading } = useLoadingProgress();
  
  usePerformanceOptimization();
  useAdvancedAnalytics();

  // Advanced SEO Configuration
  useAdvancedSEO({
    title: "Lorenza Volponi - Capitã da Nave AIX8C | Pioneira em Engenharia de Prompts",
    description: "🚀 Conheça Lorenza Volponi, Capitã da Nave AIX8C e pioneira mundial em prompt engineering! Sou a soma infinita de ideias fora da caixa, unindo tecnologia e emoção. Navegue pelos mares da inovação digital comigo.",
    keywords: [
      "Lorenza Volponi",
      "Capitã AIX8C",
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
    // Initialize optimizations
    preloadCriticalResources();
    injectAdvancedMeta();
  }, []);

  // Show initial loading screen only briefly
  if (isInitialLoading) {
    return <LoadingScreen progress={loadingProgress} />;
  }

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-aix-black text-white relative">
        {/* Advanced SEO Components */}
        <SEOManager 
          title="Lorenza Volponi - Capitã da Nave AIX8C | Referência Mundial em Prompt Engineering 🚀"
          description="🌟 Lorenza Volponi, Capitã da Nave AIX8C e pioneira brasileira em engenharia de prompts. Sou a soma infinita de ideias fora da caixa, unindo tecnologia e emoção. Navegue pelos mares da inovação digital!"
          keywords="Lorenza Volponi, Capitã AIX8C, prompt engineering expert, engenharia prompts Brasil, IA conversacional, chatbot automation, vibe coding, AI mentorship, conversational AI Brazil, machine learning prompts, GPT engineering, AI consultant, tecnologia e emoção"
        />
        <SchemaMarkup />
        <PerformanceOptimizer />
        
        <Navbar />
        <MicroInteractions />
        
        <main>
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
      </div>
    </HelmetProvider>
  );
};

export default OptimizedIndex;
