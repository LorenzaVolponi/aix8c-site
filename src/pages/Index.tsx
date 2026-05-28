import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const githubUrl = 'https://github.com/LorenzaVolponi';

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

const Index = () => {
  const reduce = useReducedMotion();
  const [soundOn, setSoundOn] = useState(false);
  const [answer, setAnswer] = useState(oracle[0][1]);
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/65 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-xs uppercase tracking-[0.18em] text-white/70">
          <a href="#home" className="font-serif text-lg tracking-[0.24em]">VOLPONI</a>
          <div className="hidden gap-5 md:flex">
            <a href="#laboratorio">Laboratório</a><a href="#territorios">Territórios</a><a href="#arquivo">Arquivo</a><a href="#contato">Contato</a>
          </div>
          <button onClick={() => setSoundOn((v) => !v)} className="rounded-full border border-white/15 px-4 py-2">{soundOn ? 'Desativar atmosfera' : 'Ativar atmosfera'}</button>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="home" className="grid min-h-screen place-items-center px-6 pt-24 text-center">
          <motion.div initial={reduce ? false : { opacity: 0, y: 28, filter: 'blur(16px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1.2 }} className="max-w-6xl">
            <div className="mx-auto mb-8 aspect-square w-[min(72vw,22rem)] rounded-full bg-[radial-gradient(circle_at_34%_28%,rgba(243,238,230,.28),transparent_10%),radial-gradient(circle_at_48%_52%,rgba(122,15,27,.72),rgba(5,5,5,.42)_42%,rgba(176,141,87,.16)_58%,transparent_70%),conic-gradient(from_18deg,rgba(176,141,87,.05),rgba(122,15,27,.46),rgba(12,44,53,.38),rgba(176,141,87,.22),rgba(5,5,5,.06))] shadow-[0_0_100px_rgba(122,15,27,.28)]" />
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#B08D57]">VOLPONI</p>
            <h1 className="font-serif text-6xl leading-none md:text-8xl">Inteligência como Objeto Raro.</h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg text-white/75">VOLPONI é um campo cinematográfico de inteligência onde IA, código, estratégia simbólica e identidade digital convergem.</p>
            <p className="mt-5 text-sm tracking-[0.12em] text-white/50">Não é um perfil. Não é um portfólio. É um campo de inteligência.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4"><a className="rounded-full border border-[#B08D57]/60 bg-[#B08D57]/10 px-7 py-3" href="#manifesto">Entrar no Campo</a><a className="rounded-full border border-white/20 px-7 py-3" href="#laboratorio">Explorar o Laboratório</a></div>
          </motion.div>
        </section>

        <section id="aix8c" className="mx-auto grid max-w-6xl gap-6 px-6 py-24 md:grid-cols-2">
          <article className="rounded-[2rem] border border-white/15 bg-white/[.04] p-7 backdrop-blur-xl"><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Prólogo AIX8C</p><h2 className="mt-4 font-serif text-5xl">Welcome aboard, marujos.</h2><p className="mt-5 text-white/70">(O nome se diz ei ai eksi eiti ci)</p><p className="mt-4 text-white/70">AIX8C combina inteligência artificial e experiência para criar soluções criativas e contínuas.</p></article>
          <article className="rounded-[2rem] border border-white/15 bg-white/[.04] p-7 backdrop-blur-xl"><h3 className="font-serif text-4xl">Missão, visão e valores</h3><p className="mt-5 text-white/70"><strong>Missão:</strong> transformar a comunicação entre humanos e máquinas, com soluções inovadoras em IA.</p><p className="mt-3 text-white/70"><strong>Visão:</strong> liderar na criação de experiências imersivas e únicas em IA.</p><p className="mt-3 text-white/70"><strong>Valores:</strong> inovação, criatividade e inspiração.</p></article>
        </section>

        <section id="manifesto" className="mx-auto max-w-6xl px-6 py-28 text-center"><h2 className="font-serif text-6xl md:text-8xl">VOLPONI não é uma marca pessoal. É um campo.</h2><p className="mx-auto mt-8 max-w-4xl text-xl text-white/75">Um campo onde inteligência ganha forma. Onde estratégia vira símbolo. Onde código vira linguagem. Onde inteligência artificial vira arquitetura. Onde presença vira gravidade.</p></section>

        <section id="gravidade" className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-[1.1fr_.9fr]"><article className="grid min-h-[30rem] place-items-end rounded-[2rem] border border-[#B08D57]/25 bg-[radial-gradient(circle_at_30%_20%,rgba(122,15,27,.34),transparent_20rem),linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.018))] p-8"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Tese de Gravidade</p><h2 className="font-serif text-6xl md:text-8xl">A raridade não grita.</h2><p className="mt-4 text-white/70">Ela organiza o campo ao redor.</p></div></article><div className="grid gap-4">{gravity.map(([name, text]) => <div key={name} className="grid grid-cols-[7rem_1fr] items-center gap-4 border-b border-white/10 py-5"><strong className="font-serif text-3xl text-[#B08D57]">{name}</strong><span className="text-white/75">{text}</span></div>)}</div></section>

        <section id="laboratorio" className="mx-auto max-w-7xl px-6 py-24"><div className="mb-10 max-w-4xl"><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Laboratório VOLPONI</p><h2 className="font-serif text-6xl">Evidência técnica de uma mente simbólica.</h2><p className="mt-5 text-white/70">O GitHub é arquivo vivo de protótipos: IA, automação, interfaces, sistemas simbólicos e inteligência digital.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{repos.map(([name, category, description, language]) => <article key={name} className="rounded-[2rem] border border-white/15 bg-white/[.04] p-6"><p className="text-xs uppercase tracking-[0.18em] text-[#B08D57]">{category}</p><h3 className="mt-4 font-serif text-3xl">{name}</h3><p className="mt-3 text-white/70">{description}</p><p className="mt-4 text-sm text-white/60">{language}</p><a className="mt-5 inline-flex rounded-full border border-[#B08D57]/40 px-5 py-2" href={`${githubUrl}/${name}`} target="_blank" rel="noreferrer">Ver no GitHub</a></article>)}</div></section>

        <section id="territorios" className="mx-auto max-w-7xl px-6 py-24"><h2 className="font-serif text-6xl">Territórios de Inteligência</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{territories.map(([title, description]) => <article key={title} className="rounded-[2rem] border border-white/15 bg-white/[.04] p-6"><h3 className="font-serif text-3xl">{title}</h3><p className="mt-4 text-white/70">{description}</p></article>)}</div></section>

        <section id="sistemas-vivos" className="mx-auto max-w-7xl px-6 py-24"><div className="mb-10 max-w-4xl"><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Ateliê de Sistemas Vivos</p><h2 className="font-serif text-6xl">Da ambiguidade ao artefato raro.</h2><p className="mt-5 text-white/70">Um protocolo autoral para converter estratégia, IA, código e símbolo em sistemas que respiram.</p></div><div className="grid gap-5 md:grid-cols-5">{protocol.map(([title, description], index) => <article key={title} className="rounded-[2rem] border border-white/15 bg-white/[.04] p-6"><span className="text-xs uppercase tracking-[0.22em] text-[#B08D57]">0{index + 1}</span><h3 className="mt-10 font-serif text-2xl">{title}</h3><p className="mt-4 text-sm text-white/70">{description}</p></article>)}</div></section>

        <section id="oraculo" className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Camada Oracular</p><h2 className="font-serif text-6xl">Pergunte ao campo.</h2><p className="mt-5 text-white/70">Entre com uma pergunta. Receba uma provocação.</p></div><div className="space-y-3">{oracle.map(([question, response]) => <button key={question} onClick={() => setAnswer(response)} className="block w-full rounded-2xl border border-white/15 bg-white/[.04] p-4 text-left text-white/75">{question}</button>)}<p className="rounded-[2rem] border border-[#B08D57]/35 bg-[#B08D57]/10 p-6 text-xl text-white/80">{answer}</p></div></section>

        <section id="arquivo" className="mx-auto max-w-7xl px-6 py-24"><h2 className="font-serif text-6xl">O Arquivo</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{archive.map((item) => <article key={item} className="rounded-[2rem] border border-white/15 bg-white/[.04] p-6"><p className="text-xs uppercase tracking-[0.18em] text-[#B08D57]">{item}</p><h3 className="mt-4 font-serif text-3xl">{item}</h3><p className="mt-4 text-white/70">Fragmentos, ideias e estruturas preparados para expansão futura.</p></article>)}</div></section>

        <section className="mx-auto max-w-7xl px-6 py-20 text-center"><div className="border-y border-[#B08D57]/25 py-14"><p className="font-serif text-4xl leading-tight md:text-7xl">Inteligência não é informação.<br />É arquitetura em estado de presença.</p></div></section>

        <section id="sobre" className="mx-auto grid max-w-6xl gap-8 px-6 py-24 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">A Presença por Trás do Campo</p><h2 className="font-serif text-6xl">Inteligência, estratégia e sistemas simbólicos.</h2></div><div className="text-lg text-white/75"><p>VOLPONI é uma identidade digital e simbólica dedicada à intersecção entre inteligência artificial, estratégia, sistemas visuais e transformação humana.</p><p className="mt-5">Por meio de código, design, experimentação com IA e pensamento estratégico, VOLPONI constrói artefatos digitais que transformam ideias em sistemas vivos.</p></div></section>

        <section id="contato" className="mx-auto grid max-w-6xl gap-8 px-6 py-28 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.26em] text-[#B08D57]">Contato / Acesso Privado</p><h2 className="font-serif text-6xl">Solicitar Acesso</h2><p className="mt-5 text-white/70">Para colaborações, experimentos estratégicos, protótipos de IA, sistemas simbólicos ou projetos de identidade digital, entre no campo.</p></div><form className="grid gap-4 rounded-[2rem] border border-white/15 bg-white/[.04] p-6"><input className="rounded-xl border border-white/15 bg-black/30 p-4" placeholder="Nome" /><input className="rounded-xl border border-white/15 bg-black/30 p-4" placeholder="E-mail" /><select className="rounded-xl border border-white/15 bg-black/30 p-4"><option>Protótipo de IA</option><option>Identidade Digital</option><option>Narrativa Estratégica</option><option>Experiência WebGL</option><option>Colaboração</option><option>Outro</option></select><textarea className="min-h-32 rounded-xl border border-white/15 bg-black/30 p-4" placeholder="Mensagem" /><button className="rounded-full border border-[#B08D57]/60 bg-[#B08D57]/10 px-7 py-3">Iniciar Conversa Privada</button></form></section>
      </main>
      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-white/60"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row"><div><strong>VOLPONI</strong><p>Inteligência como Objeto Raro.</p><p>© VOLPONI. Construído como um campo de inteligência.</p></div><div className="flex flex-wrap gap-4"><a href={githubUrl}>GitHub</a><a href="#laboratorio">Laboratório</a><a href="#arquivo">Arquivo</a><a href="#territorios">Territórios</a><a href="#contato">Contato</a></div></div></footer>
    </div>
  );
};

export default Index;
