# Relatório de Auto-Correção

- ✅ Instalação de dependências: sucesso
- ❌ Lint com correção automática: falhou

```

> aix8c-site@1.0.0 lint
> eslint . --fix


/home/runner/work/aix8c-site/aix8c-site/src/components/PortfolioSection.tsx
  101:16  error  Parsing error: Expected corresponding JSX closing tag for 'div'

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/badge.tsx
  36:17  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/button.tsx
  56:18  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/form.tsx
  168:3  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/navigation-menu.tsx
  119:3  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/sidebar.tsx
  760:3  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/sonner.tsx
  27:19  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/toggle.tsx
  43:18  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

✖ 8 problems (1 error, 7 warnings)

```
- ❌ Correções de segurança (lockfile): falhou

```

up to date, audited 484 packages in 7s

# npm audit report

esbuild  <=0.24.2
Severity: moderate
esbuild enables any website to send any requests to the development server and read the response - https://github.com/advisories/GHSA-67mh-4wv8-2f99
fix available via `npm audit fix --force`
Will install vite@8.0.14, which is a breaking change
node_modules/esbuild
  vite  <=6.4.1
  Depends on vulnerable versions of esbuild
  node_modules/vite


2 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force
```
- ✅ Build de validação: sucesso
- ❌ Gate final de lint: falhou

```

> aix8c-site@1.0.0 lint
> eslint .


/home/runner/work/aix8c-site/aix8c-site/src/components/PortfolioSection.tsx
  101:16  error  Parsing error: Expected corresponding JSX closing tag for 'div'

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/badge.tsx
  36:17  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/button.tsx
  56:18  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/form.tsx
  168:3  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/navigation-menu.tsx
  119:3  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/sidebar.tsx
  760:3  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/sonner.tsx
  27:19  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/toggle.tsx
  43:18  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

✖ 8 problems (1 error, 7 warnings)

```
- ✅ Gate final de build: sucesso

❌ Resultado final: auto-correção parcial; intervenção manual necessária.
