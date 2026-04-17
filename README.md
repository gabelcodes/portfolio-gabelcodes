# 🌿 portfolio

> Portfólio pessoal desenvolvido com HTML5, CSS3 e JavaScript vanilla — com cursor animado, partículas interativas e deploy contínuo via Vercel.

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Live%20Preview-00e87a?style=flat-square&logo=vercel)](https://portfolio-gerfesson-abel.vercel.app)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Demonstração](#-demonstração)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Rodar Localmente](#-como-rodar-localmente)
- [Deploy na Vercel](#-deploy-na-vercel)
- [Contato](#-contato)
- [Licença](#-licença)

---

## 🌿 Sobre o Projeto

Portfólio pessoal de **Gerfesson Abel**, estudante de Engenharia de Software na Universidade Estácio de Sá (2º período), residente em **Manaus, Amazonas — Brasil**.

O projeto foi desenvolvido com foco em:

- **Zero dependências externas** — HTML, CSS e JS puros, sem frameworks
- **Performance** — sem bundle, carregamento direto no browser
- **Experiência imersiva** — cursor customizado com trail de partículas via Canvas API
- **Identidade visual única** — tema escuro inspirado na Amazônia, tipografia forte e grid animado

---

## 🔗 Demonstração

| Ambiente | URL |
|---|---|
| **Produção (Vercel)** | [portfolio-gerfesson-abel.vercel.app](https://portfolio-gerfesson-abel.vercel.app) |
| **Repositório** | [github.com/gabelcodes/portfolio](https://github.com/gabelcodes/portfolio) |

---

## ✨ Funcionalidades

- [x] Cursor personalizado com partículas animadas (Canvas API)
- [x] Anel seguidor com interpolação linear (lerp)
- [x] Seções com scroll reveal via `IntersectionObserver`
- [x] Nav com link ativo destacado conforme scroll
- [x] Ícones reais das tecnologias via Devicons CDN
- [x] Layout totalmente responsivo (mobile-first)
- [x] Links funcionais: GitHub, LinkedIn e e-mail
- [x] Efeito de grade e ruído no background
- [x] Animações de entrada escalonadas no hero
- [ ] Modo claro/escuro (planejado)
- [ ] Formulário de contato com integração de e-mail (planejado)
- [ ] Seção de blog (planejado)

---

## 🛠 Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica e acessível |
| **CSS3** | Estilização, variáveis CSS, animações e responsividade |
| **JavaScript (ES6+)** | Cursor interativo, Canvas API, IntersectionObserver |
| **Git** | Controle de versão |
| **GitHub** | Hospedagem do repositório |
| **npm** | Gerenciamento de dependências (futuro) |
| **Vercel** | Deploy contínuo via Git |

---

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html       # Estrutura e marcação HTML5
├── style.css        # Estilos, variáveis CSS e animações
├── script.js        # Cursor interativo, scroll reveal e nav
└── README.md        # Documentação do projeto
```

> Os três arquivos (`index.html`, `style.css`, `script.js`) devem estar na **mesma pasta raiz** para que os links relativos funcionem corretamente.

---

## 💻 Como Rodar Localmente

Não há dependências ou etapas de build. Basta clonar e abrir:

```bash
# 1. Clone o repositório
git clone https://github.com/gabelcodes/portfolio.git

# 2. Acesse a pasta
cd portfolio

# 3. Abra no navegador
# Opção A — abrir direto (Windows/macOS/Linux)
open index.html

# Opção B — usar extensão Live Server no VS Code
# Instale a extensão "Live Server" e clique em "Go Live"
```

> **Recomendado:** usar o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code para recarregamento automático durante o desenvolvimento.

---

## 🚀 Deploy na Vercel

O portfólio é um projeto **estático puro** (sem build step), ideal para deploy direto na Vercel.

👉 **[portfolio-gerfesson-abel.vercel.app](https://portfolio-gabelcodes.vercel.app/)**


<div align="center">
  <sub>Feito com 💚 e muito café por <strong>Gerfesson Abel</strong> — Manaus, AM 🌿</sub>
</div>
