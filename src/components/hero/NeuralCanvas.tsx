
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Particle, NeuralConnection } from './canvas/types';
import { setCanvasDimensions, initializeParticlesAndConnections, animateCanvas } from './canvas/canvasUtils';

const NeuralCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => setCanvasDimensions(canvas, ctx);
    
    setCanvasDimensions(canvas, ctx);
    window.addEventListener('resize', handleResize);

    let particles: Particle[] = [];
    let neuralConnections: NeuralConnection[] = [];
    let animationId: number;
    
    const init = () => {
      const { particles: newParticles, neuralConnections: newConnections } = 
        initializeParticlesAndConnections();
      particles = newParticles;
      neuralConnections = newConnections;
    };
    
    const animate = () => {
      if (!ctx) return;
      
      animateCanvas(ctx, particles, neuralConnections);
      animationId = requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
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
