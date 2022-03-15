#language: pt
@all @editar_usuario
Funcionalidade: Editar usuário

  Contexto:
    Dado que quero cadastrar o usuario
      | NOME   | EMAIL             | SENHA     | ADMINISTRADOR |
      | Calebe | cabelo@sem.com.br | minoxidil | Sim           |
    Quando envio os dados para a api de cadastro
    Então valido a mensagem retornada "Cadastro realizado com sucesso"
    E valido o retorno da api com "201"

  Cenario: Editar usuário com dados válidos
    Dado que quero editar o usuario com os novos dados:
      | NOME   | EMAIL             | SENHA     | ADMINISTRADOR | ID               |
      | Calebe | cabelo@sem.com.br | minoxidil | Sim           | 0uxuPY0cbmQhpEz1 |
    Quando envio os dados para a api de edicao
    Então valido a edicao do usuario
    E valido o retorno da api com "201"

  Cenario: Tentar editar usuário com dados inválidos
    Dado que quero editar o usuario com os novos dados:
      | NOME | EMAIL | SENHA | ADMINISTRADOR | ID |
      | a    | a     | a     | a             | a  |
    Quando envio os dados para a api de edicao
    Então valido a edicao do usuario
    E valido o retorno da api com "201"