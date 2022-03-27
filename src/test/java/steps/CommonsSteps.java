package steps;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import bean.ServiceBean;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.Então;
import io.restassured.response.ResponseBodyExtractionOptions;

public class CommonsSteps {

    @Então( "valido o retorno da api com {string}" )
    public void validoRetorndoDaApi( String retorno ) {
        Assert.assertEquals( "Status HTTP diferente do esperado", Integer.parseInt( retorno ), ServiceBean.getResponse().getStatusCode() );
    }

    @Então( "valido a mensagem retornada" )
    public void validoMensagemRetornada( DataTable msg ) {
    	
        ResponseBodyExtractionOptions responseBody = ServiceBean.getResponse();
        
        Map<String, String> test = responseBody.jsonPath().getMap("$");
        
        List<String> rows = msg.asList( String.class);
        for(String linhas : rows) {	
        	Assert.assertEquals( "Mensagem diferente da esperada", linhas, responseBody.jsonPath().getString(test.entrySet().stream().filter(e -> e.getValue().equals(linhas)).findFirst().map(Map.Entry::getKey).orElse("Diferente")));
    }
}
}
