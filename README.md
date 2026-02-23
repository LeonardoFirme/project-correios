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
src/
├── app/
│   ├── api/              # Route Handlers (Endpoints de Rastreio, CEP, Frete e Histórico)
│   ├── busca-cep/        # Página de consulta de endereços
│   ├── precos-prazos/    # Página de cálculo de frete
│   ├── layout.tsx        # Layout global
│   └── page.tsx          # Página inicial (Dashboard de Rastreamento)
├── components/           # Componentes de cliente (SearchTracking, SearchCep, FreightCalculator)
├── services/             # Funções de fetch isoladas para comunicação com a API interna
└── types/                # Interfaces TypeScript globais do domínio