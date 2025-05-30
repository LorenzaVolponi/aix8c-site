
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade' | 'glitch';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = '',
  threshold = 0.1,
  triggerOnce = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: triggerOnce, 
    margin: "-100px",
    amount: threshold
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      scale: direction === 'scale' ? 0.8 : 1,
      rotateX: direction === 'glitch' ? 5 : 0,
      rotateY: direction === 'glitch' ? 5 : 0,
      filter: direction === 'glitch' ? 'blur(2px) brightness(0.8)' : 'blur(0px) brightness(1)',
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      filter: 'blur(0px) brightness(1)',
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        duration,
        delay,
        ...(direction === 'glitch' && {
          filter: {
            duration: 0.3,
            ease: "easeOut"
          }
        })
      }
    }
  };

  // Enhanced glitch effect for special elements
  const glitchVariants = {
    hidden: {
      opacity: 0,
      x: -10,
      y: 10,
      filter: 'blur(3px) hue-rotate(90deg)',
      textShadow: '2px 2px 0px rgba(6, 182, 212, 0.5), -2px -2px 0px rgba(245, 158, 11, 0.5)'
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px) hue-rotate(0deg)',
      textShadow: '0px 0px 0px rgba(6, 182, 212, 0), 0px 0px 0px rgba(245, 158, 11, 0)',
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 150,
        duration: duration * 1.2,
        delay,
        filter: {
          duration: 0.5,
          ease: "easeOut"
        },
        textShadow: {
          duration: 0.3,
          ease: "easeOut"
        }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={direction === 'glitch' ? glitchVariants : variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
