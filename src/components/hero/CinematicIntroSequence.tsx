
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AIX8CLogoAnimation from './AIX8CLogoAnimation';
import PersonalInfoReveal from './PersonalInfoReveal';

const CinematicIntroSequence = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    // Timing para sincronizar com a animação AIX8C existente
    const introTimer = setTimeout(() => {
      setShowTransition(true);
      // Pequeno delay para a transição suave
      setTimeout(() => {
        setIntroComplete(true);
      }, 1000);
    }, 6000); // Tempo total da animação AIX8C existente

    return () => clearTimeout(introTimer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-aix-black">
      <AnimatePresence mode="wait">
        {!introComplete ? (
          <motion.div
            key="intro"
            className="absolute inset-0 z-50"
            exit={{
              opacity: 0,
              scale: 0.95,
              filter: "blur(10px)",
              transition: { duration: 1, ease: "easeInOut" }
            }}
          >
            {/* Overlay de transição cinematográfica */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-aix-black/50 to-aix-black z-10"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: showTransition ? 1 : 0,
                background: showTransition 
                  ? "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(10,10,10,0.8), rgba(0,0,0,0.95))"
                  : "linear-gradient(to bottom, transparent, rgba(10,10,10,0.5), rgba(0,0,0,0))"
              }}
              transition={{ duration: 1.5 }}
            />
            
            {/* Animação AIX8C original mantida intacta */}
            <AIX8CLogoAnimation />
            
            {/* Efeito de cortina cinematográfica */}
            {showTransition && (
              <>
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-aix-black to-transparent z-20"
                  initial={{ y: "-100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-aix-black to-transparent z-20"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            className="absolute inset-0"
            initial={{ 
              opacity: 0, 
              scale: 1.05,
              filter: "blur(5px)"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              filter: "blur(0px)"
            }}
            transition={{ 
              duration: 1.5, 
              ease: "easeOut",
              staggerChildren: 0.2
            }}
          >
            <PersonalInfoReveal />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CinematicIntroSequence;
