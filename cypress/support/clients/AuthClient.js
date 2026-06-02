export class AuthClient {
  login(email, password) {
    return cy.request({
      method: 'POST',
      url: '/login',
      body: {
        email,
        password,
      },
      failOnStatusCode: false,
    })
  }
}
