#language: pt
@all @buscar_produto
Funcionalidade: Buscar produtos

  Cenario: Buscar todos os produtos
    Dado que realiza a busca de produtos via api
    Então validar a lista de produtos retornada
    E validar o retorno da api com status code "200"

    @teste
  Cenario: Buscar produto por número de identificação
    Dado que realiza a busca de produto pelo numero de identificacao
    Então validar que retornou o produto
    E validar o retorno da api com status code "200"