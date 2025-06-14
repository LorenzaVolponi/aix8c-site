
import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';

const ScrollIndicator = () => {
  return (
    <ScrollReveal direction="fade" delay={1.2}>
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-8 h-12 border-2 border-aix-cyan rounded-full flex justify-center relative"
            animate={{ 
              borderColor: ["#06b6d4", "#8b5cf6", "#f59e0b", "#06b6d4"],
              boxShadow: [
                "0 0 20px rgba(6, 182, 212, 0.3)",
                "0 0 20px rgba(139, 92, 246, 0.3)",
                "0 0 20px rgba(245, 158, 11, 0.3)",
                "0 0 20px rgba(6, 182, 212, 0.3)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-4 bg-aix-cyan rounded-full mt-3"
              animate={{ 
                y: [0, 16, 0],
                backgroundColor: ["#06b6d4", "#8b5cf6", "#f59e0b", "#06b6d4"]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </ScrollReveal>
  );
};

export default ScrollIndicator;
