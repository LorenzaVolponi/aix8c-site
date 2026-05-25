import React, { useEffect, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NeuralCanvas from './hero/NeuralCanvas';
import ProfileImage from './hero/ProfileImage';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);
  const isMobile = useMemo(() => window.matchMedia('(max-width: 768px)').matches, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
    layoutEffect: false,
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', reducedMotion ? '8%' : '50%']);
  const exitMaskOpacity = useTransform(smoothProgress, [0.45, 0.9], [0, 1]);

  useEffect(() => {
    if (reducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to('[data-hero-distortion="one"]', {
        yPercent: 20,
        xPercent: 8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('[data-hero-distortion="two"]', {
        yPercent: -15,
        xPercent: -10,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const particlesCount = reducedMotion ? 0 : isMobile ? 2 : 6;

  return (
    <section
      id="home"
      ref={sectionRef}
      aria-label="Início"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-aix-black"
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <NeuralCanvas />
      </motion.div>

      <div className="hero-gradient-orb" data-hero-distortion="one" />
      <div className="hero-vignette" data-hero-distortion="two" />
      <div className="absolute inset-0 z-10" style={{
        background: `
            radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.06) 0%, transparent 70%),
            linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(10, 10, 10, 0.7) 50%, rgba(0, 0, 0, 0.85) 100%)
          `,
      }} />

      <div className="absolute inset-0 z-5 opacity-10" style={{
        backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
        backgroundSize: '40px 40px',
      }} />

      <ProfileImage />
      <div className="w-full" data-split>
        <HeroContent />
      </div>
      <div className="hidden sm:block">
        <ScrollIndicator />
      </div>

      {[...Array(particlesCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-aix-gold/30 rounded-full"
          style={{ left: `${(i + 1) * (100 / (particlesCount + 1))}%`, top: `${20 + i * 11}%` }}
          animate={reducedMotion ? undefined : { y: [0, -50, 0], opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40 z-20 pointer-events-none"
        style={{ opacity: exitMaskOpacity, background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(2,6,23,.88), rgba(2,6,23,1))' }}
      />
    </section>
  );
};

export default HeroSection;
