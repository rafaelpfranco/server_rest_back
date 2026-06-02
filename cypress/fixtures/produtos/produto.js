const criarIdentificador = () =>
  `${Date.now()}-${Math.floor(Math.random() * 1000)}`

export const criarProduto = () => ({
  nome: `Produto API ${criarIdentificador()}`,
  preco: 470,
  descricao: 'Mouse',
  quantidade: 381,
})

export const criarProdutoEditado = () => ({
  nome: `Produto API Editado ${criarIdentificador()}`,
  preco: 150,
  descricao: 'Mouse editado',
  quantidade: 100,
})
