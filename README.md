# RECICLA-MAIS — Plataforma Web para ONGs

Aplicação web desenvolvida para uma organização fictícia do terceiro setor, permitindo à ONG divulgar seus projetos sociais, captar recursos, cadastrar voluntários e apresentar sua missão, valores e visão.

Projeto desenvolvido como desafio acadêmico de Desenvolvimento Front-end, com foco na transformação de uma estrutura HTML já elaborada em um ambiente responsivo e profissional.

## 🚀 Tecnologias utilizadas

- **HTML5** semântico
- **CSS3**: layout responsivo, Grid/Flexbox, estados interativos (hover, focus, active)
- **JavaScript**: módulos independentes para animações, formulário, máscaras de input, modal, navegação, armazenamento local e notificações (toast)
- **Git & GitHub**: versionamento seguindo o padrão GitFlow

## 📁 Estrutura do projeto

```
projeto-ong2/
├── .gitattributes      # Configurações de detecção de linguagens do GitHub
├── css/
│   └── style.css       # Estilos da aplicação (layout, grid, tipografia, estados interativos)
├── imgs/
│   ├── img1.png ... img6.png
│   ├── logo.png'
│   ├── missão.png
│   ├── valores.png
│   └── visão.png
├── js/
│   ├── animations.js   # Animações de interface
│   ├── form.js         # Lógica do formulário
│   ├── masks.js        # Máscaras de campos (telefone, CPF etc.)
│   ├── modal.js        # Comportamento de janelas modais
│   ├── navigation.js   # Navegação e menu
│   ├── script.js       # Script geral da aplicação
│   ├── script.txt      # Anotações / rascunho de script
│   ├── storage.js      # Persistência via localStorage
│   ├── theme.js        # Lógica de alternância de tema
│   ├── toast.js        # Notificações visuais (toast)
│   └── validation.js   # Validação de formulários
├── index.html          # Página principal do site (na raiz do projeto)
└── README.md           # Documentação do projeto
```

## ⚙️ Pré-requisitos

- Navegador atualizado (Chrome, Firefox, Edge ou Brave)
- VS Code com a extensão **Live Server** instalada (recomendado, para melhor experiência)

## 🔧 Instalação e execução local

1. Clone o repositório:
   ```
   git clone https://github.com/frotss/projeto-ong2.git
   ```
2. Abra a pasta do projeto no VS Code.
3. Clique com o botão direito no arquivo `html/index.html`.
4. Selecione **"Open with Live Server"** (ou apenas abra o arquivo diretamente no navegador).

Não há dependências para instalar — o projeto usa apenas HTML, CSS e JavaScript nativo.

## 🌳 Estratégia de versionamento (GitFlow)

- **`main`**: versão estável do projeto
- **`develop`**: desenvolvimento contínuo
- **`feature/*`**: uma branch por funcionalidade nova (ex: `feature/ajustar-tipografia`)
- **`hotfix/*`**: correções urgentes (ex: `hotfix/correcao-menu`)

## 📋 Gestão do projeto

O acompanhamento das tarefas é feito através de *issues* e *milestones* no GitHub, com a integração de código realizada via *Pull Requests*, documentando o motivo e a implementação de cada alteração antes da fusão com a `develop`.

## 📄 Licença

Projeto acadêmico, desenvolvido para fins educacionais.

## 👤 Autor

Desenvolvido por Matheus Frotscher.