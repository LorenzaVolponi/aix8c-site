import { mkdirSync, writeFileSync, copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
mkdirSync(dist, { recursive: true });
mkdirSync(join(dist, 'assets'), { recursive: true });

const html = String.raw`<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      .grain, .mist, .cursor, #volponi-canvas { pointer-events: none; position: fixed; inset: 0; }
      .grain { z-index: 1; opacity: .28; mix-blend-mode: screen; background-image: radial-gradient(circle, rgba(255,255,255,.14) 0 1px, transparent 1px); background-size: 34px 34px; filter: contrast(170%); }
      .mist { z-index: 2; opacity: .7; background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(217,232,255,.09), transparent 18rem); transition: background .2s linear; }
      #volponi-canvas { z-index: 0; opacity: .84; }
      .cursor { z-index: 100; width: 18px; height: 18px; border: 1px solid rgba(246,241,232,.75); border-radius: 999px; inset: auto; transform: translate(-50%, -50%); transition: width .25s ease, height .25s ease, border-color .25s ease, background .25s ease; }
      .cursor.is-hover { width: 54px; height: 54px; border-color: rgba(217,232,255,.9); background: rgba(217,232,255,.06); }
      .loader { position: fixed; inset: 0; z-index: 120; display: grid; place-items: center; background: #05070c; transition: opacity .8s ease, visibility .8s ease; }
      .loader.is-gone { opacity: 0; visibility: hidden; }
      .loader__mark { font-family: 'Cormorant Garamond', serif; font-size: clamp(3rem, 9vw, 8rem); letter-spacing: .13em; animation: emerge 1.8s cubic-bezier(.2,.8,.2,1) both; }
      .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 40; display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 1.1rem clamp(1.25rem, 4vw, 4rem); background: rgba(7,9,15,.45); border-bottom: 1px solid var(--line); backdrop-filter: blur(22px); }
      .nav__brand { font-family: 'Cormorant Garamond', serif; letter-spacing: .24em; font-size: 1.1rem; }
      .nav__links { display: flex; gap: clamp(.8rem, 2vw, 1.8rem); align-items: center; color: rgba(246,241,232,.7); font-size: .72rem; text-transform: uppercase; letter-spacing: .18em; }
      .nav__links a { text-decoration: none; }
      .sound { border: 1px solid var(--line); background: rgba(255,255,255,.03); border-radius: 999px; padding: .7rem 1rem; font: inherit; text-transform: uppercase; letter-spacing: .16em; font-size: .68rem; cursor: none; }
      .chapter { position: relative; z-index: 5; padding: clamp(6rem, 13vw, 12rem) clamp(1.25rem, 5vw, 5rem); }
      .hero { min-height: 100vh; display: grid; place-items: center; text-align: center; overflow: hidden; }
      .hero::after { content: ''; position: absolute; left: 8vw; right: 8vw; bottom: 16vh; height: 1px; background: linear-gradient(90deg, transparent, rgba(217,232,255,.45), transparent); box-shadow: 0 0 40px rgba(217,232,255,.32); }
      .kicker { color: rgba(246,241,232,.58); text-transform: uppercase; letter-spacing: .28em; font-size: .72rem; }
      h1, h2, h3 { font-family: 'Cormorant Garamond', serif; font-weight: 500; margin: 0; }
      h1 { font-size: clamp(5rem, 18vw, 16rem); line-height: .78; letter-spacing: .09em; text-shadow: 0 0 60px rgba(217,232,255,.22); }
      h2 { font-size: clamp(3.2rem, 8vw, 8rem); line-height: .9; letter-spacing: -.035em; }
      h3 { font-size: clamp(2rem, 4vw, 4.6rem); line-height: .96; }
      p { line-height: 1.75; }
      .hero__text { max-width: 76rem; margin: auto; }
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
      .card:hover { transform: translateY(-10px) rotateX(2deg); border-color: rgba(217,232,255,.4); box-shadow: 0 30px 80px rgba(0,0,0,.45); }
      .card:hover::before { transform: scale(1.08); filter: saturate(1.15); }
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
      @media (max-width: 840px) {
        body { cursor: auto; }
        .cursor { display: none; }
        .nav__links a { display: none; }
        .manifesto, .language { grid-template-columns: 1fr; }
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
    <div class="grain" aria-hidden="true"></div>
    <div class="mist" aria-hidden="true"></div>
    <div class="cursor" aria-hidden="true"></div>
    <div class="loader"><div class="loader__mark">VOLPONI</div></div>

    <header class="nav">
      <div class="nav__brand">VOLPONI</div>
      <div class="nav__links">
        <a href="#manifesto" data-hover>Manifesto</a>
        <a href="#fragmentos" data-hover>Fragmentos</a>
        <a href="#linguagem" data-hover>Linguagem</a>
        <a href="#universo" data-hover>Universo</a>
        <button class="sound" type="button" data-hover>Ativar atmosfera</button>
      </div>
    </header>

    <main>
      <section class="chapter hero" id="inicio">
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
          ].map(([title, cat, phrase, art]) => `<article class="card reveal" style="--art:${art}"><div class="card__content"><small>${cat}</small><h3>${title}</h3><p>${phrase}</p></div></article>`).join('')}
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
        const grad = ctx.createLinearGradient(0,0,w,h); grad.addColorStop(0,'rgba(8,17,29,.45)'); grad.addColorStop(1,'rgba(33,16,24,.20)'); ctx.fillStyle = grad; ctx.fillRect(0,0,w,h);
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
