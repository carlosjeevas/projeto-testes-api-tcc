#language: pt
@API
Funcionalidade: Cadastrar usuário

  Cenario: Cadastrar usuário com sucesso
    Dado que realizo a busca de usuário via api
    Então valido a lista de usuários retornada
    E valido o retorno da api com "200"