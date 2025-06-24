
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Zap, Navigation, Home, User, Briefcase, FolderOpen, Bot } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98]);
  const navBlur = useTransform(scrollY, [0, 100], [15, 30]);
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['home', 'sobre', 'sobre-nos', 'expertise', 'portfolio', 'aussy'];
      let current = 'home';

      sections.forEach(section => {
        const element = document.getElementById(section === 'home' ? '' : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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

  const navLinks = [
    { href: "#sobre", label: "Sobre", icon: User, id: 'sobre' },
    { href: "#sobre-nos", label: "Sobre Nós", icon: Navigation, id: 'sobre-nos' },
    { href: "#expertise", label: "Expertise", icon: Zap, id: 'expertise' },
    { href: "#portfolio", label: "Portfólio", icon: FolderOpen, id: 'portfolio' },
    { href: "#aussy", label: "Aussy", icon: Bot, id: 'aussy' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-700",
          scrolled 
            ? "bg-aix-black/95 backdrop-blur-2xl py-3 shadow-2xl border-b border-aix-gold/20" 
            : "bg-transparent py-6"
        )}
        style={{ 
          backdropFilter: `blur(${navBlur.get()}px)`,
          backgroundColor: scrolled ? `rgba(10, 10, 10, ${navOpacity.get()})` : 'transparent',
        }}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Enhanced Logo */}
          <motion.a 
            href="#" 
            className="relative text-2xl md:text-3xl font-bold font-serif group z-10"
            style={{ scale: logoScale }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <motion.span
              className="relative z-10 bg-gradient-to-r from-aix-gold via-yellow-400 to-aix-gold bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: '200% auto' }}
            >
              AIX8C
            </motion.span>
            
            {/* Logo glow effect */}
            <motion.div
              className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"
              animate={{
                textShadow: [
                  "0 0 20px rgba(245, 158, 11, 0.5)",
                  "0 0 30px rgba(245, 158, 11, 0.7)",
                  "0 0 20px rgba(245, 158, 11, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              AIX8C
            </motion.div>
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <NavLink 
                  href={link.href} 
                  isActive={activeSection === link.id}
                  onClick={() => handleNavClick(link.href)}
                  icon={link.icon}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden z-10 p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-aix-black/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div
              className="relative h-full flex flex-col justify-center items-center space-y-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center space-x-3 text-2xl text-white/90 hover:text-aix-gold transition-colors duration-300"
                  >
                    <link.icon size={24} />
                    <span>{link.label}</span>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ 
  href, 
  children, 
  isActive, 
  onClick, 
  icon: Icon 
}: { 
  href: string; 
  children: React.ReactNode; 
  isActive?: boolean;
  onClick?: () => void;
  icon: React.ComponentType<any>;
}) => (
  <motion.button 
    onClick={onClick}
    className={cn(
      "relative text-white/90 hover:text-white transition-all duration-300 font-medium text-lg group flex items-center space-x-2",
      isActive && "text-aix-gold"
    )}
    whileHover={{ y: -2 }}
  >
    <Icon size={18} className={cn("transition-colors", isActive ? "text-aix-gold" : "text-white/70")} />
    <span className="relative z-10">{children}</span>
    
    {/* Active indicator */}
    <motion.div
      className="absolute -bottom-3 left-0 h-0.5 bg-gradient-to-r from-aix-gold via-yellow-400 to-aix-gold"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isActive ? 1 : 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
      style={{ width: '100%', originX: 0 }}
    />
    
    {/* Glow effect */}
    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
      style={{
        textShadow: "0 0 15px rgba(245, 158, 11, 0.5)"
      }}
    >
      {children}
    </motion.div>
  </motion.button>
);

export default Navbar;
