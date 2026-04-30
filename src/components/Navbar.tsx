import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Navigation, User, FolderOpen, Bot, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#sobre', label: 'Sobre', icon: User, id: 'sobre' },
  { href: '#sobre-nos', label: 'Sobre Nós', icon: Navigation, id: 'sobre-nos' },
  { href: '#expertise', label: 'Expertise', icon: Zap, id: 'expertise' },
  { href: '#portfolio', label: 'Portfólio', icon: FolderOpen, id: 'portfolio' },
  { href: '#aussy', label: 'Aussy', icon: Bot, id: 'aussy' }
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

      // Update active section based on scroll position
      const sections = ['home', 'sobre', 'sobre-nos', 'expertise', 'portfolio', 'aussy'];
      let current = 'home';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
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
                  label={link.label}
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
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={mobileMenuOpen}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
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
  label,
  children, 
  isActive, 
  onClick, 
  icon: Icon 
}: { 
  href: string; 
  label: string;
  children: React.ReactNode; 
  isActive?: boolean;
  onClick?: () => void;
  icon: LucideIcon;
}) => (
  <motion.button 
    onClick={onClick}
    aria-label={`Ir para seção ${label}`}
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
