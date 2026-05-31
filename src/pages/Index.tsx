import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const githubUrl = 'https://github.com/LorenzaVolponi';

const navItems = [
  ['Campo', '#home', 'Entrada, atmosfera e tese central.'],
  ['Maison', '#maison', 'A tese estética, técnica e simbólica da marca.'],
  ['Laboratório', '#laboratorio', 'Prova técnica, GitHub e protótipos.'],
  ['Territórios', '#territorios', 'Áreas onde estratégia, IA e símbolo convergem.'],
  ['Artefatos', '#artefatos', 'Entregas concretas que continuam vivas.'],
  ['Oráculo', '#oraculo', 'Perguntas para transformar ambiguidade em direção.'],
  ['Acesso', '#ritual-acesso', 'Escolha o ponto de entrada para conversar.'],
];



const signatureCollection = [
  ['Obsidiana', 'Silêncio visual', 'A base escura que permite que cada sinal pareça escolhido, não decorativo.'],
  ['Rubi', 'Desejo e tensão', 'A energia emocional que atravessa o campo sem virar ruído ou neon genérico.'],
  ['Ouro velho', 'Valor raro', 'O brilho aparece como lapidação: pouco, preciso, inesquecível.'],
  ['Vidro líquido', 'Interface viva', 'Camadas translúcidas, reflexos e movimento para tirar o site do plano comum.'],
  ['Arquivo secreto', 'Prova autoral', 'Código, ideias e protótipos organizados como evidência, não como currículo.'],
];

const maisonPrinciples = [
  ['Luxo silencioso', 'Preto, rubi, ouro velho e espaço negativo para criar desejo sem gritar.'],
  ['Tecnologia com alma', 'IA, código e automação tratados como linguagem sensível, não como vitrine fria.'],
  ['Prova sem currículo', 'GitHub, protótipos e sistemas aparecem como arquivo vivo de execução autoral.'],
  ['Convite seletivo', 'A conversão acontece como travessia: leitura de campo, direção e conversa privada.'],
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
];

const archive = ['Experimentos com IA', 'Sistemas Simbólicos', 'Pesquisa Visual', 'Notas Estratégicas', 'Fragmentos de Código', 'Interfaces do Futuro', 'Arquiteturas Narrativas'];

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

const offerings = [
  ['Protótipos de IA', 'Agentes, automações e fluxos inteligentes para transformar intenção em sistema funcional.'],
  ['Identidade Digital Premium', 'Presença visual e narrativa para marcas, pessoas e ideias que precisam criar gravidade.'],
  ['Arquitetura Narrativa', 'Estruturação de mensagens, repertórios e posicionamentos para decisões complexas.'],
  ['Experiências Web Cinematográficas', 'Interfaces imersivas com estética editorial, movimento, performance e precisão técnica.'],
];

const fieldOrder = [
  ['01', 'Entrada no Campo', 'A primeira impressão não explica: cria gravidade e estabelece presença.'],
  ['02', 'Manifesto', 'A tese autoral separa ruído de arquitetura e transforma identidade em linguagem.'],
  ['03', 'Prova Técnica', 'GitHub, protótipos e sistemas mostram execução sem virar currículo comum.'],
  ['04', 'Territórios', 'As frentes de atuação organizam estratégia, IA, narrativa, capital e mundos visuais.'],
  ['05', 'Oráculo', 'Perguntas provocativas revelam pensamento estratégico, não respostas genéricas.'],
  ['06', 'Acesso Privado', 'A conversão acontece como convite seletivo, não como venda agressiva.'],
];

const proofStack = [
  ['Código Público', 'Repositórios como arquivo vivo de experimentos, protótipos e sistemas inteligentes.'],
  ['IA Aplicada', 'Agentes, automações, raciocínio diagnóstico, RSS em tempo real e orquestração de ideias.'],
  ['Estética Técnica', 'Interfaces cinematográficas com intenção editorial, performance e acessibilidade.'],
  ['Estratégia Simbólica', 'Narrativa, capital, presença digital e arquitetura de decisão trabalhando juntas.'],
];

const intelligenceMap = [
  ['IA', 'Agentes, automações e sistemas que ampliam decisão.'],
  ['Código', 'Execução visível, protótipos e arquitetura técnica.'],
  ['Símbolo', 'Linguagem, imagem e presença que organizam percepção.'],
  ['Narrativa', 'Estruturas de sentido para ideias complexas.'],
  ['Capital', 'Leitura estratégica de valor, poder e futuro.'],
  ['Presença', 'Campo digital que cria gravidade sem explicar demais.'],
];

