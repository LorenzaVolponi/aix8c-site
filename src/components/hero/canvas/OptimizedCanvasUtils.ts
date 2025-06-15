
import { Particle, NeuralConnection } from './types';
import { ParticleClass } from './Particle';
import { NeuralConnectionClass } from './NeuralConnection';
import { PerformanceMonitor } from './PerformanceMonitor';

const performanceMonitor = new PerformanceMonitor();

export const setCanvasDimensions = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  const dpr = Math.min(window.devicePixelRatio || 1, 2); // Limit DPR for performance
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  
  ctx.scale(dpr, dpr);
  
  // Enable optimizations
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
};

export const initializeParticlesAndConnections = (): {
  particles: Particle[];
  neuralConnections: NeuralConnection[];
} => {
  const particles: Particle[] = [];
  const neuralConnections: NeuralConnection[] = [];
  
  const particleCount = performanceMonitor.getOptimalParticleCount();
  const connectionDensity = performanceMonitor.getOptimalConnectionDensity();
  
  // Create particles with spatial distribution
  const cols = Math.ceil(Math.sqrt(particleCount));
  const rows = Math.ceil(particleCount / cols);
  const cellWidth = window.innerWidth / cols;
  const cellHeight = window.innerHeight / rows;
  
  for (let i = 0; i < particleCount; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    
    const particle = new ParticleClass();
    // Distribute particles more evenly but with randomness
    particle.x = (col * cellWidth) + (Math.random() * cellWidth * 0.8) + (cellWidth * 0.1);
    particle.y = (row * cellHeight) + (Math.random() * cellHeight * 0.8) + (cellHeight * 0.1);
    
    particles.push(particle);
  }
  
  // Create connections with distance-based optimization
  const maxDistance = 200;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < maxDistance && Math.random() > connectionDensity) {
        neuralConnections.push(new NeuralConnectionClass(particles[i], particles[j]));
      }
    }
  }
  
  return { particles, neuralConnections };
};

let animationCache = new Map();
let lastClearTime = 0;

export const animateCanvas = (
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  neuralConnections: NeuralConnection[]
) => {
  const now = performance.now();
  
  // Efficient clearing with timing optimization
  if (now - lastClearTime > 16) { // ~60fps
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    lastClearTime = now;
  }
  
  // Batch operations for better performance
  ctx.save();
  
  // Draw connections with reduced complexity for distant ones
  ctx.globalCompositeOperation = 'screen';
  neuralConnections.forEach(connection => {
    const distance = Math.sqrt(
      Math.pow(connection.p1.x - connection.p2.x, 2) + 
      Math.pow(connection.p1.y - connection.p2.y, 2)
    );
    
    if (distance < 180) {
      connection.update();
      connection.draw(ctx);
    }
  });
  
  // Draw particles with optimized rendering
  ctx.globalCompositeOperation = 'lighter';
  particles.forEach(particle => {
    particle.update();
    particle.draw(ctx);
  });
  
  ctx.restore();
};

// Initialize performance monitoring
performanceMonitor.startMonitoring();

export { performanceMonitor };
