
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SobreNosSection from "@/components/SobreNosSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import PortfolioSection from "@/components/PortfolioSection";
import AussySection from "@/components/AussySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href')?.substring(1);
        if (!id) return;
        
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          const yOffset = -80; // Navbar height offset
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-aix-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SobreNosSection />
        <ExpertiseSection />
        <PortfolioSection />
        <AussySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
