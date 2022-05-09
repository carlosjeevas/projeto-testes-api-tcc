#language: pt
@all @editar_produto
Funcionalidade: Editar usuário

  Contexto: 
    Dado que realiza a busca de usuario via api
    E pegar email e senha para login de 'administrador'
    Quando realizar o login
    Então validar que foi retornado um token de acesso
    E que queira cadastrar o produto
    E enviar os dados para a api de cadastro de produto
    E guardar o id do produto cadastrado
    E validar o retorno da api com status code "201"
    E validar a mensagem retornada
      | Cadastro realizado com sucesso |

  Cenario: Editar produto com sucesso
    Quando enviar os dados para edição
      | NOME    | PRECO | DESCRICAO    | QUANTIDADE |
      | Mouse X |   500 | É um teclado |          2 |
    E validar o retorno da api com status code "200"
    Então validar a mensagem retornada
      | Registro alterado com sucesso |
    E enviar os dados do produto cadastrado para a api de deleção
    E validar o retorno da api com status code "200"
    E validar a mensagem retornada
      | Registro excluído com sucesso |
