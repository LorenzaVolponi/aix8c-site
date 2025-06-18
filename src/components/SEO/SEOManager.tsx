
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  schemaType?: 'Person' | 'Organization' | 'WebSite' | 'Article';
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOManager: React.FC<SEOProps> = ({
  title = "AIX8C - Lorenza Volponi | Pioneira em Engenharia de Prompts e IA Conversacional",
  description = "Descobra o futuro da Inteligência Artificial com Lorenza Volponi, pioneira brasileira em prompt engineering, IA conversacional, automação de chatbots e mentoria com IA. Transforme sua comunicação com máquinas.",
  keywords = "engenharia de prompts, prompt engineering, IA conversacional, chatbot automation, mentoria IA, aprendizado com IA, vibe coding, Lorenza Volponi, AIX8C, inteligência artificial Brasil",
  canonical = "https://aix8c.com",
  ogImage = "/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png",
  schemaType = "Person",
  publishedTime,
  modifiedTime
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": "Lorenza Volponi",
    "alternateName": "AIX8C",
    "description": description,
    "url": canonical,
    "image": ogImage,
    "sameAs": [
      "https://linkedin.com/in/lorenzavolponi",
      "https://calendly.com/lorenzavolponi"
    ],
    "jobTitle": "Especialista em Engenharia de Prompts e IA Conversacional",
    "worksFor": {
      "@type": "Organization",
      "name": "AIX8C"
    },
    "knowsAbout": [
      "Prompt Engineering",
      "Inteligência Artificial",
      "Automação de Chatbots",
      "IA Conversacional",
      "Machine Learning",
      "Processamento de Linguagem Natural"
    ],
    "award": [
      "Pioneira em Prompt Engineering no Brasil",
      "Certificação MTF Portugal IA"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Lorenza Volponi" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="AIX8C" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content="@lorenzavolponi" />

      {/* Additional Meta Tags for AI/Tech Niche */}
      <meta name="theme-color" content="#f59e0b" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="application-name" content="AIX8C" />
      
      {/* Advanced SEO Meta Tags */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="language" content="Portuguese, English" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="professionals, developers, AI enthusiasts, entrepreneurs" />
      
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://calendly.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//google-analytics.com" />
      <link rel="dns-prefetch" href="//googletagmanager.com" />
      
      {/* Time-based Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
    </Helmet>
  );
};

export default SEOManager;
