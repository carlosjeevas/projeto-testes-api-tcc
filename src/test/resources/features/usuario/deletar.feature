#language: pt
@all @deletar_usuario
Funcionalidade: Deletar usuário

  Cenario: Deletar usuário com sucesso
    Dado que realizo a exclusao do usuario "XPTO"
    Então valido a mensagem retornada "Registro excluído com sucesso"
    E valido o retorno da api com "200"