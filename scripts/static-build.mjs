import { mkdirSync, writeFileSync, copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const siteUrl = (process.env.SITE_URL || process.env.VERCEL_URL || 'https://volponi.com.br').replace(/\/$/, '').replace(/^([^h])/, 'https://$1');
const githubUrl = 'https://github.com/LorenzaVolponi';

mkdirSync(dist, { recursive: true });
mkdirSync(join(dist, 'assets'), { recursive: true });

const routes = [
  { path: '/', name: 'Home', title: 'VOLPONI | Inteligência como Objeto Raro', description: 'VOLPONI é um campo digital premium que explora inteligência artificial, estratégia simbólica, arquitetura narrativa, experiências WebGL e experimentação técnica por meio de protótipos, sistemas inteligentes e presença digital autoral.', keywords: 'VOLPONI, Lorenza Volponi, inteligência artificial, estratégia com IA, inteligência simbólica, arquitetura narrativa, WebGL, tecnologia criativa, automação com IA, engenharia de prompts, prompt engineering, identidade digital premium, projetos de IA no GitHub, experiências digitais cinematográficas, sistemas inteligentes, protótipos com IA, presença digital, site premium' },
  { path: '/laboratorio', name: 'Laboratório', title: 'Laboratório VOLPONI | Projetos de IA, Código e Sistemas Inteligentes', description: 'Conheça o Laboratório VOLPONI, um arquivo vivo de experimentos em inteligência artificial, automação, interfaces digitais, sistemas simbólicos, protótipos e projetos técnicos publicados no GitHub.', keywords: 'Laboratório VOLPONI, GitHub LorenzaVolponi, projetos de inteligência artificial, projetos de IA, automação com IA, TypeScript, React, WebGL, sistemas inteligentes, protótipos digitais, IA aplicada, engenharia de prompts, tecnologia criativa' },
  { path: '/territorios', name: 'Territórios', title: 'Territórios de Inteligência | VOLPONI', description: 'Explore os territórios de inteligência da VOLPONI: estratégia com IA, arquitetura narrativa, automação inteligente, mundos visuais, sistemas simbólicos, capital, tecnologia e transformação.', keywords: 'territórios de inteligência, estratégia com IA, arquitetura narrativa, automação inteligente, sistemas simbólicos, capital e tecnologia, transformação digital, inteligência estratégica, VOLPONI' },
  { path: '/arquivo', name: 'Arquivo', title: 'Arquivo VOLPONI | Ideias, Experimentos e Interfaces do Futuro', description: 'O Arquivo VOLPONI reúne fragmentos, ideias, experimentos com IA, sistemas simbólicos, pesquisa visual, notas estratégicas, interfaces do futuro e protótipos digitais.', keywords: 'Arquivo VOLPONI, experimentos com IA, sistemas simbólicos, interfaces do futuro, pesquisa visual, notas estratégicas, tecnologia criativa, protótipos digitais, inteligência artificial' },
  { path: '/sobre', name: 'Sobre', title: 'Sobre VOLPONI | Inteligência, Estratégia e Sistemas Simbólicos', description: 'VOLPONI é uma identidade digital e simbólica dedicada à intersecção entre inteligência artificial, estratégia, sistemas visuais, arquitetura narrativa e transformação humana.', keywords: 'sobre VOLPONI, inteligência simbólica, estratégia com IA, sistemas visuais, transformação humana, identidade digital, arquitetura narrativa, presença digital premium' },
  { path: '/contato', name: 'Contato', title: 'Solicitar Acesso | VOLPONI', description: 'Solicite acesso ao campo VOLPONI para colaborações, protótipos de IA, sistemas simbólicos, identidade digital premium e experiências cinematográficas.', keywords: 'contato VOLPONI, solicitar acesso, protótipo de IA, identidade digital, narrativa estratégica, experiência WebGL, colaboração em IA' },
  { path: '/insights', name: 'Insights', title: 'Insights VOLPONI | Estratégia com IA e Inteligência Simbólica', description: 'Insights VOLPONI prepara um motor editorial sobre estratégia com IA, inteligência simbólica, arquitetura narrativa, engenharia de prompts, automação inteligente e interfaces do futuro.', keywords: 'insights VOLPONI, estratégia com IA, inteligência simbólica, engenharia de prompts, automação inteligente, interfaces do futuro, tecnologia criativa' },
];

const repos = [
  ['aix8c-site', 'Experiência Web com IA', 'Website criado com IA, vibe coding, Node.js e React.', 'TypeScript / React'],
  ['clinic-intuition-ai', 'IA Aplicada / Educação', 'Projeto de IA criado para apoiar estudantes de medicina na construção de raciocínio diagnóstico.', 'IA aplicada'],
  ['crime-scene-mapper-ai', 'Inteligência 3D / Simulação', 'Projeto 3D para reconstrução forense e mapeamento de cenas com apoio de inteligência artificial.', '3D / Simulação'],
  ['newsai', 'Inteligência em Tempo Real', 'Sistema de notícias de IA em tempo real via RSS.', 'RSS / Automação'],
  ['orchestrator--ai', 'Orquestração de IA', 'Sistema de IA para simplificar ideias, organizar execução e transformar complexidade em direção.', 'IA / Sistemas'],
];

const territories = [
  ['Inteligência Estratégica', 'Frameworks, sistemas de decisão e estruturas narrativas para ambientes complexos.'],
  ['IA & Automação', 'Protótipos, agentes, workflows e sistemas inteligentes desenhados para transformar ambiguidade em execução.'],
  ['Arquitetura Narrativa', 'Posicionamento, storytelling, narrativas executivas e design cognitivo para ideias que precisam mover mercados.'],
  ['Mundos Visuais', 'Interfaces cinematográficas, imagens simbólicas e identidades digitais imersivas.'],
  ['Capital, Poder & Transformação', 'Pensamento estratégico para arquitetura de capital, ecossistemas de inovação e modelos de negócio voltados ao futuro.'],
  ['Experimentos Digitais', 'Protótipos nascidos no GitHub, laboratórios de IA e sistemas criados para testar o que o futuro pode se tornar.'],
];

const oracle = [
  ['Que tipo de inteligência o futuro exige?', 'Uma inteligência capaz de separar ruído de sinal, transformar ambiguidade em sistema e criar presença onde antes havia dispersão.'],
  ['Como a IA pode ampliar a inteligência humana?', 'Quando deixa de ser atalho e se torna espelho: revela padrões, tensiona escolhas e expande a arquitetura da decisão.'],
  ['Qual é a arquitetura de uma mente rara?', 'Precisão, repertório, silêncio, execução e coragem para construir onde ainda não existe linguagem pronta.'],
  ['Como ideias se transformam em sistemas?', 'Por fricção, protótipo, código, narrativa e repetição lúcida até que a abstração ganhe forma operacional.'],
  ['O que significa estratégia simbólica?', 'É desenhar sentido com consequência: estética, linguagem e estrutura trabalhando como uma única força.'],
  ['Como transformar ambiguidade em execução?', 'Nomeando o campo, reduzindo o excesso, criando sequência e construindo artefatos que pensam junto.'],
  ['Como uma presença digital cria gravidade?', 'Quando não tenta explicar tudo. Ela organiza atmosfera, prova, linguagem e silêncio ao redor de uma tese forte.'],
];

const archive = [
  ['Experimentos com IA', 'Protótipos que testam agentes, automações e interfaces cognitivas.'],
  ['Sistemas Simbólicos', 'Mapas, metáforas e estruturas que convertem complexidade em leitura.'],
  ['Pesquisa Visual', 'Rubi, obsidiana, água negra, metal envelhecido e luz atravessando pedra.'],
  ['Notas Estratégicas', 'Fragmentos sobre capital, poder, linguagem e tecnologia criativa.'],
  ['Fragmentos de Código', 'Pequenas arquiteturas técnicas que revelam pensamento em execução.'],
  ['Interfaces do Futuro', 'Experiências cinematográficas onde navegação vira presença.'],
  ['Arquiteturas Narrativas', 'Sistemas de sentido para ideias que precisam mover percepção.'],
];

const insights = [
  ['Estratégia com IA', 'Como transformar inteligência artificial em arquitetura de decisão.', '6 min'],
  ['Inteligência Simbólica', 'Por que marcas raras não gritam: organizam campo.', '5 min'],
  ['Interfaces do Futuro', 'A experiência digital como instalação, não como template.', '7 min'],
];

const gravity = [
  ['Ruído', 'é matéria bruta até encontrar arquitetura.'],
  ['Código', 'é pensamento que aceita ser testado pelo mundo.'],
  ['Símbolo', 'é estratégia quando altera percepção e decisão.'],
  ['Presença', 'é gravidade quando organiza o campo ao redor.'],
];

const protocol = [
  ['Escuta de Campo', 'Leitura de sinais, tensões, desejos e zonas de ruído antes de qualquer solução.'],
  ['Arquitetura Simbólica', 'Transformação de repertório, estratégia e tecnologia em uma linguagem proprietária.'],
  ['Protótipo Vivo', 'Construção rápida de interfaces, agentes, automações e narrativas testáveis.'],
  ['Orquestração Técnica', 'Integração de código, dados, IA, experiência e sistemas de decisão.'],
  ['Presença Magnética', 'Entrega de um artefato digital que não apenas informa: cria gravidade.'],
];

function jsonLd(route) {
  const graph = [
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'VOLPONI', url: `${siteUrl}/`, inLanguage: 'pt-BR', potentialAction: { '@type': 'SearchAction', target: `${siteUrl}/insights?q={search_term_string}`, 'query-input': 'required name=search_term_string' } },
    { '@type': 'Person', '@id': `${siteUrl}/#person`, name: 'Lorenza Volponi', alternateName: ['VOLPONI', 'LorenzaVolponi'], url: siteUrl, sameAs: [githubUrl], knowsAbout: ['inteligência artificial', 'estratégia simbólica', 'arquitetura narrativa', 'automação com IA', 'tecnologia criativa', 'engenharia de prompts'] },
    { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'VOLPONI', url: siteUrl, sameAs: [githubUrl], slogan: 'Inteligência como Objeto Raro.' },
    { '@type': 'ProfilePage', '@id': `${siteUrl}${route.path}#profile`, name: route.title, url: `${siteUrl}${route.path}`, isPartOf: { '@id': `${siteUrl}/#website` }, about: { '@id': `${siteUrl}/#person` } },
    { '@type': 'BreadcrumbList', '@id': `${siteUrl}${route.path}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` }, { '@type': 'ListItem', position: 2, name: route.name, item: `${siteUrl}${route.path}` }] },
    ...repos.map(([name, category, description, language]) => ({ '@type': 'SoftwareSourceCode', name, description, programmingLanguage: language, codeRepository: `${githubUrl}/${name}`, applicationCategory: category, author: { '@id': `${siteUrl}/#person` } })),
    ...insights.map(([headline, description], index) => ({ '@type': 'Article', headline, description, author: { '@id': `${siteUrl}/#person` }, datePublished: `2026-05-${String(20 + index).padStart(2, '0')}`, inLanguage: 'pt-BR' })),
    { '@type': 'FAQPage', mainEntity: oracle.slice(0, 4).map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ];
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

