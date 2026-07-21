import { BrowserRouter } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import content from './siteContent.json';
import './App.css';

const techStack = ['React', 'TypeScript', 'IA aplicada', 'Automação', 'UX narrativa', 'SEO técnico'];

function App() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroLift = useTransform(scrollYProgress, [0, 0.35], reduceMotion ? [0, 0] : [0, -120]);
  const orbDrift = useTransform(scrollYProgress, [0, 0.5], reduceMotion ? [0, 0] : [0, 180]);
  const briefMail = `mailto:${content.email}?subject=Leitura%20de%20campo%20VOLPONI&body=Contexto%20do%20projeto:%0AObjetivo:%0APrazo:%0AReferências:`;

  return (
    <BrowserRouter>
      <div className="volponi-site">
        <div className="ambient-noise" aria-hidden="true" />
        <motion.div className="parallax-orb orb-one" style={{ y: orbDrift }} aria-hidden="true" />
        <motion.div className="parallax-orb orb-two" style={{ y: heroLift }} aria-hidden="true" />

        <header className="site-nav glass-nav">
          <a className="brand-mark" href="#home" aria-label="VOLPONI início">{content.brand}</a>
          <nav aria-label="Navegação principal">
            {content.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="nav-button" href="#contato">Contato</a>
        </header>

        <main>
          <section id="home" className="hero-section">
            <motion.div className="hero-copy" style={{ y: heroLift }}>
              <p className="eyebrow">portfólio profissional • IA • produto digital</p>
              <h1>Lorenza Volponi constrói inteligência em forma de produto.</h1>
              <p className="lead">Portfólio de IA aplicada, automação e experiências web premium para transformar problemas ambíguos em sistemas claros, bonitos e testáveis.</p>
              <div className="actions">
                <a className="button primary" href="#laboratorio">Ver projetos</a>
                <a className="button" href={briefMail}>Começar conversa</a>
              </div>
              <div className="stack-strip" aria-label="Competências principais">
                {techStack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </motion.div>

            <aside className="hero-glass-card" aria-label="Síntese profissional VOLPONI">
              <div className="signature-orb" />
              <div className="identity-card glass-panel">
                <span>VOLPONI / AIX8C</span>
                <strong>IA aplicada + presença digital</strong>
                <p>Estratégia, código e estética trabalhando como prova de competência.</p>
              </div>
              <div className="proof-grid">
                {content.proof.map(([value, label]) => <article className="glass-panel" key={value}><strong>{value}</strong><span>{label}</span></article>)}
              </div>
            </aside>
          </section>

          <section id="manifesto" className="section-shell split-section manifesto-section">
            <div>
              <p className="eyebrow">identidade</p>
              <h2>Menos template. Mais assinatura.</h2>
            </div>
            <div className="rich-copy">
              <p>Este portfólio existe para provar uma competência: combinar IA, narrativa, design e execução técnica em experiências que parecem raras — mas funcionam como produto.</p>
              <p>A estética glassmorphism e o parallax não são decoração. São uma linguagem de precisão, profundidade e presença.</p>
            </div>
          </section>

          <section id="campo" className="section-shell">
            <p className="eyebrow">competências</p>
            <h2>Onde estratégia vira sistema.</h2>
            <div className="layer-grid">
              {content.fieldLayers.map(([title, text]) => <article className="surface-card glass-panel" key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </section>

          <section id="laboratorio" className="section-shell featured-section">
            <div className="section-heading">
              <p className="eyebrow">laboratório público</p>
              <h2>Projetos como evidência, não enfeite.</h2>
              <p className="lead">Cada experimento aponta uma capacidade: formular, prototipar, integrar IA, criar interface e transformar complexidade em uso.</p>
            </div>
            <div className="project-grid">
              {content.projects.map(([name, text, tag]) => (
                <article className="project-card glass-panel" key={name}>
                  <small>{tag}</small>
                  <h3>{name}</h3>
                  <p>{text}</p>
                  <a href={`${content.github}/${name}`} target="_blank" rel="noreferrer">Abrir GitHub →</a>
                </article>
              ))}
            </div>
          </section>

          <section id="servicos" className="section-shell">
            <p className="eyebrow">ofertas</p>
            <h2>O que posso construir com você.</h2>
            <div className="service-grid">{content.services.map(([title, text]) => <article className="surface-card glass-panel" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
          </section>

          <section id="metodo" className="section-shell">
            <p className="eyebrow">método</p>
            <h2>Da ideia bruta ao protótipo operante.</h2>
            <div className="method-grid">{content.method.map(([number, title, text]) => <article className="method-card glass-panel" key={number}><small>{number}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
          </section>

          <section id="sobre" className="section-shell split-section about-section">
            <div><p className="eyebrow">sobre</p><h2>Lorenza Volponi.</h2></div>
            <div className="rich-copy"><p>Construo presença digital e sistemas com IA para quem precisa transformar repertório, intuição e problema complexo em algo visível, navegável e executável.</p><div className="actions"><a className="button" href={content.github} target="_blank" rel="noreferrer">GitHub</a><a className="button" href={content.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div></div>
          </section>

          <section id="contato" className="section-shell split-section contact-section">
            <div><p className="eyebrow">contato</p><h2>Vamos transformar caos em arquitetura?</h2><p className="lead">Me envie o contexto, o objetivo e o que precisa ficar mais claro. Eu respondo com direção.</p></div>
            <aside className="contact-panel glass-panel"><a href={`mailto:${content.email}`}>{content.email}</a><a href={content.github} target="_blank" rel="noreferrer">github.com/LorenzaVolponi</a><a href={content.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/lorenzavolponi</a><a className="button primary" href={briefMail}>Enviar briefing</a></aside>
          </section>
        </main>

        <footer className="site-footer"><strong>{content.brand}</strong><span>© {new Date().getFullYear()} Lorenza Volponi. IA, automação e presença digital premium.</span></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
