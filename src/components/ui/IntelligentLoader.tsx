
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Zap, Sparkles } from 'lucide-react';

interface IntelligentLoaderProps {
  isLoading: boolean;
  progress?: number;
  message?: string;
  type?: 'default' | 'premium' | 'neural';
}

const IntelligentLoader: React.FC<IntelligentLoaderProps> = ({
  isLoading,
  progress = 0,
  message = "Carregando experiência...",
  type = 'premium'
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (progress > displayProgress) {
      const increment = (progress - displayProgress) / 20;
      const timer = setInterval(() => {
        setDisplayProgress(prev => {
          const next = prev + increment;
          if (next >= progress) {
            clearInterval(timer);
            return progress;
          }
          return next;
        });
      }, 50);

      return () => clearInterval(timer);
    }
  }, [progress, displayProgress]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-aix-black/95 backdrop-blur-xl flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative flex flex-col items-center space-y-6">
          {/* Main loader animation */}
          <motion.div
            className="relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-20 h-20 border-4 border-aix-gold/20 rounded-full">
              <div className="w-full h-full border-4 border-transparent border-t-aix-gold rounded-full animate-spin" />
            </div>
            
            {/* Center icon */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {type === 'neural' ? (
                <Zap className="w-8 h-8 text-aix-gold" />
              ) : (
                <Sparkles className="w-8 h-8 text-aix-gold" />
              )}
            </motion.div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-aix-gold via-yellow-400 to-aix-gold rounded-full"
              style={{ width: `${displayProgress}%` }}
              initial={{ width: "0%" }}
              animate={{ width: `${displayProgress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Progress percentage */}
          <motion.div
            className="text-aix-gold font-medium text-lg"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {Math.round(displayProgress)}%
          </motion.div>

          {/* Loading message */}
          <motion.p
            className="text-white/80 text-center max-w-xs font-light"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {message}
          </motion.p>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-aix-gold rounded-full"
              style={{
                left: `${20 + i * 40}px`,
                top: `${-20 + i * 10}px`,
              }}
              animate={{
                y: [-20, -60, -20],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntelligentLoader;
