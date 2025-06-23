const fs = require('fs');
const path = require('path');

// Função para verificar se um arquivo existe
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

// Função para remover referências ao ContactSection
function fixContactSection() {
  const lazyComponentsPath = path.join(__dirname, 'src', 'components', 'OptimizedIndex', 'LazyComponents.tsx');

  // Verifica se o arquivo LazyComponents.tsx existe
  if (!fileExists(lazyComponentsPath)) {
    console.error(`Arquivo não encontrado: ${lazyComponentsPath}`);
    return;
  }

  // Lê o conteúdo do arquivo LazyComponents.tsx
  let content = fs.readFileSync(lazyComponentsPath, 'utf-8');

  // Expressões regulares para identificar importações e usos do ContactSection
  const contactSectionImportRegex = /export\s+const\s+ContactSection\s*=\s*lazy\s*\([^)]+\)\s*;/;
  const contactSectionUsageRegex = /<ContactSection\s*\/?>/;

  // Remove a definição do ContactSection usando lazy
  content = content.replace(contactSectionImportRegex, '');

  // Remove qualquer uso do <ContactSection />
  content = content.replace(contactSectionUsageRegex, '');

  // Salva o arquivo modificado
  fs.writeFileSync(lazyComponentsPath, content, 'utf-8');
  console.log('Referências ao ContactSection removidas com sucesso.');
}

// Executa a correção
fixContactSection();
