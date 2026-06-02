export const validarLoginComSucesso = (response) => {
  expect(response.status).to.eq(200)
  expect(response.body.message).to.eq('Login realizado com sucesso')
  expect(response.body.authorization).to.exist
  expect(response.body.authorization).to.include('Bearer')
}
