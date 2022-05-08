#language: pt
@all @login
Funcionalidade: Login

  Cenario: Login com sucesso
  	Dado que realiza a busca de usuario via api
  	E pegar email e senha para login
    Quando realizar o login
    Então validar que foi retornado um token de acesso

  Cenario: Tentativa de login com dados inválidos
    Dado que tento realizar login com os dados
      | EMAIL | SENHA |
      | a     | a     |
    Então validar a mensagem retornada
      | email deve ser um email válido |
    E validar o retorno da api com status code "400"

  Cenario: Tentativa de login com dados que não existe na base
    Dado que tento realizar login com os dados
      | EMAIL          | SENHA  |
      | ay@test.com.br | 123456 |
    Então validar a mensagem retornada
      | Email e/ou senha inválidos |
    E validar o retorno da api com status code "401"
