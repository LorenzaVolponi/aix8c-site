
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroDescription from './HeroDescription';
import HeroButtons from './HeroButtons';

const HeroContent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const contentY = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.6, 1], [1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.div 
      className="container mx-auto px-4 z-30 text-center relative"
      style={{ y: contentY, opacity: contentOpacity }}
      variants={containerVariants}
    >
      <HeroTitle />
      <HeroSubtitle />
      <HeroDescription />
      <HeroButtons />
    </motion.div>
  );
};

export default HeroContent;
