
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicIntroProps {
  onComplete: () => void;
}

const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const mainText = "AIX8C";
  const subtitle = "Artificial Intelligence Experience Creative";
  
  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Phase 1: Typing animation
    if (currentPhase === 0) {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < mainText.length) {
          setTypedText(mainText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setCurrentPhase(1), 800);
        }
      }, 150);
      
      return () => {
        clearInterval(typingInterval);
        clearInterval(cursorInterval);
      };
    }

    // Phase 2: Show subtitle and prepare curtain
    if (currentPhase === 1) {
      setTimeout(() => setCurrentPhase(2), 1500);
    }

    // Phase 3: Curtain opening
    if (currentPhase === 2) {
      setTimeout(() => {
        setCurrentPhase(3);
        setTimeout(onComplete, 1000);
      }, 500);
    }

    return () => clearInterval(cursorInterval);
  }, [currentPhase, onComplete]);

  return (
    <AnimatePresence>
      {currentPhase < 3 && (
        <motion.div
          className="fixed inset-0 z-50 bg-neutral-950 flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Curtain Effect */}
          <AnimatePresence>
            {currentPhase === 2 && (
              <>
                <motion.div
                  className="absolute inset-0 bg-neutral-950 z-60"
                  style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
                  initial={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
                  animate={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-0 bg-neutral-950 z-60"
                  style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
                  initial={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
                  animate={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </>
            )}
          </AnimatePresence>

          {/* Content */}
          <div className="text-center z-40">
            {/* Main Text with Typing Effect */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wider text-white font-mono">
                {typedText}
                {currentPhase === 0 && (
                  <span className={`inline-block ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                    |
                  </span>
                )}
              </h1>
            </motion.div>

            {/* Subtitle */}
            <AnimatePresence>
              {currentPhase >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="text-lg md:text-xl text-neutral-400 font-light tracking-[0.3em] uppercase"
                >
                  {subtitle}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtle loading indicator */}
            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentPhase >= 1 ? 1 : 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent">
                <motion.div
                  className="h-full bg-white/60"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
