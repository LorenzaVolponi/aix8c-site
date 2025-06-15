
import React, { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";

// Lazy load components for optimal performance
const EnhancedHeroSection = lazy(() => import("@/components/hero/EnhancedHeroSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const SobreNosSection = lazy(() => import("@/components/SobreNosSection"));
const JornadaSection = lazy(() => import("@/components/JornadaSection"));
const ExpertiseSection = lazy(() => import("@/components/ExpertiseSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const AussySection = lazy(() => import("@/components/AussySection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading component with cinematic style
const SectionLoader = () => (
  <div className="flex items-center justify-center h-64 bg-aix-black">
    <div className="flex space-x-2">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-3 h-3 bg-aix-gold rounded-full animate-pulse"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  </div>
);

const OptimizedIndex = () => {
  // Enhanced smooth scroll with performance optimization
  useEffect(() => {
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
          
          // Use optimized scroll behavior
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Performance optimization for scroll events
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Add any scroll-based optimizations here
          ticking = false;
        });
        ticking = true;
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload profile image
      const img = new Image();
      img.src = "/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png";
    };
    
    preloadCriticalResources();
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-aix-black text-white">
      <Navbar />
      <main>
        <Suspense fallback={<SectionLoader />}>
          <EnhancedHeroSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <SobreNosSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <JornadaSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ExpertiseSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <PortfolioSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <AussySection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default OptimizedIndex;
