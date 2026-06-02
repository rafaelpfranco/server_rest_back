# Cenarios de Teste - API de Produtos

Este documento descreve os cenarios de teste automatizados para validacao dos principais fluxos da API de produtos do ServeRest.

## Validar cadastro de produto com sucesso

### Passo a passo

1. Realizar autenticacao na API com um usuario valido.
2. Gerar uma massa dinamica de produto.
3. Enviar uma requisicao `POST /produtos` com os dados do produto.
4. Validar que o produto foi cadastrado com sucesso.
5. Capturar o identificador `_id` retornado no cadastro.
6. Consultar o produto cadastrado por meio de `GET /produtos/{_id}`.
7. Listar os produtos por meio de `GET /produtos`.
8. Validar que o produto cadastrado esta presente na listagem.

### Resultado esperado

A API deve cadastrar o produto com sucesso, retornar status `201`, retornar a mensagem de cadastro realizado com sucesso e permitir validar os dados cadastrados na consulta por ID e na listagem de produtos.

---

## Validar edicao de produto com sucesso

### Passo a passo

1. Realizar autenticacao na API com um usuario valido.
2. Gerar uma massa dinamica de produto.
3. Cadastrar um produto por meio de `POST /produtos`.
4. Capturar o identificador `_id` do produto cadastrado.
5. Gerar uma nova massa dinamica com os dados editados.
6. Enviar uma requisicao `PUT /produtos/{_id}` com os novos dados do produto.
7. Validar que o produto foi editado com sucesso.
8. Consultar o produto editado por meio de `GET /produtos/{_id}`.
9. Listar os produtos por meio de `GET /produtos`.
10. Validar que o produto editado esta presente na listagem com os dados atualizados.

### Resultado esperado

A API deve editar o produto com sucesso, retornar status `200`, retornar a mensagem de alteracao realizada com sucesso e permitir validar os dados atualizados na consulta por ID e na listagem de produtos.

---

## Validar exclusao de produto com sucesso

### Passo a passo

1. Realizar autenticacao na API com um usuario valido.
2. Gerar uma massa dinamica de produto.
3. Cadastrar um produto por meio de `POST /produtos`.
4. Capturar o identificador `_id` do produto cadastrado.
5. Enviar uma requisicao `DELETE /produtos/{_id}` para excluir o produto.
6. Validar que o produto foi excluido com sucesso.
7. Listar os produtos por meio de `GET /produtos`.
8. Validar que o produto excluido nao esta mais presente na listagem.

### Resultado esperado

A API deve excluir o produto com sucesso, retornar status `200`, retornar a mensagem de exclusao realizada com sucesso e garantir que o produto nao esteja mais presente na listagem de produtos.
