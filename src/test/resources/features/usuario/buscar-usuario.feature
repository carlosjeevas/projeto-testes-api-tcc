#language: pt
@all @buscar_usuario
Funcionalidade: Buscar usuários

  Cenario: Buscar todos os usuários
    Dado que realizo a busca de usuario via api
    Então valido a lista de usuarios retornada
    E valido o retorno da api com "200"

  Cenario: Buscar usuário por número de identificação
    Dado que realizo a busca de usuario pelo numero de identificacao "123"
    Então valido que o usuario foi retornado com sucesso
    E valido o retorno da api com "200"