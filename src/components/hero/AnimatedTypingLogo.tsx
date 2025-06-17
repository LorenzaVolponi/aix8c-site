
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedTypingLogo = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const typingSequence = [
    { text: 'LORENZA VOLPONI', delay: 100 },
    { text: 'ESTRATEGISTA DE INTELIGÊNCIA ARTIFICIAL', delay: 80 },
  ];

  useEffect(() => {
    if (currentPhase >= typingSequence.length) return;

    const currentSequence = typingSequence[currentPhase];
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= currentSequence.text.length) {
        setDisplayedText(currentSequence.text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          if (currentPhase < typingSequence.length - 1) {
            setCurrentPhase(currentPhase + 1);
            setDisplayedText('');
          } else {
            setShowCursor(false);
          }
        }, 1000);
      }
    }, currentSequence.delay);

    return () => clearInterval(typingInterval);
  }, [currentPhase]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const getCurrentTitle = () => {
    if (currentPhase === 0) return displayedText;
    if (currentPhase === 1) return typingSequence[0].text;
    return typingSequence[0].text;
  };

  const getCurrentSubtitle = () => {
    if (currentPhase < 1) return '';
    return displayedText;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative z-30">
      {/* Main Title with Typing Animation */}
      <motion.div
        className="relative mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center font-serif"
          style={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #06b6d4 50%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 30px rgba(245, 158, 11, 0.3)',
          }}
        >
          {getCurrentTitle()}
          {currentPhase === 0 && showCursor && (
            <motion.span
              className="inline-block w-1 h-12 md:h-16 lg:h-20 xl:h-24 bg-aix-gold ml-2"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.53, repeat: Infinity }}
            />
          )}
        </motion.h1>
      </motion.div>

      {/* Subtitle with Typing Animation */}
      <AnimatePresence>
        {currentPhase >= 1 && (
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-cyan-300 font-light tracking-[0.15em] uppercase text-center"
              style={{
                textShadow: '0 0 20px rgba(6, 182, 212, 0.4)',
              }}
            >
              {getCurrentSubtitle()}
              {currentPhase === 1 && showCursor && (
                <motion.span
                  className="inline-block w-0.5 h-6 md:h-7 lg:h-8 bg-cyan-300 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.53, repeat: Infinity }}
                />
              )}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Professional Details - Fade in after typing completes */}
      <AnimatePresence>
        {currentPhase >= 2 && (
          <motion.div
            className="mt-12 text-center max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-aix-gold to-transparent"></div>
              <div className="w-3 h-3 bg-aix-gold rounded-full animate-pulse"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-aix-gold to-transparent"></div>
            </motion.div>
            
            <motion.p
              className="text-base md:text-lg text-gray-300 font-light mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Artificial Intelligence Experience Creative
            </motion.p>
            
            <motion.p
              className="text-sm md:text-base text-gray-400 font-light italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              Navegando pelos mares da inovação digital
            </motion.p>

            {/* Professional Information */}
            <motion.div
              className="mt-8 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              <div className="glass-card p-6 border border-aix-gold/20 hover:border-aix-gold/30 transition-all duration-300">
                <div className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                  <p>
                    <span className="text-aix-gold font-medium">Lorenza Volponi</span> - 
                    Brasileira, polímata e nexialista. <span className="text-cyan-300">Tradutora entre almas humanas e mentes artificiais.</span>
                  </p>
                  <p>
                    Pioneira na engenharia de prompts no Brasil, certificada pelo <span className="text-aix-gold">MTF de Portugal</span>, 
                    democratizando o conhecimento em IA com impactos transformadores.
                  </p>
                  <p className="text-cyan-300 italic">
                    "Sou a soma infinita de ideias fora da caixa, unindo tecnologia e emoção. ✦"
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating particles for ambiance */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-aix-gold/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedTypingLogo;
