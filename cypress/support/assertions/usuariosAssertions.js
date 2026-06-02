export const validarCadastroUsuarioComSucesso = (response) => {
  expect(response.status).to.eq(201)
  expect(response.body.message).to.eq('Cadastro realizado com sucesso')
  expect(response.body._id).to.exist
}