const card = (content, cls = '') => `<article class="jewel-card reveal ${cls}"><span class="card-shine" aria-hidden="true"></span>${content}</article>`;

function pageHtml(route) {
  const canonical = `${siteUrl}${route.path === '/' ? '/' : route.path}`;
  return String.raw`<!doctype html>
mkdirSync(dist, { recursive: true });
mkdirSync(join(dist, 'assets'), { recursive: true });

const html = String.raw`<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <meta name="keywords" content="${route.keywords}" />
    <meta name="author" content="Lorenza Volponi" />
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
    <meta name="theme-color" content="#050505" />
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="Um campo digital onde IA, estratégia, sistemas simbólicos, código e mundos visuais convergem." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${siteUrl}/og-volponi.svg" />
    <meta property="og:locale" content="pt_BR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${siteUrl}/og-volponi.svg" />
    <script type="application/ld+json">${jsonLd(route)}</script>
    <style>
      :root{--obsidian:#050505;--graphite:#0B0B0D;--ruby:#7A0F1B;--wine:#3B050A;--gold:#B08D57;--pearl:#F3EEE6;--petrol:#0C2C35;--green:#062B1F;--smoke:#8A8A8A;--line:rgba(243,238,230,.14)}*{box-sizing:border-box}html{scroll-behavior:smooth;background:var(--obsidian)}body{margin:0;min-height:100vh;background:radial-gradient(circle at 20% 12%,rgba(122,15,27,.25),transparent 34rem),radial-gradient(circle at 84% 42%,rgba(12,44,53,.28),transparent 36rem),linear-gradient(180deg,#050505,#0B0B0D 42%,#040404);color:var(--pearl);font-family:Inter,system-ui,sans-serif;overflow-x:hidden;cursor:none}body::selection{background:rgba(176,141,87,.34)}a,button,input,textarea,select{font:inherit}a,button{color:inherit}.skip{position:absolute;left:-999px;top:1rem;z-index:200}.skip:focus{left:1rem;background:var(--pearl);color:#050505;padding:.8rem 1rem;border-radius:999px}.field,.grain,.mist,.cursor,.cinema-vignette,.liquid-light,.constellation,#volponi-canvas{pointer-events:none;position:fixed;inset:0}.field{z-index:0;background:linear-gradient(90deg,rgba(176,141,87,.045) 1px,transparent 1px),linear-gradient(rgba(176,141,87,.035) 1px,transparent 1px);background-size:84px 84px;mask-image:radial-gradient(circle at center,black,transparent 72%)}.grain{z-index:1;opacity:.20;mix-blend-mode:screen;background-image:radial-gradient(circle,rgba(255,255,255,.16) 0 1px,transparent 1px);background-size:34px 34px;filter:contrast(170%)}.mist{z-index:2;opacity:.72;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(176,141,87,.13),transparent 17rem);transition:background .2s linear}.cinema-vignette{z-index:4;background:radial-gradient(ellipse at center,transparent 34%,rgba(0,0,0,.36) 72%,rgba(0,0,0,.84) 100%),linear-gradient(90deg,rgba(0,0,0,.44),transparent 13%,transparent 87%,rgba(0,0,0,.44))}.liquid-light{z-index:1;opacity:.58;mix-blend-mode:screen;filter:blur(20px);background:conic-gradient(from var(--spin,0deg) at 50% 48%,transparent,rgba(122,15,27,.18),rgba(176,141,87,.14),transparent,rgba(12,44,53,.16),transparent);animation:liquidSpin 30s linear infinite}.constellation{z-index:2;opacity:.34;background-image:radial-gradient(circle at 12% 24%,rgba(243,238,230,.95) 0 1px,transparent 2px),radial-gradient(circle at 72% 18%,rgba(176,141,87,.9) 0 1px,transparent 2px),radial-gradient(circle at 82% 62%,rgba(243,238,230,.75) 0 1px,transparent 2px),radial-gradient(circle at 24% 78%,rgba(122,15,27,.9) 0 1px,transparent 2px)}#volponi-canvas{z-index:0;opacity:.9}.cursor{z-index:100;width:18px;height:18px;border:1px solid rgba(243,238,230,.76);border-radius:999px;inset:auto;transform:translate(-50%,-50%);transition:width .25s ease,height .25s ease,border-color .25s ease,background .25s ease}.cursor.is-hover{width:58px;height:58px;border-color:rgba(176,141,87,.9);background:rgba(176,141,87,.06)}.loader{position:fixed;inset:0;z-index:120;display:grid;place-items:center;background:#030303;transition:opacity .8s ease,visibility .8s ease}.loader.is-gone{opacity:0;visibility:hidden}.loader__mark{position:relative;font-family:'Cormorant Garamond',serif;font-size:clamp(3rem,10vw,9rem);letter-spacing:.13em;animation:emerge 1.8s cubic-bezier(.2,.8,.2,1) both}.loader__mark::after{content:'';position:absolute;left:50%;bottom:-.8rem;width:min(52vw,28rem);height:1px;transform:translateX(-50%);background:linear-gradient(90deg,transparent,rgba(176,141,87,.78),transparent);box-shadow:0 0 28px rgba(176,141,87,.48)}.nav{position:fixed;top:0;left:0;right:0;z-index:40;display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:1.05rem clamp(1.1rem,4vw,4rem);background:rgba(5,5,5,.58);border-bottom:1px solid var(--line);backdrop-filter:blur(22px)}.nav__brand{font-family:'Cormorant Garamond',serif;letter-spacing:.24em;font-size:1.1rem;text-decoration:none}.nav__links{display:flex;gap:clamp(.75rem,1.6vw,1.5rem);align-items:center;color:rgba(243,238,230,.72);font-size:.68rem;text-transform:uppercase;letter-spacing:.16em}.nav__links a{text-decoration:none}.sound{border:1px solid var(--line);background:rgba(255,255,255,.03);border-radius:999px;padding:.7rem 1rem;text-transform:uppercase;letter-spacing:.14em;font-size:.66rem;cursor:none}.mobile-menu{display:none}.chapter{position:relative;z-index:5;padding:clamp(6rem,12vw,11rem) clamp(1.15rem,5vw,5rem)}.hero{min-height:100vh;display:grid;place-items:center;text-align:center;overflow:hidden}.hero::before{content:'';position:absolute;z-index:1;left:50%;bottom:8vh;width:72vw;height:36vw;max-height:28rem;transform:translateX(-50%) perspective(900px) rotateX(64deg);border-radius:50%;border:1px solid rgba(176,141,87,.16);background:radial-gradient(ellipse at center,rgba(176,141,87,.09),transparent 62%)}.kicker{color:rgba(176,141,87,.9);text-transform:uppercase;letter-spacing:.28em;font-size:.72rem}h1,h2,h3{font-family:'Cormorant Garamond',serif;font-weight:500;margin:0}h1{font-size:clamp(5rem,18vw,16rem);line-height:.78;letter-spacing:.08em;text-shadow:0 0 70px rgba(176,141,87,.2)}h2{font-size:clamp(3rem,8vw,8rem);line-height:.9;letter-spacing:-.035em}h3{font-size:clamp(1.75rem,3.4vw,4rem);line-height:1}p{line-height:1.75}.hero__text{max-width:82rem;margin:auto;position:relative;z-index:3}.hero__sub{max-width:56rem;margin:1.8rem auto 2.4rem;color:rgba(243,238,230,.78);font-size:clamp(1.1rem,2vw,1.55rem)}.microcopy{color:rgba(243,238,230,.54);font-size:.86rem;letter-spacing:.08em}.orb{width:min(44vw,25rem);aspect-ratio:1;border-radius:50%;margin:0 auto 2rem;background:radial-gradient(circle at 34% 28%,rgba(243,238,230,.28),transparent 10%),radial-gradient(circle at 48% 52%,rgba(122,15,27,.72),rgba(5,5,5,.42) 42%,rgba(176,141,87,.16) 58%,transparent 70%),conic-gradient(from 18deg,rgba(176,141,87,.05),rgba(122,15,27,.46),rgba(12,44,53,.38),rgba(176,141,87,.22),rgba(5,5,5,.06));box-shadow:inset 0 0 80px rgba(0,0,0,.75),0 0 100px rgba(122,15,27,.28),0 0 45px rgba(176,141,87,.18);animation:orbFloat 9s ease-in-out infinite}.actions{display:flex;flex-wrap:wrap;justify-content:center;gap:.9rem;margin-top:1.8rem}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:3.35rem;padding:0 1.35rem;border:1px solid rgba(243,238,230,.22);border-radius:999px;text-decoration:none;background:rgba(255,255,255,.035);backdrop-filter:blur(18px);cursor:none;transition:border-color .35s ease,transform .35s ease,background .35s ease}.btn--primary{border-color:rgba(176,141,87,.55);background:linear-gradient(135deg,rgba(176,141,87,.18),rgba(122,15,27,.14))}.btn:hover{border-color:rgba(176,141,87,.86);transform:translateY(-2px)}.aix-opening{min-height:100vh;display:grid;align-items:center;overflow:hidden}.aix-title{font-size:clamp(4rem,15vw,12rem);line-height:.78;letter-spacing:.08em}.aix-subtitle{color:rgba(243,238,230,.65);letter-spacing:.22em;text-transform:uppercase;font-size:clamp(.72rem,1.4vw,1rem)}.aix-copy,.two-col{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(1.25rem,4vw,3rem)}.jewel-card{position:relative;overflow:hidden;border:1px solid rgba(243,238,230,.14);border-radius:2rem;padding:clamp(1.25rem,3vw,2.2rem);background:linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.018));backdrop-filter:blur(22px);box-shadow:0 30px 90px rgba(0,0,0,.28);transition:transform .5s ease,border-color .5s ease}.jewel-card:hover{transform:translateY(-8px);border-color:rgba(176,141,87,.46)}.card-shine{position:absolute;inset:-40%;background:linear-gradient(115deg,transparent 38%,rgba(176,141,87,.15),transparent 56%);transform:translateX(-42%) rotate(8deg);transition:transform .9s ease}.jewel-card:hover .card-shine{transform:translateX(42%) rotate(8deg)}.manifesto{max-width:82rem;margin:auto;text-align:center}.manifesto p{font-family:'Cormorant Garamond',serif;font-size:clamp(1.7rem,4vw,4.3rem);line-height:1.05;color:rgba(243,238,230,.88)}.keyword-line{display:flex;flex-wrap:wrap;justify-content:center;gap:.7rem;margin-top:2rem}.pill{border:1px solid rgba(176,141,87,.24);border-radius:999px;padding:.65rem .95rem;color:rgba(243,238,230,.7);background:rgba(255,255,255,.025);font-size:.78rem;text-transform:uppercase;letter-spacing:.14em}.section-head{display:flex;align-items:end;justify-content:space-between;gap:2rem;margin:0 auto 3rem;max-width:82rem}.section-head p{max-width:30rem;color:rgba(243,238,230,.62)}.grid{display:grid;grid-template-columns:repeat(12,1fr);gap:1rem;max-width:82rem;margin:auto}.span-4{grid-column:span 4}.span-6{grid-column:span 6}.span-7{grid-column:span 7}.span-5{grid-column:span 5}.repo small,.archive small{color:rgba(176,141,87,.9);letter-spacing:.14em;text-transform:uppercase}.repo h3,.territory h3,.archive h3{margin:.7rem 0 1rem}.repo p,.territory p,.archive p,.presence p{color:rgba(243,238,230,.68)}.oracle-shell{max-width:82rem;margin:auto;display:grid;grid-template-columns:.8fr 1.2fr;gap:2rem}.oracle-list{display:grid;gap:.8rem}.oracle-q{width:100%;text-align:left;border:1px solid rgba(243,238,230,.14);border-radius:1rem;background:rgba(255,255,255,.03);color:rgba(243,238,230,.72);padding:1rem;cursor:none}.oracle-q.is-active{border-color:rgba(176,141,87,.56);color:var(--pearl)}.oracle-answer{min-height:22rem;display:grid;place-items:center;text-align:center}.contact-form{display:grid;gap:1rem}.contact-form input,.contact-form textarea,.contact-form select{width:100%;border:1px solid rgba(243,238,230,.14);border-radius:1rem;background:rgba(255,255,255,.035);color:var(--pearl);padding:1rem}.contact-form textarea{min-height:10rem}.thesis{max-width:86rem;margin:auto}.thesis-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:1rem;align-items:stretch}.thesis-quote{min-height:34rem;display:grid;place-items:end;background:radial-gradient(circle at 30% 20%,rgba(122,15,27,.34),transparent 20rem),linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.018))}.thesis-quote h2{font-size:clamp(4rem,10vw,10rem)}.gravity-list{display:grid;gap:1rem}.gravity-item{display:grid;grid-template-columns:8rem 1fr;gap:1rem;align-items:center;border-bottom:1px solid var(--line);padding:1.1rem 0}.gravity-item strong{font-family:'Cormorant Garamond',serif;font-size:2rem;color:var(--gold)}.protocol{max-width:86rem;margin:auto}.protocol-track{counter-reset:step;display:grid;grid-template-columns:repeat(5,1fr);gap:1rem}.protocol-step{min-height:22rem}.protocol-step::before{counter-increment:step;content:'0' counter(step);display:block;color:var(--gold);letter-spacing:.2em;margin-bottom:3rem}.signature-band{max-width:86rem;margin:auto;border-block:1px solid rgba(176,141,87,.22);padding:3rem 0;text-align:center}.signature-band p{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,5vw,5rem);line-height:1.05;margin:0;color:rgba(243,238,230,.9)}.footer{position:relative;z-index:5;border-top:1px solid var(--line);padding:3rem clamp(1.2rem,5vw,5rem);display:flex;justify-content:space-between;gap:2rem;color:rgba(243,238,230,.62)}.footer a{color:rgba(243,238,230,.7);text-decoration:none;margin-right:1rem}.reveal{opacity:0;transform:translateY(34px);transition:opacity .9s ease,transform .9s ease}.reveal.is-visible{opacity:1;transform:translateY(0)}@keyframes emerge{from{opacity:0;transform:translateY(28px);filter:blur(18px)}to{opacity:1;transform:translateY(0);filter:blur(0)}}@keyframes liquidSpin{to{--spin:360deg;transform:scale(1.08) rotate(1turn)}}@keyframes orbFloat{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(4deg)}}@media(max-width:920px){body{cursor:auto}.cursor{display:none}.nav__links a{display:none}.sound{font-size:.6rem}.two-col,.aix-copy,.oracle-shell{grid-template-columns:1fr}.grid{display:block}.thesis-grid,.protocol-track{grid-template-columns:1fr}.jewel-card{margin-bottom:1rem}.span-4,.span-5,.span-6,.span-7{grid-column:auto}.section-head{display:block}.footer{display:block}.orb{width:min(74vw,20rem)}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.reveal{opacity:1;transform:none}}
    </style>
  </head>
  <body>
    <a class="skip" href="#conteudo">Pular para o conteúdo</a>
    <canvas id="volponi-canvas" aria-hidden="true"></canvas><div class="field" aria-hidden="true"></div><div class="liquid-light" aria-hidden="true"></div><div class="constellation" aria-hidden="true"></div><div class="grain" aria-hidden="true"></div><div class="mist" aria-hidden="true"></div><div class="cinema-vignette" aria-hidden="true"></div><div class="cursor" aria-hidden="true"></div><div class="loader"><div class="loader__mark">VOLPONI</div></div>
    <header class="nav" role="banner"><a class="nav__brand" href="/" data-hover>VOLPONI</a><nav class="nav__links" aria-label="Navegação principal"><a href="/laboratorio" data-hover>Laboratório</a><a href="/territorios" data-hover>Territórios</a><a href="/arquivo" data-hover>Arquivo</a><a href="/insights" data-hover>Insights</a><a href="/sobre" data-hover>Sobre</a><a href="/contato" data-hover>Contato</a><button class="sound" type="button" aria-label="Ativar ou desativar atmosfera sonora" data-hover>Ativar atmosfera</button></nav></header>
    <main id="conteudo">
      <section class="chapter hero" id="home"><div class="hero__text reveal"><div class="orb" aria-hidden="true"></div><p class="kicker">VOLPONI</p><h1>Inteligência como Objeto Raro.</h1><p class="hero__sub">VOLPONI é um campo cinematográfico de inteligência onde IA, código, estratégia simbólica e identidade digital convergem.</p><p class="microcopy">Não é um perfil. Não é um portfólio. É um campo de inteligência.</p><div class="actions"><a class="btn btn--primary" href="#manifesto" data-hover>Entrar no Campo</a><a class="btn" href="/laboratorio" data-hover>Explorar o Laboratório</a></div></div></section>
      <section class="chapter aix-opening" id="aix8c"><div class="two-col reveal"><div>${card('<p class="kicker">Prólogo AIX8C</p><h2>Welcome aboard, marujos.</h2><p>(O nome se diz ei ai eksi eiti ci)</p><p>Aqui, na nossa nave de exploração digital, estamos prontos para navegar pelos mares da Inteligência Artificial.</p><p>AIX8C combina inteligência artificial e experiência para criar soluções criativas e contínuas.</p>')}</div><div>${card('<h3>Missão, visão e valores</h3><p><strong>Missão:</strong> transformar a comunicação entre humanos e máquinas, com soluções inovadoras em IA.</p><p><strong>Visão:</strong> liderar na criação de experiências imersivas e únicas em IA.</p><p><strong>Valores:</strong> inovação como busca constante, criatividade como originalidade e inspiração como potência para capacitar e motivar.</p>')}</div></div></section>
      <section class="chapter" id="manifesto"><div class="manifesto reveal"><p>VOLPONI não é uma marca pessoal.<br/>É um campo.</p><p>Um campo onde inteligência ganha forma. Onde estratégia vira símbolo. Onde código vira linguagem. Onde inteligência artificial vira arquitetura. Onde presença vira gravidade.</p><p>O futuro não precisa de mais ruído. Precisa de mentes mais afiadas, sistemas mais profundos e formas raras de execução.</p><div class="keyword-line"><span class="pill">IA</span><span class="pill">Narrativa</span><span class="pill">Capital</span><span class="pill">Design</span><span class="pill">Símbolo</span><span class="pill">Tecnologia</span><span class="pill">Transformação</span></div></div></section>
      <section class="chapter thesis" id="gravidade"><div class="thesis-grid reveal">${card('<div class="thesis-quote"><div><p class="kicker">Tese de Gravidade</p><h2>A raridade não grita.</h2><p>Ela organiza o campo ao redor.</p></div></div>')}<div class="gravity-list">${gravity.map(([name, text]) => `<div class="gravity-item"><strong>${name}</strong><span>${text}</span></div>`).join('')}</div></div></section>
      <section class="chapter" id="laboratorio"><div class="section-head reveal"><div><p class="kicker">Laboratório VOLPONI</p><h2>Evidência técnica de uma mente simbólica.</h2></div><p>O Laboratório VOLPONI é onde ideias deixam de ser abstrações e se tornam protótipos. Código não é apenas execução. É uma forma de pensamento.</p></div><div class="grid">${repos.map(([name, category, description, language], index) => card(`<small>${category}</small><h3>${name}</h3><p>${description}</p><p><strong>${language}</strong></p><a class="btn" href="${githubUrl}/${name}" target="_blank" rel="noreferrer" data-hover>Ver no GitHub</a>`, `repo ${index === 0 ? 'span-7' : index === 1 ? 'span-5' : 'span-4'}`)).join('')}</div><div class="actions"><a class="btn btn--primary" href="${githubUrl}" target="_blank" rel="noreferrer" data-hover>Explorar Arquivo Técnico</a></div></section>
      <section class="chapter" id="territorios"><div class="section-head reveal"><div><p class="kicker">Territórios de Inteligência</p><h2>Onde estratégia, tecnologia e sistemas simbólicos convergem.</h2></div><p>Cards como joias digitais: áreas de atuação para transformar ambiguidade em direção.</p></div><div class="grid">${territories.map(([title, description]) => card(`<h3>${title}</h3><p>${description}</p>`, 'territory span-4')).join('')}</div></section>
      <section class="chapter protocol" id="sistemas-vivos"><div class="section-head reveal"><div><p class="kicker">Ateliê de Sistemas Vivos</p><h2>Da ambiguidade ao artefato raro.</h2></div><p>Um protocolo autoral para converter estratégia, IA, código e símbolo em sistemas que respiram.</p></div><div class="protocol-track">${protocol.map(([title, description]) => card(`<h3>${title}</h3><p>${description}</p>`, 'protocol-step')).join('')}</div></section>
      <section class="chapter" id="oraculo"><div class="oracle-shell reveal"><div><p class="kicker">Camada Oracular</p><h2>Pergunte ao campo.</h2><p>Entre com uma pergunta. Receba uma provocação. Uma interface preparada para futura integração com IA.</p></div><div class="oracle-list">${oracle.map(([q], i) => `<button class="oracle-q ${i === 0 ? 'is-active' : ''}" type="button" data-answer="${i}" data-hover>${q}</button>`).join('')}</div><div class="oracle-answer jewel-card" id="oracle-answer"><span class="card-shine" aria-hidden="true"></span><p>${oracle[0][1]}</p></div></div></section>
      <section class="chapter" id="arquivo"><div class="section-head reveal"><div><p class="kicker">O Arquivo</p><h2>Fragmentos, ideias, projetos, imagens, protótipos e sistemas.</h2></div><p>Uma estrutura preparada para expansão futura via CMS, Markdown ou banco de dados.</p></div><div class="grid">${archive.map(([category, description], index) => card(`<small>${category}</small><h3>${category}</h3><p>${description}</p>`, `archive ${index % 3 === 0 ? 'span-7' : 'span-5'}`)).join('')}</div></section>
      <section class="chapter"><div class="signature-band reveal"><p>Inteligência não é informação.<br/>É arquitetura em estado de presença.</p></div></section>
      <section class="chapter" id="sobre"><div class="two-col reveal"><div><p class="kicker">A Presença por Trás do Campo</p><h2>Inteligência, estratégia e sistemas simbólicos.</h2></div>${card('<div class="presence"><p>VOLPONI é uma identidade digital e simbólica dedicada a explorar a intersecção entre inteligência artificial, estratégia, sistemas visuais e transformação humana.</p><p>Opera como laboratório de ideias, protótipos e arquiteturas para um mundo onde tecnologia não é apenas funcional — ela se torna narrativa, presença e poder.</p><p>Por meio de código, design, experimentação com IA e pensamento estratégico, VOLPONI constrói artefatos digitais que desafiam interfaces genéricas e transformam ideias em sistemas vivos.</p><div class="actions"><a class="btn btn--primary" href="/laboratorio" data-hover>Entrar no Laboratório</a><a class="btn" href="/contato" data-hover>Iniciar uma Conversa Privada</a></div></div>')}</div></section>
      <section class="chapter" id="insights"><div class="section-head reveal"><div><p class="kicker">Insights</p><h2>Motor editorial para autoridade orgânica.</h2></div><p>Estrutura inicial para artigos sobre estratégia com IA, inteligência simbólica, identidade digital, experiências WebGL, engenharia de prompts e tecnologia criativa.</p></div><div class="grid">${insights.map(([title, description, time]) => card(`<small>${time} de leitura</small><h3>${title}</h3><p>${description}</p><a class="btn" href="/insights" data-hover>Ler Insights</a>`, 'span-4')).join('')}</div></section>
      <section class="chapter" id="contato"><div class="two-col reveal"><div><p class="kicker">Contato / Acesso Privado</p><h2>Solicitar Acesso</h2><p>Para colaborações, experimentos estratégicos, protótipos de IA, sistemas simbólicos ou projetos de identidade digital, entre no campo.</p><div class="actions"><a class="btn" href="${githubUrl}" target="_blank" rel="noreferrer" data-hover>Ver GitHub</a></div></div>${card('<form class="contact-form" action="mailto:contato.lorenzavolponi@gmail.com" method="post" enctype="text/plain"><label>Nome<input name="nome" autocomplete="name" required /></label><label>E-mail<input type="email" name="email" autocomplete="email" required /></label><label>Tipo de solicitação<select name="tipo"><option>Protótipo de IA</option><option>Identidade Digital</option><option>Narrativa Estratégica</option><option>Experiência WebGL</option><option>Colaboração</option><option>Outro</option></select></label><label>Mensagem<textarea name="mensagem" required></textarea></label><button class="btn btn--primary" type="submit" data-hover>Iniciar Conversa Privada</button></form>')}</div></section>
    </main>
    <footer class="footer"><div><strong>VOLPONI</strong><p>Inteligência como Objeto Raro.</p><p>© VOLPONI. Construído como um campo de inteligência.</p></div><nav aria-label="Rodapé"><a href="${githubUrl}" target="_blank" rel="noreferrer">GitHub</a><a href="/laboratorio">Laboratório</a><a href="/arquivo">Arquivo</a><a href="/territorios">Territórios</a><a href="/insights">Insights</a><a href="/contato">Contato</a></nav></footer>
    <script>
      const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;const cursor=document.querySelector('.cursor');const mist=document.querySelector('.mist');const hoverables=document.querySelectorAll('a,button,[data-hover]');addEventListener('mousemove',(event)=>{document.documentElement.style.setProperty('--mx',event.clientX+'px');document.documentElement.style.setProperty('--my',event.clientY+'px');if(cursor){cursor.style.left=event.clientX+'px';cursor.style.top=event.clientY+'px'}if(mist){mist.style.setProperty('--mx',event.clientX+'px');mist.style.setProperty('--my',event.clientY+'px')}},{passive:true});hoverables.forEach((el)=>{el.addEventListener('mouseenter',()=>cursor?.classList.add('is-hover'));el.addEventListener('mouseleave',()=>cursor?.classList.remove('is-hover'))});setTimeout(()=>document.querySelector('.loader')?.classList.add('is-gone'),900);const reveal=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting)entry.target.classList.add('is-visible')}),{threshold:.16});document.querySelectorAll('.reveal').forEach((el)=>reveal.observe(el));const answers=${JSON.stringify(oracle.map(([, a]) => a))};document.querySelectorAll('.oracle-q').forEach((button)=>button.addEventListener('click',()=>{document.querySelectorAll('.oracle-q').forEach((b)=>b.classList.remove('is-active'));button.classList.add('is-active');const box=document.querySelector('#oracle-answer p');if(box)box.textContent=answers[Number(button.dataset.answer)||0]}));const canvas=document.getElementById('volponi-canvas');const ctx=canvas.getContext('2d');let w=0,h=0,particles=[];function resize(){w=canvas.width=innerWidth*devicePixelRatio;h=canvas.height=innerHeight*devicePixelRatio;canvas.style.width=innerWidth+'px';canvas.style.height=innerHeight+'px';const count=innerWidth<760?48:120;particles=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,r:(Math.random()*1.8+.4)*devicePixelRatio,a:Math.random()*.45+.12,s:Math.random()*.32+.08}))}function draw(t=0){ctx.clearRect(0,0,w,h);const grad=ctx.createLinearGradient(0,0,w,h);grad.addColorStop(0,'rgba(59,5,10,.36)');grad.addColorStop(.48,'rgba(12,44,53,.22)');grad.addColorStop(1,'rgba(5,5,5,.5)');ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);for(let wave=0;wave<4;wave++){ctx.beginPath();const base=h*(.54+wave*.075);for(let x=0;x<=w;x+=18*devicePixelRatio){const y=base+Math.sin(x/(170*devicePixelRatio)+t/(2100+wave*420))*(10+wave*7)*devicePixelRatio;if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)}ctx.strokeStyle='rgba(176,141,87,'+(.032+wave*.016)+')';ctx.lineWidth=(1+wave*.35)*devicePixelRatio;ctx.stroke()}particles.forEach((p,i)=>{p.y-=p.s*devicePixelRatio;p.x+=Math.sin(t/2600+i)*.18*devicePixelRatio;if(p.y<-8)p.y=h+8;ctx.beginPath();ctx.fillStyle='rgba(243,238,230,'+p.a+')';ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()});if(!reduce)requestAnimationFrame(draw)}resize();addEventListener('resize',resize,{passive:true});draw();let audioCtx,noise,gain,filter;document.querySelector('.sound')?.addEventListener('click',async(event)=>{const button=event.currentTarget;if(!audioCtx){audioCtx=new(window.AudioContext||window.webkitAudioContext)();const buffer=audioCtx.createBuffer(1,audioCtx.sampleRate*2,audioCtx.sampleRate);const data=buffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*.08;noise=audioCtx.createBufferSource();noise.buffer=buffer;noise.loop=true;filter=audioCtx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=620;gain=audioCtx.createGain();gain.gain.value=0;noise.connect(filter).connect(gain).connect(audioCtx.destination);noise.start()}await audioCtx.resume();const on=gain.gain.value<.01;gain.gain.linearRampToValueAtTime(on ? .065 : 0,audioCtx.currentTime+.5);button.textContent=on?'Desativar atmosfera':'Ativar atmosfera'});
    </script>
  </body>
