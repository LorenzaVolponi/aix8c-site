
import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

const NavalScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3 }}
    >
      <motion.div
        className="flex flex-col items-center gap-2 cursor-pointer group"
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
        {/* Enhanced golden scroll line with compass */}
        <div className="relative">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-aix-gold to-transparent relative">
            <motion.div
              className="absolute w-2 h-2 bg-aix-gold rounded-full left-1/2 transform -translate-x-1/2"
              animate={{ 
                y: [0, 48, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>
          <Compass className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 text-aix-gold/70 group-hover:rotate-180 transition-transform duration-500" />
        </div>
        
        <p className="text-xs text-aix-gold/70 font-medium tracking-wider group-hover:text-aix-gold transition-colors">
          EXPLORAR NAVE
        </p>
      </motion.div>
    </motion.div>
  );
};

export default NavalScrollIndicator;
