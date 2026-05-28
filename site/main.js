const root = document.documentElement;
const body = document.body;
const year = document.querySelector('#year');
const cursor = document.querySelector('.cursor');
const canvas = document.querySelector('#volponi-stage');
const atmosphereButtons = document.querySelectorAll('.atmosphere-toggle, .atmosphere-inline');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const chapters = document.querySelectorAll('[data-chapter]');
let audioContext;
let audioNodes;
let audioEnabled = false;
let smoothTarget = window.scrollY;
let smoothCurrent = window.scrollY;

body.classList.add('is-loading');
if (year) year.textContent = new Date().getFullYear();

window.addEventListener('load', () => {
  window.setTimeout(() => {
    body.classList.add('is-ready');
    body.classList.remove('is-loading');
  }, reducedMotion ? 100 : 900);
});

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const updateScrollProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? window.scrollY / max : 0;
  root.style.setProperty('--scroll-progress', progress.toFixed(4));
};

window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();

if (!reducedMotion) {
  window.addEventListener('wheel', (event) => {
    event.preventDefault();
    smoothTarget = clamp(smoothTarget + event.deltaY, 0, document.documentElement.scrollHeight - window.innerHeight);
  }, { passive: false });

  const smoothStep = () => {
    smoothCurrent += (smoothTarget - smoothCurrent) * 0.085;
    if (Math.abs(smoothTarget - smoothCurrent) > 0.1) window.scrollTo(0, smoothCurrent);
    requestAnimationFrame(smoothStep);
  };

  window.addEventListener('scroll', () => {
    if (Math.abs(window.scrollY - smoothCurrent) > 80) {
      smoothTarget = window.scrollY;
      smoothCurrent = window.scrollY;
    }
  }, { passive: true });

  smoothStep();
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    smoothTarget = target.getBoundingClientRect().top + window.scrollY;
    if (reducedMotion) window.scrollTo({ top: smoothTarget, behavior: 'auto' });
  });
});

window.addEventListener('pointermove', (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  root.style.setProperty('--mx', `${pointer.x}px`);
  root.style.setProperty('--my', `${pointer.y}px`);
  if (cursor) {
    cursor.style.left = `${pointer.x}px`;
    cursor.style.top = `${pointer.y}px`;
  }
}, { passive: true });

