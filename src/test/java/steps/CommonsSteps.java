package steps;

import bean.ServiceBean;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import io.restassured.response.ResponseBodyExtractionOptions;
import org.junit.Assert;

public class CommonsSteps {

    @Então( "valido o retorno da api com {string}" )
    public void validoRetorndoDaApi( String retorno ) {
        Assert.assertEquals( "Status HTTP diferente do esperado", Integer.parseInt( retorno ), ServiceBean.getResponse().getStatusCode() );
    }

    @Então( "valido a mensagem retornada {string}" )
    public void validoMensagemRetornada( String mensagem ) {
        ResponseBodyExtractionOptions responseBody = ServiceBean.getResponse();

        System.out.println(responseBody.asString());
        Assert.assertEquals( "Mensagem diferente da esperada", mensagem, responseBody.jsonPath().getString( "message" ) );
    }
}
