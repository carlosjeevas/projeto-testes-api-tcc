#language: pt
@all @buscar_produto
Funcionalidade: Buscar produtos

  Cenario: Buscar todos os produtos
    Dado que realizo a busca de produtos via api
    Então valido a lista de produtos retornada
    E valido o retorno da api com "200"

  Cenario: Buscar produto por número de identificação
    Dado que realizo a busca de produto pelo numero de identificacao "123"
    Então valido que o usuario foi retornado com sucesso
    E valido o retorno da api com "200"