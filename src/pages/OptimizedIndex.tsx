
import React, { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";

// Lazy load components for optimal performance
const CinematicHeroSection = lazy(() => import("@/components/hero/CinematicHeroSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const SobreNosSection = lazy(() => import("@/components/SobreNosSection"));
const JornadaSection = lazy(() => import("@/components/JornadaSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const AussySection = lazy(() => import("@/components/AussySection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Premium loading component with cinematic theme
const PremiumLoader = () => (
  <div className="flex items-center justify-center h-64 bg-aix-black">
    <div className="flex space-x-3">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 bg-gradient-to-r from-aix-gold to-yellow-500 rounded-full animate-pulse"
          style={{ animationDelay: `${i * 0.3}s` }}
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
          const scrolled = window.pageYOffset;
          const rate = scrolled * -0.3;
          
          // Apply parallax effects to background elements
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Enhanced preload critical resources
    const preloadCriticalResources = () => {
      // Preload profile image
      const img = new Image();
      img.src = "/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png";
      
      // Preload key fonts for better performance
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap';
      link.as = 'style';
      document.head.appendChild(link);
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
        <Suspense fallback={<PremiumLoader />}>
          <CinematicHeroSection />
        </Suspense>
        
        <Suspense fallback={<PremiumLoader />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<PremiumLoader />}>
          <SobreNosSection />
        </Suspense>
        
        <Suspense fallback={<PremiumLoader />}>
          <JornadaSection />
        </Suspense>
        
        <Suspense fallback={<PremiumLoader />}>
          <PortfolioSection />
        </Suspense>
        
        <Suspense fallback={<PremiumLoader />}>
          <AussySection />
        </Suspense>
        
        <Suspense fallback={<PremiumLoader />}>
          <ContactSection />
        </Suspense>
      </main>
      
      <Suspense fallback={<PremiumLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default OptimizedIndex;
