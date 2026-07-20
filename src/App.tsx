import { BrowserRouter } from 'react-router-dom';
import './App.css';

const githubUrl = 'https://github.com/LorenzaVolponi';

const navLinks = [
  ['Manifesto', '#manifesto'],
  ['Laboratório', '#laboratorio'],
  ['Serviços', '#servicos'],
  ['Método', '#metodo'],
  ['Contato', '#contato'],
];

const proof = [
  ['09+', 'repositórios públicos como prova técnica'],
  ['04', 'frentes: estratégia, IA, web e narrativa'],
  ['100%', 'presença clara, rápida e acionável'],
];

const projects = [
  ['gameshow', 'Experiência interativa que mistura jogo, decisão e inteligência artificial.', 'Produto IA'],
  ['giria-ai', 'Pesquisa cultural assistida por IA para ler sinais sociais emergentes.', 'Cultura digital'],
  ['clinic-intuition-ai', 'Tutor inteligente para estudantes de medicina praticarem raciocínio clínico.', 'Educação'],
  ['robo-wise', 'Robo-advisor para organizar decisões financeiras e acompanhar portfólios.', 'Fintech'],
  ['orchestrator--ai', 'Orquestrador para transformar ideias vagas em planos de execução.', 'Agentes'],
  ['crime-scene-mapper-ai', 'Reconstrução 3D e leitura espacial para simulações forenses.', '3D + IA'],
];

const services = [
  ['Presença digital premium', 'Landing pages e portfólios com narrativa, atmosfera, SEO e conversão.'],
  ['Protótipos com IA', 'Agentes, prompts, automações e interfaces para validar ideias rapidamente.'],
  ['Arquitetura narrativa', 'Tese, posicionamento, copy e estrutura para explicar ideias complexas.'],
  ['Sistemas de decisão', 'Mapas, fluxos e painéis para reduzir ruído e orientar execução.'],
];

const method = [
  ['01', 'Escuta de campo', 'Entender tensão, desejo, risco, oportunidade e contexto real.'],
  ['02', 'Arquitetura', 'Transformar ambiguidade em tese, hierarquia, fluxo e linguagem.'],
  ['03', 'Protótipo', 'Construir uma versão funcional, bonita, testável e orientada por IA.'],
  ['04', 'Lapidação', 'Refinar performance, acessibilidade, SEO, experiência e conversão.'],
];

const manifesto = [
  'IA não substitui presença. Ela amplifica quem sabe formular perguntas melhores.',
  'Estratégia não é acúmulo. É a coragem de organizar prioridade, linguagem e consequência.',
  'Um site memorável não explica tudo: cria atmosfera, prova confiança e conduz ação.',
];

function App() {
  return (
    <BrowserRouter>
      <div className="volponi-site">
      <div className="ambient-noise" aria-hidden="true" />
      <header className="site-nav">
        <a className="brand-mark" href="#home" aria-label="VOLPONI início">VOLPONI</a>
        <nav aria-label="Navegação principal">
          {navLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="nav-button" href="#contato">Solicitar leitura</a>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">AI • estratégia • presença</p>
            <h1>Inteligência em estado raro.</h1>
            <p className="lead">
              VOLPONI transforma ideias ambíguas em sistemas claros: páginas cinematográficas,
              protótipos com IA, automações e narrativas que fazem a presença digital trabalhar como ativo.
            </p>
            <div className="actions">
              <a className="button primary" href="#contato">Começar travessia</a>
              <a className="button" href="#laboratorio">Ver laboratório</a>
            </div>
            <div className="proof-strip">
              {proof.map(([value, label]) => (
                <article key={value}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
          </div>
          <aside className="visual-orb" aria-label="Objeto visual VOLPONI">
            <img src="/lovable-uploads/f1bfad97-5b75-4ee1-a58f-9418600e75b6.png" alt="Identidade visual AIX8C e VOLPONI" />
          </aside>
        </section>

        <section id="manifesto" className="section-shell">
          <p className="eyebrow">manifesto</p>
          <h2>Menos vitrine. Mais campo de decisão.</h2>
          <div className="manifesto-grid">
            {manifesto.map((item) => <article key={item}>{item}</article>)}
          </div>
        </section>

        <section id="laboratorio" className="section-shell">
          <p className="eyebrow">laboratório público</p>
          <h2>Código como prova. Interface como memória.</h2>
          <div className="project-grid">
            {projects.map(([name, text, tag]) => (
              <article className="surface-card" key={name}>
                <small>{tag}</small>
                <h3>{name}</h3>
                <p>{text}</p>
                <a href={`${githubUrl}/${name}`} target="_blank" rel="noreferrer">Ver no GitHub →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="servicos" className="section-shell">
          <p className="eyebrow">serviços</p>
          <h2>O que construímos.</h2>
          <div className="service-grid">
            {services.map(([title, text]) => (
              <article className="surface-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="metodo" className="section-shell">
          <p className="eyebrow">método</p>
          <h2>Da ideia bruta ao sistema vivo.</h2>
          <div className="method-grid">
            {method.map(([number, title, text]) => (
              <article className="method-card" key={number}>
                <small>{number}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sobre" className="section-shell split-section">
          <div>
            <p className="eyebrow">sobre</p>
            <h2>Lorenza Volponi.</h2>
          </div>
          <div>
            <p className="lead">
              Uma presença dedicada à intersecção entre inteligência artificial, linguagem,
              design, estratégia e sistemas. A proposta é simples: transformar complexidade em forma,
              beleza em direção e IA em execução concreta.
            </p>
            <div className="actions">
              <a className="button" href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
              <a className="button" href="#contato">Conversar</a>
            </div>
          </div>
        </section>

        <section id="contato" className="section-shell split-section contact-section">
          <div>
            <p className="eyebrow">acesso</p>
            <h2>Solicite uma leitura de campo.</h2>
            <p className="lead">Envie o contexto do projeto, a tensão atual e o tipo de transformação desejada.</p>
          </div>
          <aside className="contact-panel">
            <a href="mailto:contato.lorenzavolponi@gmail.com">contato.lorenzavolponi@gmail.com</a>
            <a href={githubUrl} target="_blank" rel="noreferrer">github.com/LorenzaVolponi</a>
            <a href="https://www.linkedin.com/in/lorenzavolponi/" target="_blank" rel="noreferrer">linkedin.com/in/lorenzavolponi</a>
            <a className="button primary" href="mailto:contato.lorenzavolponi@gmail.com?subject=Leitura%20de%20campo%20VOLPONI">Enviar briefing</a>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <strong>VOLPONI</strong>
        <span>© {new Date().getFullYear()} Lorenza Volponi. Inteligência, estratégia e presença digital.</span>
      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
