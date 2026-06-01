const criarIdentificador = () =>
  `${Date.now()}-${Math.floor(Math.random() * 1000)}`

export const criarProduto = () => ({
  nome: `Produto API ${criarIdentificador()}`,
  preco: 100,
  descricao: 'Produto criado pela automacao de API',
  quantidade: 10,
})

export const criarProdutoEditado = () => ({
  nome: `Produto API Editado ${criarIdentificador()}`,
  preco: 150,
  descricao: 'Produto editado pela automacao de API',
  quantidade: 5,
})
