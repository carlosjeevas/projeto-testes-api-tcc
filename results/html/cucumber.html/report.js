$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/usuario/cadastrar.feature");
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
  "error_message": "java.lang.IllegalArgumentException: path cannot be null\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.common.assertion.AssertParameter.notNull(AssertParameter.groovy:26)\r\n\tat io.restassured.path.json.JsonPath.createJsonAssertion(JsonPath.java:1014)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:201)\r\n\tat io.restassured.path.json.JsonPath.getString(JsonPath.java:352)\r\n\tat steps.CommonsSteps.validoMensagemRetornada(CommonsSteps.java:32)\r\n\tat ✽.valido a mensagem retornada(file:///C:/Users/igorc/Documents/TCC/projeto-testes-api-tcc/src/test/resources/features/usuario/cadastrar.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "valido o retorno da api com \"201\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
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
      "name": "@cadastrar_usuario"
    },
    {
      "name": "@teste"
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
  "error_message": "java.lang.IllegalArgumentException: path cannot be null\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.common.assertion.AssertParameter.notNull(AssertParameter.groovy:26)\r\n\tat io.restassured.path.json.JsonPath.createJsonAssertion(JsonPath.java:1014)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:201)\r\n\tat io.restassured.path.json.JsonPath.getString(JsonPath.java:352)\r\n\tat steps.CommonsSteps.validoMensagemRetornada(CommonsSteps.java:32)\r\n\tat ✽.valido a mensagem retornada(file:///C:/Users/igorc/Documents/TCC/projeto-testes-api-tcc/src/test/resources/features/usuario/cadastrar.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "valido o retorno da api com \"201\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.CommonsSteps.validoRetorndoDaApi(java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
      "name": "@opa"
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
});