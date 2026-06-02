export const validarCadastroProdutoComSucesso = (response) => {
  expect(response.status).to.eq(201)
  expect(response.body.message).to.eq('Cadastro realizado com sucesso')
  expect(response.body._id).to.exist
}

export const validarEdicaoProdutoComSucesso = (response) => {
  expect(response.status).to.eq(200)
  expect(response.body.message).to.eq('Registro alterado com sucesso')
}

export const validarExclusaoProdutoComSucesso = (response) => {
  expect(response.status).to.eq(200)
  expect(response.body.message).to.eq('Registro excluído com sucesso')
}

export const validarProdutoNaConsulta = (response, produto) => {
  expect(response.status).to.eq(200)
  expect(response.body.nome).to.eq(produto.nome)
  expect(response.body.preco).to.eq(produto.preco)
  expect(response.body.descricao).to.eq(produto.descricao)
  expect(response.body.quantidade).to.eq(produto.quantidade)
}

export const validarProdutoNaListagem = (response, produto) => {
  expect(response.status).to.eq(200)

  const produtoEncontrado = response.body.produtos.find(
    (item) => item.nome === produto.nome,
  )

  expect(produtoEncontrado).to.exist
  expect(produtoEncontrado.preco).to.eq(produto.preco)
  expect(produtoEncontrado.descricao).to.eq(produto.descricao)
  expect(produtoEncontrado.quantidade).to.eq(produto.quantidade)
}

export const validarProdutoAusenteNaListagem = (response, nomeProduto) => {
  expect(response.status).to.eq(200)

  const produtoEncontrado = response.body.produtos.find(
    (item) => item.nome === nomeProduto,
  )

  expect(produtoEncontrado).to.not.exist
}
