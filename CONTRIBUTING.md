# Contribuindo para Sherlock Holmes: O Detetive Digital

Obrigado pelo seu interesse em contribuir! Este projeto está aberto a contribuições da comunidade.

## 🚀 Como Contribuir

### 1. Fork o Projeto
```bash
# Clone seu fork
git clone https://github.com/SEU_USUARIO/sherlock-holmes-digital-detective.git
cd sherlock-holmes-digital-detective
```

### 2. Configure o Ambiente
```bash
# Instale as dependências
npm install

# Configure a API key
cp .env.example .env
# Edite o .env com sua chave do Gemini
```

### 3. Crie uma Branch
```bash
git checkout -b feature/nova-funcionalidade
# ou
git checkout -b fix/correcao-bug
```

### 4. Desenvolva e Teste
```bash
# Execute o projeto localmente
npm run dev

# Verifique tipos TypeScript
npm run build
```

### 5. Commit e Push
```bash
git add .
git commit -m "feat: adiciona nova funcionalidade X"
git push origin feature/nova-funcionalidade
```

### 6. Abra um Pull Request
- Descreva claramente as mudanças
- Inclua screenshots se necessário
- Referencie issues relacionadas

## 📋 Padrões de Código

### Commits
Usamos [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` mudanças na documentação
- `style:` formatação, sem mudança de lógica
- `refactor:` refatoração de código
- `test:` adição ou correção de testes
- `chore:` tarefas de manutenção

### TypeScript
- Use tipagem forte sempre que possível
- Evite `any`, prefira `unknown` quando necessário
- Crie interfaces para objetos complexos
- Use enums para constantes relacionadas

### React
- Componentes funcionais com Hooks
- Use `useCallback` para funções em dependências
- Use `useMemo` para cálculos custosos
- Mantenha componentes pequenos e focados

### CSS/Tailwind
- Use classes utilitárias do Tailwind
- CSS customizado apenas quando necessário
- Mantenha responsividade em mente
- Use variáveis CSS para temas

## 🐛 Reportando Bugs

### Template de Issue
```markdown
**Descrição do Bug**
Descrição clara e concisa do problema.

**Passos para Reproduzir**
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

**Comportamento Esperado**
O que você esperava que acontecesse.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente:**
- OS: [ex: Windows 10]
- Browser: [ex: Chrome 91]
- Node.js: [ex: 18.17.0]
```

## ✨ Sugerindo Funcionalidades

### Template de Feature Request
```markdown
**A funcionalidade está relacionada a um problema?**
Descrição clara do problema. Ex: "Fico frustrado quando [...]"

**Descreva a solução que você gostaria**
Descrição clara e concisa da funcionalidade.

**Descreva alternativas consideradas**
Outras abordagens que você considerou.

**Contexto adicional**
Qualquer outro contexto ou screenshots.
```

## 🎯 Áreas para Contribuição

### Alta Prioridade
- [ ] Testes unitários com Jest/Vitest
- [ ] Testes de integração com Cypress
- [ ] Melhorias de acessibilidade (ARIA)
- [ ] Internacionalização (i18n)
- [ ] PWA support

### Média Prioridade
- [ ] Mais temas visuais
- [ ] Sistema de salvamento de progresso
- [ ] Compartilhamento de histórias
- [ ] Análise de sentimentos nas escolhas
- [ ] Sistema de conquistas

### Baixa Prioridade
- [ ] Integração com outras IAs
- [ ] Modo multiplayer
- [ ] Geração de imagens para cenas
- [ ] Narração por voz
- [ ] Modo offline

## 🔧 Configuração de Desenvolvimento

### Extensões VS Code Recomendadas
```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "ms-vscode.vscode-eslint"
  ]
}
```

### Scripts Úteis
```bash
# Desenvolvimento
npm run dev              # Servidor de desenvolvimento
npm run build            # Build de produção
npm run preview          # Preview do build

# Qualidade de código
npm run lint             # ESLint check
npm run type-check       # TypeScript check
npm run format           # Prettier format
```

## 📞 Contato

- Abra uma [Issue](../../issues) para bugs ou features
- Inicie uma [Discussion](../../discussions) para ideias gerais
- Entre em contato via [email] para questões sensíveis

## 📄 Código de Conduta

Este projeto adere aos padrões da comunidade open source. Seja respeitoso, inclusivo e construtivo em todas as interações.

---

**Obrigado por contribuir! 🎉**
