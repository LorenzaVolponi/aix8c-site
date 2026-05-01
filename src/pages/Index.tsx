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

    const stageSections = [
      { id: 'sobre', color: 'rgba(139,92,246,0.16)' },
      { id: 'sobre-nos', color: 'rgba(6,182,212,0.14)' },
      { id: 'jornada', color: 'rgba(245,158,11,0.14)' },
      { id: 'portfolio', color: 'rgba(124,58,237,0.18)' },
      { id: 'aussy', color: 'rgba(251,191,36,0.15)' },
      { id: 'contato', color: 'rgba(6,182,212,0.12)' },
    ];

    const updateStage = () => {
      const center = window.innerHeight * 0.45;
      let active = 'rgba(0,0,0,0)';
      stageSections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= center && rect.bottom >= center) active = section.color;
      });
      document.documentElement.style.setProperty('--stage-color', active);
    };

    window.addEventListener('scroll', updateStage, { passive: true });
    updateStage();

    return () => {
      cursor.remove();
      window.removeEventListener('mousemove', onMove);
      hoverables().forEach(el => { el.removeEventListener('mouseenter', activate); el.removeEventListener('mouseleave', deactivate); });
      magnets.forEach(m => { m.removeEventListener('mousemove', onMag); m.removeEventListener('mouseleave', reset); });
      window.removeEventListener('scroll', updateStage);
    };
  }, []);

  return (
    <div className="min-h-screen bg-aix-black text-white relative">
      <div className="stage-transition-layer" />
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
