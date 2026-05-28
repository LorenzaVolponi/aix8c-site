import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ScrollText, Gem, Languages, Image, Orbit, Music, Send, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Entrada', icon: Sparkles, id: 'home' },
  { href: '#manifesto', label: 'Manifesto', icon: ScrollText, id: 'manifesto' },
  { href: '#fragmentos', label: 'Fragmentos', icon: Gem, id: 'fragmentos' },
  { href: '#linguagem', label: 'Linguagem', icon: Languages, id: 'linguagem' },
  { href: '#galeria', label: 'Galeria', icon: Image, id: 'galeria' },
  { href: '#universo', label: 'Universo', icon: Orbit, id: 'universo' },
  { href: '#atmosfera', label: 'Atmosfera', icon: Music, id: 'atmosfera' },
  { href: '#contato', label: 'Entre no campo', icon: Send, id: 'contato' }
];

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

      let active = 'home';
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= 140 && r.bottom >= 140) active = id;
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
      const y = element.getBoundingClientRect().top + window.scrollY - 88;
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
            {'VOLPONI'.split('').map((letter, i) => <span key={`${letter}-${i}`}>{letter}</span>)}
          </a>

          <div className='hidden md:flex gap-6 items-center'>
            {navLinks.map((link) => (
              <NavLink key={link.id} isActive={activeSection === link.id} onClick={() => handleNavClick(link.href)} icon={link.icon}>
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
          <motion.div className='fixed inset-0 z-40 md:hidden bg-aix-black/95 backdrop-blur-xl flex flex-col justify-center items-center space-y-6 px-6' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => handleNavClick(link.href)} className='text-xl text-white/90 hover:text-aix-gold'>
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ children, isActive, onClick, icon: Icon }: { children: React.ReactNode; isActive?: boolean; onClick?: () => void; icon: LucideIcon; }) => (
  <button onClick={onClick} data-cursor='nav-link' className={cn('nav-underline relative text-white/90 hover:text-white font-medium text-sm flex items-center space-x-2', isActive && 'text-aix-gold')}>
    <Icon size={15} className={cn(isActive ? 'text-aix-gold' : 'text-white/70')} />
    <span>{children}</span>
  </button>
);

export default Navbar;
