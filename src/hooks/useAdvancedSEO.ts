
import { useEffect } from 'react';

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
}

// Declare gtag as a global function
declare global {
    interface Window {
      gtag?: (...args: unknown[]) => void;
    }
}

export const useAdvancedSEO = (config: SEOConfig) => {
  useEffect(() => {
    // Dynamic title optimization
    if (config.title) {
      document.title = config.title;
    }

    // Dynamic meta description
    if (config.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', config.description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', config.description);
        document.head.appendChild(metaDescription);
      }
    }

    // Dynamic keywords
    if (config.keywords && config.keywords.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', config.keywords.join(', '));
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', config.keywords.join(', '));
        document.head.appendChild(metaKeywords);
      }
    }

    // Canonical URL
    if (config.canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', config.canonical);
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', config.canonical);
        document.head.appendChild(canonicalLink);
      }
    }

    // Advanced tracking and analytics
    const trackPageView = () => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: config.title,
          page_location: window.location.href,
          content_group1: 'AI & Prompt Engineering',
          content_group2: 'Lorenza Volponi',
          custom_map: {
            'dimension1': 'prompt_engineering',
            'dimension2': 'conversational_ai'
          }
        });
      }
    };

    trackPageView();

    // Structured data for breadcrumbs
    const addBreadcrumbSchema = () => {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aix8c.com"
          },
          {
            "@type": "ListItem", 
            "position": 2,
            "name": "Lorenza Volponi",
            "item": "https://aix8c.com/#about"
          }
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(script);
    };

    addBreadcrumbSchema();

  }, [config]);
};

export default useAdvancedSEO;
