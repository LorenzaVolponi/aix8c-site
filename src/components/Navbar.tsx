
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.85, 0.98]);
  const navBlur = useTransform(scrollY, [0, 100], [0, 25]);
  const logoGlow = useTransform(scrollY, [0, 200], [0, 1]);

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
        "fixed top-0 w-full z-50 transition-all duration-700",
        scrolled 
          ? "bg-aix-black/95 backdrop-blur-2xl py-4 shadow-2xl border-b border-aix-purple/30" 
          : "bg-transparent py-8"
      )}
      style={{ 
        backdropFilter: `blur(${navBlur}px)`,
        backgroundColor: scrolled ? `rgba(10, 10, 10, ${navOpacity.get()})` : 'transparent',
        boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' : 'none'
      }}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Enhanced Logo with Cinematic Effects */}
        <motion.a 
          href="#" 
          className="relative text-3xl md:text-4xl font-bold font-serif group"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="relative z-10 holographic-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{
              filter: `drop-shadow(0 0 ${logoGlow.get() * 10}px rgba(245, 158, 11, 0.6))`
            }}
          >
            AIX8C
          </motion.span>
          
          {/* Enhanced logo glow effects */}
          <motion.div
            className="absolute inset-0 holographic-text opacity-0 blur-sm group-hover:opacity-40 transition-opacity duration-500"
            animate={{
              textShadow: [
                "0 0 20px rgba(245, 158, 11, 0.3)",
                "0 0 40px rgba(139, 92, 246, 0.3)",
                "0 0 20px rgba(6, 182, 212, 0.3)",
                "0 0 20px rgba(245, 158, 11, 0.3)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            AIX8C
          </motion.div>
          
          {/* Cinematic particle effect */}
          <motion.div
            className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              background: [
                "radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.a>
        
        {/* Enhanced Navigation Links */}
        <motion.div 
          className="hidden md:flex space-x-16 items-center"
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
        
        {/* Enhanced CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            {/* Button background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-purple rounded-xl opacity-0 blur-lg group-hover:opacity-60 transition-all duration-500"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0, 0.3, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <Button className="relative bg-gradient-purple hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 transition-all duration-500 px-8 py-4 rounded-xl border border-aix-purple/30 backdrop-blur-sm overflow-hidden group">
              {/* Enhanced shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%', skewX: -20 }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              
              {/* Holographic overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-aix-cyan/20 via-aix-purple/20 to-aix-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2), rgba(245, 158, 11, 0.2))",
                    "linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))",
                    "linear-gradient(225deg, rgba(139, 92, 246, 0.2), rgba(245, 158, 11, 0.2), rgba(6, 182, 212, 0.2))"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <a href="#contato" className="relative z-10 font-semibold text-lg">
                Contato Neural
              </a>
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
    className="relative text-white/90 hover:text-white transition-all duration-500 font-medium text-lg group"
    whileHover={{ y: -3 }}
  >
    <span className="relative z-10">{children}</span>
    
    {/* Enhanced underline animation */}
    <motion.div
      className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-aix-cyan via-aix-purple to-aix-gold origin-left"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ width: '100%' }}
    />
    
    {/* Holographic text effect */}
    <motion.div
      className="absolute inset-0 opacity-0 blur-sm group-hover:opacity-40 transition-all duration-500"
      animate={{
        color: ["#06b6d4", "#8b5cf6", "#f59e0b", "#06b6d4"]
      }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      {children}
    </motion.div>
    
    {/* Glow effect on hover */}
    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        textShadow: "0 0 15px rgba(6, 182, 212, 0.4), 0 0 30px rgba(139, 92, 246, 0.3)"
      }}
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
