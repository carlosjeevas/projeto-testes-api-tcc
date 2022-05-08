#language: pt
@all @cadastrar_usuario @usuario
Funcionalidade: Cadastrar usuário

  Cenario: Cadastrar usuário administrador com sucesso
    Dado que queira cadastrar um usuario "administrador"
		Quando enviar os dados para api de cadastro
    E validar o retorno da api com status code "201"
    Então validar a mensagem retornada
      | Cadastro realizado com sucesso |
      
  Cenario: Cadastrar usuário comum com sucesso
    Dado que queira cadastrar um usuario "comum"
		Quando enviar os dados para api de cadastro
    E validar o retorno da api com status code "201"
    Então validar a mensagem retornada
      | Cadastro realizado com sucesso |

  Cenario: Tentar cadastrar usuário com dados inválidos
    Dado que queira cadastrar um usuario com dados inválidos
      | NOME | EMAIL | SENHA | ADMINISTRADOR |
      | Joao | a     | teste | Sim           |
    Quando enviar os dados para api de cadastro
    E validar o retorno da api com status code "400"
    Então validar a mensagem retornada
      | email deve ser um email válido |

  Cenario: Tentar cadastrar usuário com dados em branco
    Quando enviar os dados em branco para a api de cadastro
    E validar o retorno da api com status code "400"
    Então validar a mensagem retornada
      | nome não pode ficar em branco            |
      | email não pode ficar em branco           |
      | password não pode ficar em branco        |
      | administrador deve ser 'true' ou 'false' |
