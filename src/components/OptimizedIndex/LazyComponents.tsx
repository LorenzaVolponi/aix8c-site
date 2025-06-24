// src/components/OptimizedIndex/LazyComponents.tsx
import { lazy } from "react";

export const AboutSection = lazy(() => import("./AboutSection"));
export const SobreNosSection = lazy(() => import("./SobreNosSection"));
export const JornadaSection = lazy(() => import("./JornadaSection"));
export const PortfolioSection = lazy(() => import("./PortfolioSection"));
export const DepoimentosSection = lazy(() => import("./DepoimentosSection"));
export const ContatoSection = lazy(() => import("./ContatoSection"));
