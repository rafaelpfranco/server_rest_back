import { validarLoginComSucesso } from './assertions/authAssertions'
import { UsuariosClient } from './clients/UsuariosClient'

Cypress.Commands.add('loginApi', (usuario) => {
  const usuariosClient = new UsuariosClient()

  return usuariosClient.login(usuario).then((response) => {
    validarLoginComSucesso(response)

    return response.body.authorization
  })
})
