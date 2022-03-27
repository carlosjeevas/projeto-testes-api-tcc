$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/usuario/editar.feature");
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
  "name": "valido o retorno da api com \"201\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Status HTTP diferente do esperado expected:\u003c201\u003e but was:\u003c400\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat steps.CommonsSteps.validoRetorndoDaApi(CommonsSteps.java:17)\r\n\tat ✽.valido o retorno da api com \"201\"(file:///C:/Users/igorc/Documents/TCC/projeto-testes-api-tcc/src/test/resources/features/usuario/editar.feature:15)\r\n",
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
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
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
      "name": "@editar_usuario"
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
});