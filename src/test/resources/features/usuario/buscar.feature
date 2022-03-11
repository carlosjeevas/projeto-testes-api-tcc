#language: pt
@API
Funcionalidade: Buscar usuários

  Cenario: Buscar todos os usuários
    Dado que realizo a busca de usuário via api
    Então valido a lista de usuários retornada
    E valido o retorno da api com "200"

  Cenario: Buscar usuário por número de identificação
    Dado que realizo a busca de usuário pelo numero de identificacao "123"
    Então valido que o usuario foi retornado com sucesso
    E valido o retorno da api com "200"