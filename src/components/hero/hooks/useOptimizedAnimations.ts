
import { useCallback, useRef, useMemo } from 'react';
import { useSpring, useTransform, MotionValue } from 'framer-motion';

export const useOptimizedAnimations = (scrollYProgress: MotionValue<number>) => {
  const lastScrollValue = useRef(0);
  const frameId = useRef<number>();
  
  // Optimized spring configuration
  const springConfig = useMemo(() => ({
    stiffness: 120,
    damping: 30,
    mass: 0.8,
    restDelta: 0.001
  }), []);
  
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  
  // Transforms for the hero content
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(smoothProgress, [0, 1], ["0%", "-15%"]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.6, 1], [1, 1, 0]);
  const titleScale = useTransform(smoothProgress, [0, 0.7], [1, 0.85]);
  const overlayOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 0.9, 1]);

  const transforms = useMemo(
    () => ({ backgroundY, contentY, contentOpacity, titleScale, overlayOpacity }),
    [backgroundY, contentY, contentOpacity, titleScale, overlayOpacity]
  );
  
  // Throttled scroll handler for performance
  const handleScroll = useCallback((callback: () => void) => {
    const currentScroll = smoothProgress.get();
    
    if (Math.abs(currentScroll - lastScrollValue.current) > 0.01) {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      
      frameId.current = requestAnimationFrame(() => {
        callback();
        lastScrollValue.current = currentScroll;
      });
    }
  }, [smoothProgress]);
  
  return {
    ...transforms,
    handleScroll,
    springConfig
  };
};
