# Sherlock Holmes: O Detetive Digital

Um jogo interativo de mistério baseado em texto que utiliza IA generativa para criar narrativas dinâmicas no universo de Sherlock Holmes. Este projeto demonstra a integração de tecnologias modernas de frontend com APIs de IA para criar experiências narrativas imersivas.

![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178c6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646cff?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38b2ac?style=flat&logo=tailwind-css&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-4285f4?style=flat&logo=google&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

## 🎮 Mecânicas do Jogo

### Como Funciona
- **Narrativa Dinâmica**: Cada história é gerada em tempo real pela IA do Google Gemini
- **Escolhas Múltiplas**: O jogador assume o papel de Sherlock Holmes e toma decisões que influenciam a narrativa
- **Sistema de Pistas**: Evidências são coletadas ao longo da investigação e exibidas em um painel lateral
- **Atmosfera Vitoriana**: Interface temática com fontes e cores que remetem à Londres do século XIX

### Fluxo de Jogo
1. **Início**: Um novo cliente chega a 221B Baker Street com um mistério
2. **Investigação**: O jogador escolhe entre 3 opções de ação a cada cena
3. **Coleta de Pistas**: Evidências importantes são automaticamente adicionadas ao painel de pistas
4. **Resolução**: O mistério se desenvolve ao longo de 10-15 interações até a conclusão

## 🚀 Tecnologias e Técnicas Utilizadas

### Frontend
- **React 19** com TypeScript para desenvolvimento type-safe
- **Vite** como build tool e dev server para desenvolvimento rápido
- **Tailwind CSS** para estilização responsiva e consistente
- **Custom CSS** para animações e scrollbars personalizadas

### IA e Backend
- **Google Gemini 2.5 Flash** para geração de narrativas dinâmicas
- **@google/genai** SDK oficial para integração com a API
- **Prompt Engineering** para instruções de sistema otimizadas
- **JSON parsing** robusto com tratamento de erros

### Arquitetura e Padrões
- **Componentes Funcionais** com React Hooks
- **TypeScript Interfaces** para tipagem forte de dados
- **Estado Global** gerenciado com useState e useCallback
- **Separação de Responsabilidades** com services e components
- **Error Handling** abrangente para falhas de API
- **Responsive Design** para diferentes tamanhos de tela

### Otimizações
- **Memoização** com useCallback para performance
- **Loading States** para feedback visual durante chamadas de API
- **Scroll Automático** para melhor UX em conversas longas
- **Environment Variables** para configuração segura de API keys

## 📋 Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **Chave da API do Google Gemini** ([obtenha aqui](https://makersuite.google.com/app/apikey))

## ⚙️ Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone [url-do-repositorio]
   cd sherlock-holmes_-the-digital-detective
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure a chave da API**:
   - Copie o arquivo `.env.example` para `.env`
   - Substitua `your_gemini_api_key_here` pela sua chave da API do Gemini

4. **Execute o projeto**:
   ```bash
   npm run dev
   ```

5. **Acesse o jogo**:
   O Vite mostrará a URL no terminal (geralmente `http://localhost:5173` ou próxima porta disponível)

## 🏗️ Build para Produção

```bash
npm run build
npm run preview
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Fork este repositório
2. Conecte com [Vercel](https://vercel.com)
3. Configure a variável `GEMINI_API_KEY` nas Environment Variables
4. Deploy automático a cada push!

### Netlify
1. Fork este repositório
2. Conecte com [Netlify](https://netlify.com)
3. Configure Build command: `npm run build`
4. Configure Publish directory: `dist`
5. Adicione `GEMINI_API_KEY` nas Environment Variables

### GitHub Pages
```bash
npm run build
# Upload da pasta dist/ para seu repositório gh-pages
```

## 🎯 Características Técnicas Destacadas

### Gerenciamento de Estado Complexo
- **GameState enum** para controle de fluxo da aplicação
- **History tracking** para manter contexto das escolhas
- **Dynamic UI rendering** baseado no estado atual

### Integração com IA
- **Prompt engineering** para respostas consistentes em português
- **JSON schema validation** para garantir formato correto das respostas
- **Fallback handling** para casos de erro na API

### UX/UI Avançada
- **Tema vitoriano** com fontes Google Fonts personalizadas
- **Animações CSS** para transições suaves
- **Layout responsivo** com CSS Grid e Flexbox
- **Custom scrollbars** para manter a estética

### Code Quality
- **TypeScript strict mode** para máxima type safety
- **ESLint configuration** para código consistente
- **Modular architecture** para fácil manutenção
- **Error boundaries** implícitos com try/catch

## 📝 Estrutura do Projeto

```
├── components/          # Componentes React reutilizáveis
│   ├── CluePanel.tsx   # Painel de pistas lateral
│   └── LoadingSpinner.tsx # Spinner de carregamento temático
├── services/           # Lógica de integração com APIs
│   └── geminiService.ts # Service para Google Gemini
├── types.ts           # Definições TypeScript
├── App.tsx            # Componente principal
├── index.tsx          # Entry point da aplicação
└── vite.config.ts     # Configuração do Vite
```

## 🌟 Demonstração de Habilidades

Este projeto showcases:
- **Integração com APIs de IA** modernas
- **Desenvolvimento full-stack** com foco em frontend
- **TypeScript avançado** com tipos complexos
- **React patterns** modernos e eficientes
- **Responsive design** e acessibilidade
- **Error handling** robusto
- **Performance optimization** com memoização
- **Clean code** e arquitetura escalável

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Veja [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes sobre como contribuir.

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Peter Slater**
- GitHub: [@slaterpeter](https://github.com/slaterpeter)
- LinkedIn: [Acessar](https://linkedin.com/in/slaterpeter)
- Email: slater.psp@gmail.com

## 🙏 Agradecimentos

- [Sir Arthur Conan Doyle](https://en.wikipedia.org/wiki/Arthur_Conan_Doyle) pela criação do universo de Sherlock Holmes
- [Google](https://ai.google.dev/) pela API do Gemini
- Comunidade open-source pelas ferramentas incríveis
- [Tailwind CSS](https://tailwindcss.com/) pela estilização
- [React](https://react.dev/) pela framework
- [Vite](https://vitejs.dev/) pelo build tool

---

<div align="center">
  <p>Feito com ❤️ e muita dedução lógica</p>
  <p>⭐ Se você gostou do projeto, deixe uma estrela!</p>
</div>
