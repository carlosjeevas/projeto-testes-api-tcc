#language: pt
@all @deletar_usuario
Funcionalidade: Deletar usuário

  Cenario: Deletar usuário com sucesso
    Dado que realizo a busca de usuario via api
    E identifico o id através do nome e do email
      | NOME | EMAIL       |
      | Cabl | cabl@com.br |
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
