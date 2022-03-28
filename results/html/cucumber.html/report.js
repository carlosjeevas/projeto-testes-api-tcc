$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/usuario/usuario.feature");
formatter.feature({
  "name": "Usuarios",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@all"
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
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que quero cadastrar o usuario",
  "rows": [
    {},
    {}
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.CadastrarSteps.queroCadastrarOUsuario(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio os dados para a api de cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.CadastrarSteps.envio_os_dados_para_a_api_de_cadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o retorno da api com \"201\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Status HTTP diferente do esperado expected:\u003c201\u003e but was:\u003c400\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat steps.CommonsSteps.validoRetorndoDaApi(CommonsSteps.java:17)\r\n\tat ✽.valido o retorno da api com \"201\"(file:///C:/Users/igorc/Documents/TCC/projeto-testes-api-tcc/src/test/resources/features/usuario/usuario.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "valido a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
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
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que quero cadastrar o usuario",
  "rows": [
    {},
    {}
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.CadastrarSteps.queroCadastrarOUsuario(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio os dados para a api de cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.CadastrarSteps.envio_os_dados_para_a_api_de_cadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o retorno da api com \"201\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem retornada",
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
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que quero cadastrar o usuario",
  "rows": [
    {},
    {}
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.CadastrarSteps.queroCadastrarOUsuario(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio os dados para a api de cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.CadastrarSteps.envio_os_dados_para_a_api_de_cadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o retorno da api com \"400\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem retornada",
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
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "envio os dados em branco para a api de cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.CadastrarSteps.envioOsDadosEmBrancoParaAApiDeCadastro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o retorno da api com \"400\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem retornada",
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
formatter.scenario({
  "name": "Deletar usuário com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que realizo a busca de usuario via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.BuscarSteps.que_realizo_a_busca_de_usuario_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "identifico o id através do nome e do email",
  "rows": [
    {},
    {}
  ],
  "keyword": "E "
});
formatter.match({
  "location": "steps.BuscarSteps.identificoOIdAtravesDoNomeEDoEmail(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "efetuar a exclusão do usuário",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.DeletarSteps.efetuarAExclusaoDoUsuario()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o retorno da api com \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem retornada",
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
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que realizo a busca de usuario via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.BuscarSteps.que_realizo_a_busca_de_usuario_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "identifico o id através do nome e do email",
  "rows": [
    {},
    {}
  ],
  "keyword": "E "
});
formatter.match({
  "location": "steps.BuscarSteps.identificoOIdAtravesDoNomeEDoEmail(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "efetuar a exclusão do usuário",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.DeletarSteps.efetuarAExclusaoDoUsuario()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o retorno da api com \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem retornada",
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
  "name": "Login com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@usuario"
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
  "location": "steps.LoginSteps.realizoOLoginComOsDados(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que foi retornado um token de acesso",
  "keyword": "Então "
});
formatter.match({
  "location": "steps.LoginSteps.validoQueFoiRetornadoUmTokenDeAcesso()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat steps.LoginSteps.validoQueFoiRetornadoUmTokenDeAcesso(LoginSteps.java:36)\r\n\tat ✽.valido que foi retornado um token de acesso(file:///C:/Users/igorc/Documents/TCC/projeto-testes-api-tcc/src/test/resources/features/usuario/usuario.feature:67)\r\n",
  "status": "failed"
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
      "name": "@usuario"
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
  "location": "steps.LoginSteps.realizoOLoginComOsDados(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem retornada",
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
  "name": "valido o retorno da api com \"400\"",
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
      "name": "@usuario"
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
  "location": "steps.LoginSteps.realizoOLoginComOsDados(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem retornada",
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
  "name": "valido o retorno da api com \"401\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que realizo a busca de usuario via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.BuscarSteps.que_realizo_a_busca_de_usuario_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "identifico o id através do nome e do email",
  "rows": [
    {},
    {}
  ],
  "keyword": "E "
});
formatter.match({
  "location": "steps.BuscarSteps.identificoOIdAtravesDoNomeEDoEmail(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio os dados para edicao",
  "rows": [
    {},
    {}
  ],
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.EditarSteps.EnvioOsDadosParaEdicao(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o retorno da api com \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Status HTTP diferente do esperado expected:\u003c200\u003e but was:\u003c400\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat steps.CommonsSteps.validoRetorndoDaApi(CommonsSteps.java:17)\r\n\tat ✽.valido o retorno da api com \"200\"(file:///C:/Users/igorc/Documents/TCC/projeto-testes-api-tcc/src/test/resources/features/usuario/usuario.feature:94)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "valido a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
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
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que realizo a busca de usuario via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.BuscarSteps.que_realizo_a_busca_de_usuario_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "identifico o id através do nome e do email",
  "rows": [
    {},
    {}
  ],
  "keyword": "E "
});
formatter.match({
  "location": "steps.BuscarSteps.identificoOIdAtravesDoNomeEDoEmail(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio os dados para edicao",
  "rows": [
    {},
    {}
  ],
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.EditarSteps.EnvioOsDadosParaEdicao(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o retorno da api com \"400\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a mensagem retornada",
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
  "name": "Tentar editar usuário com dados que não existe para cadastrar o mesmo",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que realizo a busca de usuario via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.BuscarSteps.que_realizo_a_busca_de_usuario_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "identifico o id através do nome e do email",
  "rows": [
    {},
    {}
  ],
  "keyword": "E "
});
formatter.match({
  "location": "steps.BuscarSteps.identificoOIdAtravesDoNomeEDoEmail(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio os dados para edicao",
  "rows": [
    {},
    {}
  ],
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.EditarSteps.EnvioOsDadosParaEdicao(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o retorno da api com \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Status HTTP diferente do esperado expected:\u003c200\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat steps.CommonsSteps.validoRetorndoDaApi(CommonsSteps.java:17)\r\n\tat ✽.valido o retorno da api com \"200\"(file:///C:/Users/igorc/Documents/TCC/projeto-testes-api-tcc/src/test/resources/features/usuario/usuario.feature:118)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "valido a mensagem retornada",
  "rows": [
    {}
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "steps.CommonsSteps.validoMensagemRetornada(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
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
      "name": "@usuario"
    }
  ]
});
formatter.step({
  "name": "que realizo a busca de usuario via api",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.BuscarSteps.que_realizo_a_busca_de_usuario_via_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o retorno da api com \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});