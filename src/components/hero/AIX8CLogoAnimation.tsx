
import React, { useEffect, useState } from 'react';
import LogoLetters from './logo/LogoLetters';
import LogoSubtitle from './logo/LogoSubtitle';
import ParticleBackground from './logo/ParticleBackground';
import FloatingCodeFragments from './logo/FloatingCodeFragments';
import LogoBackgroundEffects from './logo/LogoBackgroundEffects';

const AIX8CLogoAnimation = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Animation sequence
    const sequence = [
      () => setAnimationPhase(1), // Particles formation
      () => setAnimationPhase(2), // Letters assembly
      () => setAnimationPhase(3), // Final glow effect
    ];

    sequence.forEach((phase, index) => {
      setTimeout(phase, index * 1200);
    });
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Digital Particles Background */}
      <ParticleBackground animationPhase={animationPhase} />

      {/* Main Logo Container - Perfectly Centered */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Background Effects */}
        <LogoBackgroundEffects animationPhase={animationPhase} />

        {/* AIX8C Letters - Main Focus */}
        <LogoLetters animationPhase={animationPhase} />

        {/* Subtitle Animation - Properly Positioned */}
        <LogoSubtitle animationPhase={animationPhase} />

        {/* Floating Code Fragments */}
        <FloatingCodeFragments animationPhase={animationPhase} />
      </div>
    </div>
  );
};

export default AIX8CLogoAnimation;
