
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AIX8C",
    "alternateName": "Artificial Intelligence Experience Creative",
    "url": "https://aix8c.com",
    "description": "Plataforma revolucionária de Inteligência Artificial, Prompt Engineering e Automação de Chatbots liderada por Lorenza Volponi",
    "inLanguage": ["pt-BR", "en-US"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://aix8c.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "author": {
      "@type": "Person",
      "name": "Lorenza Volponi",
      "@id": "https://aix8c.com/#person"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIX8C",
    "legalName": "AIX8C - Artificial Intelligence Experience Creative",
    "url": "https://aix8c.com",
    "logo": "/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png",
    "description": "Líder mundial em soluções de IA conversacional, prompt engineering e automação inteligente",
    "founder": {
      "@type": "Person",
      "name": "Lorenza Volponi"
    },
    "foundingLocation": {
      "@type": "Place",
      "name": "Brasil"
    },
    "areaServed": "Worldwide",
    "knowsAbout": [
      "Artificial Intelligence",
      "Prompt Engineering",
      "Conversational AI",
      "Chatbot Automation",
      "Machine Learning",
      "Natural Language Processing"
    ],
    "serviceType": [
      "AI Consulting",
      "Prompt Engineering Training",
      "Chatbot Development",
      "AI Mentorship",
      "Conversational AI Solutions"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Engenharia de Prompts e IA Conversacional",
    "description": "Serviços especializados em prompt engineering, desenvolvimento de IA conversacional e automação de chatbots",
    "provider": {
      "@type": "Person",
      "name": "Lorenza Volponi"
    },
    "areaServed": "Worldwide",
    "serviceType": "AI Consulting and Training",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de IA",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Mentoria em Prompt Engineering",
          "description": "Aprenda as técnicas mais avançadas de engenharia de prompts"
        },
        {
          "@type": "Offer", 
          "name": "Desenvolvimento de Chatbots IA",
          "description": "Criação de chatbots inteligentes e conversacionais"
        },
        {
          "@type": "Offer",
          "name": "Consultoria em IA Conversacional", 
          "description": "Estratégias personalizadas para implementação de IA"
        }
      ]
    }
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Masterclass em Prompt Engineering",
    "description": "Curso completo sobre engenharia de prompts e IA conversacional",
    "provider": {
      "@type": "Person",
      "name": "Lorenza Volponi"
    },
    "courseMode": "online",
    "inLanguage": "pt-BR",
    "teaches": [
      "Prompt Engineering",
      "IA Conversacional", 
      "Automação de Chatbots",
      "Otimização de Respostas IA"
    ]
  };

  const personalSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lorenza Volponi",
    "jobTitle": "Arquiteta de IA e Mentora de Engenharia de Prompts",
    "description":
      "Especialista em mentoria de IA, engenharia de prompts e soluções criativas com IA.",
    "url": "https://aix8c.com"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(courseSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(personalSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
