import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Navigation, User, FolderOpen, Bot, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Zap, Navigation, Home, User, Briefcase, FolderOpen, Bot, type LucideIcon } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < 80 || current < lastScroll.current);
      lastScroll.current = current;

      const sections = navLinks.map(l => l.id);
      let active = 'home';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= 130 && r.bottom >= 130) active = id;
      });
      setActiveSection(active);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className='fixed top-0 w-full z-50 bg-aix-black/80 backdrop-blur-2xl border-b border-aix-gold/20'
        animate={{ y: visible ? 0 : '-100%' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className='container mx-auto flex justify-between items-center px-6 py-4'>
          <a href='#' className='logo-stagger text-2xl md:text-3xl font-bold font-serif gold-text-gradient' onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            {'AIX8C'.split('').map((letter, i) => <span key={`${letter}-${i}`}>{letter}</span>)}
          </a>

          <div className='hidden md:flex space-x-8 items-center'>
            {navLinks.map((link) => (
              <NavLink key={link.id} href={link.href} isActive={activeSection === link.id} onClick={() => handleNavClick(link.href)} icon={link.icon}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <button className='md:hidden z-10 p-2 text-white' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className='fixed inset-0 z-40 md:hidden bg-aix-black/95 backdrop-blur-xl flex flex-col justify-center items-center space-y-8' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => handleNavClick(link.href)} className='text-2xl text-white/90 hover:text-aix-gold'>
                {link.label}
              </button>
            ))}
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
  icon: LucideIcon;
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
