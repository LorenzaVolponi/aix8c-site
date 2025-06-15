
import { Particle, NeuralConnection } from './types';
import { ParticleClass } from './Particle';
import { NeuralConnectionClass } from './NeuralConnection';

export const setCanvasDimensions = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.scale(dpr, dpr);
};

export const initializeParticlesAndConnections = (): {
  particles: Particle[];
  neuralConnections: NeuralConnection[];
} => {
  const particles: Particle[] = [];
  const neuralConnections: NeuralConnection[] = [];
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
  
  return { particles, neuralConnections };
};

export const animateCanvas = (
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  neuralConnections: NeuralConnection[]
) => {
  // Use efficient clearing
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  
  // Update and draw connections first (behind particles)
  neuralConnections.forEach(connection => {
    connection.update();
    connection.draw(ctx);
  });
  
  // Update and draw particles
  particles.forEach(particle => {
    particle.update();
    particle.draw(ctx);
  });
};
