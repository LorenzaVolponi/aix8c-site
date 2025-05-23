
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.9, 0.95]);
  const navBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 120,
        delay: 0.2
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", damping: 20 }
    }
  };

  return (
    <motion.nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-aix-black/95 backdrop-blur-md py-3 shadow-2xl border-b border-aix-purple/20" 
          : "bg-transparent py-6"
      )}
      style={{ 
        backdropFilter: `blur(${navBlur}px)`,
        backgroundColor: scrolled ? `rgba(10, 10, 10, ${navOpacity.get()})` : 'transparent'
      }}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo with enhanced animation */}
        <motion.a 
          href="#" 
          className="text-3xl font-bold gold-text-gradient font-serif relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            AIX8C
          </motion.span>
          
          {/* Logo glow effect */}
          <motion.div
            className="absolute inset-0 gold-text-gradient opacity-0 blur-sm"
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          >
            AIX8C
          </motion.div>
        </motion.a>
        
        {/* Navigation Links with improved spacing and alignment */}
        <motion.div 
          className="hidden md:flex space-x-12 items-center"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.8
              }
            }
          }}
        >
          {navLinks.map((link, index) => (
            <motion.div key={index} variants={linkVariants}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Button with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-purple hover:opacity-90 transition-all duration-300 px-6 py-3 rounded-xl relative overflow-hidden group">
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%', skewX: -20 }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
              <a href="#contato" className="px-2 relative z-10">Contato Neural</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a 
    href={href} 
    className="relative text-white/80 hover:text-white transition-all duration-300 font-medium text-lg group"
    whileHover={{ y: -2 }}
  >
    {children}
    
    {/* Enhanced underline animation */}
    <motion.div
      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-aix-cyan to-aix-purple origin-left"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ width: '100%' }}
    />
    
    {/* Glow effect on hover */}
    <motion.div
      className="absolute inset-0 text-aix-cyan opacity-0 blur-sm"
      whileHover={{ opacity: 0.3 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  </motion.a>
);

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#sobre-nos", label: "Sobre Nós" },
  { href: "#expertise", label: "Expertise" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#aussy", label: "Aussy" }
];

export default Navbar;
