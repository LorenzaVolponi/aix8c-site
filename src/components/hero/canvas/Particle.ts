
import { Particle } from './types';

export class ParticleClass implements Particle {
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
  
  draw(ctx: CanvasRenderingContext2D) {
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
