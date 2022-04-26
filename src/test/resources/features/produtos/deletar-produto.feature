#language: pt
@all @deletar_produto
Funcionalidade: deletar produto

  Contexto:
    Dado que tento realizar login com os dados
      | EMAIL         | SENHA |
      | fulano@qa.com | teste |
    E valido que foi retornado um token de acesso
    E que quero cadastrar o produto
      | NOME           | PRECO | DESCRICAO    | QUANTIDADE |
      | Teclado HyperX | 500   | É um teclado | 3          |
    E envio os dados para a api de cadastro de produto
    E guardo o id do produto cadastrado
    E valido o retorno da api com "201"
    E valido a mensagem retornada
      | Cadastro realizado com sucesso |

  Cenario: Deletar produto com sucesso
    Quando envio os dados do produto cadastrado para a api de deleção
    Então valido o retorno da api com "200"
    Então valido a mensagem retornada
      | Registro excluído com sucesso |