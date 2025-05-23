
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-aix-black/80 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold gold-text-gradient">AIX8C</a>
        
        <div className="hidden md:flex space-x-8">
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#expertise">Expertise</NavLink>
          <NavLink href="#portfolio">Portfólio</NavLink>
          <NavLink href="#aussy">Aussy</NavLink>
        </div>
        
        <Button className="bg-gradient-purple hover:opacity-90 transition-opacity">
          <a href="#contact" className="px-2">Contato</a>
        </Button>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="relative text-white/80 hover:text-white transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-aix-cyan after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    {children}
  </a>
);

export default Navbar;
