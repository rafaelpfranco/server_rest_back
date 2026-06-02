import { validarLoginComSucesso } from './assertions/authAssertions'
import { AuthClient } from './clients/AuthClient'

Cypress.Commands.add('loginApi', () => {
  const authClient = new AuthClient()

  return authClient
    .login(Cypress.env('userEmail'), Cypress.env('userPassword'))
    .then((response) => {
      validarLoginComSucesso(response)

      return response.body.authorization
    })
})
