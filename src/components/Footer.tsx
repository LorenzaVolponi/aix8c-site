
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-aix-black border-t border-aix-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold gold-text-gradient mb-2">AIX8C</div>
            <p className="text-white/60 text-sm">
              Estratégias de Inteligência Artificial<br />com impacto real.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 mb-6 md:mb-0">
            <FooterLink href="#about">Sobre</FooterLink>
            <FooterLink href="#expertise">Expertise</FooterLink>
            <FooterLink href="#portfolio">Portfólio</FooterLink>
            <FooterLink href="#contact">Contato</FooterLink>
          </div>
          
          <div className="text-white/60 text-sm text-center md:text-right">
            <p>&copy; {currentYear} Lorenza Volponi</p>
            <p className="mt-1">Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white/70 hover:text-white transition-colors hover:underline"
  >
    {children}
  </a>
);

export default Footer;
