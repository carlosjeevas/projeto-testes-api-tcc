#language: pt
@all @deletar_produto
Funcionalidade: deletar produto

  Contexto:
    Dado que realiza a busca de usuario via api
    E pegar email e senha para login
    Quando realizar o login
    Então validar que foi retornado um token de acesso
    E que quero cadastrar o produto
      | NOME           | PRECO | DESCRICAO    | QUANTIDADE |
      | Teclado HyperX | 500   | É um teclado | 3          |
    E envio os dados para a api de cadastro de produto
    E guardo o id do produto cadastrado
    E validar o retorno da api com status code "201"
    E validar a mensagem retornada
      | Cadastro realizado com sucesso |

  Cenario: Deletar produto com sucesso
    Quando envio os dados do produto cadastrado para a api de deleção
    Então validar o retorno da api com status code "200"
    Então validar a mensagem retornada
      | Registro excluído com sucesso |