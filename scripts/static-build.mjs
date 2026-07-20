import { mkdirSync, writeFileSync, copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const siteUrl = (process.env.SITE_URL || process.env.VERCEL_URL || 'https://volponi.com.br').replace(/\/$/, '').replace(/^([^h])/, 'https://$1');
const githubUrl = 'https://github.com/LorenzaVolponi';
const uploadImage = '/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png';

const routes = [
  ['/', 'VOLPONI | Estúdio de Inteligência Artificial, Estratégia e Presença Digital'],
  ['/laboratorio', 'Laboratório VOLPONI | Projetos, protótipos e sistemas de IA'],
  ['/servicos', 'Serviços VOLPONI | IA aplicada, automação e presença premium'],
  ['/metodo', 'Método VOLPONI | Da ideia bruta ao sistema vivo'],
  ['/sobre', 'Sobre Lorenza Volponi | Inteligência simbólica e execução técnica'],
  ['/contato', 'Contato VOLPONI | Solicitar leitura de campo'],
];

const nav = [
  ['Manifesto', '#manifesto'],
  ['Laboratório', '#laboratorio'],
  ['Serviços', '#servicos'],
  ['Método', '#metodo'],
  ['Contato', '#contato'],
];

const proof = [
  ['09+', 'repositórios públicos organizados como prova técnica'],
  ['04', 'camadas de entrega: estratégia, IA, web e narrativa'],
  ['100%', 'site estático, indexável, rápido e sem dependência runtime'],
];

const projects = [
  ['gameshow', 'Experiência interativa com IA para transformar decisão em jogo memorável.', 'Produto IA'],
  ['giria-ai', 'Pesquisa cultural assistida por IA para traduzir sinais sociais em leitura acessível.', 'Cultura + IA'],
  ['clinic-intuition-ai', 'Tutor inteligente para raciocínio diagnóstico e tomada de decisão clínica.', 'Educação médica'],
  ['robo-wise', 'Robo-advisor para organizar investimentos e transformar dados em acompanhamento.', 'Fintech'],
  ['orchestrator--ai', 'Sistema para transformar ideias vagas em planos de execução com agentes.', 'Orquestração'],
  ['crime-scene-mapper-ai', 'Reconstrução 3D e leitura espacial para simulações forenses com IA.', '3D + IA'],
];

const services = [
  ['Presença digital rara', 'Landing pages, portfólios e narrativas visuais que criam gravidade sem parecer template.'],
  ['Protótipos com IA', 'Agentes, prompts, automações e interfaces para testar uma ideia antes que ela vire custo alto.'],
  ['Arquitetura narrativa', 'Tese, posicionamento, copy e estrutura de conteúdo para ideias difíceis de explicar.'],
  ['Sistemas de decisão', 'Mapas, fluxos e painéis leves para reduzir ruído e transformar ambiguidade em ação.'],
];

const method = [
  ['01', 'Escuta de campo', 'Ler sinais, tensões, desejos, limites e oportunidade real antes de desenhar qualquer tela.'],
  ['02', 'Arquitetura', 'Converter caos em tese, hierarquia, fluxo, linguagem e critérios claros de execução.'],
  ['03', 'Protótipo', 'Criar uma primeira versão funcional, bonita e testável, com IA quando ela realmente amplia valor.'],
  ['04', 'Lapidação', 'Refinar performance, SEO, responsividade, acessibilidade, narrativa e conversão.'],
];

const manifesto = [
  'Inteligência artificial não substitui presença. Ela amplia quem sabe formular boas perguntas.',
  'Estratégia não é excesso de informação. É a coragem de organizar prioridade, linguagem e consequência.',
  'Um site bom não explica tudo. Ele cria atmosfera, prova confiança e conduz para uma próxima ação.',
];

const css = String.raw`
:root{color-scheme:dark;--bg:#040407;--panel:#0d0d13;--text:#fff7ea;--muted:rgba(255,247,234,.66);--line:rgba(255,255,255,.14);--gold:#f2c76b;--cyan:#51e6ff;--violet:#9b6bff;--ruby:#7a0f1b;--mx:50vw;--my:40vh;--serif:"Cormorant Garamond",Georgia,serif;--sans:Inter,system-ui,-apple-system,"Segoe UI",sans-serif}*{box-sizing:border-box}html{scroll-behavior:smooth;background:var(--bg)}body{margin:0;min-height:100vh;overflow-x:hidden;color:var(--text);font-family:var(--sans);background:radial-gradient(circle at var(--mx) var(--my),rgba(81,230,255,.16),transparent 18rem),radial-gradient(circle at 14% 8%,rgba(155,107,255,.25),transparent 32rem),radial-gradient(circle at 86% 16%,rgba(122,15,27,.38),transparent 34rem),linear-gradient(135deg,#030306,#080814 52%,#020205)}body:before{content:"";position:fixed;inset:0;z-index:-2;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:76px 76px;mask-image:radial-gradient(circle at 50% 18%,#000,transparent 72%)}a{color:inherit;text-decoration:none}img{max-width:100%;display:block}.noise{position:fixed;inset:0;z-index:80;pointer-events:none;opacity:.045;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E")}.nav{position:fixed;inset:0 0 auto;z-index:50;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem clamp(1rem,4vw,4rem);background:linear-gradient(180deg,rgba(4,4,7,.86),rgba(4,4,7,.32),transparent);backdrop-filter:blur(18px)}.brand{font-family:var(--serif);font-size:1.35rem;letter-spacing:.22em}.nav-links{display:flex;gap:clamp(.7rem,1.8vw,1.4rem);font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}.nav-links a:hover{color:var(--gold)}.nav-cta{border:1px solid rgba(242,199,107,.42);border-radius:999px;padding:.72rem 1rem;color:var(--gold);font-size:.72rem;text-transform:uppercase;letter-spacing:.14em}.hero{min-height:100vh;display:grid;grid-template-columns:minmax(0,1.05fr) minmax(280px,.62fr);align-items:center;gap:clamp(2rem,5vw,5rem);padding:8rem clamp(1rem,5vw,5rem) 4rem}.eyebrow{margin:0 0 1rem;color:var(--gold);text-transform:uppercase;letter-spacing:.26em;font-size:.75rem}.hero h1,.section-title{font-family:var(--serif);font-weight:500;line-height:.86;letter-spacing:-.06em}.hero h1{margin:0;font-size:clamp(4.5rem,14vw,14rem);max-width:10ch}.lead{max-width:760px;color:rgba(255,247,234,.78);font-size:clamp(1.08rem,1.7vw,1.45rem);line-height:1.65}.hero-actions,.split-actions{display:flex;flex-wrap:wrap;gap:1rem;margin-top:2rem}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:3.25rem;border-radius:999px;padding:0 1.35rem;border:1px solid var(--line);background:rgba(255,255,255,.06);transition:transform .25s ease,border-color .25s ease,background .25s ease}.btn.primary{background:linear-gradient(135deg,var(--gold),#fff1ac);color:#120d04;border-color:transparent;font-weight:800}.btn:hover{transform:translateY(-2px);border-color:rgba(242,199,107,.55)}.orb{position:relative;min-height:520px;border:1px solid var(--line);border-radius:42px;background:linear-gradient(150deg,rgba(255,255,255,.1),rgba(255,255,255,.025));overflow:hidden;box-shadow:0 30px 90px rgba(0,0,0,.36)}.orb:before{content:"";position:absolute;inset:12%;border-radius:50%;background:radial-gradient(circle at 35% 28%,rgba(255,255,255,.34),transparent 12%),radial-gradient(circle at 50% 56%,rgba(122,15,27,.82),rgba(4,4,7,.28) 44%,rgba(242,199,107,.18) 62%,transparent 72%),conic-gradient(from 20deg,rgba(81,230,255,.2),rgba(155,107,255,.42),rgba(242,199,107,.28),rgba(81,230,255,.18));filter:drop-shadow(0 0 70px rgba(155,107,255,.28));animation:float 9s ease-in-out infinite}.orb img{position:absolute;inset:auto 1.5rem 1.5rem auto;width:42%;border-radius:26px;opacity:.82;border:1px solid var(--line)}.stats{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);margin-top:2.4rem}.stats article{padding:1.1rem;border-right:1px solid var(--line)}.stats article:last-child{border-right:0}.stats strong{display:block;font-family:var(--serif);font-size:2.4rem;color:var(--gold)}.stats span{font-size:.8rem;color:var(--muted);line-height:1.4}.section{padding:clamp(5rem,9vw,9rem) clamp(1rem,5vw,5rem)}.section-shell{width:min(1180px,100%);margin:0 auto}.section-title{font-size:clamp(3rem,8vw,7.5rem);margin:0 0 1.25rem}.manifesto-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.manifesto-card,.project-card,.service-card,.method-card,.contact-panel{border:1px solid var(--line);border-radius:30px;background:linear-gradient(150deg,rgba(255,255,255,.082),rgba(255,255,255,.028));backdrop-filter:blur(18px);box-shadow:0 20px 70px rgba(0,0,0,.24)}.manifesto-card{padding:clamp(1.4rem,3vw,2.4rem);font-family:var(--serif);font-size:clamp(1.6rem,3vw,3rem);line-height:1}.manifesto-card:nth-child(1){grid-row:span 2}.project-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.project-card,.service-card,.method-card{padding:1.35rem;min-height:250px;display:flex;flex-direction:column;justify-content:space-between}.project-card small,.method-card small{color:var(--gold);letter-spacing:.16em;text-transform:uppercase}.project-card h3,.service-card h3{font-family:var(--serif);font-size:2rem;line-height:.96;margin:.7rem 0}.project-card p,.service-card p,.method-card p{color:var(--muted);line-height:1.6}.service-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}.method-timeline{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}.method-card small{font-family:var(--serif);font-size:3.5rem;letter-spacing:-.06em}.split{display:grid;grid-template-columns:.85fr 1fr;gap:clamp(2rem,5vw,5rem);align-items:center}.contact-panel{padding:clamp(1.5rem,4vw,3rem)}.contact-list{display:grid;gap:.75rem;margin:1.5rem 0}.contact-list a{padding:1rem;border:1px solid var(--line);border-radius:18px;color:rgba(255,247,234,.82)}.footer{padding:3rem clamp(1rem,5vw,5rem);border-top:1px solid var(--line);display:flex;justify-content:space-between;gap:1rem;color:var(--muted);font-size:.85rem}.reveal{opacity:0;transform:translateY(24px);transition:opacity .8s ease,transform .8s ease}.reveal.visible{opacity:1;transform:none}@keyframes float{50%{transform:translateY(-18px) rotate(2deg)}}@media (max-width:900px){.hero,.split,.manifesto-grid{grid-template-columns:1fr}.nav-links{display:none}.project-grid,.service-grid,.method-timeline{grid-template-columns:1fr 1fr}.orb{min-height:360px}.footer{flex-direction:column}.stats{grid-template-columns:1fr}}@media (max-width:560px){.hero{padding-top:7rem}.project-grid,.service-grid,.method-timeline{grid-template-columns:1fr}.hero h1{font-size:4.2rem}.section-title{font-size:3.1rem}.manifesto-card{font-size:1.65rem}.nav{align-items:flex-start}.nav-cta{display:none}}
`;

const js = String.raw`
const root=document.documentElement;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;addEventListener('pointermove',e=>{root.style.setProperty('--mx',e.clientX+'px');root.style.setProperty('--my',e.clientY+'px')},{passive:true});const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}},{threshold:.14,rootMargin:'0px 0px -8% 0px'});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));if(!reduced){document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.08;const y=(e.clientY-r.top-r.height/2)*.08;el.style.transform='translate3d('+x+'px,'+y+'px,0)'},{passive:true});el.addEventListener('pointerleave',()=>{el.style.transform=''})})}document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{const target=document.querySelector(link.getAttribute('href'));if(!target)return;event.preventDefault();target.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'})}));const y=document.querySelector('#year');if(y)y.textContent=new Date().getFullYear();
`;

function jsonLd(path, title) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'VOLPONI', url: `${siteUrl}/`, inLanguage: 'pt-BR' },
      { '@type': 'Person', '@id': `${siteUrl}/#person`, name: 'Lorenza Volponi', alternateName: 'VOLPONI', url: siteUrl, sameAs: [githubUrl], knowsAbout: ['inteligência artificial', 'estratégia', 'automação', 'arquitetura narrativa', 'interfaces digitais'] },
      { '@type': 'ProfessionalService', '@id': `${siteUrl}/#service`, name: 'VOLPONI Intelligence Studio', url: siteUrl, areaServed: 'BR', founder: { '@id': `${siteUrl}/#person` }, serviceType: services.map(([name]) => name) },
      { '@type': 'WebPage', name: title, url: `${siteUrl}${path === '/' ? '/' : path}`, isPartOf: { '@id': `${siteUrl}/#website` }, about: { '@id': `${siteUrl}/#service` } },
    ],
  });
}

