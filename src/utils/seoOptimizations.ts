
export const injectAdvancedMeta = () => {
  const metaTags = [
    { name: 'subject', content: 'Inteligência Artificial e Prompt Engineering' },
    { name: 'topic', content: 'AI, Machine Learning, Conversational AI, Chatbots' },
    { name: 'summary', content: 'Plataforma líder em educação e consultoria de IA conversacional' },
    { name: 'classification', content: 'Technology, Artificial Intelligence, Education' },
    { name: 'designer', content: 'Lorenza Volponi' },
    { name: 'reply-to', content: 'contato@aix8c.com' },
    { name: 'owner', content: 'Lorenza Volponi - AIX8C' },
    { name: 'url', content: 'https://aix8c.com' },
    { name: 'identifier-URL', content: 'https://aix8c.com' },
    { name: 'category', content: 'AI Technology, Prompt Engineering, Conversational AI' },
    { name: 'coverage', content: 'Worldwide' },
    { name: 'distribution', content: 'Global' },
    { name: 'rating', content: 'General' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:locale:alternate', content: 'en_US' }
  ];

  metaTags.forEach(tag => {
    const selector = tag.name
      ? `meta[name="${tag.name}"]`
      : `meta[property="${tag.property}"]`;

    const existingTag = document.head.querySelector(selector);
    if (existingTag) {
      existingTag.setAttribute('content', tag.content);
      return;
    }

    const meta = document.createElement('meta');
    if (tag.name) meta.name = tag.name;
    if (tag.property) meta.setAttribute('property', tag.property);
    meta.content = tag.content;
    document.head.appendChild(meta);
  });
};

export const preloadCriticalResources = () => {
  // Preload hero image with high priority
  const img = new Image();
  img.src = "/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png";
  img.loading = 'eager';
  
  // Preload critical fonts
  const fontHref = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap';
  const existingFontLink = document.head.querySelector(`link[href="${fontHref}"]`);

  if (!existingFontLink) {
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = fontHref;
    fontLink.as = 'style';
    fontLink.onload = () => {
      fontLink.rel = 'stylesheet';
    };
    document.head.appendChild(fontLink);
  }
};
