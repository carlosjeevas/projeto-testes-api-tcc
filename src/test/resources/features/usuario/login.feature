#language: pt
@all @login
Funcionalidade: Login

  Cenario: Login com sucesso
    Dado que tento realizar login com os dados:
      | EMAIL      | SENHA           |
      | abc@def.gh | ijklmnopqrstxyz |
    Então valido que foi retornado um token de acesso
    E valido o retorno da api com "200"

  Cenario: Tentativa de login com dados inválidos
    Dado que tento realizar login com os dados:
      | EMAIL | SENHA |
      | a     | a     |
    Então valido a mensagem retornada "Email e/ou senha inválidos"
    E valido o retorno da api com "401"