#language: pt
@all @buscar_usuario @usuario
Funcionalidade: Buscar usuários

  Cenario: Buscar todos os usuários
    Dado que realiza a busca de usuario via api
    Então validar a lista de usuarios retornada
    E validar o retorno da api com status code "200"

  Cenario: Buscar usuário por número de identificação
    Dado que realizo a busca de usuario pelo numero de identificacao "123"
    Então valido que o usuario foi retornado com sucesso
    E validar o retorno da api com status code "200"