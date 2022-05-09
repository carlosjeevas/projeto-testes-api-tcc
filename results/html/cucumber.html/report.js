$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Login com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "que realiza a busca de usuario via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.que_realizo_a_busca_de_usuario_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pegar email e senha para login de \u0027administrador\u0027",
  "keyword": "E "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.pegarEmailESenhaParaLogin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "realizar o login",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.login.LoginSteps.realizarOLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar que foi retornado um token de acesso",
  "keyword": "Então "
});
formatter.match({
  "location": "steps.login.LoginSteps.validoQueFoiRetornadoUmTokenDeAcesso()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "que realiza a busca de usuario via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.que_realizo_a_busca_de_usuario_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pegar email e senha para login de \u0027comum\u0027",
  "keyword": "E "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.pegarEmailESenhaParaLogin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "realizar o login",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.login.LoginSteps.realizarOLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar que foi retornado um token de acesso",
  "keyword": "Então "
});
formatter.match({
  "location": "steps.login.LoginSteps.validoQueFoiRetornadoUmTokenDeAcesso()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentativa de login com dados inválidos",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "que tento realizar login com os dados",
  "rows": [
    {},
    {}
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.login.LoginSteps.realizoOLoginComOsDados(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"400\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentativa de login com dados que não existe na base",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "que tento realizar login com os dados",
  "rows": [
    {},
    {}
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.login.LoginSteps.realizoOLoginComOsDados(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"401\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/produtos/buscar-produto.feature");
formatter.feature({
  "name": "Buscar produtos",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@buscar_produto"
    }
  ]
});
formatter.scenario({
  "name": "Buscar todos os produtos",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@buscar_produto"
    }
  ]
});
formatter.step({
  "name": "que realiza a busca de produtos via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.produto.BuscarProdutoSteps.que_realizo_a_busca_de_produto_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a lista de produtos retornada",
  "keyword": "Então "
});
formatter.match({
  "location": "steps.produto.BuscarProdutoSteps.valido_a_lista_de_produtos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buscar produto por número de identificação",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@buscar_produto"
    }
  ]
});
formatter.step({
  "name": "que realiza a busca de produto pelo numero de identificacao \"BeeJh5lz3k6kSIzA\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.produto.BuscarProdutoSteps.que_realizo_a_busca_de_produto_pelo_numero_de_identificacao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar que retornou o produto",
  "keyword": "Então "
});
formatter.match({
  "location": "steps.produto.BuscarProdutoSteps.valido_que_retornou_o_produto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/produtos/cadastrar-produto.feature");
formatter.feature({
  "name": "Cadastrar produto",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@cadastrar_produto"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que realiza a busca de usuario via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.que_realizo_a_busca_de_usuario_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pegar email e senha para login de \u0027administrador\u0027",
  "keyword": "E "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.pegarEmailESenhaParaLogin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "realizar o login",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.login.LoginSteps.realizarOLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar que foi retornado um token de acesso",
  "keyword": "Então "
});
formatter.match({
  "location": "steps.login.LoginSteps.validoQueFoiRetornadoUmTokenDeAcesso()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cadastrar produto com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@cadastrar_produto"
    }
  ]
});
formatter.step({
  "name": "que queira cadastrar o produto",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.produto.CadastrarProdutoSteps.quero_cadastrar_o_produto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enviar os dados para a api de cadastro de produto",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.produto.CadastrarProdutoSteps.envio_os_dados_para_a_api_de_cadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"201\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/produtos/deletar-produto.feature");
formatter.feature({
  "name": "deletar produto",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@deletar_produto"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que realiza a busca de usuario via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.que_realizo_a_busca_de_usuario_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pegar email e senha para login de \u0027administrador\u0027",
  "keyword": "E "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.pegarEmailESenhaParaLogin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "realizar o login",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.login.LoginSteps.realizarOLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar que foi retornado um token de acesso",
  "keyword": "Então "
});
formatter.match({
  "location": "steps.login.LoginSteps.validoQueFoiRetornadoUmTokenDeAcesso()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que queira cadastrar o produto",
  "keyword": "E "
});
formatter.match({
  "location": "steps.produto.CadastrarProdutoSteps.quero_cadastrar_o_produto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enviar os dados para a api de cadastro de produto",
  "keyword": "E "
});
formatter.match({
  "location": "steps.produto.CadastrarProdutoSteps.envio_os_dados_para_a_api_de_cadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guardar o id do produto cadastrado",
  "keyword": "E "
});
formatter.match({
  "location": "steps.produto.CadastrarProdutoSteps.guardo_id_produto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"201\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deletar produto com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@deletar_produto"
    }
  ]
});
formatter.step({
  "name": "enviar os dados do produto cadastrado para a api de deleção",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.produto.DeletarProdutoSteps.envio_dados_para_api_de_delecao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"200\"",
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/produtos/editar-produto.feature");
formatter.feature({
  "name": "Editar usuário",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@editar_produto"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que realiza a busca de usuario via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.que_realizo_a_busca_de_usuario_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pegar email e senha para login de \u0027administrador\u0027",
  "keyword": "E "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.pegarEmailESenhaParaLogin(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "realizar o login",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.login.LoginSteps.realizarOLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar que foi retornado um token de acesso",
  "keyword": "Então "
});
formatter.match({
  "location": "steps.login.LoginSteps.validoQueFoiRetornadoUmTokenDeAcesso()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que queira cadastrar o produto",
  "keyword": "E "
});
formatter.match({
  "location": "steps.produto.CadastrarProdutoSteps.quero_cadastrar_o_produto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enviar os dados para a api de cadastro de produto",
  "keyword": "E "
});
formatter.match({
  "location": "steps.produto.CadastrarProdutoSteps.envio_os_dados_para_a_api_de_cadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guardar o id do produto cadastrado",
  "keyword": "E "
});
formatter.match({
  "location": "steps.produto.CadastrarProdutoSteps.guardo_id_produto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"201\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Editar produto com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@editar_produto"
    }
  ]
});
formatter.step({
  "name": "enviar os dados para edição",
  "rows": [
    {},
    {}
  ],
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.produto.EditarProdutoSteps.envio_dados_para_api_de_delecao(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enviar os dados do produto cadastrado para a api de deleção",
  "keyword": "E "
});
formatter.match({
  "location": "steps.produto.DeletarProdutoSteps.envio_dados_para_api_de_delecao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/usuario/buscar-usuario.feature");
formatter.feature({
  "name": "Buscar usuários",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@buscar_usuario"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.scenario({
  "name": "Buscar todos os usuários",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@buscar_usuario"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que realiza a busca de usuario via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.que_realizo_a_busca_de_usuario_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a lista de usuarios retornada",
  "keyword": "Então "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validar o retorno da api com status code \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Buscar usuário por número de identificação",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@buscar_usuario"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que realiza a busca de usuario pelo numero de identificacao \"123\"",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validar que o usuario foi retornado com sucesso",
  "keyword": "Então "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validar o retorno da api com status code \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/usuario/cadastrar-usuario.feature");
formatter.feature({
  "name": "Cadastrar usuário",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@cadastrar_usuario"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.scenario({
  "name": "Cadastrar usuário administrador com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@cadastrar_usuario"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que queira cadastrar um usuario \"administrador\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.usuario.CadastrarUsuarioSteps.queroCadastrarOUsuario(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enviar os dados para api de cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.usuario.CadastrarUsuarioSteps.envio_os_dados_para_a_api_de_cadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"201\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cadastrar usuário comum com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@cadastrar_usuario"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que queira cadastrar um usuario \"comum\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.usuario.CadastrarUsuarioSteps.queroCadastrarOUsuario(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enviar os dados para api de cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.usuario.CadastrarUsuarioSteps.envio_os_dados_para_a_api_de_cadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"201\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentar cadastrar usuário com dados inválidos",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@cadastrar_usuario"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que queira cadastrar um usuario com dados inválidos",
  "rows": [
    {},
    {}
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.usuario.CadastrarUsuarioSteps.queroCadastrarOUsuarioComDadosInvalidos(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enviar os dados para api de cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.usuario.CadastrarUsuarioSteps.envio_os_dados_para_a_api_de_cadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"400\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentar cadastrar usuário com dados em branco",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@cadastrar_usuario"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "enviar os dados em branco para a api de cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.usuario.CadastrarUsuarioSteps.envioOsDadosEmBrancoParaAApiDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"400\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/usuario/deletar-usuario.feature");
formatter.feature({
  "name": "Deletar usuário",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@deletar_usuario"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.scenario({
  "name": "Deletar usuário com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@deletar_usuario"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que realiza a busca de usuario via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.que_realizo_a_busca_de_usuario_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "identificar um id de forma aleatória",
  "keyword": "E "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.identificoOIdAtravesDoNomeEDoEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "efetuar a exclusão",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.usuario.DeletarUsuarioSteps.efetuarAExclusaoDoUsuario()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deletar usuário passando id que não consta na base",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@deletar_usuario"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que informa o id de usuário inexistente \u002732422\u0027",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.CommonsSteps.queInformaOIdInexistente(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "efetuar a exclusão",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.usuario.DeletarUsuarioSteps.efetuarAExclusaoDoUsuario()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/usuario/editar-usuario.feature");
formatter.feature({
  "name": "Editar usuário",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@editar_usuario"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.scenario({
  "name": "Editar usuário com dados válidos",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@editar_usuario"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que realiza a busca de usuario via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.que_realizo_a_busca_de_usuario_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "identificar um id de forma aleatória",
  "keyword": "E "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.identificoOIdAtravesDoNomeEDoEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enviar os dados para edição do usuário",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.usuario.EditarUsuarioSteps.EnvioOsDadosParaEdicao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.scenario({
  "name": "Tentar editar usuário com dados inválidos",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@editar_usuario"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que realiza a busca de usuario via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.que_realizo_a_busca_de_usuario_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "identificar um id de forma aleatória",
  "keyword": "E "
});
formatter.match({
  "location": "steps.usuario.BuscarUsuarioSteps.identificoOIdAtravesDoNomeEDoEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enviar os dados inválidos para edição do usuário",
  "rows": [
    {},
    {}
  ],
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.usuario.EditarUsuarioSteps.EnviarOsDadosInvalidosParaEdicaoDoUsuario(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"400\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.scenario({
  "name": "Tentar editar usuário com id que não existe para cadastrar o mesmo",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@editar_usuario"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que informa o id de usuário inexistente \u002732422\u0027",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.CommonsSteps.queInformaOIdInexistente(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enviar os dados para edição do usuário",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.usuario.EditarUsuarioSteps.EnvioOsDadosParaEdicao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o retorno da api com status code \"201\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
});