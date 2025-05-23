
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    let particles: Particle[] = [];
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.color = Math.random() > 0.5 ? 'rgba(6, 182, 212, 0.6)' : 'rgba(139, 92, 246, 0.4)';
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const init = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 12), 80);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    const connectParticles = () => {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let particle of particles) {
        particle.update();
        particle.draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-aix-black">
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      <div className="absolute inset-0 bg-neural-gradient z-0"></div>
      
      <div className="container mx-auto px-4 z-10 text-center relative">
        <div className="mb-8 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-purple opacity-20 blur-3xl animate-pulse-glow"></div>
          <h1 className="relative text-5xl md:text-7xl font-bold mb-6 font-serif">
            <span className="gold-text-gradient">Lorenza Volponi</span>
          </h1>
        </div>
        
        <div className="w-full max-w-4xl mx-auto overflow-hidden mb-8">
          <p className="text-xl md:text-3xl text-white typewriter font-mono">
            Estrategista de Inteligência Artificial
          </p>
        </div>
        
        <p className="text-white/80 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
          Transformando dados em estratégias, algoritmos em resultados e desafios complexos em oportunidades exponenciais para empresas visionárias que buscam transcender os limites do possível.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button className="bg-gradient-gold hover:opacity-90 transition-all duration-300 text-black font-bold px-10 py-6 text-lg neural-glow">
            <a href="#contact">Iniciar Conexão Neural</a>
          </Button>
          <Button variant="outline" className="border-aix-purple hover:bg-aix-purple/20 transition-all duration-300 px-10 py-6 text-lg">
            <a href="#portfolio">Explorar Projetos</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
