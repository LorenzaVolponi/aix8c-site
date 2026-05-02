import { Particle, NeuralConnection } from './types';
import { ParticleClass } from './Particle';
import { NeuralConnectionClass } from './NeuralConnection';

export const setCanvasDimensions = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
};

export const initializeParticlesAndConnections = (): { particles: Particle[]; neuralConnections: NeuralConnection[] } => {
  const particles: Particle[] = [];
  const neuralConnections: NeuralConnection[] = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 15), 60);
  for (let i = 0; i < particleCount; i++) particles.push(new ParticleClass());
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      if (Math.random() > 0.7) neuralConnections.push(new NeuralConnectionClass(particles[i], particles[j]));
    }
  }
  return { particles, neuralConnections };
};

export const animateCanvas = (
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  neuralConnections: NeuralConnection[],
  mouse: { x: number; y: number }
) => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  neuralConnections.forEach((connection) => { connection.update(); connection.draw(ctx); });
  particles.forEach((particle) => {
    const p = particle as unknown as { x: number; y: number; vx: number; vy: number; update: () => void; draw: (ctx: CanvasRenderingContext2D) => void };
    const dx = p.x - mouse.x;
    const dy = p.y - mouse.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 140) {
      const force = (140 - dist) / 140;
      p.vx += (dx / (dist || 1)) * force * 0.35;
      p.vy += (dy / (dist || 1)) * force * 0.35;
    }
    particle.update();
    particle.draw(ctx);
  });
};
