import {
  validarCadastroProdutoComSucesso,
  validarEdicaoProdutoComSucesso,
  validarExclusaoProdutoComSucesso,
  validarProdutoAusenteNaListagem,
  validarProdutoNaConsulta,
  validarProdutoNaListagem,
} from '../../support/assertions/produtosAssertions'
import { ProdutosClient } from '../../support/clients/ProdutosClient'
import {
  criarProduto,
  criarProdutoEditado,
} from '../../fixtures/produtos/produto'

describe('Produtos API', () => {
  const produtosClient = new ProdutosClient()
  let token

  before(() => {
    cy.loginApi().then((authorization) => {
      token = authorization
    })
  })

  it('Validar cadastro de produto com sucesso', () => {
    const produto = criarProduto()

    produtosClient.cadastrarProduto(token, produto).then((cadastroResponse) => {
      validarCadastroProdutoComSucesso(cadastroResponse)

      const idProduto = cadastroResponse.body._id

      produtosClient.buscarProdutoPorId(idProduto).then((consultaResponse) => {
        validarProdutoNaConsulta(consultaResponse, produto)
      })

      produtosClient.listarProdutos().then((listagemResponse) => {
        validarProdutoNaListagem(listagemResponse, produto)
      })
    })
  })

  it('Validar edição de produto com sucesso', () => {
    const produto = criarProduto()
    const produtoEditado = criarProdutoEditado()

    produtosClient.cadastrarProduto(token, produto).then((cadastroResponse) => {
      validarCadastroProdutoComSucesso(cadastroResponse)

      const idProduto = cadastroResponse.body._id

      produtosClient
        .editarProduto(token, idProduto, produtoEditado)
        .then((edicaoResponse) => {
          validarEdicaoProdutoComSucesso(edicaoResponse)

          produtosClient
            .buscarProdutoPorId(idProduto)
            .then((consultaResponse) => {
              validarProdutoNaConsulta(consultaResponse, produtoEditado)
            })

          produtosClient.listarProdutos().then((listagemResponse) => {
            validarProdutoNaListagem(listagemResponse, produtoEditado)
          })
        })
    })
  })

  it('Validar exclusão de produto com sucesso', () => {
    const produto = criarProduto()

    produtosClient.cadastrarProduto(token, produto).then((cadastroResponse) => {
      validarCadastroProdutoComSucesso(cadastroResponse)

      const idProduto = cadastroResponse.body._id

      produtosClient
        .excluirProduto(token, idProduto)
        .then((exclusaoResponse) => {
          validarExclusaoProdutoComSucesso(exclusaoResponse)

          produtosClient.listarProdutos().then((listagemResponse) => {
            validarProdutoAusenteNaListagem(listagemResponse, produto.nome)
          })
        })
    })
  })
})
