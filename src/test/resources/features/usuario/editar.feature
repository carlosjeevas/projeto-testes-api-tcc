#language: pt
@all @editar_usuario
Funcionalidade: Editar usuário

  Contexto: 

  Cenario: Editar usuário com dados válidos
    Dado que realizo a busca de usuario via api
    E identifico o id através do nome e do email
      | NOME | EMAIL       |
      | Cabl | cabl@com.br |
    Quando envio os dados para edicao
      | NOME      | EMAIL       | SENHA  | ADMINISTRADOR |
      | CablEdita | cabl@com.br | 123456 | sim           |
    E valido o retorno da api com "201"
    Então valido a mensagem retornada
      | Registro alterado com sucesso |

  Cenario: Tentar editar usuário com dados inválidos
    Dado que realizo a busca de usuario via api
    E identifico o id através do nome e do email
      | NOME | EMAIL       |
      | Cabl | cabl@com.br |
    Quando envio os dados para edicao
      | NOME | EMAIL | SENHA | ADMINISTRADOR |
      | A    | A     | A     | true          |
    E valido o retorno da api com "400"
    Então valido a mensagem retornada
      | email deve ser um email válido |

  Cenario: Tentar editar usuário com dados que não existe para cadastrar o mesmo
    Dado que realizo a busca de usuario via api
    E identifico o id através do nome e do email
      | NOME  | EMAIL        |
      | Caabl | caabl@com.br |
    Quando envio os dados para edicao
      | NOME | EMAIL           | SENHA  | ADMINISTRADOR |
      | Igor | testando@com.br | 123456 | true          |
    E valido o retorno da api com "201"
    Então valido a mensagem retornada
      | Cadastro realizado com sucesso |
