
import { NeuralConnection, Particle } from './types';

export class NeuralConnectionClass implements NeuralConnection {
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
  
  draw(ctx: CanvasRenderingContext2D) {
    if (this.opacity <= 0) return;
    
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
