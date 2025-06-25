
import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fps: number;
  loadTime: number;
  memoryUsage: number;
  isLowPerformance: boolean;
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    loadTime: 0,
    memoryUsage: 0,
    isLowPerformance: false
  });

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
        
        setMetrics(prev => ({
          ...prev,
          fps,
          isLowPerformance: fps < 30
        }));

        // Emit performance warning if needed
        if (fps < 30) {
          window.dispatchEvent(new CustomEvent('performance-warning', { 
            detail: { fps, type: 'low-fps' } 
          }));
        }
      }
      
      animationId = requestAnimationFrame(measureFPS);
    };

    // Monitor memory usage
    const monitorMemory = () => {
        if ('memory' in performance) {
          const memory = (performance as Performance & { memory: MemoryInfo }).memory;
        const usage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
        
        setMetrics(prev => ({
          ...prev,
          memoryUsage: usage
        }));

        if (usage > 0.8) {
          window.dispatchEvent(new CustomEvent('performance-warning', { 
            detail: { memoryUsage: usage, type: 'high-memory' } 
          }));
        }
      }
    };

    // Measure initial load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.fetchStart;
      
      setMetrics(prev => ({
        ...prev,
        loadTime
      }));
    });

    measureFPS();
    const memoryInterval = setInterval(monitorMemory, 5000);

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(memoryInterval);
    };
  }, []);

  return metrics;
};
