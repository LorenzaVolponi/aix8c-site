
import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Particle, NeuralConnection } from './canvas/types';
import { 
  setCanvasDimensions, 
  initializeParticlesAndConnections, 
  animateCanvas,
  performanceMonitor 
} from './canvas/OptimizedCanvasUtils';
import { OptimizedParticleClass } from './canvas/OptimizedParticle';
import { OptimizedNeuralConnectionClass } from './canvas/OptimizedNeuralConnection';

const OptimizedNeuralCanvas = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const connectionsRef = useRef<NeuralConnection[]>([]);
  const isInitializedRef = useRef(false);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    setCanvasDimensions(canvas, ctx);
    
    // Reinitialize particles and connections on significant size changes
    if (isInitializedRef.current) {
      const { particles, neuralConnections } = initializeParticlesAndConnections();
      particlesRef.current = particles;
      connectionsRef.current = neuralConnections;
    }
  }, []);

  const handlePerformanceWarning = useCallback((event: CustomEvent) => {
    console.log('Performance warning detected, optimizing...', event.detail);
    
    // Reduce particle count dynamically
    const newCount = Math.floor(particlesRef.current.length * 0.7);
    particlesRef.current = particlesRef.current.slice(0, newCount);
    
    // Reduce connection density
    const newConnectionCount = Math.floor(connectionsRef.current.length * 0.6);
    connectionsRef.current = connectionsRef.current.slice(0, newConnectionCount);
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    animateCanvas(ctx, particlesRef.current, connectionsRef.current);
    animationIdRef.current = requestAnimationFrame(animate);
  }, []);

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isInitializedRef.current) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setCanvasDimensions(canvas, ctx);
    
    const { particles, neuralConnections } = initializeParticlesAndConnections();
    particlesRef.current = particles;
    connectionsRef.current = neuralConnections;
    
    isInitializedRef.current = true;
    animate();
  }, [animate]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('performance-warning', handlePerformanceWarning as EventListener);
    
    // Initialize with slight delay for better UX
    const initTimer = setTimeout(initializeCanvas, 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('performance-warning', handlePerformanceWarning as EventListener);
      clearTimeout(initTimer);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [handleResize, handlePerformanceWarning, initializeCanvas]);

  const canvasProps = useMemo(() => ({
    ref: canvasRef,
    className: "absolute inset-0 z-0",
    style: { 
      background: 'transparent',
      willChange: 'auto' // Optimize for performance
    }
  }), []);

  return (
    <motion.canvas 
      {...canvasProps}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 2.5, 
        ease: "easeOut",
        delay: 0.5 
      }}
    />
  );
});

OptimizedNeuralCanvas.displayName = 'OptimizedNeuralCanvas';

export default OptimizedNeuralCanvas;
