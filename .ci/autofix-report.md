# Relatório de Auto-Correção

- ✅ Instalação de dependências: sucesso
- ❌ Lint com correção automática: falhou

```

> vite_react_shadcn_ts@0.0.0 lint
> eslint . --fix


Oops! Something went wrong! :(

ESLint: 9.39.4

TypeError: Error while loading rule '@typescript-eslint/no-unused-expressions': Cannot read properties of undefined (reading 'allowShortCircuit')
Occurred while linting /home/runner/work/aix8c-site/aix8c-site/src/App.tsx
    at Object.create (/home/runner/work/aix8c-site/aix8c-site/node_modules/eslint/lib/rules/no-unused-expressions.js:85:5)
    at create (/home/runner/work/aix8c-site/aix8c-site/node_modules/@typescript-eslint/eslint-plugin/dist/rules/no-unused-expressions.js:28:32)
    at Object.create (/home/runner/work/aix8c-site/aix8c-site/node_modules/@typescript-eslint/utils/dist/eslint-utils/RuleCreator.js:31:20)
    at createRuleListeners (/home/runner/work/aix8c-site/aix8c-site/node_modules/eslint/lib/linter/linter.js:1019:15)
    at /home/runner/work/aix8c-site/aix8c-site/node_modules/eslint/lib/linter/linter.js:1151:7
    at Array.forEach (<anonymous>)
    at runRules (/home/runner/work/aix8c-site/aix8c-site/node_modules/eslint/lib/linter/linter.js:1085:31)
    at #flatVerifyWithoutProcessors (/home/runner/work/aix8c-site/aix8c-site/node_modules/eslint/lib/linter/linter.js:2115:4)
    at Linter._verifyWithFlatConfigArrayAndWithoutProcessors (/home/runner/work/aix8c-site/aix8c-site/node_modules/eslint/lib/linter/linter.js:2203:43)
    at Linter._verifyWithFlatConfigArray (/home/runner/work/aix8c-site/aix8c-site/node_modules/eslint/lib/linter/linter.js:2306:15)
```
- ❌ Correções de segurança (lockfile): falhou

```

up to date, audited 483 packages in 4s

76 packages are looking for funding
  run `npm fund` for details

# npm audit report

esbuild  <=0.24.2
Severity: moderate
esbuild enables any website to send any requests to the development server and read the response - https://github.com/advisories/GHSA-67mh-4wv8-2f99
fix available via `npm audit fix --force`
Will install vite@8.0.3, which is a breaking change
node_modules/esbuild
  vite  0.11.0 - 6.1.6
  Depends on vulnerable versions of esbuild
  node_modules/vite

2 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force
```
- ✅ Build de validação: sucesso
- ❌ Gate final de lint: falhou

```

> vite_react_shadcn_ts@0.0.0 lint
> eslint .


Oops! Something went wrong! :(

ESLint: 9.39.4

TypeError: Error while loading rule '@typescript-eslint/no-unused-expressions': Cannot read properties of undefined (reading 'allowShortCircuit')
Occurred while linting /home/runner/work/aix8c-site/aix8c-site/src/App.tsx
    at Object.create (/home/runner/work/aix8c-site/aix8c-site/node_modules/eslint/lib/rules/no-unused-expressions.js:85:5)
    at create (/home/runner/work/aix8c-site/aix8c-site/node_modules/@typescript-eslint/eslint-plugin/dist/rules/no-unused-expressions.js:28:32)
    at Object.create (/home/runner/work/aix8c-site/aix8c-site/node_modules/@typescript-eslint/utils/dist/eslint-utils/RuleCreator.js:31:20)
    at createRuleListeners (/home/runner/work/aix8c-site/aix8c-site/node_modules/eslint/lib/linter/linter.js:1019:15)
    at /home/runner/work/aix8c-site/aix8c-site/node_modules/eslint/lib/linter/linter.js:1151:7
    at Array.forEach (<anonymous>)
    at runRules (/home/runner/work/aix8c-site/aix8c-site/node_modules/eslint/lib/linter/linter.js:1085:31)
    at #flatVerifyWithoutProcessors (/home/runner/work/aix8c-site/aix8c-site/node_modules/eslint/lib/linter/linter.js:2115:4)
    at Linter._verifyWithFlatConfigArrayAndWithoutProcessors (/home/runner/work/aix8c-site/aix8c-site/node_modules/eslint/lib/linter/linter.js:2203:43)
    at Linter._verifyWithFlatConfigArray (/home/runner/work/aix8c-site/aix8c-site/node_modules/eslint/lib/linter/linter.js:2306:15)
```
- ✅ Gate final de build: sucesso

❌ Resultado final: auto-correção parcial; intervenção manual necessária.
