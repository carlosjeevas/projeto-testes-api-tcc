#language: pt
@all @cadastrar_usuario
Funcionalidade: Cadastrar usuário

  Cenario: Cadastrar usuário administrador com sucesso
    Dado que quero cadastrar o usuario
      | NOME  | EMAIL         | SENHA    | ADMINISTRADOR |
      | Calbe | calebe@com.br | testando | Sim           |
    Quando envio os dados para a api de cadastro
    E valido o retorno da api com "201"
    Então valido a mensagem retornada
      | Cadastro realizado com sucesso |

  Cenario: Cadastrar usuário comum com sucesso
    Dado que quero cadastrar o usuario
      | NOME   | EMAIL         | SENHA    | ADMINISTRADOR |
      | Calebe | calebe@com.br | testando | Não           |
    Quando envio os dados para a api de cadastro
    E valido o retorno da api com "201"
    Então valido a mensagem retornada
      | Cadastro realizado com sucesso |

  Cenario: Tentar cadastrar usuário com dados inválidos
    Dado que quero cadastrar o usuario
      | NOME | EMAIL | SENHA | ADMINISTRADOR |
      | Joao | a     | teste | Sim           |
    Quando envio os dados para a api de cadastro
    E valido o retorno da api com "400"
    Então valido a mensagem retornada
      | email deve ser um email válido |

  Cenario: Tentar cadastrar usuário com dados em branco
    Quando envio os dados em branco para a api de cadastro
    E valido o retorno da api com "400"
    Então valido a mensagem retornada
      | nome não pode ficar em branco            |
      | email não pode ficar em branco           |
      | password não pode ficar em branco        |
      | administrador deve ser 'true' ou 'false' |
