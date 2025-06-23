
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTAButton = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const handleExploreClick = () => {
    // Scroll suave para a próxima seção
    const aboutSection = document.getElementById('sobre-nos');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div custom={4} variants={itemVariants}>
      <Button 
        size="lg" 
        className="group bg-gradient-to-r from-aix-gold to-yellow-500 hover:from-yellow-500 hover:to-aix-gold text-black font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-aix-gold/25"
        onClick={handleExploreClick}
      >
        <Sparkles className="w-5 h-5 mr-2" />
        Explorar AUSSY AI
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  );
};

export default CTAButton;
