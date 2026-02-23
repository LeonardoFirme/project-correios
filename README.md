## ⚠️ Aviso Legal (Disclaimer)

Este projeto foi desenvolvido estritamente para **fins educacionais e de portfólio**. Ele consiste em um clone visual e estrutural do portal dos Correios para demonstrar habilidades em desenvolvimento web (Next.js, TypeScript e Tailwind CSS).

**Não possui vínculo com a Empresa Brasileira de Correios e Telégrafos** e **não deve ser utilizado para fins maliciosos**, phishing ou qualquer tentativa de fraude. Os dados consumidos nas rotas de frete e rastreio provêm de APIs públicas de terceiros e de simulações.

# Clone dos Correios | Rastreamento, CEP e Frete 📦

![Next.js](https://img.shields.io/badge/Next.js_16+-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Uma aplicação web full-stack (Front-end + Route Handlers) desenvolvida para simular e consumir os principais serviços oferecidos pelos Correios do Brasil. O projeto foi construído com foco em performance, tipagem estática e uma interface clássica e responsiva.

## 🚀 Funcionalidades

- **Rastreamento de Objetos:** Consulta em tempo real do status de encomendas utilizando a API pública do Link&Track.
- **Busca de CEP:** Consulta dinâmica de endereços integrando a API pública e gratuita do ViaCEP.
- **Cálculo de Preços e Prazos:** Simulação de cálculo de frete para as modalidades PAC e SEDEX baseada no peso e nos CEPs de origem e destino.
- **Histórico de Buscas:** Armazenamento em memória das últimas consultas de rastreamento realizadas pelo usuário.
- **Tratamento de Erros:** Feedback visual claro e amigável para o usuário em caso de falhas de rede, CEPs inválidos ou códigos inexistentes.

## 💻 Tecnologias Utilizadas

- **[Next.js 16+](https://nextjs.org/):** Framework React com App Router, Server Components e Route Handlers (APIs internas).
- **[React](https://react.dev/):** Biblioteca para construção da interface de usuário.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para garantir segurança e previsibilidade dos dados recebidos das APIs.
- **[Tailwind CSS v4](https://tailwindcss.com/):** Framework de utilitários CSS configurado estritamente com as classes nativas para estilização ágil e responsiva.

## 📂 Estrutura Principal do Projeto

```text
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── cep/route.ts            # Handler para consulta de endereços via ViaCEP
│   │   │   ├── freight/route.ts        # Handler para cálculo de estimativas de frete
│   │   │   ├── history/route.ts        # Handler para persistência de histórico de buscas
│   │   │   └── tracking/route.ts       # Handler para integração com API de rastreio
│   │   ├── (pages)/
│   │   │   ├── busca-cep/page.tsx      # Interface completa de busca de CEP
│   │   │   └── precos-prazos/page.tsx  # Interface do simulador de envios
│   │   ├── favicon.ico                 # Ícone da aba do navegador
│   │   ├── globals.css                 # Importações do Tailwind CSS v4 e temas
│   │   ├── layout.tsx                  # Estrutura principal com Providers e Viewport
│   │   └── page.tsx                    # Landing Page com busca de rastreio inicial
│   ├── components/
│   │   ├── DynamicBanner.tsx           # Slider de banners interativo com autoplay
│   │   ├── FreightCalculator.tsx       # Componente principal de cálculo de frete
│   │   ├── HomeFreightForm.tsx         # Formulário de frete simplificado para a Home
│   │   ├── QuickAccessGrid.tsx         # Grade de ícones para acesso rápido
│   │   ├── SearchCep.tsx               # UI de busca e resultado de endereço
│   │   ├── SearchTracking.tsx          # Motor de busca com timeline de status
│   │   └── TrackingSearchBox.tsx       # Input especializado para códigos de rastreio
│   ├── hooks/
│   │   └── useTracking.ts              # Hook customizado para gerenciar estados de rastreio
│   ├── layouts/
│   │   ├── Footer.tsx                  # Rodapé institucional responsivo
│   │   └── Header.tsx                  # Cabeçalho padrão Gov.br com navegação
│   ├── proxy.ts                        # Configuração de proxying para Next.js 16+
│   ├── services/
│   │   ├── cepService.ts               # Camada de abstração para fetch de endereços
│   │   ├── historyService.ts           # Camada de abstração para histórico do usuário
│   │   └── trackingService.ts          # Camada de abstração para status de objetos
│   └── types/
│       ├── cep.ts                      # Interfaces de dados para endereços
│       ├── freight.ts                  # Interfaces para modalidades de envio
│       ├── history.ts                  # Interfaces para persistência de dados
│       └── tracking.ts                 # Interfaces para eventos de rastreamento
├── public/
│   ├── banners/                        # Imagens 1.png, 2.png e 3.png do slider
│   ├── file.svg, globe.svg...          # Ativos estáticos e ícones de marca
├── postcss.config.mjs                  # Configurações de pós-processamento de CSS
├── tsconfig.json                       # Configurações do compilador TypeScript
└── package.json                        # Dependências e scripts do projeto

```

## 🛠️ Como executar o projeto localmente

```

1. **Clone o repositório:**
```bash
   git clone git@github.com-pessoal:LeonardoFirme/project-correios.git

```

2. **Instale as dependências:**
```bash
npm install

```


3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev

```

4. **Acesse no navegador:** `http://localhost:3000`

---

Desenvolvido por [Leonardo Firme](https://github.com/LeonardoFirme) 🚀