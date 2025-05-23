
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Neural network animation
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
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 100}, ${Math.random() * 255}, ${Math.random() * 0.3 + 0.2})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
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
      const particleCount = Math.min(Math.floor(window.innerWidth / 8), 100);
      
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
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(76, 201, 240, ${0.1 * (1 - distance / 100)})`;
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="hero">
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      <div className="absolute inset-0 bg-neural-gradient z-0"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="relative text-5xl md:text-7xl font-bold mb-6">
          <span className="font-serif gold-text-gradient">Lorenza Volponi</span>
          <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="absolute w-[120%] h-[120%] rounded-full bg-aix-purple/10 animate-pulse-glow"></div>
          </span>
        </h1>
        
        <div className="w-full max-w-2xl mx-auto overflow-hidden">
          <p className="text-xl md:text-2xl mb-8 inline-block whitespace-nowrap overflow-hidden border-r-2 animate-typewriter-blink">
            Estrategista de Inteligência Artificial
          </p>
        </div>
        
        <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
          Transformando dados em estratégias, algoritmos em resultados e desafios em oportunidades para empresas visionárias.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-gradient-gold hover:opacity-90 transition-opacity text-black font-bold px-8 py-6">
            <a href="#contact">Iniciar Conversa</a>
          </Button>
          <Button variant="outline" className="border-aix-purple hover:bg-aix-purple/20 transition-colors px-8 py-6">
            <a href="#portfolio">Ver Projetos</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
