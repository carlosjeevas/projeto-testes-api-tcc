package service.usuario;

import static io.restassured.RestAssured.given;

import org.json.JSONObject;

import bean.ServiceBean;
import groovy.util.logging.Slf4j;
import io.restassured.builder.RequestSpecBuilder;
import utils.PropertyReader;

@Slf4j
public class BuscarService {

    private final static String URL = PropertyReader.getProperty("urlUsuarios");


    public void buscarUsuarios() {

        RequestSpecBuilder request = new RequestSpecBuilder();

        request.setAccept( "*/*" );
        request.setContentType( "application/json" );

      //  log.info( "Retorno da API Buscar" );
  
        ServiceBean.setResponse(
        		given()
                .log()
                .all()
                .spec( request.build() )
                .get( URL ));
    }
    
    
    public void pegarIdAtravesDoNomeEDoEmail(String nome, String email) {
    	
    	JSONObject json = new JSONObject(ServiceBean.getResponse().asString().toString());
    	
    	Integer quantidadeListaDeUsuarios = json.getJSONArray("usuarios").length();
    	
    	for(int i = 0; i < quantidadeListaDeUsuarios; i++) {
    		
    		String nomeUsuario = json.getJSONArray("usuarios").getJSONObject(i).getString("nome");
    		String emailUsuario = json.getJSONArray("usuarios").getJSONObject(i).getString("email");
    		
    		if(nomeUsuario.equals(nome) && emailUsuario.equals(email)) {
    			ServiceBean.setIdUsuario(json.getJSONArray("usuarios").getJSONObject(i).getString("_id"));
    		}
    		
    		
    	}
    	
    	
    	
    }

}
