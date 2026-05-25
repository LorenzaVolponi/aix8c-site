import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import FragmentosEternidadeSection from "@/components/FragmentosEternidadeSection";
import LinguagemSection from "@/components/LinguagemSection";
import GaleriaSensorialSection from "@/components/GaleriaSensorialSection";
import UniversoSimbolicoSection from "@/components/UniversoSimbolicoSection";
import AtmosferaSonoraSection from "@/components/AtmosferaSonoraSection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    let cursor: HTMLDivElement | null = null;

    if (!isTouch) {
      cursor = document.createElement("div");
      cursor.className = "custom-cursor";
      document.body.appendChild(cursor);
    }

    const onMove = (e: MouseEvent) => {
      if (!cursor) return;
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    const stageSections = [
      { id: "home", color: "rgba(139,92,246,0.14)" },
      { id: "manifesto", color: "rgba(6,182,212,0.12)" },
      { id: "fragmentos", color: "rgba(245,158,11,0.12)" },
      { id: "linguagem", color: "rgba(124,58,237,0.16)" },
      { id: "galeria", color: "rgba(251,191,36,0.12)" },
      { id: "universo", color: "rgba(6,182,212,0.14)" },
      { id: "atmosfera", color: "rgba(139,92,246,0.16)" },
      { id: "contato", color: "rgba(6,182,212,0.10)" },
    ];

    const updateStage = () => {
      const center = window.innerHeight * 0.45;
      let active = "rgba(0,0,0,0)";
      stageSections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= center && rect.bottom >= center) active = section.color;
      });
      document.documentElement.style.setProperty("--stage-color", active);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", updateStage, { passive: true });
    updateStage();

    return () => {
      cursor?.remove();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", updateStage);
    };
  }, []);

  return (
    <div className="min-h-screen bg-aix-black text-white relative">
      <div className="stage-transition-layer" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <ManifestoSection />
          <FragmentosEternidadeSection />
          <LinguagemSection />
          <GaleriaSensorialSection />
          <UniversoSimbolicoSection />
          <AtmosferaSonoraSection />
          <ContatoSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
