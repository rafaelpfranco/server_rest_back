export class UsuariosClient {
  cadastrarUsuario(usuario) {
    return cy.request({
      method: 'POST',
      url: '/usuarios',
      body: usuario,
      failOnStatusCode: false,
    })
  }

  login(usuario) {
    return cy.request({
      method: 'POST',
      url: '/login',
      body: {
        email: usuario.email,
        password: usuario.password,
      },
      failOnStatusCode: false,
    })
  }
}
