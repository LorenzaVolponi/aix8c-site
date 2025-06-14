
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  pulsePhase: number;
  glowRadius: number;
}

interface NeuralConnection {
  p1: Particle;
  p2: Particle;
  opacity: number;
  animated: boolean;
  animationProgress: number;
}

const NeuralCanvas = () => {
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
    let neuralConnections: NeuralConnection[] = [];
    
    class ParticleClass implements Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      pulsePhase: number;
      glowRadius: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.color = Math.random() > 0.6 ? '#f59e0b' : Math.random() > 0.4 ? '#06b6d4' : '#8b5cf6';
        this.opacity = Math.random() * 0.9 + 0.3;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.glowRadius = Math.random() * 20 + 10;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulsePhase += 0.03;
        
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX * 0.9;
          this.x = Math.max(0, Math.min(canvas.width, this.x));
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY * 0.9;
          this.y = Math.max(0, Math.min(canvas.height, this.y));
        }
      }
      
      draw() {
        if (!ctx) return;
        const pulseSize = this.size + Math.sin(this.pulsePhase) * 1;
        const pulseOpacity = this.opacity + Math.sin(this.pulsePhase) * 0.2;
        const glowPulse = this.glowRadius + Math.sin(this.pulsePhase * 2) * 5;
        
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowPulse);
        gradient.addColorStop(0, this.color.replace(')', `, ${pulseOpacity})`).replace('rgb', 'rgba'));
        gradient.addColorStop(0.4, this.color.replace(')', `, ${pulseOpacity * 0.4})`).replace('rgb', 'rgba'));
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, glowPulse, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = this.color.replace(')', `, ${pulseOpacity})`).replace('rgb', 'rgba');
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class NeuralConnectionClass implements NeuralConnection {
      p1: Particle;
      p2: Particle;
      opacity: number;
      animated: boolean;
      animationProgress: number;
      
      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0;
        this.animated = Math.random() > 0.7;
        this.animationProgress = 0;
      }
      
      update() {
        const dx = this.p1.x - this.p2.x;
        const dy = this.p1.y - this.p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          this.opacity = Math.min(0.4, (200 - distance) / 200 * 0.4);
          if (this.animated) {
            this.animationProgress += 0.02;
            if (this.animationProgress > 1) this.animationProgress = 0;
          }
        } else {
          this.opacity = 0;
        }
      }
      
      draw() {
        if (!ctx || this.opacity <= 0) return;
        
        const gradient = ctx.createLinearGradient(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
        gradient.addColorStop(0, `rgba(6, 182, 212, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${this.opacity * 0.8})`);
        gradient.addColorStop(1, `rgba(245, 158, 11, ${this.opacity})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        
        if (this.animated) {
          ctx.setLineDash([5, 5]);
          ctx.lineDashOffset = -this.animationProgress * 10;
        } else {
          ctx.setLineDash([]);
        }
        
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();
        
        ctx.setLineDash([]);
      }
    }
    
    const init = () => {
      particles = [];
      neuralConnections = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 12), 80);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new ParticleClass());
      }
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          neuralConnections.push(new NeuralConnectionClass(particles[i], particles[j]));
        }
      }
    };
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      neuralConnections.forEach(connection => {
        connection.update();
        connection.draw();
      });
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <motion.canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0"
    />
  );
};

export default NeuralCanvas;
