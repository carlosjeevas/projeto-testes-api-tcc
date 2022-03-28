#language: pt
@all @usuario
Funcionalidade: Usuarios

  Cenario: Cadastrar usuário administrador com sucesso
    Dado que quero cadastrar o usuario
      | NOME  | EMAIL       | SENHA    | ADMINISTRADOR |
      | Calbe | cabl@com.br | testando | Sim           |
    Quando envio os dados para a api de cadastro
    E valido o retorno da api com "201"
    Então valido a mensagem retornada
      | Cadastro realizado com sucesso |

  Cenario: Cadastrar usuário comum com sucesso
    Dado que quero cadastrar o usuario
      | NOME | EMAIL        | SENHA    | ADMINISTRADOR |
      | Cabl | cable@com.br | testando | Não           |
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

  #--------------------------------------------------DELETAR---------------------------------------------#
  Cenario: Deletar usuário com sucesso
    Dado que realizo a busca de usuario via api
    E identifico o id através do nome e do email
      | NOME | EMAIL        |
      | Cabl | cable@com.br |
    Quando efetuar a exclusão do usuário
    E valido o retorno da api com "200"
    Então valido a mensagem retornada
      | Registro excluído com sucesso |

  Cenario: Deletar usuário passando id que não consta na base
    Dado que realizo a busca de usuario via api
    E identifico o id através do nome e do email
      | NOME  | EMAIL       |
      | Calbe | calb@com.br |
    Quando efetuar a exclusão do usuário
    E valido o retorno da api com "200"
    Então valido a mensagem retornada
      | Nenhum registro excluído |

  #----------------------------------------LOGIN-------------------------------------------------#
  Cenario: Login com sucesso
    Dado que tento realizar login com os dados
      | EMAIL       | SENHA    |
      | cabl@com.br | testando |
    Então valido que foi retornado um token de acesso

  Cenario: Tentativa de login com dados inválidos
    Dado que tento realizar login com os dados
      | EMAIL | SENHA |
      | a     | a     |
    Então valido a mensagem retornada
      | email deve ser um email válido |
    E valido o retorno da api com "400"

  Cenario: Tentativa de login com dados que não existe na base
    Dado que tento realizar login com os dados
      | EMAIL          | SENHA  |
      | ay@test.com.br | 123456 |
    Então valido a mensagem retornada
      | Email e/ou senha inválidos |
    E valido o retorno da api com "401"

  #--------------------------------------------Editar-------------------------------------------------------------------
  Cenario: Editar usuário com dados válidos
    Dado que realizo a busca de usuario via api
    E identifico o id através do nome e do email
      | NOME  | EMAIL       |
      | Calbe | cabl@com.br |
    Quando envio os dados para edicao
      | NOME      | EMAIL       | SENHA  | ADMINISTRADOR |
      | CablEdita | cabl@com.br | 123456 | sim           |
    E valido o retorno da api com "200"
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
      | NOME | EMAIL             | SENHA  | ADMINISTRADOR |
      | Igor | testandooo@com.br | 123456 | true          |
    E valido o retorno da api com "200"
    Então valido a mensagem retornada
      | Cadastro realizado com sucesso |

  Cenario: Buscar todos os usuários
    Dado que realizo a busca de usuario via api
    E valido o retorno da api com "200"
