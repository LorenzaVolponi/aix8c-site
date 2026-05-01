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
import ContatoSection from "@/components/ContatoSection";

const Index = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const onMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const hoverables = () => Array.from(document.querySelectorAll('[data-cursor="nav-link"]')) as HTMLElement[];
    const activate = () => cursor.classList.add('cursor-expanded');
    const deactivate = () => cursor.classList.remove('cursor-expanded');
    hoverables().forEach(el => { el.addEventListener('mouseenter', activate); el.addEventListener('mouseleave', deactivate); });

    const magnets = Array.from(document.querySelectorAll('[data-magnetic]')) as HTMLElement[];
    const onMag = (e: MouseEvent) => {
      const t = e.currentTarget as HTMLElement;
      const r = t.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.12;
      const y = (e.clientY - r.top - r.height / 2) * 0.12;
      t.style.transform = `translate(${x}px, ${y}px)`;
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
        <ContatoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
