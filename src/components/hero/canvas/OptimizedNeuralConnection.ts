
import { NeuralConnection, Particle } from './types';

export class OptimizedNeuralConnectionClass implements NeuralConnection {
  p1: Particle;
  p2: Particle;
  opacity: number;
  animated: boolean;
  animationProgress: number;
  
  private gradientCache: CanvasGradient | null = null;
  private lastDistance: number = 0;
  private isVisible: boolean = false;
  private pulsePhase: number;
  
  constructor(p1: Particle, p2: Particle) {
    this.p1 = p1;
    this.p2 = p2;
    this.opacity = 0;
    this.animated = Math.random() > 0.75; // Fewer animated connections for performance
    this.animationProgress = Math.random();
    this.pulsePhase = Math.random() * Math.PI * 2;
  }
  
  update() {
    const dx = this.p1.x - this.p2.x;
    const dy = this.p1.y - this.p2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    this.lastDistance = distance;
    
    if (distance < 180) {
      this.isVisible = true;
      
      // Enhanced opacity calculation with smoother transitions
      const normalizedDistance = distance / 180;
      const baseOpacity = (1 - normalizedDistance) * 0.4;
      
      // Add subtle pulsing effect
      this.pulsePhase += 0.02;
      const pulseMultiplier = 1 + Math.sin(this.pulsePhase) * 0.2;
      
      this.opacity = Math.min(0.5, baseOpacity * pulseMultiplier);
      
      if (this.animated) {
        this.animationProgress += 0.018;
        if (this.animationProgress > 1) this.animationProgress = 0;
      }
      
      // Invalidate gradient cache when particles move significantly
      this.gradientCache = null;
    } else {
      this.isVisible = false;
      this.opacity = 0;
    }
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    if (!this.isVisible || this.opacity <= 0.01) return;
    
    // Create or reuse gradient
    if (!this.gradientCache) {
      this.gradientCache = ctx.createLinearGradient(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
      this.gradientCache.addColorStop(0, `rgba(6, 182, 212, ${this.opacity})`);
      this.gradientCache.addColorStop(0.3, `rgba(139, 92, 246, ${this.opacity * 0.9})`);
      this.gradientCache.addColorStop(0.7, `rgba(245, 158, 11, ${this.opacity * 0.8})`);
      this.gradientCache.addColorStop(1, `rgba(6, 182, 212, ${this.opacity})`);
    }
    
    ctx.strokeStyle = this.gradientCache;
    ctx.lineWidth = 1.8;
    ctx.lineCap = 'round';
    
    // Enhanced animation system
    if (this.animated) {
      const dashLength = 12;
      const gapLength = 8;
      ctx.setLineDash([dashLength, gapLength]);
      
      // Smoother animation with easing
      const easedProgress = this.animationProgress * this.animationProgress * (3 - 2 * this.animationProgress);
      ctx.lineDashOffset = -easedProgress * (dashLength + gapLength);
      
      // Add glow effect for animated connections
      ctx.shadowBlur = 4;
      ctx.shadowColor = '#06b6d4';
    } else {
      ctx.setLineDash([]);
      ctx.shadowBlur = 0;
    }
    
    // Draw with enhanced quality
    ctx.beginPath();
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
    
    // Reset styles
    ctx.setLineDash([]);
    ctx.shadowBlur = 0;
  }
}
