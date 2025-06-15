
export interface Particle {
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
  draw(ctx: CanvasRenderingContext2D): void;
}

export interface NeuralConnection {
  p1: Particle;
  p2: Particle;
  opacity: number;
  animated: boolean;
  animationProgress: number;
  update(): void;
  draw(ctx: CanvasRenderingContext2D): void;
}
