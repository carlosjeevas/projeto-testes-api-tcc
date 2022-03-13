#language: pt
@all @cadastrar_usuario
Funcionalidade: Cadastrar usuário


  Cenario: Cadastrar usuário administrador com sucesso
    Dado que quero cadastrar o usuario
      | NOME   | EMAIL             | SENHA     | ADMINISTRADOR |
      | Calebe | cabelo@sem.com.br | minoxidil | Sim           |
    Quando envio os dados para a api de cadastro
    Então valido a mensagem retornada "Cadastro realizado com sucesso"
    E valido o retorno da api com "201"

  Cenario: Cadastrar usuário comum com sucesso
    Dado que quero cadastrar o usuario:
      | NOME   | EMAIL             | SENHA     | ADMINISTRADOR |
      | Calebe | cabelo@sem.com.br | minoxidil | Não           |
    Quando envio os dados para a api de cadastro
    Então valido a mensagem retornada "Cadastro realizado com sucesso"
    E valido o retorno da api com "201"

  Cenario: Tentar cadastrar usuário com dados inválidos
    Dado que quero cadastrar o usuario:
      | NOME | EMAIL | SENHA | ADMINISTRADOR |
      | a    | a     | a     | Sim           |
    Quando envio os dados para a api de cadastro
    Então valido a mensagem retornada "Dados inválidos"
    E valido o retorno da api com "400"

  Cenario: Tentar cadastrar usuário com dados em branco
    Dado que quero cadastrar o usuario:
      | NOME | EMAIL | SENHA | ADMINISTRADOR |
      |      |       |       |               |
    Quando envio os dados para a api de cadastro
    Então valido a mensagem retornada "Dados em branco"
    E valido o retorno da api com "400"