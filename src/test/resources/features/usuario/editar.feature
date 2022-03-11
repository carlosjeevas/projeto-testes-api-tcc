#language: pt
@API
Funcionalidade: Editar usuário

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