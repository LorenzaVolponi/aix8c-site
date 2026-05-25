import { useEffect, useMemo, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

type UseExperienceOrchestrationOptions = {
  enableLenis?: boolean;
  enableTypography?: boolean;
};

const canUseDom = typeof window !== 'undefined';

export const useExperienceOrchestration = ({
  enableLenis = true,
  enableTypography = true,
}: UseExperienceOrchestrationOptions = {}) => {
  const lenisRef = useRef<Lenis | null>(null);

  const reducedMotion = useMemo(() => {
    if (!canUseDom) return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (!canUseDom) return;

    gsap.registerPlugin(ScrollTrigger);

    if (!enableLenis || reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.95,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      document.documentElement.classList.remove('reduced-motion');
    };
  }, [enableLenis, reducedMotion]);

  useEffect(() => {
    if (!canUseDom || reducedMotion || !enableTypography) return;

    const instances: SplitType[] = [];
    const targets = document.querySelectorAll<HTMLElement>('[data-split]');

    targets.forEach((target) => {
      const split = new SplitType(target, { types: 'lines,words' });
      instances.push(split);

      gsap.from(split.words, {
        yPercent: 100,
        autoAlpha: 0,
        stagger: 0.025,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: target,
          start: 'top 85%',
          once: true,
        },
      });
    });

    return () => {
      instances.forEach((instance) => instance.revert());
    };
  }, [enableTypography, reducedMotion]);

  return {
    lenis: lenisRef,
    reducedMotion,
  };
};
