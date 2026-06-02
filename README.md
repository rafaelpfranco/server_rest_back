# ServeRest API - Testes Automatizados com Cypress

Projeto de automacao de testes de API da aplicacao **ServeRest**, desenvolvido com **Cypress** e **JavaScript**.

A suite valida os principais fluxos da API de produtos: cadastro, edicao e exclusao, sempre confirmando o resultado final por meio da consulta/listagem de produtos.

## Stack

- Cypress
- JavaScript
- Dotenv
- Mochawesome Reporter
- ESLint
- Prettier
- Husky
- Commitlint

## Objetivo

Validar os principais fluxos da API de produtos do ServeRest, garantindo que as operacoes de cadastro, edicao e exclusao funcionem corretamente e reflitam os dados esperados na consulta de produtos.

## Estrutura do Projeto

```txt
cypress/
  e2e/
    api/
      produtos.cy.js

  fixtures/
    produtos/
      produto.js

  support/
    commands.js
    e2e.js
    config/
      environment.js
    clients/
      AuthClient.js
      ProdutosClient.js
    assertions/
      authAssertions.js
      produtosAssertions.js

features/
  produtos.md
```

## Decisoes Tecnicas

O projeto utiliza Cypress com JavaScript para testes automatizados de API.

A arquitetura foi organizada em:

- `clients`: centralizam as chamadas HTTP com `cy.request`;
- `fixtures`: concentram as massas dinamicas dos testes;
- `assertions`: concentram validacoes reutilizaveis;
- `specs`: descrevem os cenarios de teste em alto nivel;
- `commands`: concentram comandos globais, como autenticacao via API.

## Pre-requisitos

- Node.js 18 ou superior
- npm

## Instalacao

```bash
npm install
```

## Configuracao do Ambiente

Crie o arquivo `.env` com base no `.env.example`.

```env
BASE_URL=https://serverest.dev
USER_EMAIL=seu_email
USER_PASSWORD=sua_senha
```

Exemplo:

```env
BASE_URL=https://serverest.dev
USER_EMAIL=automacao_rest@teste.com.br
USER_PASSWORD=123456
```

## Execucao dos Testes

Abrir Cypress em modo interativo:

```bash
npm run cy:open
```

Executar todos os testes:

```bash
npm run cy:run
```

Executar apenas os testes de API:

```bash
npm run cy:run:api
```

Executar com relatorio:

```bash
npm run cy:run:report
```

## Plano de Teste

O plano de teste contempla os principais fluxos da API de produtos.

A documentacao dos cenarios, com passo a passo e resultado esperado, esta disponivel em:

```txt
features/produtos.md
```

## Cenarios Automatizados

Os cenarios automatizados estao implementados na spec:

```txt
cypress/e2e/api/produtos.cy.js
```

Cenarios validados:

- Validar cadastro de produto com sucesso;
- Validar edicao de produto com sucesso;
- Validar exclusao de produto com sucesso.

Cada cenario valida o fluxo principal e confirma o resultado final por meio de consulta/listagem de produtos.

## Relatorio

O projeto utiliza `cypress-mochawesome-reporter`.

Os relatorios sao gerados em:

```txt
cypress/reports/
```

Os arquivos de relatorio, videos, screenshots e downloads nao sao versionados.

## Qualidade de Codigo

Executar lint:

```bash
npm run lint
```

Corrigir problemas automaticamente quando possivel:

```bash
npm run lint:fix
```

Validar formatacao:

```bash
npm run format:check
```

Formatar arquivos:

```bash
npm run format
```

## Hooks de Commit

O projeto utiliza Husky.

Validacoes configuradas:

- `pre-commit`: executa ESLint;
- `commit-msg`: valida o padrao Conventional Commit.

Exemplo de commit valido:

```bash
git commit -m "test: adiciona testes de api de produtos"
```

## Conventional Commits

Formato esperado:

```txt
tipo: descricao curta
```

Exemplos:

```txt
chore: configura estrutura inicial da api
test: adiciona testes de api de produtos
docs: adiciona documentacao do projeto
refactor: simplifica estrutura dos testes de api
```

Tipos mais usados:

- chore
- test
- docs
- refactor
- fix
- ci
