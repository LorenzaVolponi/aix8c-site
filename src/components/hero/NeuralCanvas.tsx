
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
  update(): void;
  draw(): void;
}

interface NeuralConnection {
  p1: Particle;
  p2: Particle;
  opacity: number;
  animated: boolean;
  animationProgress: number;
  update(): void;
  draw(): void;
}

const NeuralCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    let particles: Particle[] = [];
    let neuralConnections: NeuralConnection[] = [];
    let animationId: number;
    
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
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = Math.random() > 0.6 ? '#f59e0b' : Math.random() > 0.4 ? '#06b6d4' : '#8b5cf6';
        this.opacity = Math.random() * 0.8 + 0.2;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.glowRadius = Math.random() * 15 + 8;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulsePhase += 0.02;
        
        if (this.x > window.innerWidth || this.x < 0) {
          this.speedX = -this.speedX * 0.95;
          this.x = Math.max(0, Math.min(window.innerWidth, this.x));
        }
        if (this.y > window.innerHeight || this.y < 0) {
          this.speedY = -this.speedY * 0.95;
          this.y = Math.max(0, Math.min(window.innerHeight, this.y));
        }
      }
      
      draw() {
        if (!ctx) return;
        const pulseSize = this.size + Math.sin(this.pulsePhase) * 0.8;
        const pulseOpacity = this.opacity + Math.sin(this.pulsePhase) * 0.15;
        const glowPulse = this.glowRadius + Math.sin(this.pulsePhase * 1.5) * 3;
        
        // Optimized gradient creation
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowPulse);
        gradient.addColorStop(0, this.color.replace(')', `, ${pulseOpacity})`).replace('rgb', 'rgba'));
        gradient.addColorStop(0.3, this.color.replace(')', `, ${pulseOpacity * 0.3})`).replace('rgb', 'rgba'));
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
        this.animated = Math.random() > 0.8;
        this.animationProgress = 0;
      }
      
      update() {
        const dx = this.p1.x - this.p2.x;
        const dy = this.p1.y - this.p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 180) {
          this.opacity = Math.min(0.35, (180 - distance) / 180 * 0.35);
          if (this.animated) {
            this.animationProgress += 0.015;
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
        gradient.addColorStop(0.4, `rgba(139, 92, 246, ${this.opacity * 0.9})`);
        gradient.addColorStop(0.6, `rgba(245, 158, 11, ${this.opacity * 0.7})`);
        gradient.addColorStop(1, `rgba(6, 182, 212, ${this.opacity})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        
        if (this.animated) {
          const dashLength = 8;
          const gapLength = 6;
          ctx.setLineDash([dashLength, gapLength]);
          ctx.lineDashOffset = -this.animationProgress * (dashLength + gapLength);
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
      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 60);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new ParticleClass());
      }
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          if (Math.random() > 0.7) { // Reduce connection density
            neuralConnections.push(new NeuralConnectionClass(particles[i], particles[j]));
          }
        }
      }
    };
    
    const animate = () => {
      if (!ctx) return;
      
      // Use efficient clearing
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Update and draw connections first (behind particles)
      neuralConnections.forEach(connection => {
        connection.update();
        connection.draw();
      });
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <motion.canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  );
};

export default NeuralCanvas;
