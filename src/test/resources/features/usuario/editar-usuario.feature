#language: pt
@all @editar_usuario @usuario
Funcionalidade: Editar usuário

  Contexto: 

  Cenario: Editar usuário com dados válidos
    Dado que realiza a busca de usuario via api
    E identificar um id de forma aleatória
    Quando enviar os dados para edição do usuário
    E validar o retorno da api com status code "200"
    Então validar a mensagem retornada
      | Registro alterado com sucesso |

  Cenario: Tentar editar usuário com dados inválidos
    Dado que realiza a busca de usuario via api
    E identificar um id de forma aleatória
    Quando enviar os dados inválidos para edição do usuário
      | NOME | EMAIL | SENHA | ADMINISTRADOR |
      | A    | A     | A     | true          |
    E validar o retorno da api com status code "400"
    Então validar a mensagem retornada
      | email deve ser um email válido |

  Cenario: Tentar editar usuário com id que não existe para cadastrar o mesmo
    Dado que informa o id de usuário inexistente '32422'
    Quando enviar os dados para edição do usuário
    E validar o retorno da api com status code "201"
    Então validar a mensagem retornada
      | Cadastro realizado com sucesso |
