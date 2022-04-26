#language: pt
@all @cadastrar_produto
Funcionalidade: Cadastrar produto

  Contexto:
  Dado que tento realizar login com os dados
    | EMAIL         | SENHA |
    | fulano@qa.com | teste |
  Então valido que foi retornado um token de acesso

  Cenario: Cadastrar produto com sucesso
    Dado que quero cadastrar o produto
      | NOME  | PRECO | DESCRICAO  | QUANTIDADE |
      | Mouse | 50    | É um mouse | 2          |
    Quando envio os dados para a api de cadastro de produto
    E valido o retorno da api com "201"
    Então valido a mensagem retornada
      | Cadastro realizado com sucesso |