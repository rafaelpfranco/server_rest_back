const criarIdentificador = () =>
  `${Date.now()}-${Math.floor(Math.random() * 1000)}`

export const criarUsuarioAdministrador = () => {
  const identificador = criarIdentificador()

  return {
    nome: `Usuario API ${identificador}`,
    email: `usuario.api.${identificador}@teste.com.br`,
    password: `teste-${identificador}`,
    administrador: 'true',
  }
}
