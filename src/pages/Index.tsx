import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fragments = [
  { title: 'Oceano Interno', phrase: 'A maré aprende o nome de quem atravessa sem mapa.', category: 'Água' },
  { title: 'A Alma e as Máscaras', phrase: 'Toda defesa também é uma forma de oração.', category: 'Máscara' },
  { title: 'Diamante em Ruptura', phrase: 'A pressão não quebra: lapida.', category: 'Diamante' },
  { title: 'A Casa das Marés', phrase: 'Entre ruínas e sal, a memória floresce.', category: 'Memória' },
  { title: 'Memória em Flor', phrase: 'A delicadeza pode ser insurgente.', category: 'Flor' },
  { title: 'Horizonte de Vidro', phrase: 'O futuro reflete aquilo que ousamos olhar.', category: 'Horizonte' },
];

const symbols = [
  ['Água', 'Emoção, travessia, profundidade, renascimento'],
  ['Diamante', 'Pressão, lapidação, valor, permanência'],
  ['Flores', 'Delicadeza, beleza insurgente, vida'],
  ['Máscaras', 'Identidade, defesa, performance social'],
  ['Horizonte', 'Futuro, desejo, deslocamento'],
  ['Neblina', 'Mistério, memória, sonho'],
  ['Luz', 'Revelação, consciência, ruptura'],
] as const;

const Index = () => {
  const reduce = useReducedMotion();
  const [soundOn, setSoundOn] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;
    const c = document.createElement('div');
    c.className = 'custom-cursor';
    document.body.appendChild(c);
    const onMove = (e: MouseEvent) => {
      c.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      c.remove();
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (soundOn) audioRef.current.play().catch(() => undefined);
    else audioRef.current.pause();
  }, [soundOn]);

  const particleStyle = useMemo(
    () => ({ transform: `translate(${mouse.x * 0.01}px, ${mouse.y * 0.01}px)` }),
    [mouse.x, mouse.y],
  );

  return (
    <div className="min-h-screen bg-[#07090f] text-[#f6f3ef] overflow-x-hidden">
      <audio ref={audioRef} loop src="https://cdn.pixabay.com/audio/2022/03/15/audio_c8d42cd5f7.mp3" />
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#07090f]/65 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-xs tracking-[0.2em] uppercase text-white/70">
          <span>VOLPONI</span>
          <button onClick={() => setSoundOn((v) => !v)} className="rounded-full border border-white/20 px-4 py-2 hover:border-white/50">
            {soundOn ? 'Desativar atmosfera' : 'Ativar atmosfera'}
          </button>
        </nav>
      </header>

      <main className="relative">
        <section className="relative flex min-h-screen items-center justify-center px-6 pt-24">
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-60"
            animate={reduce ? {} : { backgroundPosition: ['50% 50%', '52% 48%', '50% 50%'] }}
            transition={{ repeat: Infinity, duration: 16 }}
            style={{
              ...particleStyle,
              backgroundImage:
                'radial-gradient(circle at 20% 30%, rgba(191,213,255,.2), transparent 35%), radial-gradient(circle at 70% 60%, rgba(90,106,170,.22), transparent 45%), linear-gradient(180deg,#07090f,#0b1422 45%,#090b13)',
            }}
          />
          <div className="relative z-10 max-w-4xl text-center">
            <p className="mb-5 text-xs tracking-[0.25em] text-white/60">VOLPONI NÃO SE APRESENTA. VOLPONI EMERGE.</p>
            <h1 className="mb-6 font-serif text-6xl md:text-8xl">VOLPONI</h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/75">Uma linguagem entre sombra, água, memória e criação.</p>
            <div className="flex justify-center gap-4">
              <a href="#manifesto" className="rounded-full border border-white/35 px-7 py-3 hover:border-white">Entrar no universo</a>
              <a href="#fragmentos" className="rounded-full border border-[#c5b89a]/40 bg-[#c5b89a]/10 px-7 py-3">Ver fragmentos</a>
            </div>
          </div>
        </section>

        <section id="manifesto" className="mx-auto max-w-4xl px-6 py-28">
          <h2 className="mb-10 font-serif text-5xl">Manifesto</h2>
          <p className="space-y-4 text-xl leading-relaxed text-white/85">
            VOLPONI nasce onde a lógica encontra o abismo sensível.<br /><br />
            É uma linguagem construída entre o visível e o invisível, entre matéria e memória, entre ruptura e beleza.<br /><br />
            Cada imagem, palavra e atmosfera carrega uma tentativa de traduzir aquilo que não cabe no discurso comum: a alma em estado bruto, a inteligência como oceano, a criação como sobrevivência e revelação.<br /><br />
            Este não é um portfólio. É um campo simbólico.
          </p>
        </section>

        <section id="fragmentos" className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-12 font-serif text-5xl">Fragmentos de Eternidade</h2>
          <div className="grid gap-6 md:grid-cols-12">
            {fragments.map((f, i) => (
              <motion.article key={f.title} className={`group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-7 backdrop-blur-xl ${i % 3 === 0 ? 'md:col-span-7' : 'md:col-span-5'}`} whileHover={{ y: -8 }}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(211,228,255,.12),transparent_48%)]" />
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/55">{f.category}</p>
                <h3 className="relative mb-4 font-serif text-3xl">{f.title}</h3>
                <p className="relative text-white/75">{f.phrase}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="mb-8 font-serif text-5xl">A linguagem</h2>
            <p className="text-lg leading-relaxed text-white/80">VOLPONI opera por camadas: imagem, símbolo, frase, silêncio, contraste e presença. A criação nasce da tensão entre beleza e ferida, delicadeza e força, sonho e precisão. A obra não busca decorar o mundo. Busca revelar aquilo que estava soterrado.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-8">
            <h3 className="mb-6 font-serif text-3xl">Universo simbólico</h3>
            <div className="space-y-4">
              {symbols.map(([s, d]) => (
                <div key={s} className="rounded-2xl border border-white/10 p-4 hover:border-white/35">
                  <p className="font-semibold text-[#e6dece]">{s}</p>
                  <p className="text-sm text-white/70">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="px-6 py-32 text-center">
          <h2 className="mb-6 font-serif text-6xl">Entre no campo</h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-white/75">Para colaborações artísticas, projetos sensoriais, exposições digitais, narrativas visuais ou experiências autorais, atravesse a primeira porta.</p>
          <a href="mailto:contato.lorenzavolponi@gmail.com" className="rounded-full border border-[#d7cab2]/40 bg-[#d7cab2]/10 px-8 py-4 text-lg">Abrir conversa</a>
        </section>
      </main>
    </div>
  );
};

export default Index;