const accessPaths = [
  ['Tenho uma ideia bruta', 'Transformar intuição em arquitetura: tese, mapa de execução, protótipo e primeira presença digital.'],
  ['Preciso de IA aplicada', 'Desenhar agentes, automações e fluxos que simplificam complexidade sem perder estratégia.'],
  ['Quero uma presença rara', 'Criar identidade digital premium com linguagem visual, narrativa e experiência cinematográfica.'],
  ['Tenho caos operacional', 'Organizar processos, decisões e sistemas em uma camada inteligente de execução.'],
  ['Quero provar autoridade', 'Converter repertório, código, laboratório e pensamento em evidência pública de alto impacto.'],
];


const resonanceLayers = [
  ['Origem', 'AIX8C preserva a nave original: curiosidade, IA, aprendizagem e convite para atravessar mares digitais.'],
  ['Refino', 'VOLPONI lapida essa origem em linguagem premium: menos ruído, mais presença, método e gravidade.'],
  ['Oferta', 'Estratégia, IA, automação, narrativa e experiência visual passam a operar como um único sistema.'],
  ['Prova', 'O GitHub funciona como laboratório vivo: código público, protótipos, testes e execução rastreável.'],
  ['Acesso', 'A conversa começa como leitura de campo: entender tensão, direção, possibilidade e artefato necessário.'],
];



const readinessChecks = [
  ['SEO indexável', 'Rotas estáticas, sitemap, robots, canonical e JSON-LD preparados para leitura orgânica.'],
  ['Deploy auditável', 'Build gera HTML, OG, preview visual e manifesto técnico verificável antes da Vercel.'],
  ['Acessibilidade base', 'HTML semântico, foco visível, labels no contato e respeito a prefers-reduced-motion.'],
  ['Performance consciente', 'Sem dependência de WebGL pesado no caminho crítico; canvas leve e fallback mobile.'],
];

const conversionRitual = [
  ['01', 'Escuta', 'A tensão é nomeada antes de qualquer solução. O campo entende contexto, desejo e urgência.'],
  ['02', 'Tese', 'A ideia ganha uma frase central, uma arquitetura de sentido e um território visual próprio.'],
  ['03', 'Protótipo', 'A estratégia deixa o abstrato e vira interface, agente, automação, narrativa ou sistema testável.'],
  ['04', 'Gravidade', 'O artefato passa a sustentar reputação: prova, beleza, função e memória trabalhando juntas.'],
];

const valueArtifacts = [
  ['Mapa de Campo', 'Diagnóstico estratégico para separar ruído, desejo, risco e oportunidade real.'],
  ['Protótipo Operante', 'Primeira versão funcional para testar IA, fluxo, interface ou narrativa sem excesso.'],
  ['Sistema Oracular', 'Camada de perguntas, respostas e provocação para orientar decisão e presença.'],
  ['Identidade Cinematográfica', 'Linguagem visual, copy, atmosfera e interface com assinatura rara.'],
  ['Arquivo de Autoridade', 'Organização pública de repertório, código, tese e evidência técnica.'],
  ['Automação Inteligente', 'Workflows, agentes e processos desenhados para transformar ambiguidade em execução.'],
];

const transformationCases = [
  ['Ideia dispersa', 'Sistema vivo', 'A intuição é traduzida em tese, fluxos, protótipo e presença digital pronta para evoluir.'],
  ['Conhecimento invisível', 'Autoridade pública', 'Repertório, código e narrativa passam a operar como prova clara de execução.'],
  ['Interface comum', 'Experiência cinematográfica', 'A tela deixa de ser vitrine e se torna ambiente, atmosfera e memória.'],
  ['Processo confuso', 'Orquestração inteligente', 'Ambiguidade vira sequência, automação e decisão assistida por IA.'],
];