function html(path, title) {
  const canonical = `${siteUrl}${path === '/' ? '/' : path}`;
  return String.raw`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
<meta name="description" content="VOLPONI é um estúdio de inteligência artificial, estratégia simbólica e presença digital premium para transformar ideias em sistemas vivos." />
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
<meta name="theme-color" content="#040407" />
<link rel="canonical" href="${canonical}" />
<link rel="icon" href="/favicon.ico" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@300;400;500;600;800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="/assets/site.css" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="Inteligência artificial, estratégia, automação e presença digital com estética premium." />
<meta property="og:type" content="website" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${siteUrl}/og-volponi.svg" />
<meta name="twitter:card" content="summary_large_image" />
<script type="application/ld+json">${jsonLd(path, title)}</script>
</head>
<body>
<div class="noise" aria-hidden="true"></div>
<header class="nav">
  <a class="brand magnetic" href="#home" aria-label="VOLPONI início">VOLPONI</a>
  <nav class="nav-links" aria-label="Navegação principal">${nav.map(([label, href]) => `<a class="magnetic" href="${href}">${label}</a>`).join('')}</nav>
  <a class="nav-cta magnetic" href="#contato">Solicitar leitura</a>
</header>
<main>
  <section id="home" class="hero">
    <div class="reveal">
      <p class="eyebrow">AI • estratégia • presença</p>
      <h1>Inteligência em estado raro.</h1>
      <p class="lead">VOLPONI transforma ideias ambíguas em sistemas claros: páginas cinematográficas, protótipos com IA, automações e narrativas que fazem a presença digital trabalhar como ativo.</p>
      <div class="hero-actions"><a class="btn primary magnetic" href="#contato">Começar travessia</a><a class="btn magnetic" href="#laboratorio">Ver laboratório</a></div>
      <div class="stats">${proof.map(([value, text]) => `<article><strong>${value}</strong><span>${text}</span></article>`).join('')}</div>
    </div>
    <aside class="orb reveal" aria-label="Objeto visual VOLPONI"><img src="${uploadImage}" alt="Identidade visual AIX8C e VOLPONI" loading="eager" /></aside>
  </section>
  <section id="manifesto" class="section"><div class="section-shell"><p class="eyebrow reveal">manifesto</p><h2 class="section-title reveal">Menos vitrine. Mais campo de decisão.</h2><div class="manifesto-grid">${manifesto.map((item) => `<article class="manifesto-card reveal">${item}</article>`).join('')}</div></div></section>
  <section id="laboratorio" class="section"><div class="section-shell"><p class="eyebrow reveal">laboratório público</p><h2 class="section-title reveal">Código como prova. Interface como memória.</h2><div class="project-grid">${projects.map(([name, text, tag]) => `<article class="project-card reveal magnetic"><div><small>${tag}</small><h3>${name}</h3><p>${text}</p></div><a href="${githubUrl}/${name}" target="_blank" rel="noreferrer">Ver no GitHub →</a></article>`).join('')}</div></div></section>
  <section id="servicos" class="section"><div class="section-shell"><p class="eyebrow reveal">serviços</p><h2 class="section-title reveal">O que construímos.</h2><div class="service-grid">${services.map(([name, text]) => `<article class="service-card reveal magnetic"><h3>${name}</h3><p>${text}</p></article>`).join('')}</div></div></section>
  <section id="metodo" class="section"><div class="section-shell"><p class="eyebrow reveal">método</p><h2 class="section-title reveal">Da ideia bruta ao sistema vivo.</h2><div class="method-timeline">${method.map(([number, name, text]) => `<article class="method-card reveal"><small>${number}</small><h3>${name}</h3><p>${text}</p></article>`).join('')}</div></div></section>
  <section id="sobre" class="section"><div class="section-shell split"><div class="reveal"><p class="eyebrow">sobre</p><h2 class="section-title">Lorenza Volponi.</h2></div><div class="reveal"><p class="lead">Uma presença dedicada à intersecção entre inteligência artificial, linguagem, design, estratégia e sistemas. A proposta é simples: transformar complexidade em forma, beleza em direção e IA em execução concreta.</p><div class="split-actions"><a class="btn magnetic" href="${githubUrl}" target="_blank" rel="noreferrer">GitHub</a><a class="btn magnetic" href="#contato">Conversar</a></div></div></div></section>
  <section id="contato" class="section"><div class="section-shell split"><div class="reveal"><p class="eyebrow">acesso</p><h2 class="section-title">Solicite uma leitura de campo.</h2><p class="lead">Envie o contexto do projeto, a tensão atual e o tipo de transformação desejada. A resposta começa pela direção, não pelo excesso.</p></div><aside class="contact-panel reveal"><p class="eyebrow">canais</p><div class="contact-list"><a class="magnetic" href="mailto:contato.lorenzavolponi@gmail.com">contato.lorenzavolponi@gmail.com</a><a class="magnetic" href="${githubUrl}" target="_blank" rel="noreferrer">github.com/LorenzaVolponi</a><a class="magnetic" href="https://www.linkedin.com/in/lorenzavolponi/" target="_blank" rel="noreferrer">linkedin.com/in/lorenzavolponi</a></div><a class="btn primary magnetic" href="mailto:contato.lorenzavolponi@gmail.com?subject=Leitura%20de%20campo%20VOLPONI">Enviar briefing</a></aside></div></section>
</main>
<footer class="footer"><strong>VOLPONI</strong><span>© <span id="year"></span> Lorenza Volponi. Inteligência, estratégia e presença digital.</span></footer>
<script src="/assets/app.js" defer></script>
</body>
</html>`;
}