document.querySelectorAll('.magnetic').forEach((item) => {
  item.addEventListener('pointerenter', () => cursor?.classList.add('is-active'));
  item.addEventListener('pointerleave', () => {
    cursor?.classList.remove('is-active');
    item.style.transform = '';
  });
  item.addEventListener('pointermove', (event) => {
    if (reducedMotion) return;
    const rect = item.getBoundingClientRect();
    const depth = Number(item.dataset.depth || 0.11);
    const x = (event.clientX - rect.left - rect.width / 2) * depth;
    const y = (event.clientY - rect.top - rect.height / 2) * depth;
    item.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${-y * 0.025}deg) rotateY(${x * 0.025}deg)`;
  }, { passive: true });
});

const chapterObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) body.dataset.scene = entry.target.dataset.chapter || '';
  }
}, { threshold: 0.42 });
chapters.forEach((chapter) => chapterObserver.observe(chapter));

const revealObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  }
}, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelectorAll('[data-line-reveal] p').forEach((paragraph) => {
  const text = paragraph.textContent.trim();
  paragraph.textContent = '';
  text.split(/(?<=[.!?])\s+/).forEach((line) => {
    const span = document.createElement('span');
    span.className = 'line-reveal';
    span.textContent = line;
    paragraph.appendChild(span);
  });
});

document.querySelectorAll('.line-reveal').forEach((line) => revealObserver.observe(line));

const gallery = document.querySelector('.gallery-track');
const updateParallax = () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('[data-depth]').forEach((card) => {
    const rect = card.getBoundingClientRect();
    const artwork = card.querySelector('.artwork');
    if (!artwork) return;
    const offset = (rect.top - window.innerHeight / 2) * -0.025;
    artwork.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
  if (gallery && window.innerWidth > 760) {
    const rect = gallery.getBoundingClientRect();
    const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0, 1);
    gallery.style.transform = `translate3d(${-progress * 18}vw, 0, 0)`;
  }
  requestAnimationFrame(updateParallax);
};
if (!reducedMotion) updateParallax();

function createAtmosphere() {
  audioContext = new AudioContext();
  const master = audioContext.createGain();
  const low = audioContext.createOscillator();
  const shimmer = audioContext.createOscillator();
  const breath = audioContext.createOscillator();
  const lowGain = audioContext.createGain();
  const shimmerGain = audioContext.createGain();
  const breathGain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();

  low.type = 'sine';
  low.frequency.value = 58;
  shimmer.type = 'triangle';
  shimmer.frequency.value = 392;
  breath.type = 'sine';
  breath.frequency.value = 0.07;
  lowGain.gain.value = 0.045;
  shimmerGain.gain.value = 0.012;
  breathGain.gain.value = 0.018;
  filter.type = 'lowpass';
  filter.frequency.value = 820;
  master.gain.value = 0;

  low.connect(lowGain).connect(filter).connect(master);
  shimmer.connect(shimmerGain).connect(filter).connect(master);
  breath.connect(breathGain).connect(filter).connect(master);
  master.connect(audioContext.destination);
  low.start();
  shimmer.start();
  breath.start();

  audioNodes = { master, low, shimmer, breath };
}

function setAtmosphere(enabled) {
  if (!audioContext) createAtmosphere();
  if (audioContext.state === 'suspended') audioContext.resume();
  audioEnabled = enabled;
  const now = audioContext.currentTime;
  audioNodes.master.gain.cancelScheduledValues(now);
  audioNodes.master.gain.linearRampToValueAtTime(enabled ? 0.55 : 0, now + 0.8);
  atmosphereButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(enabled));
    button.lastChild.textContent = enabled ? ' Silenciar atmosfera' : ' Ativar atmosfera';
  });
}

atmosphereButtons.forEach((button) => {
  button.addEventListener('click', () => setAtmosphere(!audioEnabled));
});

if (canvas && !reducedMotion) {
  const gl = canvas.getContext('webgl', { alpha: true, antialias: true });
  if (gl) {
    const vertexSource = `
      attribute vec2 a_position;
      attribute float a_seed;
      uniform float u_time;
      uniform vec2 u_pointer;
      uniform vec2 u_resolution;
      varying float v_seed;
      void main() {
        vec2 p = a_position;
        p.y += sin(u_time * 0.18 + a_seed * 8.0 + p.x * 2.0) * 0.045;
        p.x += cos(u_time * 0.11 + a_seed * 5.0 + p.y * 3.0) * 0.025;
        vec2 pointer = (u_pointer / u_resolution) * 2.0 - 1.0;
        pointer.y *= -1.0;
        float d = distance(p, pointer);
        p += normalize(p - pointer) * smoothstep(0.42, 0.0, d) * 0.035;
        gl_Position = vec4(p, 0.0, 1.0);
        gl_PointSize = mix(1.1, 4.8, fract(a_seed * 7.7));
        v_seed = a_seed;
      }
    `;
    const fragmentSource = `
      precision mediump float;
      varying float v_seed;
      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        float alpha = smoothstep(0.5, 0.0, d) * 0.82;
        vec3 pearl = vec3(0.86, 0.92, 1.0);
        vec3 gold = vec3(0.66, 0.52, 0.29);
        vec3 color = mix(pearl, gold, step(0.86, fract(v_seed * 9.3)));
        gl_FragColor = vec4(color, alpha);
      }
    `;
    const shader = (type, source) => {
      const result = gl.createShader(type);
      gl.shaderSource(result, source);
      gl.compileShader(result);
      return result;
    };
    const program = gl.createProgram();
    gl.attachShader(program, shader(gl.VERTEX_SHADER, vertexSource));
    gl.attachShader(program, shader(gl.FRAGMENT_SHADER, fragmentSource));
    gl.linkProgram(program);
    gl.useProgram(program);

    const count = window.innerWidth < 760 ? 180 : 430;
    const data = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      data[index * 3] = Math.random() * 2 - 1;
      data[index * 3 + 1] = Math.random() * 2 - 1;
      data[index * 3 + 2] = Math.random();
    }
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, 'a_position');
    const seed = gl.getAttribLocation(program, 'a_seed');
    const time = gl.getUniformLocation(program, 'u_time');
    const resolution = gl.getUniformLocation(program, 'u_resolution');
    const pointerUniform = gl.getUniformLocation(program, 'u_pointer');

    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 12, 0);
    gl.enableVertexAttribArray(seed);
    gl.vertexAttribPointer(seed, 1, gl.FLOAT, false, 12, 8);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    const resize = () => {
      const scale = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * scale);
      canvas.height = Math.floor(window.innerHeight * scale);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const render = (now) => {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(time, now * 0.001);
      gl.uniform2f(resolution, window.innerWidth, window.innerHeight);
      gl.uniform2f(pointerUniform, pointer.x, pointer.y);
      gl.drawArrays(gl.POINTS, 0, count);
      requestAnimationFrame(render);
    };

    resize();
    requestAnimationFrame(render);
    window.addEventListener('resize', resize, { passive: true });
  }
}
