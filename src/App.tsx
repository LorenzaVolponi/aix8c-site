import { BrowserRouter } from 'react-router-dom';
import content from './siteContent.json';
import './App.css';

function App() {
  const briefMail = `mailto:${content.email}?subject=Leitura%20de%20campo%20VOLPONI`;

  return (
    <BrowserRouter>
      <div className="volponi-site">
        <div className="ambient-noise" aria-hidden="true" />
        <header className="site-nav">
          <a className="brand-mark" href="#home" aria-label="VOLPONI início">{content.brand}</a>
          <nav aria-label="Navegação principal">
            {content.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="nav-button" href="#contato">Solicitar leitura</a>
        </header>

        <main>
          <section id="home" className="hero-section">
            <div className="hero-copy">
              <p className="eyebrow">AI • estratégia • presença</p>
              <h1>Inteligência em estado raro.</h1>
              <p className="lead">{content.tagline} Um campo digital para transformar ambiguidade em forma, prova e ação.</p>
              <div className="actions">
                <a className="button primary" href="#contato">Começar travessia</a>
                <a className="button" href="#laboratorio">Ver laboratório</a>
              </div>
              <div className="proof-strip">
                {content.proof.map(([value, label]) => <article key={value}><strong>{value}</strong><span>{label}</span></article>)}
              </div>
            </div>
            <aside className="visual-orb" aria-label="Objeto visual VOLPONI">
              <img src={content.image} alt="Identidade visual AIX8C e VOLPONI" />
            </aside>
          </section>

          <section id="manifesto" className="section-shell manifesto-section">
            <p className="eyebrow">manifesto</p>
            <h2>Menos vitrine. Mais campo de decisão.</h2>
            <div className="manifesto-grid">{content.manifesto.map((item) => <article key={item}>{item}</article>)}</div>
          </section>

          <section id="campo" className="section-shell">
            <p className="eyebrow">arquitetura do campo</p>
            <h2>Uma presença construída em camadas.</h2>
            <div className="layer-grid">
              {content.fieldLayers.map(([title, text]) => <article className="surface-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </section>

          <section id="laboratorio" className="section-shell">
            <p className="eyebrow">laboratório público</p>
            <h2>Código como prova. Interface como memória.</h2>
            <div className="project-grid">
              {content.projects.map(([name, text, tag]) => (
                <article className="surface-card" key={name}>
                  <small>{tag}</small><h3>{name}</h3><p>{text}</p>
                  <a href={`${content.github}/${name}`} target="_blank" rel="noreferrer">Ver no GitHub →</a>
                </article>
              ))}
            </div>
          </section>

          <section id="servicos" className="section-shell">
            <p className="eyebrow">serviços</p>
            <h2>O que construímos.</h2>
            <div className="service-grid">{content.services.map(([title, text]) => <article className="surface-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
          </section>

          <section id="metodo" className="section-shell">
            <p className="eyebrow">método</p>
            <h2>Da ideia bruta ao sistema vivo.</h2>
            <div className="method-grid">{content.method.map(([number, title, text]) => <article className="method-card" key={number}><small>{number}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
          </section>

          <section className="section-shell">
            <p className="eyebrow">transformações</p>
            <h2>O antes e depois que importa.</h2>
            <div className="case-grid">{content.cases.map(([before, after, text]) => <article className="surface-card" key={before}><small>{before}</small><h3>{after}</h3><p>{text}</p></article>)}</div>
          </section>

          <section id="sobre" className="section-shell split-section">
            <div><p className="eyebrow">sobre</p><h2>Lorenza Volponi.</h2></div>
            <div><p className="lead">Uma presença dedicada à intersecção entre inteligência artificial, linguagem, design, estratégia e sistemas. A proposta é transformar complexidade em forma, beleza em direção e IA em execução concreta.</p><div className="actions"><a className="button" href={content.github} target="_blank" rel="noreferrer">GitHub</a><a className="button" href="#contato">Conversar</a></div></div>
          </section>

          <section className="section-shell">
            <p className="eyebrow">perguntas</p>
            <h2>Clareza antes do briefing.</h2>
            <div className="faq-list">{content.faq.map(([question, answer]) => <details key={question} className="faq-item"><summary>{question}</summary><p>{answer}</p></details>)}</div>
          </section>

          <section id="contato" className="section-shell split-section contact-section">
            <div><p className="eyebrow">acesso</p><h2>Solicite uma leitura de campo.</h2><p className="lead">Envie o contexto do projeto, a tensão atual e o tipo de transformação desejada. A resposta começa pela direção, não pelo excesso.</p></div>
            <aside className="contact-panel"><a href={`mailto:${content.email}`}>{content.email}</a><a href={content.github} target="_blank" rel="noreferrer">github.com/LorenzaVolponi</a><a href={content.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/lorenzavolponi</a><a className="button primary" href={briefMail}>Enviar briefing</a></aside>
          </section>
        </main>

        <footer className="site-footer"><strong>{content.brand}</strong><span>© {new Date().getFullYear()} Lorenza Volponi. Inteligência, estratégia e presença digital.</span></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
