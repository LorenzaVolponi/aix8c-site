# Relatório de Auto-Correção

- ✅ Instalação de dependências: sucesso
- ✅ Lint com correção automática: sucesso
- ❌ Correções de segurança (lockfile): falhou

```

up to date, audited 483 packages in 6s

76 packages are looking for funding
  run `npm fund` for details

# npm audit report

esbuild  <=0.24.2
Severity: moderate
esbuild enables any website to send any requests to the development server and read the response - https://github.com/advisories/GHSA-67mh-4wv8-2f99
fix available via `npm audit fix --force`
Will install vite@8.0.10, which is a breaking change
node_modules/esbuild
  vite  <=6.4.1
  Depends on vulnerable versions of esbuild
  node_modules/vite


2 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force
```
- ✅ Typecheck de validação: sucesso
- ✅ Build de validação: sucesso
- ✅ Gate final de lint: sucesso
- ✅ Gate final de typecheck: sucesso
- ✅ Gate final de build: sucesso

✅ Resultado final: PR apta após auto-correção.
