#language: pt
@all @carrinho_usuario @carrinhos
Funcionalidade: Buscar carrinhos


  Cenario: Buscar todos os carrinhos
    Dado que realiza a busca de carrinho via api
    Então validar lista de carrinho retornada
    E validar o retorno da api com status code "200"

  Cenario: Buscar usuário por número de identificação
    Dado que realiza a busca de carrinho pelo numero de identificacao
    Então validar que retornou o carrinho
    E validar o retorno da api com status code "200"