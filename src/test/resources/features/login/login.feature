#language: pt
@all @login
Funcionalidade: Login

  Cenario: Login com sucesso
    Dado que tento realizar login com os dados
      | EMAIL         | SENHA |
      | fulano@qa.com | teste |
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
