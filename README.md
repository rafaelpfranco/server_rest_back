# ServeRest API - Testes Automatizados com Cypress

Projeto de automação de testes de API da aplicação **ServeRest**, desenvolvido com **Cypress** e **JavaScript**.

A suíte valida os principais fluxos da API de produtos: cadastro, edição e exclusão. Ao final dos fluxos, os dados são conferidos por meio da listagem de produtos.

## Stack

- Cypress
- JavaScript
- Dotenv
- Mochawesome Reporter
- ESLint
- Prettier
- Husky
- Commitlint
- GitHub Actions
- Cypress Cloud

## Objetivo

Validar os principais fluxos da API de produtos do ServeRest, garantindo que as operações de cadastro, edição e exclusão funcionem corretamente e reflitam os dados esperados na consulta de produtos.

## Estrutura do Projeto

```txt
cypress/
  e2e/
    api/
      produtos.cy.js

  fixtures/
    produtos/
      produto.js
    usuarios/
      usuario.js

  support/
    commands.js
    e2e.js
    config/
      environment.js
    clients/
      ProdutosClient.js
      UsuariosClient.js
    assertions/
      authAssertions.js
      produtosAssertions.js
      usuariosAssertions.js

features/
  produtos.md
```

## Arquitetura

O projeto foi organizado em camadas simples:

- `clients`: centralizam as chamadas HTTP com `cy.request`;
- `fixtures`: concentram as massas dinâmicas dos testes;
- `assertions`: concentram validações reutilizáveis;
- `specs`: descrevem os cenários de teste;
- `commands`: concentram comandos globais, como autenticação via API.

Os usuários utilizados nos testes são criados dinamicamente durante a execução, evitando dependência de massa fixa em ambiente público.

## Pré-requisitos

- Node.js 18 ou superior
- npm

## Instalação

```bash
npm install
```

## Configuração do Ambiente

Crie o arquivo `.env` com base no `.env.example`.

```env
BASE_URL=https://serverest.dev
```

## Execução dos Testes

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

Executar com relatório local:

```bash
npm run cy:run:report
```

## Cenários Automatizados

Os cenários automatizados estão implementados na spec:

```txt
cypress/e2e/api/produtos.cy.js
```

Cenários validados:

- Validar cadastro de produto com sucesso;
- Validar edição de produto com sucesso;
- Validar exclusão de produto com sucesso.

A documentação dos cenários, com passo a passo e resultado esperado, está disponível em:

```txt
features/produtos.md
```

## CI/CD

O projeto possui pipeline no GitHub Actions para execução dos testes de API.

A pipeline é executada manualmente pela aba **Actions** do GitHub e realiza:

- instalação das dependências;
- validação de lint;
- validação de formatação;
- execução dos testes de API;
- publicação dos artefatos de execução;
- envio dos resultados para o Cypress Cloud;
- disparo da pipeline do projeto frontend.

A execução do frontend é disparada independentemente do resultado da pipeline de API.

## Relatórios

### Cypress Cloud

O relatório das execuções do backend pode ser acessado em:

```txt
https://cloud.cypress.io/projects/q7vu1q/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&tagsMatch=ANY&timeRange=%7B%22startDate%22%3A%222025-06-02%22%2C%22endDate%22%3A%222026-06-02%22%2C%22id%22%3A%22LAST_12_MONTHS%22%7D
```

O relatório das execuções do frontend pode ser acessado em:

```txt
https://cloud.cypress.io/projects/66nkyu/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&tagsMatch=ANY&timeRange=%7B%22startDate%22%3A%222025-06-02%22%2C%22endDate%22%3A%222026-06-02%22%2C%22id%22%3A%22LAST_12_MONTHS%22%7D
```

### Relatório local

O projeto utiliza `cypress-mochawesome-reporter`.

Os relatórios locais são gerados em:

```txt
cypress/reports/
```

Os arquivos de relatório, vídeos, screenshots e downloads não são versionados.

## Secrets da Pipeline

Secrets necessários no repositório:

```txt
BASE_URL
CYPRESS_RECORD_KEY
FRONT_REPO_PAT
```

Observações:

- `BASE_URL`: URL base da API ServeRest;
- `CYPRESS_RECORD_KEY`: chave de gravação do Cypress Cloud;
- `FRONT_REPO_PAT`: token usado para disparar a pipeline do projeto frontend.

## Qualidade de Código

Executar lint:

```bash
npm run lint
```

Corrigir problemas automaticamente quando possível:

```bash
npm run lint:fix
```

Validar formatação:

```bash
npm run format:check
```

Formatar arquivos:

```bash
npm run format
```

## Hooks de Commit

O projeto utiliza Husky.

Validações configuradas:

- `pre-commit`: executa ESLint;
- `commit-msg`: valida o padrão Conventional Commit.

Exemplo de commit válido:

```bash
git commit -m "test: adiciona testes de api de produtos"
```

## Conventional Commits

Formato esperado:

```txt
tipo: descrição curta
```
