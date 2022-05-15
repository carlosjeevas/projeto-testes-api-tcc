#language: pt
@all @cadastrar_carrinho @deletar_carrinho @tes
Funcionalidade: Carrinho

  Contexto: Cadastar carrinho
  
    Dado que realiza a busca de usuario via api
    E pegar email e senha para login de 'administrador'
    Quando realizar o login
    Então validar que foi retornado um token de acesso
    E que queira cadastrar o produto
    E enviar os dados para a api de cadastro de produto
    E guardar o id do produto cadastrado
    E validar o retorno da api com status code "201"
    E validar a mensagem retornada
      | Cadastro realizado com sucesso |
    Quando cadastrar o carrinho
    E validar o retorno da api com status code "201"
    Então validar a mensagem retornada
      | Cadastro realizado com sucesso |

      
  Cenario: Deletar o carrinho finalizando a compra
  	Então deletar o carrinho apos 'concluir' a compra
  	E validar o retorno da api com status code "200"
    Então validar a mensagem retornada
      | Registro excluído com sucesso |

	Cenario: Deletar o carrinho cancelando a compra
		Então deletar o carrinho apos 'cancelar' a compra
		E validar o retorno da api com status code "200"
    Então validar a mensagem retornada
      | Registro excluído com sucesso. Estoque dos produtos reabastecido|
  	
  	
  	