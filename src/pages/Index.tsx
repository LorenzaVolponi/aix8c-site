import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SobreNosSection from "@/components/SobreNosSection";
import JornadaSection from "@/components/JornadaSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import PortfolioSection from "@/components/PortfolioSection";
import AussySection from "@/components/AussySection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (anchor) {
        const id = anchor.getAttribute('href')?.substring(1);
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
    const reset = (e: Event) => ((e.currentTarget as HTMLElement).style.transform = 'translate(0,0)');
    magnets.forEach(m => { m.addEventListener('mousemove', onMag); m.addEventListener('mouseleave', reset); });

    window.addEventListener('mousemove', onMove);
    return () => {
      cursor.remove();
      window.removeEventListener('mousemove', onMove);
      hoverables().forEach(el => { el.removeEventListener('mouseenter', activate); el.removeEventListener('mouseleave', deactivate); });
      magnets.forEach(m => { m.removeEventListener('mousemove', onMag); m.removeEventListener('mouseleave', reset); });
    };
  }, []);

  return (
    <div className="min-h-screen bg-aix-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SobreNosSection />
        <JornadaSection />
        <ExpertiseSection />
        <PortfolioSection />
        <AussySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
