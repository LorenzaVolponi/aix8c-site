
import { lazy } from 'react';

// Lazy load components with intelligent loading
export const AboutSection = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      resolve(import("@/components/AboutSection"));
    }, 100);
  })
);

export const JornadaSection = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      resolve(import("@/components/JornadaSection"));
    }, 300);
  })
);

export const PortfolioSection = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      resolve(import("@/components/PortfolioSection"));
    }, 400);
  })
);

export const AussySection = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      resolve(import("@/components/AussySection"));
    }, 500);
  })
);

export const ContactSection = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      resolve(import("@/components/ContactSection"));
    }, 600);
  })
);

export const Footer = lazy(() => 
  new Promise<{ default: React.ComponentType<any> }>(resolve => {
    setTimeout(() => {
      resolve(import("@/components/Footer"));
    }, 700);
  })
);
