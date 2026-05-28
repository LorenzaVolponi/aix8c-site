# VOLPONI Site

Experiência digital autoral, sensorial e cinematográfica para a persona VOLPONI. A página é estática, dependency-free e foi desenhada para funcionar como obra viva: manifesto poético, galeria simbólica, partículas WebGL, atmosfera sonora opcional e navegação ritual.

## Rodar localmente

```bash
npm ci --offline --ignore-scripts --no-audit --progress=false
npm run dev
```

O comando `npm run dev` serve a pasta `site/` em `http://127.0.0.1:8080`.

## Validar e gerar build

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

- `npm run lint` e `npm run typecheck` executam validações locais em Node.js, sem pacotes externos.
- `npm run build` copia `public/` e `site/` para `dist/`.
- `npm run preview` serve `dist/` em `http://127.0.0.1:4173`.

## Experiência

A estrutura atual preserva a base estática já criada, mas concentra a narrativa exclusivamente em VOLPONI:

- `Hero`: entrada imersiva no universo, com WebGL e frase-núcleo.
- `Manifesto`: texto editorial revelado por scroll.
- `Fragmentos de Eternidade`: galeria viva em grid assimétrico.
- `A linguagem`: mapa visual de camadas simbólicas.
- `Galeria sensorial`: percurso horizontal de atmosferas.
- `Universo simbólico`: mapa de água, diamante, flores, máscaras, horizonte, neblina e luz.
- `Experiência sonora`: ambiência opcional, nunca iniciada automaticamente.
- `Contato`: chamada final poética em “Entre no campo”.

## Deploy Vercel

A Vercel usa `npm run vercel:build`, que executa o build estático e valida a presença de `dist/index.html`.

```bash
npm run vercel:build
```

A configuração de rotas e headers está em `vercel.json`.