</html>`;
}

for (const route of routes) {
  const dir = route.path === '/' ? dist : join(dist, route.path.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), pageHtml(route));
}

writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${siteUrl}${route.path === '/' ? '/' : route.path}</loc><changefreq>weekly</changefreq><priority>${route.path === '/' ? '1.0' : '0.8'}</priority></url>`).join('\n')}\n</urlset>\n`);
writeFileSync(join(dist, 'og-volponi.svg'), `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><defs><radialGradient id="g" cx="50%" cy="45%"><stop offset="0" stop-color="#7A0F1B" stop-opacity="0.75"/><stop offset="0.42" stop-color="#0B0B0D"/><stop offset="1" stop-color="#050505"/></radialGradient></defs><rect width="1200" height="630" fill="url(#g)"/><path d="M120 472h960" stroke="#B08D57" stroke-opacity=".45"/><text x="600" y="282" text-anchor="middle" fill="#F3EEE6" font-size="118" font-family="Georgia,serif" letter-spacing="24">VOLPONI</text><text x="600" y="350" text-anchor="middle" fill="#B08D57" font-size="30" font-family="Arial,sans-serif" letter-spacing="8">INTELIGÊNCIA COMO OBJETO RARO</text></svg>`);
if (existsSync('public/favicon.ico')) copyFileSync('public/favicon.ico', join(dist, 'favicon.ico'));
console.log('Static VOLPONI maison generated with indexable routes at dist/');
    <title>VOLPONI — território simbólico vivo</title>
    <meta name="description" content="VOLPONI emerge como obra digital sensorial: sombra, água, memória, símbolo e criação." />
    <meta name="theme-color" content="#07090f" />
    <meta property="og:title" content="VOLPONI" />
    <meta property="og:description" content="Uma linguagem entre sombra, água, memória e criação." />
    <meta property="og:type" content="website" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
    <style>
      :root {
        --ink: #07090f;
        --deep: #08111d;
        --ocean: #0d2435;
        --graphite: #151720;
        --pearl: #f6f1e8;
        --silver: #b7c0ce;
        --lavender: #a9a0bd;
        --wine: #211018;
        --gold: #b8a06a;
        --diamond: #d9e8ff;
        --line: rgba(246,241,232,.14);
      }
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; background: var(--ink); }
      body {
        margin: 0;
        min-height: 100vh;
        color: var(--pearl);
        background:
          radial-gradient(circle at 20% 10%, rgba(72, 91, 128, .25), transparent 34rem),
          radial-gradient(circle at 90% 40%, rgba(33, 16, 24, .42), transparent 34rem),
          linear-gradient(180deg, #07090f 0%, #09111d 42%, #06070b 100%);
        font-family: Inter, system-ui, sans-serif;
        overflow-x: hidden;
        cursor: none;
      }
      body::selection { background: rgba(217,232,255,.24); }
      a, button { color: inherit; }
      .grain, .mist, .cursor, .cinema-vignette, .liquid-light, .constellation, #volponi-canvas { pointer-events: none; position: fixed; inset: 0; }
      .grain { z-index: 1; opacity: .25; mix-blend-mode: screen; background-image: radial-gradient(circle, rgba(255,255,255,.14) 0 1px, transparent 1px); background-size: 34px 34px; filter: contrast(170%); }
      .mist { z-index: 2; opacity: .72; background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(217,232,255,.10), transparent 18rem); transition: background .2s linear; }
      .cinema-vignette { z-index: 4; background: radial-gradient(ellipse at center, transparent 38%, rgba(0,0,0,.32) 72%, rgba(0,0,0,.78) 100%), linear-gradient(90deg, rgba(0,0,0,.34), transparent 12%, transparent 88%, rgba(0,0,0,.34)); }
      .liquid-light { z-index: 1; opacity: .62; mix-blend-mode: screen; filter: blur(18px); background: conic-gradient(from var(--spin,0deg) at 50% 48%, transparent, rgba(217,232,255,.08), rgba(70,101,128,.18), transparent, rgba(184,160,106,.07), transparent); animation: liquidSpin 28s linear infinite; }
      .constellation { z-index: 2; opacity: .38; background-image: radial-gradient(circle at 12% 24%, rgba(217,232,255,.9) 0 1px, transparent 2px), radial-gradient(circle at 72% 18%, rgba(184,160,106,.8) 0 1px, transparent 2px), radial-gradient(circle at 82% 62%, rgba(217,232,255,.75) 0 1px, transparent 2px), radial-gradient(circle at 24% 78%, rgba(169,160,189,.85) 0 1px, transparent 2px); }
      #volponi-canvas { z-index: 0; opacity: .9; }
      .cursor { z-index: 100; width: 18px; height: 18px; border: 1px solid rgba(246,241,232,.75); border-radius: 999px; inset: auto; transform: translate(-50%, -50%); transition: width .25s ease, height .25s ease, border-color .25s ease, background .25s ease; }
      .cursor.is-hover { width: 54px; height: 54px; border-color: rgba(217,232,255,.9); background: rgba(217,232,255,.06); }
      .loader { position: fixed; inset: 0; z-index: 120; display: grid; place-items: center; background: #05070c; transition: opacity .8s ease, visibility .8s ease; }
      .loader.is-gone { opacity: 0; visibility: hidden; }
      .loader__mark { position: relative; font-family: 'Cormorant Garamond', serif; font-size: clamp(3rem, 9vw, 8rem); letter-spacing: .13em; animation: emerge 1.8s cubic-bezier(.2,.8,.2,1) both; }
      .loader__mark::after { content: ''; position: absolute; left: 50%; bottom: -.8rem; width: min(52vw, 28rem); height: 1px; transform: translateX(-50%); background: linear-gradient(90deg, transparent, rgba(217,232,255,.75), transparent); box-shadow: 0 0 28px rgba(217,232,255,.48); }
      .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 40; display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 1.1rem clamp(1.25rem, 4vw, 4rem); background: rgba(7,9,15,.45); border-bottom: 1px solid var(--line); backdrop-filter: blur(22px); }
      .nav__brand { font-family: 'Cormorant Garamond', serif; letter-spacing: .24em; font-size: 1.1rem; }
      .nav__links { display: flex; gap: clamp(.8rem, 2vw, 1.8rem); align-items: center; color: rgba(246,241,232,.7); font-size: .72rem; text-transform: uppercase; letter-spacing: .18em; }
      .nav__links a { text-decoration: none; }
      .sound { border: 1px solid var(--line); background: rgba(255,255,255,.03); border-radius: 999px; padding: .7rem 1rem; font: inherit; text-transform: uppercase; letter-spacing: .16em; font-size: .68rem; cursor: none; }
      .chapter { position: relative; z-index: 5; padding: clamp(6rem, 13vw, 12rem) clamp(1.25rem, 5vw, 5rem); }
      .aix-opening { min-height: 100vh; display: grid; align-items: center; overflow: hidden; }
      .aix-opening::before { content: ''; position: absolute; inset: 12vh 8vw auto; height: 1px; background: linear-gradient(90deg, transparent, rgba(217,232,255,.45), rgba(184,160,106,.28), transparent); box-shadow: 0 0 42px rgba(217,232,255,.25); }
      .aix-shell { width: min(74rem, 100%); margin: 0 auto; display: grid; gap: clamp(2rem, 5vw, 4rem); }
      .aix-title { font-size: clamp(4rem, 16vw, 13rem); line-height: .78; letter-spacing: .08em; text-shadow: 0 0 70px rgba(217,232,255,.18); }
      .aix-subtitle { color: rgba(217,232,255,.72); letter-spacing: .22em; text-transform: uppercase; font-size: clamp(.72rem, 1.4vw, 1rem); }
      .aix-copy { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr); gap: clamp(1.25rem, 4vw, 3rem); color: rgba(246,241,232,.76); }
      .aix-panel { border: 1px solid rgba(246,241,232,.14); border-radius: 2rem; padding: clamp(1.25rem, 3vw, 2.3rem); background: linear-gradient(145deg, rgba(255,255,255,.07), rgba(255,255,255,.018)); backdrop-filter: blur(22px); box-shadow: 0 30px 90px rgba(0,0,0,.28); }
      .aix-panel h2 { font-size: clamp(1.8rem, 4vw, 3.2rem); margin-bottom: 1rem; }
      .aix-values { display: grid; gap: .8rem; margin-top: 1rem; }
      .aix-values div { border-left: 1px solid rgba(217,232,255,.32); padding-left: 1rem; }
      .aix-mantra { margin-top: 1.5rem; color: #e6dece; font-family: 'Cormorant Garamond', serif; font-size: clamp(1.4rem, 3vw, 2.4rem); line-height: 1.05; }
      .hero { min-height: 100vh; display: grid; place-items: center; text-align: center; overflow: hidden; }
      .hero::before { content: ''; position: absolute; z-index: 1; left: 50%; bottom: 9vh; width: 72vw; height: 36vw; max-height: 28rem; transform: translateX(-50%) perspective(900px) rotateX(64deg); border-radius: 50%; border: 1px solid rgba(217,232,255,.12); background: radial-gradient(ellipse at center, rgba(217,232,255,.09), transparent 62%); filter: blur(.2px); }
      .hero::after { content: ''; position: absolute; z-index: 1; left: 8vw; right: 8vw; bottom: 16vh; height: 1px; background: linear-gradient(90deg, transparent, rgba(217,232,255,.55), rgba(184,160,106,.28), rgba(217,232,255,.55), transparent); box-shadow: 0 0 46px rgba(217,232,255,.38); }
      .kicker { color: rgba(246,241,232,.58); text-transform: uppercase; letter-spacing: .28em; font-size: .72rem; }
      h1, h2, h3 { font-family: 'Cormorant Garamond', serif; font-weight: 500; margin: 0; }
      h1 { font-size: clamp(5rem, 18vw, 16rem); line-height: .78; letter-spacing: .09em; text-shadow: 0 0 60px rgba(217,232,255,.22); }
      h2 { font-size: clamp(3.2rem, 8vw, 8rem); line-height: .9; letter-spacing: -.035em; }
      h3 { font-size: clamp(2rem, 4vw, 4.6rem); line-height: .96; }
      p { line-height: 1.75; }
      .hero__text { max-width: 76rem; margin: auto; position: relative; z-index: 3; }
      .hero__text::before, .hero__text::after { content: '✦'; position: absolute; color: rgba(217,232,255,.42); font-size: clamp(1.8rem, 4vw, 4rem); filter: drop-shadow(0 0 22px rgba(217,232,255,.35)); animation: floatGlyph 7s ease-in-out infinite; }
      .hero__text::before { left: -7vw; top: 14%; }
      .hero__text::after { right: -5vw; bottom: 20%; animation-delay: -3s; color: rgba(184,160,106,.38); }
      .hero__sub { max-width: 48rem; margin: 2rem auto 2.5rem; color: rgba(246,241,232,.76); font-size: clamp(1.15rem, 2vw, 1.55rem); }
      .actions { display: flex; flex-wrap: wrap; justify-content: center; gap: .9rem; }
      .btn { display: inline-flex; align-items: center; justify-content: center; min-height: 3.4rem; padding: 0 1.4rem; border: 1px solid rgba(246,241,232,.23); border-radius: 999px; text-decoration: none; background: rgba(255,255,255,.035); backdrop-filter: blur(18px); cursor: none; transition: border-color .35s ease, transform .35s ease, background .35s ease; }
      .btn--primary { border-color: rgba(217,232,255,.45); background: linear-gradient(135deg, rgba(217,232,255,.18), rgba(184,160,106,.08)); }
      .btn:hover { border-color: rgba(246,241,232,.72); transform: translateY(-2px); }
      .manifesto { max-width: 74rem; margin: auto; display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1.25fr); gap: clamp(2rem, 8vw, 8rem); }
      .manifesto__copy { color: rgba(246,241,232,.82); font-size: clamp(1.22rem, 2vw, 1.78rem); }
      .manifesto__copy span { display: block; margin-bottom: 1.4rem; }
      .fragments { max-width: 82rem; margin: auto; }
      .section-head { display: flex; align-items: end; justify-content: space-between; gap: 2rem; margin-bottom: 3rem; }
      .section-head p { max-width: 26rem; color: rgba(246,241,232,.62); }
      .fragment-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 1rem; }
      .card { position: relative; min-height: 24rem; grid-column: span 5; border: 1px solid var(--line); border-radius: 2rem; overflow: hidden; padding: 1.35rem; background: linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.015)); transform-style: preserve-3d; transition: transform .5s ease, border-color .5s ease, box-shadow .5s ease; }
      .card:nth-child(3n+1) { grid-column: span 7; min-height: 29rem; }
      .card::before { content: ''; position: absolute; inset: 0; background: var(--art); opacity: .95; transition: transform .7s ease, filter .7s ease; }
      .card::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 20%, rgba(7,9,15,.88)); }
      .card .specular { position: absolute; z-index: 1; inset: -30%; background: linear-gradient(115deg, transparent 38%, rgba(217,232,255,.18), transparent 56%); transform: translateX(-40%) rotate(8deg); transition: transform .9s ease; }
      .card:hover { transform: translateY(-10px) rotateX(2deg); border-color: rgba(217,232,255,.4); box-shadow: 0 30px 80px rgba(0,0,0,.45); }
      .card:hover::before { transform: scale(1.08); filter: saturate(1.15); }
      .card:hover .specular { transform: translateX(40%) rotate(8deg); }
      .card__content { position: absolute; z-index: 2; left: 1.35rem; right: 1.35rem; bottom: 1.35rem; }
      .card small { color: rgba(217,232,255,.68); text-transform: uppercase; letter-spacing: .18em; }
      .card p { color: rgba(246,241,232,.74); max-width: 28rem; }
      .language { max-width: 78rem; margin: auto; display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 7vw, 7rem); align-items: center; }
      .alchemy { min-height: 34rem; border: 1px solid var(--line); border-radius: 50%; position: relative; background: radial-gradient(circle, rgba(217,232,255,.09), transparent 55%); }
      .node { position: absolute; width: 8rem; height: 8rem; border: 1px solid rgba(217,232,255,.22); border-radius: 999px; display: grid; place-items: center; color: rgba(246,241,232,.72); background: rgba(7,9,15,.5); backdrop-filter: blur(18px); font-size: .8rem; text-transform: uppercase; letter-spacing: .16em; }
      .n1 { top: 7%; left: 38%; } .n2 { top: 38%; right: 4%; } .n3 { bottom: 8%; left: 39%; } .n4 { top: 39%; left: 3%; }
      .gallery-track { display: flex; gap: 1rem; overflow-x: auto; padding: 2rem clamp(1.25rem, 5vw, 5rem); scroll-snap-type: x mandatory; }
      .gallery-item { flex: 0 0 min(78vw, 34rem); min-height: 36rem; scroll-snap-align: center; border-radius: 2rem; border: 1px solid var(--line); padding: 1.3rem; display: flex; flex-direction: column; justify-content: end; background: var(--art); overflow: hidden; }
      .symbols { max-width: 78rem; margin: auto; }
      .symbol-grid { display: grid; grid-template-columns: repeat(7, 1fr); border: 1px solid var(--line); border-radius: 2rem; overflow: hidden; }
      .symbol { min-height: 16rem; padding: 1.1rem; border-right: 1px solid var(--line); background: rgba(255,255,255,.025); transition: background .35s ease; }
      .symbol:last-child { border-right: 0; }
      .symbol:hover { background: rgba(217,232,255,.08); }
      .symbol strong { font-family: 'Cormorant Garamond', serif; display: block; font-size: 1.8rem; margin-bottom: 1rem; color: #e6dece; }
      .symbol p { color: rgba(246,241,232,.63); font-size: .92rem; }
      .contact { text-align: center; min-height: 80vh; display: grid; place-items: center; }
      .contact p { max-width: 46rem; margin: 1.5rem auto 2.5rem; color: rgba(246,241,232,.72); font-size: 1.2rem; }
      .reveal { opacity: 0; transform: translateY(34px); transition: opacity .9s ease, transform .9s ease; }
      .reveal.is-visible { opacity: 1; transform: translateY(0); }
      @keyframes emerge { from { opacity: 0; transform: translateY(28px); filter: blur(18px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
      @keyframes liquidSpin { to { --spin: 360deg; transform: scale(1.08) rotate(1turn); } }
      @keyframes floatGlyph { 0%, 100% { transform: translate3d(0,0,0) rotate(0deg); opacity: .34; } 50% { transform: translate3d(0,-18px,0) rotate(10deg); opacity: .72; } }
      @media (max-width: 840px) {
        body { cursor: auto; }
        .cursor { display: none; }
        .nav__links a { display: none; }
        .manifesto, .language, .aix-copy { grid-template-columns: 1fr; }
        .fragment-grid { display: block; }
        .card, .card:nth-child(3n+1) { margin-bottom: 1rem; min-height: 24rem; }
        .symbol-grid { grid-template-columns: 1fr; }
        .symbol { min-height: auto; border-right: 0; border-bottom: 1px solid var(--line); }
        .alchemy { min-height: 26rem; }
        .node { width: 6.4rem; height: 6.4rem; }
      }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
      }
    </style>
  </head>
  <body>
    <canvas id="volponi-canvas" aria-hidden="true"></canvas>
    <div class="liquid-light" aria-hidden="true"></div>
    <div class="constellation" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>
    <div class="mist" aria-hidden="true"></div>
    <div class="cinema-vignette" aria-hidden="true"></div>
    <div class="cursor" aria-hidden="true"></div>
    <div class="loader"><div class="loader__mark">AIX8C</div></div>

    <header class="nav">
      <div class="nav__brand">AIX8C</div>
      <div class="nav__links">
        <a href="#inicio" data-hover>Entrada</a>
        <a href="#volponi" data-hover>VOLPONI</a>
        <a href="#manifesto" data-hover>Manifesto</a>
        <a href="#fragmentos" data-hover>Fragmentos</a>
        <a href="#linguagem" data-hover>Linguagem</a>
        <a href="#universo" data-hover>Universo</a>
        <button class="sound" type="button" data-hover>Ativar atmosfera</button>
      </div>
    </header>

    <main>
      <section class="chapter aix-opening" id="inicio">
        <div class="aix-shell reveal">
          <div>
            <p class="kicker">Welcome aboard marujos !</p>
            <h1 class="aix-title">AIX8C</h1>
            <p class="aix-subtitle">ARTIFICIAL INTTELIGENCE EXPERIENCE CREATIVE</p>
          </div>
          <div class="aix-copy">
            <article class="aix-panel">
              <h2>A bordo da nave</h2>
              <p>(O nome se diz ei ai eksi eiti ci)</p>
              <p>Aqui, na nossa nave de exploração digital, estamos prontos para navegar pelos mares da Inteligência Artificial.</p>
              <p>AIX8C, combina inteligência artificial e experiência para criar soluções criativas e contínuas.</p>
              <div class="aix-values">
                <div><strong>Missão:</strong><br />Transformar a comunicação entre humanos e máquinas, com soluções inovadoras em IA.</div>
                <div><strong>Visão:</strong><br />Liderar na criação de experiências imersivas e únicas em IA.</div>
                <div><strong>Valores:</strong><br />Inovação: Busca constante.<br />Criatividade: Valorização da originalidade.<br />Inspiração: Capacitar e motivar.</div>
              </div>
            </article>
            <article class="aix-panel">
              <h2>Sobre Mim</h2>
              <p>Sou Lorenza Volponi, entusiasta da IA, polímata, e pioneira na engenharia de prompt no Brasil, certificada pelo Institute of Management, Technology &amp; Finance (MTF) de Portugal.</p>
              <p>Democratizar o conhecimento em IA, e capacitar as pessoas para criarem soluções inovadoras e impactantes é o que busco.</p>
              <p>Além disso, sou apaixonada por música, filosofia e espiritualidade, o que sempre me inspira a buscar novas maneiras de conectar tecnologia e emoção.</p>
              <p>Tenho certeza de que tenho muito a aprender com você!</p>
            </article>
            <article class="aix-panel" style="grid-column: 1 / -1;">
              <p>Aqui na AIX8C, é seu universo para mergulhar completamente em IA, e estou pronta para te guiar nessa jornada fascinante.</p>
              <p>Com um time dedicado e apaixonado, ofereço soluções de ponta em automação de chatbots, desenvolvimento de IA, tecnologias inovadoras, e muito mais.</p>
              <p>Seja você um iniciante curioso ou um profissional experiente, busque superar os desafios e alcançar novas fronteiras. Vamos embarcar nessa aventura rumo ao futuro da tecnologia, explorando as infinitas possibilidades da IA e fazer a diferença no mundo, um código por vez, focando sempre em ensinar, inspirar e aprender!</p>
              <p class="aix-mantra">SUA NAVEGAÇÃO COMEÇA AQUI<br />E LEMBRE-SE SEMPRE: NUNCA ESTAMOS ATRASADOS PARA O QUE É NOSSO!</p>
              <p>CONECTE-SE COMIGO E DESCUBRA COMO A IA PODE TRANSFORMAR O SEU MUNDO !</p>
              <div class="actions"><a class="btn btn--primary" href="#volponi" data-hover>Entrar no universo VOLPONI</a><a class="btn" href="#contato" data-hover>Conecte-se comigo</a></div>
            </article>
          </div>
        </div>
      </section>

      <section class="chapter hero" id="volponi">
        <div class="hero__text reveal">
          <p class="kicker">VOLPONI não se apresenta. VOLPONI emerge.</p>
          <h1>VOLPONI</h1>
          <p class="hero__sub">Uma linguagem entre sombra, água, memória e criação.</p>
          <div class="actions">
            <a class="btn btn--primary" href="#manifesto" data-hover>Entrar no universo</a>
            <a class="btn" href="#fragmentos" data-hover>Ver fragmentos</a>
          </div>
        </div>
      </section>

      <section class="chapter" id="manifesto">
        <div class="manifesto reveal">
          <div><p class="kicker">Capítulo I</p><h2>Manifesto</h2></div>
          <p class="manifesto__copy">
            <span>VOLPONI nasce onde a lógica encontra o abismo sensível.</span>
            <span>É uma linguagem construída entre o visível e o invisível, entre matéria e memória, entre ruptura e beleza.</span>
            <span>Cada imagem, palavra e atmosfera carrega uma tentativa de traduzir aquilo que não cabe no discurso comum: a alma em estado bruto, a inteligência como oceano, a criação como sobrevivência e revelação.</span>
            <span>Este não é um portfólio. É um campo simbólico.</span>
          </p>
        </div>
      </section>

      <section class="chapter fragments" id="fragmentos">
        <div class="section-head reveal"><div><p class="kicker">Capítulo II</p><h2>Fragmentos de Eternidade</h2></div><p>Uma galeria viva de imagens mentais, ruínas elegantes, flores raras e poeira de diamante.</p></div>
        <div class="fragment-grid">
          ${[
            ['Oceano Interno','Água','A maré aprende o nome de quem atravessa sem mapa.','radial-gradient(circle at 28% 20%, rgba(217,232,255,.30), transparent 16rem), linear-gradient(145deg,#07111f,#0e3044 56%,#05070c)'],
            ['A Alma e as Máscaras','Máscara','Toda defesa também é uma forma de oração.','radial-gradient(circle at 62% 28%, rgba(169,160,189,.30), transparent 15rem), linear-gradient(145deg,#140b12,#24202d 58%,#07090f)'],
            ['Diamante em Ruptura','Diamante','A pressão não quebra: lapida.','conic-gradient(from 20deg at 50% 44%, #08111d, #d9e8ff22, #b8a06a33, #07090f, #d9e8ff20, #08111d)'],
            ['A Casa das Marés','Memória','Entre ruínas e sal, a memória floresce.','radial-gradient(circle at 70% 18%, rgba(184,160,106,.20), transparent 15rem), linear-gradient(150deg,#0a0d14,#17212d 52%,#0d111a)'],
            ['Memória em Flor','Flor','A delicadeza pode ser insurgente.','radial-gradient(circle at 34% 28%, rgba(115,76,92,.38), transparent 15rem), linear-gradient(145deg,#0a0b10,#211018 60%,#06070b)'],
            ['Horizonte de Vidro','Horizonte','O futuro reflete aquilo que ousamos olhar.','linear-gradient(180deg,#08111d 0 47%,rgba(217,232,255,.32) 48%,#07090f 51% 100%)']
          ].map(([title, cat, phrase, art]) => `<article class="card reveal" style="--art:${art}"><div class="specular" aria-hidden="true"></div><div class="card__content"><small>${cat}</small><h3>${title}</h3><p>${phrase}</p></div></article>`).join('')}
        </div>
      </section>

      <section class="chapter" id="linguagem">
        <div class="language reveal">
          <div><p class="kicker">Capítulo III</p><h2>A linguagem</h2><p>VOLPONI opera por camadas: imagem, símbolo, frase, silêncio, contraste e presença.</p><p>A criação nasce da tensão entre beleza e ferida, delicadeza e força, sonho e precisão.</p><p>A obra não busca decorar o mundo. Busca revelar aquilo que estava soterrado.</p></div>
          <div class="alchemy" aria-hidden="true"><div class="node n1">Imagem</div><div class="node n2">Símbolo</div><div class="node n3">Silêncio</div><div class="node n4">Presença</div></div>
        </div>
      </section>

      <section class="chapter" id="galeria">
        <div class="section-head reveal" style="padding:0 clamp(1.25rem,5vw,5rem)"><div><p class="kicker">Capítulo IV</p><h2>Galeria sensorial</h2></div><p>Peças, conceitos e atmosferas como uma caminhada por um museu digital noturno.</p></div>
        <div class="gallery-track">
          ${[
            ['Mar de Pressão','2026 / Água','Onde a emoção aprende arquitetura.','linear-gradient(145deg,#07111f,#12374d,#05070c)'],
            ['Flor Submersa','2026 / Flor','Beleza insurgente em silêncio mineral.','radial-gradient(circle at 40% 35%,rgba(150,89,118,.55),transparent 13rem),#080a10'],
            ['Máscara Lunar','2026 / Máscara','Identidade como defesa e espelho.','radial-gradient(circle at 58% 30%,rgba(217,232,255,.28),transparent 14rem),#10111a'],
            ['Abismo Claro','2026 / Luz','A revelação chega sem pedir licença.','linear-gradient(160deg,#05070c,#17212d 55%,#d9e8ff22)']
          ].map(([name, meta, phrase, art]) => `<article class="gallery-item reveal" style="--art:${art}"><p class="kicker">${meta}</p><h3>${name}</h3><p>${phrase}</p></article>`).join('')}
        </div>
      </section>

      <section class="chapter symbols" id="universo">
        <div class="section-head reveal"><div><p class="kicker">Capítulo V</p><h2>Universo simbólico</h2></div><p>Um mapa de mitologia pessoal ativado por presença, toque e atenção.</p></div>
        <div class="symbol-grid reveal">
          ${[
            ['Água','Emoção, travessia, profundidade, renascimento'],
            ['Diamante','Pressão, lapidação, valor, permanência'],
            ['Flores','Delicadeza, beleza insurgente, vida'],
            ['Máscaras','Identidade, defesa, performance social'],
            ['Horizonte','Futuro, desejo, deslocamento'],
            ['Neblina','Mistério, memória, sonho'],
            ['Luz','Revelação, consciência, ruptura']
          ].map(([s,d]) => `<div class="symbol"><strong>${s}</strong><p>${d}</p></div>`).join('')}
        </div>
      </section>

      <section class="chapter contact" id="contato">
        <div class="reveal"><p class="kicker">Capítulo final</p><h2>Entre no campo</h2><p>Para colaborações artísticas, projetos sensoriais, exposições digitais, narrativas visuais ou experiências autorais, atravesse a primeira porta.</p><a class="btn btn--primary" href="mailto:contato.lorenzavolponi@gmail.com" data-hover>Abrir conversa</a></div>
      </section>
    </main>

    <script>
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const cursor = document.querySelector('.cursor');
      const mist = document.querySelector('.mist');
      const hoverables = document.querySelectorAll('a, button, [data-hover]');
      addEventListener('mousemove', (event) => {
        document.documentElement.style.setProperty('--mx', event.clientX + 'px');
        document.documentElement.style.setProperty('--my', event.clientY + 'px');
        if (cursor) { cursor.style.left = event.clientX + 'px'; cursor.style.top = event.clientY + 'px'; }
        if (mist) { mist.style.setProperty('--mx', event.clientX + 'px'); mist.style.setProperty('--my', event.clientY + 'px'); }
      }, { passive: true });
      hoverables.forEach((el) => { el.addEventListener('mouseenter', () => cursor?.classList.add('is-hover')); el.addEventListener('mouseleave', () => cursor?.classList.remove('is-hover')); });
      setTimeout(() => document.querySelector('.loader')?.classList.add('is-gone'), 900);

      const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      }), { threshold: .16 });
      document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));

      const canvas = document.getElementById('volponi-canvas');
      const ctx = canvas.getContext('2d');
      let w = 0, h = 0, particles = [];
      function resize() {
        w = canvas.width = innerWidth * devicePixelRatio;
        h = canvas.height = innerHeight * devicePixelRatio;
        canvas.style.width = innerWidth + 'px';
        canvas.style.height = innerHeight + 'px';
        const count = innerWidth < 760 ? 55 : 130;
        particles = Array.from({ length: count }, () => ({ x: Math.random()*w, y: Math.random()*h, r: (Math.random()*1.8+0.4)*devicePixelRatio, a: Math.random()*.55+.15, s: Math.random()*.35+.08 }));
      }
      function draw(t=0) {
        ctx.clearRect(0,0,w,h);
        const grad = ctx.createLinearGradient(0,0,w,h); grad.addColorStop(0,'rgba(8,17,29,.50)'); grad.addColorStop(.48,'rgba(13,36,53,.24)'); grad.addColorStop(1,'rgba(33,16,24,.22)'); ctx.fillStyle = grad; ctx.fillRect(0,0,w,h);
        for (let wave = 0; wave < 4; wave++) {
          ctx.beginPath();
          const base = h * (.54 + wave * .075);
          for (let x = 0; x <= w; x += 18 * devicePixelRatio) {
            const y = base + Math.sin(x / (170 * devicePixelRatio) + t / (2100 + wave * 420)) * (10 + wave * 7) * devicePixelRatio;
            if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = 'rgba(217,232,255,' + (.035 + wave * .018) + ')';
          ctx.lineWidth = (1 + wave * .35) * devicePixelRatio;
          ctx.stroke();
        }
        particles.forEach((p, i) => { p.y -= p.s * devicePixelRatio; p.x += Math.sin(t/2600+i)*.18*devicePixelRatio; if (p.y < -8) p.y = h + 8; ctx.beginPath(); ctx.fillStyle = 'rgba(217,232,255,'+p.a+')'; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); });
        if (!reduce) requestAnimationFrame(draw);
      }
      resize(); addEventListener('resize', resize, { passive: true }); draw();

      let audioCtx, noise, gain, filter;
      document.querySelector('.sound')?.addEventListener('click', async (event) => {
        const button = event.currentTarget;
        if (!audioCtx) {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
          const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 2, audioCtx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i=0; i<data.length; i++) data[i] = (Math.random()*2-1) * .08;
          noise = audioCtx.createBufferSource(); noise.buffer = buffer; noise.loop = true;
          filter = audioCtx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 620;
          gain = audioCtx.createGain(); gain.gain.value = 0;
          noise.connect(filter).connect(gain).connect(audioCtx.destination); noise.start();
        }
        await audioCtx.resume();
        const on = gain.gain.value < .01;
        gain.gain.linearRampToValueAtTime(on ? .07 : 0, audioCtx.currentTime + .5);
        button.textContent = on ? 'Desativar atmosfera' : 'Ativar atmosfera';
      });
    </script>
  </body>
</html>`;

writeFileSync(join(dist, 'index.html'), html);
if (existsSync('public/favicon.ico')) copyFileSync('public/favicon.ico', join(dist, 'favicon.ico'));
if (existsSync('public/robots.txt')) copyFileSync('public/robots.txt', join(dist, 'robots.txt'));
if (existsSync('public/sitemap.xml')) copyFileSync('public/sitemap.xml', join(dist, 'sitemap.xml'));
console.log('Static VOLPONI build generated at dist/index.html');
