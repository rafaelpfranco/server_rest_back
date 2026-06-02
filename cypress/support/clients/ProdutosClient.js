export class ProdutosClient {
  cadastrarProduto(token, produto) {
    return cy.request({
      method: 'POST',
      url: '/produtos',
      headers: {
        Authorization: token,
      },
      body: produto,
      failOnStatusCode: false,
    })
  }

  editarProduto(token, idProduto, produto) {
    return cy.request({
      method: 'PUT',
      url: `/produtos/${idProduto}`,
      headers: {
        Authorization: token,
      },
      body: produto,
      failOnStatusCode: false,
    })
  }

  excluirProduto(token, idProduto) {
    return cy.request({
      method: 'DELETE',
      url: `/produtos/${idProduto}`,
      headers: {
        Authorization: token,
      },
      failOnStatusCode: false,
    })
  }

  buscarProdutoPorId(idProduto) {
    return cy.request({
      method: 'GET',
      url: `/produtos/${idProduto}`,
      failOnStatusCode: false,
    })
  }

  listarProdutos() {
    return cy.request({
      method: 'GET',
      url: '/produtos',
      failOnStatusCode: false,
    })
  }
}
