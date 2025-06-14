
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const ScrollIndicator = () => {
  return (
    <ScrollReveal direction="fade" delay={1.5}>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 1.2 }}
      >
        <motion.div
          className="relative cursor-pointer group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            const aboutSection = document.getElementById('sobre');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 w-12 h-16 border border-aix-cyan/30 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Main scroll indicator */}
          <motion.div
            className="relative w-8 h-12 border-2 border-aix-cyan rounded-full flex justify-center bg-aix-cyan/5 backdrop-blur-sm group-hover:bg-aix-cyan/10 transition-all duration-300"
            animate={{ 
              borderColor: ["#06b6d4", "#8b5cf6", "#f59e0b", "#06b6d4"],
              boxShadow: [
                "0 0 20px rgba(6, 182, 212, 0.4)",
                "0 0 25px rgba(139, 92, 246, 0.4)",
                "0 0 20px rgba(245, 158, 11, 0.4)",
                "0 0 20px rgba(6, 182, 212, 0.4)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {/* Animated dot */}
            <motion.div
              className="w-1.5 h-3 rounded-full mt-2"
              animate={{ 
                y: [0, 14, 0],
                backgroundColor: ["#06b6d4", "#8b5cf6", "#f59e0b", "#06b6d4"],
                boxShadow: [
                  "0 0 8px rgba(6, 182, 212, 0.8)",
                  "0 0 8px rgba(139, 92, 246, 0.8)",
                  "0 0 8px rgba(245, 158, 11, 0.8)",
                  "0 0 8px rgba(6, 182, 212, 0.8)"
                ]
              }}
              transition={{ 
                y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                backgroundColor: { duration: 4, repeat: Infinity },
                boxShadow: { duration: 4, repeat: Infinity }
              }}
            />
          </motion.div>
          
          {/* Chevron icon */}
          <motion.div
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, 4, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-aix-gold" />
          </motion.div>
          
          {/* Floating particles around indicator */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-aix-cyan rounded-full"
              style={{
                left: `${20 + i * 15}px`,
                top: `${10 + i * 8}px`
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
        
        {/* Text hint */}
        <motion.p
          className="text-xs text-white/50 text-center mt-3 font-light tracking-wider"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          EXPLORE
        </motion.p>
      </motion.div>
    </ScrollReveal>
  );
};

export default ScrollIndicator;
