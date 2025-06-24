
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
    
      return (
          <footer className="py-16 bg-aix-black border-t border-aix-purple/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-constellation opacity-20"></div>
                      
                            <div className="container mx-auto px-4 relative z-10">
                                    <div className="flex flex-col md:flex-row justify-between items-center">
                                              <div className="mb-8 md:mb-0 text-center md:text-left">
                                                          <div className="text-3xl font-bold gold-text-gradient mb-4 font-serif">AIX8C</div>
                                                                      <p className="text-white/70 text-lg leading-relaxed max-w-sm">
                                                                                    Estratégias de Inteligência Artificial<br />
                                                                                                  <span className="purple-text-gradient font-semibold">com impacto exponencial.</span>
                                                                                                              </p>
                                                                                                                        </div>
                                                                                                                                  
                                                                                                                                            <div className="grid grid-cols-2 gap-x-16 gap-y-6 mb-8 md:mb-0">
                                                                                                                                                        <FooterLink href="#sobre">Sobre</FooterLink>
                                                                                                                                                                    <FooterLink href="#expertise">Expertise</FooterLink>
                                                                                                                                                                                <FooterLink href="#portfolio">Portfólio</FooterLink>
                                                                                                                                                                                            <FooterLink href="#contato">Contato</FooterLink>
                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                
                                                                                                                                                                                                                          <div className="text-white/60 text-center md:text-right">
                                                                                                                                                                                                                                      <p className="text-lg font-semibold">&copy; {currentYear} Lorenza Volponi</p>
                                                                                                                                                                                                                                                  <p className="mt-2 text-sm">Todos os direitos reservados</p>
                                                                                                                                                                                                                                                              <p className="mt-1 text-xs text-aix-cyan">Powered by Neural Architecture</p>
                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                          </footer>
                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                            };

                                                                                                                                                                                                                                                                                            const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
                                                                                                                                                                                                                                                                                              <a
                                                                                                                                                                                                                                                                                                  href={href}
                                                                                                                                                                                                                                                                                                      className="text-white/80 hover:text-white transition-all duration-300 hover:purple-text-gradient font-medium"
                                                                                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                                                                            {children}
                                                                                                                                                                                                                                                                                                              </a>
                                                                                                                                                                                                                                                                                                              );

                                                                                                                                                                                                                                                                                                              export default Footer;
                                                                                                                                                                                                                                                                                                              