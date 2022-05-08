#language: pt
@all @cadastrar_produto
Funcionalidade: Cadastrar produto

  Contexto: 
    Dado que realiza a busca de usuario via api
    E pegar email e senha para login
    Quando realizar o login
    Então validar que foi retornado um token de acesso

  Cenario: Cadastrar produto com sucesso
    Dado que quero cadastrar o produto
      | NOME  | PRECO | DESCRICAO  | QUANTIDADE |
      | Mouse |    50 | É um mouse |          2 |
    Quando envio os dados para a api de cadastro de produto
    E validar o retorno da api com status code "201"
    Então validar a mensagem retornada
      | Cadastro realizado com sucesso |