mkdirSync(dist, { recursive: true });
mkdirSync(join(dist, 'assets'), { recursive: true });
writeFileSync(join(dist, 'assets/site.css'), css);
writeFileSync(join(dist, 'assets/app.js'), js);
for (const [path, title] of routes) {
  const dir = path === '/' ? dist : join(dist, path.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html(path, title));
}
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(([path]) => `<url><loc>${siteUrl}${path === '/' ? '/' : path}</loc></url>`).join('')}</urlset>`);
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
writeFileSync(join(dist, 'llms.txt'), `# VOLPONI\n\nEstúdio de inteligência artificial, estratégia simbólica, automação e presença digital premium.\n`);
writeFileSync(join(dist, 'humans.txt'), `VOLPONI / Lorenza Volponi\nDesign, IA, estratégia e código.\n`);
writeFileSync(join(dist, 'og-volponi.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#040407"/><circle cx="820" cy="250" r="260" fill="#7a0f1b" opacity=".55"/><circle cx="420" cy="300" r="210" fill="#51e6ff" opacity=".18"/><text x="80" y="320" fill="#fff7ea" font-family="Georgia" font-size="132">VOLPONI</text><text x="86" y="390" fill="#f2c76b" font-family="Arial" font-size="34" letter-spacing="8">INTELIGÊNCIA EM ESTADO RARO</text></svg>`);
if (existsSync('public/favicon.ico')) copyFileSync('public/favicon.ico', join(dist, 'favicon.ico'));
if (existsSync('public/lovable-uploads')) {
  mkdirSync(join(dist, 'lovable-uploads'), { recursive: true });
  copyFileSync(`public${uploadImage}`, join(dist, uploadImage));
}
console.log('VOLPONI site rebuilt from scratch with premium static routes.');
