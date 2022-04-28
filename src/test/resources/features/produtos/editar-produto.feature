#language: pt
@all @editar_produto
Funcionalidade: Editar usuário

  Contexto:
    Dado que tento realizar login com os dados
      | EMAIL         | SENHA |
      | fulano@qa.com | teste |
    E valido que foi retornado um token de acesso
    E que quero cadastrar o produto
      | NOME         | PRECO | DESCRICAO  | QUANTIDADE |
      | Mouse HyperX | 500   | É um mouse | 3          |
    E envio os dados para a api de cadastro de produto
    E guardo o id do produto cadastrado
    E valido o retorno da api com "201"
    E valido a mensagem retornada
      | Cadastro realizado com sucesso |

  Cenario: Editar produto com sucesso
    Quando envio os dados do produto cadastrado para a api de edição
      | NOME    | PRECO | DESCRICAO    | QUANTIDADE |
      | Mouse X | 500   | É um teclado | 2          |
    E valido o retorno da api com "200"
    Então valido a mensagem retornada
      | Registro alterado com sucesso |
    E envio os dados do produto cadastrado para a api de deleção
    E valido o retorno da api com "200"
    E valido a mensagem retornada
      | Registro excluído com sucesso |