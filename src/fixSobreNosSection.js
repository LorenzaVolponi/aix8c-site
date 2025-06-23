const fs = require('fs');
const path = require('path');

// Função para verificar se um arquivo existe
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

// Função para corrigir referências ao SobreNosSection
function fixSobreNosSection() {
  const lazyComponentsPath = path.join(__dirname, 'src', 'components', 'OptimizedIndex', 'LazyComponents.tsx');
  const optimizedIndexPath = path.join(__dirname, 'src', 'pages', 'OptimizedIndex.tsx');

  // Verifica se os arquivos existem
  if (!fileExists(lazyComponentsPath)) {
    console.error(`Arquivo não encontrado: ${lazyComponentsPath}`);
    return;
  }
  if (!fileExists(optimizedIndexPath)) {
    console.error(`Arquivo não encontrado: ${optimizedIndexPath}`);
    return;
  }

  // Lê o conteúdo dos arquivos
  let lazyComponentsContent = fs.readFileSync(lazyComponentsPath, 'utf-8');
  let optimizedIndexContent = fs.readFileSync(optimizedIndexPath, 'utf-8');

  // Verifica se o SobreNosSection está sendo exportado no LazyComponents.tsx
  const sobreNosExportRegex = /export\s+const\s+SobreNosSection\s*=\s*lazy\s*\([^)]+\)\s*;/;

  if (!sobreNosExportRegex.test(lazyComponentsContent)) {
    console.log('SobreNosSection não está definido em LazyComponents.tsx. Removendo referências...');

    // Remove a importação do SobreNosSection no OptimizedIndex.tsx
    const sobreNosImportRegex = /import\s+{\s*SobreNosSection\s+}\s+from\s+['"]\.\.\/components\/OptimizedIndex\/LazyComponents['"];?/;
    optimizedIndexContent = optimizedIndexContent.replace(sobreNosImportRegex, '');

    // Remove qualquer uso do <SobreNosSection /> no OptimizedIndex.tsx
    const sobreNosUsageRegex = /<SobreNosSection\s*\/?>/g;
    optimizedIndexContent = optimizedIndexContent.replace(sobreNosUsageRegex, '');

    // Salva o arquivo modificado
    fs.writeFileSync(optimizedIndexPath, optimizedIndexContent, 'utf-8');
    console.log('Referências ao SobreNosSection removidas com sucesso.');
  } else {
    console.log('SobreNosSection já está definido em LazyComponents.tsx. Nada a corrigir.');
  }
}

// Executa a correção
fixSobreNosSection();
