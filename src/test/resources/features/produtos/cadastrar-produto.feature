#language: pt
@all @cadastrar_produto
Funcionalidade: Cadastrar produto
@test
  Cenario: Cadastrar produto com sucesso
    Dado que quero cadastrar o produto
      | NOME  | PRECO | DESCRICAO  | QUANTIDADE |
      | Mouse | 50    | É um mouse | 2          |
    Quando envio os dados para a api de cadastro de produto
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
