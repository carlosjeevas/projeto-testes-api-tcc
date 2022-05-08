#language: pt
@all @deletar_usuario @usuario

Funcionalidade: Deletar usuário
  Cenario: Deletar usuário com sucesso
    Dado que realiza a busca de usuario via api
    E identificar um id de forma aleatória
    Quando efetuar a exclusão
    E validar o retorno da api com status code "200"
    Então validar a mensagem retornada
      | Registro excluído com sucesso |

  Cenario: Deletar usuário passando id que não consta na base
    Dado que informa o id de usuário inexistente '32422'
    Quando efetuar a exclusão
    E validar o retorno da api com status code "200"
    Então validar a mensagem retornada
      | Nenhum registro excluído |