const Index = () => {
  const reduce = useReducedMotion();
  const [soundOn, setSoundOn] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [answer, setAnswer] = useState(oracle[0][1]);
  const [accessPath, setAccessPath] = useState(accessPaths[0]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (soundOn) audioRef.current.play().catch(() => undefined);
    else audioRef.current.pause();
  }, [soundOn]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-[#F3EEE6]">
      <audio ref={audioRef} loop src="https://cdn.pixabay.com/audio/2022/03/15/audio_c8d42cd5f7.mp3" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_12%,rgba(122,15,27,.24),transparent_34rem),radial-gradient(circle_at_84%_42%,rgba(12,44,53,.24),transparent_36rem)]" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/70 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 text-xs uppercase tracking-[0.18em] text-white/70">
          <a href="#home" className="font-serif text-lg tracking-[0.24em]">VOLPONI</a>
          <div className="hidden items-center gap-5 md:flex">
            {navItems.map(([label, href]) => <a key={href} href={href} className="transition hover:text-[#F3EEE6]">{label}</a>)}
            <a href="#contato" className="rounded-full border border-[#B08D57]/45 bg-[#B08D57]/10 px-4 py-2 text-[#F3EEE6]">Solicitar acesso</a>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setSoundOn((v) => !v)} className="hidden rounded-full border border-white/15 px-4 py-2 md:inline-flex">{soundOn ? 'Desativar atmosfera' : 'Ativar atmosfera'}</button>
            <button onClick={() => setMobileOpen((v) => !v)} aria-expanded={mobileOpen} aria-controls="mobile-menu" className="rounded-full border border-white/15 px-4 py-2 md:hidden">Menu</button>
          </div>
        </nav>
        {mobileOpen && <div id="mobile-menu" className="mx-4 mb-4 grid gap-2 rounded-3xl border border-[#B08D57]/25 bg-[#050505]/95 p-3 text-sm uppercase tracking-[0.16em] text-white/75 md:hidden">{navItems.map(([label, href]) => <a key={href} onClick={() => setMobileOpen(false)} className="rounded-2xl border border-white/10 bg-white/[.03] p-4" href={href}>{label}</a>)}<button onClick={() => setSoundOn((v) => !v)} className="rounded-2xl border border-white/10 bg-white/[.03] p-4 text-left">{soundOn ? 'Desativar atmosfera' : 'Ativar atmosfera'}</button><a onClick={() => setMobileOpen(false)} className="rounded-2xl border border-[#B08D57]/35 bg-[#B08D57]/10 p-4" href="#contato">Solicitar acesso privado</a></div>}
      </header>
      <a href="#ritual-acesso" className="fixed bottom-4 left-4 right-4 z-40 rounded-full border border-[#B08D57]/45 bg-[#050505]/80 px-5 py-3 text-center text-xs uppercase tracking-[0.18em] text-[#F3EEE6] backdrop-blur-2xl md:left-auto md:right-6 md:w-auto">Começar travessia</a>

      <main className="relative z-10">
        <section id="home" className="grid min-h-screen place-items-center px-6 pt-24 text-center">
          <motion.div initial={reduce ? false : { opacity: 0, y: 28, filter: 'blur(16px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1.2 }} className="max-w-6xl">
            <div className="mx-auto mb-8 aspect-square w-[min(72vw,22rem)] rounded-full bg-[radial-gradient(circle_at_34%_28%,rgba(243,238,230,.28),transparent_10%),radial-gradient(circle_at_48%_52%,rgba(122,15,27,.72),rgba(5,5,5,.42)_42%,rgba(176,141,87,.16)_58%,transparent_70%),conic-gradient(from_18deg,rgba(176,141,87,.05),rgba(122,15,27,.46),rgba(12,44,53,.38),rgba(176,141,87,.22),rgba(5,5,5,.06))] shadow-[0_0_100px_rgba(122,15,27,.28)]" />
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#B08D57]">Maison digital de inteligência simbólica</p>
            <h1 className="font-serif text-7xl leading-none tracking-[0.14em] md:text-9xl">VOLPONI</h1>
            <p className="mx-auto mt-5 font-serif text-4xl leading-none md:text-6xl">Inteligência como Objeto Raro.</p>
            <p className="mx-auto mt-7 max-w-3xl text-lg text-white/75">Um campo cinematográfico onde IA, código, estratégia simbólica e identidade digital deixam de parecer serviço — e passam a criar gravidade.</p>
            <p className="mt-5 text-sm tracking-[0.12em] text-white/50">Não é um perfil. Não é um portfólio. É presença técnica, estética e narrativa em estado vivo.</p>
            <div className="mx-auto mt-8 grid max-w-2xl overflow-hidden rounded-3xl border border-[#B08D57]/25 md:grid-cols-3">{[['IA', 'inteligência aplicada'], ['Código', 'prova de execução'], ['Símbolo', 'presença autoral']].map(([title, label]) => <div key={title} className="border-[#B08D57]/20 bg-black/40 p-4 md:border-r"><strong className="block font-serif text-3xl text-[#B08D57]">{title}</strong><span className="text-xs uppercase tracking-[0.16em] text-white/50">{label}</span></div>)}</div>
            <div className="mt-9 flex flex-wrap justify-center gap-4"><a className="rounded-full border border-[#B08D57]/60 bg-[#B08D57]/10 px-7 py-3" href="#maison">Entrar no Campo</a><a className="rounded-full border border-white/20 px-7 py-3" href="#laboratorio">Explorar o Laboratório</a></div>
          </motion.div>
        </section>

        <section aria-labelledby="wayfinding-title" className="mx-auto max-w-7xl px-6 py-20"><div className="mb-10 grid gap-6 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Mapa de Navegação</p><h2 id="wayfinding-title" className="font-serif text-6xl">Escolha a camada da travessia.</h2></div><p className="text-lg text-white/70">Um atalho elegante para atravessar o campo sem perder a atmosfera: presença, prova, territórios, artefatos, provocação e acesso.</p></div><div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">{navItems.map(([label, href, description], index) => <a key={href} href={href} className="flex min-h-44 flex-col justify-between rounded-[1.3rem] border border-white/15 bg-white/[.035] p-4 transition hover:-translate-y-1 hover:border-[#B08D57]/50 hover:bg-[#B08D57]/10"><small className="uppercase tracking-[0.18em] text-[#B08D57]">0{index + 1}</small><strong className="font-serif text-3xl">{label}</strong><span className="text-sm text-white/60">{description}</span></a>)}</div></section>

        <section id="ordem" className="mx-auto max-w-7xl px-6 py-24"><div className="mb-10 grid gap-6 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Ordem da Travessia</p><h2 className="font-serif text-6xl">O site agora tem rito, direção e consequência.</h2></div><p className="text-lg text-white/70">Uma sequência premium para conduzir o visitante da presença à prova, da prova ao método, do método ao acesso.</p></div><div className="grid overflow-hidden rounded-[2rem] border border-[#B08D57]/25 md:grid-cols-6">{fieldOrder.map(([number, title, description]) => <article key={number} className="min-h-64 border-[#B08D57]/20 bg-[#0B0B0D]/80 p-5 md:border-r"><small className="text-[#B08D57]">{number}</small><h3 className="mt-16 font-serif text-3xl">{title}</h3><p className="mt-4 text-sm text-white/65">{description}</p></article>)}</div></section>

        <section id="aix8c" className="mx-auto grid max-w-6xl gap-6 px-6 py-24 md:grid-cols-2">
          <article className="rounded-[2rem] border border-white/15 bg-white/[.04] p-7 backdrop-blur-xl"><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Prólogo AIX8C</p><h2 className="mt-4 font-serif text-5xl">Welcome aboard, marujos.</h2><p className="mt-5 text-white/70">(O nome se diz ei ai eksi eiti ci)</p><p className="mt-4 text-white/70">AIX8C é a nave de origem: o ponto onde curiosidade, ensino, IA e coragem experimental começaram a se tornar linguagem.</p></article>
          <article className="rounded-[2rem] border border-white/15 bg-white/[.04] p-7 backdrop-blur-xl"><h3 className="font-serif text-4xl">Missão, visão e valores</h3><p className="mt-5 text-white/70"><strong>Missão:</strong> transformar a comunicação entre humanos e máquinas com experiências de IA que ensinam, inspiram e funcionam.</p><p className="mt-3 text-white/70"><strong>Visão:</strong> liderar na criação de experiências imersivas e únicas em IA.</p><p className="mt-3 text-white/70"><strong>Valores:</strong> inovação, criatividade e inspiração.</p></article>
        </section>

        <section id="manifesto" className="mx-auto max-w-6xl px-6 py-28 text-center"><h2 className="font-serif text-6xl md:text-8xl">VOLPONI não é uma marca pessoal. É um campo.</h2><p className="mx-auto mt-8 max-w-4xl text-xl text-white/75">Um campo onde inteligência ganha forma. Onde estratégia vira símbolo. Onde código vira linguagem. Onde inteligência artificial vira arquitetura. Onde presença vira gravidade.</p></section>

        <section id="maison" className="mx-auto grid max-w-7xl gap-5 px-6 py-24 lg:grid-cols-[1.15fr_1fr_1fr]"><article className="flex min-h-[34rem] flex-col justify-between rounded-[2.4rem] border border-[#B08D57]/30 bg-[radial-gradient(circle_at_16%_18%,rgba(122,15,27,.34),transparent_18rem),linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.015))] p-8"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Maison VOLPONI</p><h2 className="font-serif text-6xl leading-none">O raro aqui não é ornamento. É método.</h2></div><p className="font-serif text-4xl leading-none text-white/85">Estratégia vira forma. Código vira prova. IA vira arquitetura. Presença vira campo.</p></article>{maisonPrinciples.map(([title, description]) => <article key={title} className="min-h-64 rounded-[2rem] border border-white/15 bg-white/[.04] p-6"><small className="uppercase tracking-[0.18em] text-[#B08D57]">Princípio</small><h3 className="mt-8 font-serif text-4xl">{title}</h3><p className="mt-4 text-white/70">{description}</p></article>)}</section>

        <section id="assinaturas" className="mx-auto max-w-7xl px-6 py-24"><div className="mb-10 grid gap-6 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Coleção de Assinaturas</p><h2 className="font-serif text-6xl">Uma interface precisa ter matéria.</h2></div><p className="text-lg text-white/70">Cada camada visual carrega função: criar desejo, provar execução, orientar leitura e deixar memória.</p></div><div className="grid gap-4 lg:grid-cols-5">{signatureCollection.map(([name, role, description], index) => <article key={name} className={`relative flex min-h-96 overflow-hidden rounded-[2rem] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,.055),rgba(255,255,255,.014))] p-5 ${index % 2 ? 'lg:translate-y-8' : ''}`}><div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(176,141,87,.20),transparent_18rem),radial-gradient(circle_at_70%_78%,rgba(122,15,27,.24),transparent_16rem)]" /><div className="relative flex flex-col justify-between"><small className="uppercase tracking-[0.18em] text-[#B08D57]">{role}</small><strong className="font-serif text-5xl leading-none">{name}</strong><p className="text-white/65">{description}</p></div></article>)}</div></section>

        <section id="gravidade" className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-[1.1fr_.9fr]"><article className="grid min-h-[30rem] place-items-end rounded-[2rem] border border-[#B08D57]/25 bg-[radial-gradient(circle_at_30%_20%,rgba(122,15,27,.34),transparent_20rem),linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.018))] p-8"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Tese de Gravidade</p><h2 className="font-serif text-6xl md:text-8xl">A raridade não grita.</h2><p className="mt-4 text-white/70">Ela organiza o campo ao redor.</p></div></article><div className="grid gap-4">{gravity.map(([name, text]) => <div key={name} className="grid grid-cols-[7rem_1fr] items-center gap-4 border-b border-white/10 py-5"><strong className="font-serif text-3xl text-[#B08D57]">{name}</strong><span className="text-white/75">{text}</span></div>)}</div></section>

        <section id="laboratorio" className="mx-auto max-w-7xl px-6 py-24"><div className="mb-10 max-w-4xl"><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Laboratório VOLPONI</p><h2 className="font-serif text-6xl">Evidência técnica de uma mente simbólica.</h2><p className="mt-5 text-white/70">O GitHub é arquivo vivo de protótipos: IA, automação, interfaces, sistemas simbólicos e inteligência digital.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{repos.map(([name, category, description, language]) => <article key={name} className="rounded-[2rem] border border-white/15 bg-white/[.04] p-6"><p className="text-xs uppercase tracking-[0.18em] text-[#B08D57]">{category}</p><h3 className="mt-4 font-serif text-3xl">{name}</h3><p className="mt-3 text-white/70">{description}</p><p className="mt-4 text-sm text-white/60">{language}</p><a className="mt-5 inline-flex rounded-full border border-[#B08D57]/40 px-5 py-2" href={`${githubUrl}/${name}`} target="_blank" rel="noreferrer">Ver no GitHub</a></article>)}</div></section>

        <section id="prova" className="mx-auto max-w-7xl px-6 py-24"><div className="mb-10 grid gap-6 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Sistema de Prova</p><h2 className="font-serif text-6xl">Autoridade sem gritar.</h2></div><p className="text-lg text-white/70">O campo sustenta reputação por evidência: código, protótipo, estética, estratégia e execução.</p></div><div className="grid gap-5 md:grid-cols-4">{proofStack.map(([title, description]) => <article key={title} className="flex min-h-80 flex-col justify-end rounded-[2rem] border border-white/15 bg-white/[.04] p-6"><h3 className="font-serif text-3xl">{title}</h3><p className="mt-4 text-white/70">{description}</p></article>)}</div></section>

        <section id="constelacao" className="mx-auto max-w-7xl px-6 py-24"><div className="mb-10 grid gap-6 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Constelação de Inteligência</p><h2 className="font-serif text-6xl">O campo não é linear. Ele conecta forças.</h2></div><p className="text-lg text-white/70">VOLPONI opera como uma arquitetura viva onde inteligência artificial, código, símbolo, narrativa, capital e presença criam um sistema de gravidade.</p></div><div className="relative min-h-[36rem] overflow-hidden rounded-[2rem] border border-[#B08D57]/25 bg-white/[.03] p-6"><div className="absolute left-1/2 top-1/2 grid h-52 w-52 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#B08D57]/40 bg-[#B08D57]/10"><b className="font-serif text-4xl">VOLPONI</b></div><div className="grid gap-4 md:grid-cols-3">{intelligenceMap.map(([title, description]) => <article key={title} className="relative z-10 rounded-3xl border border-white/15 bg-black/40 p-5 backdrop-blur-xl"><strong className="block font-serif text-4xl text-[#B08D57]">{title}</strong><span className="text-sm text-white/65">{description}</span></article>)}</div></div></section>

        <section id="territorios" className="mx-auto max-w-7xl px-6 py-24"><h2 className="font-serif text-6xl">Territórios de Inteligência</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{territories.map(([title, description]) => <article key={title} className="rounded-[2rem] border border-white/15 bg-white/[.04] p-6"><h3 className="font-serif text-3xl">{title}</h3><p className="mt-4 text-white/70">{description}</p></article>)}</div></section>

        <section id="sistemas-vivos" className="mx-auto max-w-7xl px-6 py-24"><div className="mb-10 max-w-4xl"><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Ateliê de Sistemas Vivos</p><h2 className="font-serif text-6xl">Da ambiguidade ao artefato raro.</h2><p className="mt-5 text-white/70">Um protocolo autoral para converter estratégia, IA, código e símbolo em sistemas que respiram.</p></div><div className="grid gap-5 md:grid-cols-5">{protocol.map(([title, description], index) => <article key={title} className="rounded-[2rem] border border-white/15 bg-white/[.04] p-6"><span className="text-xs uppercase tracking-[0.22em] text-[#B08D57]">0{index + 1}</span><h3 className="mt-10 font-serif text-2xl">{title}</h3><p className="mt-4 text-sm text-white/70">{description}</p></article>)}</div></section>

        <section id="oraculo" className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Camada Oracular</p><h2 className="font-serif text-6xl">Pergunte ao campo.</h2><p className="mt-5 text-white/70">Entre com uma pergunta. Receba uma provocação.</p></div><div className="space-y-3">{oracle.map(([question, response]) => <button key={question} onClick={() => setAnswer(response)} className="block w-full rounded-2xl border border-white/15 bg-white/[.04] p-4 text-left text-white/75">{question}</button>)}<p className="rounded-[2rem] border border-[#B08D57]/35 bg-[#B08D57]/10 p-6 text-xl text-white/80">{answer}</p></div></section>

        <section id="arquivo" className="mx-auto max-w-7xl px-6 py-24"><h2 className="font-serif text-6xl">O Arquivo</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{archive.map((item) => <article key={item} className="rounded-[2rem] border border-white/15 bg-white/[.04] p-6"><p className="text-xs uppercase tracking-[0.18em] text-[#B08D57]">{item}</p><h3 className="mt-4 font-serif text-3xl">{item}</h3><p className="mt-4 text-white/70">Fragmentos, ideias e estruturas preparados para expansão futura.</p></article>)}</div></section>

        <section className="mx-auto max-w-7xl px-6 py-20 text-center"><div className="border-y border-[#B08D57]/25 py-14"><p className="font-serif text-4xl leading-tight md:text-7xl">Inteligência não é informação.<br />É arquitetura em estado de presença.</p></div></section>

        <section id="sobre" className="mx-auto grid max-w-6xl gap-8 px-6 py-24 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">A Presença por Trás do Campo</p><h2 className="font-serif text-6xl">Inteligência, estratégia e sistemas simbólicos.</h2></div><div className="text-lg text-white/75"><p>VOLPONI é uma identidade digital e simbólica dedicada à intersecção entre inteligência artificial, estratégia, sistemas visuais e transformação humana.</p><p className="mt-5">Por meio de código, design, experimentação com IA e pensamento estratégico, VOLPONI constrói artefatos digitais que transformam ideias em sistemas vivos.</p></div></section>

        <section id="conexao" className="mx-auto max-w-7xl px-6 py-24"><div className="mb-10 grid gap-6 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Conexão Autoral</p><h2 className="font-serif text-6xl">Quem sou encontra o que ofereço.</h2></div><p className="text-lg text-white/70">VOLPONI nasce da união entre curiosidade técnica, sensibilidade simbólica e execução. O que ofereço não é uma vitrine de serviços: é uma travessia para transformar ideias em sistemas, presença e inteligência aplicada.</p></div><div className="grid gap-5 md:grid-cols-4">{offerings.map(([title, description]) => <article key={title} className="rounded-[2rem] border border-white/15 bg-white/[.04] p-6"><h3 className="font-serif text-3xl">{title}</h3><p className="mt-4 text-white/70">{description}</p></article>)}</div></section>

        <section id="ressonancia" className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-[.95fr_1.05fr]"><article className="flex min-h-[34rem] flex-col justify-between rounded-[2rem] border border-[#B08D57]/25 bg-[radial-gradient(circle_at_18%_20%,rgba(122,15,27,.36),transparent_18rem),linear-gradient(135deg,rgba(243,238,230,.055),rgba(255,255,255,.012))] p-8"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Câmara de Ressonância</p><h2 className="font-serif text-6xl leading-[.88] md:text-8xl">O que você sente aqui é parte do método.</h2></div><p className="max-w-xl text-white/70">O site precisa provar, antes de explicar, que tecnologia também pode ter alma, precisão, atmosfera e consequência.</p></article><div className="grid gap-3">{resonanceLayers.map(([title, description]) => <article key={title} className="grid gap-3 rounded-[1.4rem] border border-white/15 bg-white/[.04] p-5 md:grid-cols-[7rem_1fr]"><strong className="font-serif text-3xl text-[#B08D57]">{title}</strong><span className="text-white/70">{description}</span></article>)}</div></section>

        <section id="artefatos" className="mx-auto max-w-7xl px-6 py-24"><div className="mb-10 grid gap-6 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Artefatos de Valor</p><h2 className="font-serif text-6xl">O que sai do campo precisa continuar vivo.</h2></div><p className="text-lg text-white/70">Entregas desenhadas para conectar estratégia, IA, narrativa, estética e execução sem perder a força autoral.</p></div><div className="grid gap-5 md:grid-cols-3">{valueArtifacts.map(([title, description]) => <article key={title} className="flex min-h-72 flex-col justify-between rounded-[2rem] border border-white/15 bg-white/[.04] p-6"><small className="uppercase tracking-[0.18em] text-[#B08D57]">Artefato</small><div><h3 className="font-serif text-3xl">{title}</h3><p className="mt-4 text-white/70">{description}</p></div></article>)}</div></section>

        <section id="conversao" className="mx-auto max-w-7xl px-6 py-24"><div className="rounded-[2.6rem] border border-[#B08D57]/25 bg-[radial-gradient(circle_at_12%_18%,rgba(122,15,27,.28),transparent_22rem),linear-gradient(135deg,rgba(255,255,255,.055),rgba(255,255,255,.012))] p-6 md:p-10"><div className="mb-8 grid gap-6 md:grid-cols-[1fr_.72fr] md:items-end"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Ateliê de Conversão</p><h2 className="font-serif text-6xl">Da sensação ao sistema.</h2></div><p className="text-lg text-white/70">O valor de VOLPONI aparece quando uma intuição nebulosa atravessa método, estética, IA e execução até se tornar algo que pode ser sentido, usado e lembrado.</p></div><div className="grid gap-4 md:grid-cols-4">{conversionRitual.map(([number, title, description]) => <article key={number} className="flex min-h-80 flex-col justify-between rounded-[1.8rem] border border-white/15 bg-black/30 p-5"><small className="tracking-[0.18em] text-[#B08D57]">{number}</small><h3 className="font-serif text-5xl">{title}</h3><p className="text-white/65">{description}</p></article>)}</div></div></section>

        <section id="prontidao" className="mx-auto max-w-7xl px-6 py-24"><div className="mb-10 grid gap-6 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Prontidão Técnica</p><h2 className="font-serif text-6xl">Profissional por dentro, sensorial por fora.</h2></div><p className="text-lg text-white/70">O campo também precisa ser confiável: indexável, auditável, acessível e pronto para deploy sem depender de improviso.</p></div><div className="grid gap-5 md:grid-cols-4">{readinessChecks.map(([title, description], index) => <article key={title} className="flex min-h-72 flex-col justify-between rounded-[2rem] border border-white/15 bg-[linear-gradient(180deg,rgba(6,43,31,.20),rgba(255,255,255,.018))] p-6"><small className="tracking-[0.18em] text-[#B08D57]">0{index + 1}</small><div><h3 className="font-serif text-3xl">{title}</h3><p className="mt-4 text-white/65">{description}</p></div></article>)}</div></section>

        <section id="transformacao" className="mx-auto max-w-7xl px-6 py-24"><div className="mb-10 grid gap-6 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Teatro de Transformação</p><h2 className="font-serif text-6xl">O valor aparece quando a forma muda.</h2></div><p className="text-lg text-white/70">Uma leitura clara do que VOLPONI faz: atravessar o bruto, revelar estrutura e entregar artefatos que continuam pensando.</p></div><div className="grid gap-5 md:grid-cols-4">{transformationCases.map(([before, after, description]) => <article key={before} className="flex min-h-96 flex-col justify-between rounded-[2rem] border border-white/15 bg-[linear-gradient(180deg,rgba(122,15,27,.20),rgba(255,255,255,.018))] p-6"><div><small className="uppercase tracking-[0.18em] text-white/45">Antes</small><b className="block font-serif text-4xl">{before}</b></div><div className="text-right"><small className="uppercase tracking-[0.18em] text-white/45">Depois</small><b className="block font-serif text-4xl text-[#B08D57]">{after}</b></div><p className="text-white/65">{description}</p></article>)}</div></section>

        <section className="mx-auto max-w-5xl px-6 py-20 text-center"><div className="border-y border-[#B08D57]/25 py-16"><p className="font-serif text-4xl leading-tight md:text-6xl">Eu não construo páginas para preencher espaço. Construo campos para que ideias, pessoas e sistemas sejam percebidos com a força que merecem.</p></div></section>

        <section id="ritual-acesso" className="mx-auto max-w-7xl px-6 py-24"><div className="mb-10 grid gap-6 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Ritual de Acesso</p><h2 className="font-serif text-6xl">Escolha o ponto de entrada.</h2></div><p className="text-lg text-white/70">Uma camada de orientação para transformar necessidade em direção. O site começa a responder como campo, não como vitrine.</p></div><div className="grid gap-6 md:grid-cols-[.85fr_1.15fr]"><div className="grid gap-3">{accessPaths.map((path) => <button key={path[0]} onClick={() => setAccessPath(path)} className={`rounded-2xl border p-4 text-left transition ${accessPath[0] === path[0] ? 'border-[#B08D57]/60 bg-[#B08D57]/10' : 'border-white/15 bg-white/[.04]'}`}>{path[0]}</button>)}</div><article className="flex min-h-96 flex-col justify-between rounded-[2rem] border border-white/15 bg-white/[.04] p-7"><div><div className="grid h-24 w-24 place-items-center rounded-full border border-[#B08D57]/40 font-serif text-4xl text-[#B08D57]">I</div><h3 className="mt-8 font-serif text-5xl">{accessPath[0]}</h3><p className="mt-5 text-xl text-white/70">{accessPath[1]}</p></div><a href="#contato" className="mt-8 inline-flex w-fit rounded-full border border-[#B08D57]/60 bg-[#B08D57]/10 px-7 py-3">Solicitar Acesso</a></article></div></section>

        <section id="contato" className="mx-auto grid max-w-6xl gap-8 px-6 py-28 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Contato / Acesso Privado</p><h2 className="font-serif text-6xl">Solicitar Acesso</h2><p className="mt-5 text-white/70">Para colaborações, experimentos estratégicos, protótipos de IA, sistemas simbólicos ou projetos de identidade digital, entre no campo.</p></div><form className="grid gap-4 rounded-[2rem] border border-white/15 bg-white/[.04] p-6"><p className="text-white/65">O primeiro contato não precisa estar perfeito. Traga a tensão, o desejo ou a ideia bruta — o campo começa pela leitura.</p><label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-white/55">Nome<input className="rounded-xl border border-white/15 bg-black/30 p-4 text-white" name="nome" autoComplete="name" required /></label><label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-white/55">E-mail<input className="rounded-xl border border-white/15 bg-black/30 p-4 text-white" type="email" name="email" autoComplete="email" required /></label><label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-white/55">Tipo de solicitação<select className="rounded-xl border border-white/15 bg-black/30 p-4 text-white" name="tipo"><option>Protótipo de IA</option><option>Identidade Digital</option><option>Narrativa Estratégica</option><option>Experiência WebGL</option><option>Colaboração</option><option>Outro</option></select></label><label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-white/55">Mensagem<textarea className="min-h-32 rounded-xl border border-white/15 bg-black/30 p-4 text-white" name="mensagem" required /></label><button className="rounded-full border border-[#B08D57]/60 bg-[#B08D57]/10 px-7 py-3">Iniciar Conversa Privada</button></form></section>
      </main>
      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-white/60"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row"><div><strong>VOLPONI</strong><p>Inteligência como Objeto Raro.</p><p>© VOLPONI. Construído como um campo de inteligência.</p></div><div className="flex flex-wrap gap-4"><a href={githubUrl}>GitHub</a><a href="#laboratorio">Laboratório</a><a href="#artefatos">Artefatos</a><a href="#territorios">Territórios</a><a href="#ritual-acesso">Acesso</a><a href="#contato">Contato</a></div></div></footer>
    </div>
  );
};

export default Index;
