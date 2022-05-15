#language: pt
@all @deletar_carrinho
Funcionalidade: Deletar carrinho

  Contexto: 
    Dado que realiza a busca de usuario via api
    E pegar email e senha para login de 'administrador'
    Quando realizar o login
    Então validar que foi retornado um token de acesso

  Cenario: Deletar um carrinho
  	Então deletar o carrinho apos finalizar compra