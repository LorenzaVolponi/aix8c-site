
import { Particle } from './types';

export class OptimizedParticleClass implements Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  pulsePhase: number;
  glowRadius: number;
  
  private colorCache: string = '';
  private lastUpdateTime: number = 0;
  private velocityDamping: number = 0.98;
  
  constructor() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = Math.random() * 2.5 + 1.2;
    this.speedX = (Math.random() - 0.5) * 0.8;
    this.speedY = (Math.random() - 0.5) * 0.8;
    
    const colors = ['#06b6d4', '#8b5cf6', '#f59e0b'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.opacity = Math.random() * 0.7 + 0.3;
    this.pulsePhase = Math.random() * Math.PI * 2;
    this.glowRadius = Math.random() * 12 + 6;
    
    this.updateColorCache();
  }
  
  private updateColorCache() {
    const pulseOpacity = this.opacity + Math.sin(this.pulsePhase) * 0.15;
    this.colorCache = this.color.replace(')', `, ${pulseOpacity})`).replace('rgb', 'rgba');
  }
  
  update() {
    const now = performance.now();
    if (now - this.lastUpdateTime < 16) return; // Skip if too frequent
    
    // Enhanced physics with boundaries
    this.x += this.speedX;
    this.y += this.speedY;
    this.pulsePhase += 0.025;
    
    // Smooth boundary collision with energy conservation
    const margin = this.size * 2;
    if (this.x > window.innerWidth - margin || this.x < margin) {
      this.speedX = -this.speedX * this.velocityDamping;
      this.x = Math.max(margin, Math.min(window.innerWidth - margin, this.x));
      
      // Add slight vertical movement on collision
      this.speedY += (Math.random() - 0.5) * 0.1;
    }
    
    if (this.y > window.innerHeight - margin || this.y < margin) {
      this.speedY = -this.speedY * this.velocityDamping;
      this.y = Math.max(margin, Math.min(window.innerHeight - margin, this.y));
      
      // Add slight horizontal movement on collision
      this.speedX += (Math.random() - 0.5) * 0.1;
    }
    
    // Apply subtle attraction to center for natural movement
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const distanceToCenter = Math.sqrt(Math.pow(this.x - centerX, 2) + Math.pow(this.y - centerY, 2));
    
    if (distanceToCenter > 300) {
      const attraction = 0.0005;
      this.speedX += (centerX - this.x) * attraction;
      this.speedY += (centerY - this.y) * attraction;
    }
    
    // Limit maximum speed
    const maxSpeed = 1.5;
    const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
    if (currentSpeed > maxSpeed) {
      this.speedX = (this.speedX / currentSpeed) * maxSpeed;
      this.speedY = (this.speedY / currentSpeed) * maxSpeed;
    }
    
    this.updateColorCache();
    this.lastUpdateTime = now;
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    const pulseSize = this.size + Math.sin(this.pulsePhase) * 0.6;
    const glowPulse = this.glowRadius + Math.sin(this.pulsePhase * 1.3) * 2;
    
    // Optimized gradient with caching
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowPulse);
    gradient.addColorStop(0, this.colorCache);
    gradient.addColorStop(0.4, this.color.replace(')', `, ${this.opacity * 0.4})`).replace('rgb', 'rgba'));
    gradient.addColorStop(1, 'transparent');
    
    // Glow effect
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, glowPulse, 0, Math.PI * 2);
    ctx.fill();
    
    // Core particle with enhanced brightness
    ctx.fillStyle = this.colorCache;
    ctx.shadowBlur = 8;
    ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}
