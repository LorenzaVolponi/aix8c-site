# Relatório de Auto-Correção

- ✅ Instalação de dependências: sucesso
- ❌ Lint com correção automática: falhou

```

> vite_react_shadcn_ts@0.0.0 lint
> eslint . --fix


/home/runner/work/aix8c-site/aix8c-site/src/components/Navbar.tsx
  233:29  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/runner/work/aix8c-site/aix8c-site/src/components/hero/canvas/PerformanceMonitor.ts
  25:34  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/runner/work/aix8c-site/aix8c-site/src/components/hero/hooks/useOptimizedAnimations.ts
  21:18  error  React Hook "useTransform" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks
  22:15  error  React Hook "useTransform" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks
  23:21  error  React Hook "useTransform" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks
  24:17  error  React Hook "useTransform" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks
  25:21  error  React Hook "useTransform" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/badge.tsx
  36:17  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/button.tsx
  56:18  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/command.tsx
  24:11  error  An interface declaring no members is equivalent to its supertype  @typescript-eslint/no-empty-object-type

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/form.tsx
  168:3  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/navigation-menu.tsx
  119:3  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/sidebar.tsx
  760:3  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/sonner.tsx
  27:19  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/textarea.tsx
  5:18  error  An interface declaring no members is equivalent to its supertype  @typescript-eslint/no-empty-object-type

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/toggle.tsx
  43:18  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/hooks/useAdvancedAnalytics.ts
  7:22  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/runner/work/aix8c-site/aix8c-site/src/hooks/useAdvancedSEO.ts
  14:22  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/runner/work/aix8c-site/aix8c-site/src/hooks/usePerformanceMonitor.ts
  53:40  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/runner/work/aix8c-site/aix8c-site/tailwind.config.ts
  178:12  error  A `require()` style import is forbidden  @typescript-eslint/no-require-imports

✖ 20 problems (13 errors, 7 warnings)

```
- ❌ Correções de segurança (lockfile): falhou

```

up to date, audited 486 packages in 9s

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
    @vitejs/plugin-react-swc  <=3.7.1
    Depends on vulnerable versions of vite
    node_modules/@vitejs/plugin-react-swc
    lovable-tagger  <=1.1.9
    Depends on vulnerable versions of vite
    node_modules/lovable-tagger

4 moderate severity vulnerabilities

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force
```
- ✅ Build de validação: sucesso
- ❌ Gate final de lint: falhou

```

> vite_react_shadcn_ts@0.0.0 lint
> eslint .


/home/runner/work/aix8c-site/aix8c-site/src/components/Navbar.tsx
  233:29  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/runner/work/aix8c-site/aix8c-site/src/components/hero/canvas/PerformanceMonitor.ts
  25:34  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/runner/work/aix8c-site/aix8c-site/src/components/hero/hooks/useOptimizedAnimations.ts
  21:18  error  React Hook "useTransform" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks
  22:15  error  React Hook "useTransform" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks
  23:21  error  React Hook "useTransform" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks
  24:17  error  React Hook "useTransform" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks
  25:21  error  React Hook "useTransform" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/badge.tsx
  36:17  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/button.tsx
  56:18  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/command.tsx
  24:11  error  An interface declaring no members is equivalent to its supertype  @typescript-eslint/no-empty-object-type

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/form.tsx
  168:3  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/navigation-menu.tsx
  119:3  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/sidebar.tsx
  760:3  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/sonner.tsx
  27:19  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/textarea.tsx
  5:18  error  An interface declaring no members is equivalent to its supertype  @typescript-eslint/no-empty-object-type

/home/runner/work/aix8c-site/aix8c-site/src/components/ui/toggle.tsx
  43:18  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

/home/runner/work/aix8c-site/aix8c-site/src/hooks/useAdvancedAnalytics.ts
  7:22  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/runner/work/aix8c-site/aix8c-site/src/hooks/useAdvancedSEO.ts
  14:22  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/runner/work/aix8c-site/aix8c-site/src/hooks/usePerformanceMonitor.ts
  53:40  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/runner/work/aix8c-site/aix8c-site/tailwind.config.ts
  178:12  error  A `require()` style import is forbidden  @typescript-eslint/no-require-imports

✖ 20 problems (13 errors, 7 warnings)

```
- ✅ Gate final de build: sucesso

❌ Resultado final: auto-correção parcial; intervenção manual necessária.
