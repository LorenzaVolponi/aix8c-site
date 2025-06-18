
import { useEffect } from 'react';
import { usePerformanceMonitor } from "./usePerformanceMonitor";

export const usePerformanceOptimization = () => {
  const { isLowPerformance } = usePerformanceMonitor();

  useEffect(() => {
    // Enhanced smooth scroll with performance optimization
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const id = target.getAttribute('href')?.substring(1);
        if (!id) return;
        
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Performance-optimized scroll handler
    let ticking = false;
    const handleScroll = () => {
      if (!ticking && !isLowPerformance) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const rate = scrolled * -0.2;
          
          // Apply parallax effects only if performance allows
          const parallaxElements = document.querySelectorAll('.parallax-bg');
          parallaxElements.forEach((element) => {
            (element as HTMLElement).style.transform = `translateY(${rate}px)`;
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    if (!isLowPerformance) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLowPerformance]);

  return { isLowPerformance };
};
