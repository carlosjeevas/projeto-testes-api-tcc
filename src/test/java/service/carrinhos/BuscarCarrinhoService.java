package service.carrinhos;

import static io.restassured.RestAssured.given;

import java.util.Random;

import org.json.JSONObject;

import bean.ServiceBean;
import io.restassured.builder.RequestSpecBuilder;
import lombok.extern.slf4j.Slf4j;
import service.produtos.BuscarProdutoService;
import utils.PropertyReader;

@Slf4j
public class BuscarCarrinhoService {
	
	
    private final static String URL = PropertyReader.getProperty( "urlCarrinhos" );

    public void buscarCarrinhos() {

        RequestSpecBuilder request = new RequestSpecBuilder();

        request.setAccept( "*/*" );
        request.setContentType( "application/json" );

        ServiceBean.setResponse( given().spec( request.build() ).get( URL ) );

        log.info( "Retorno da API Buscar Carrinho" );
        ServiceBean.getResponse().then().log().all();
    }

    public void buscarCarrinhoPorId(String idCarrinho) {

        RequestSpecBuilder request = new RequestSpecBuilder();

        request.setAccept( "*/*" );
        request.setContentType( "application/json" );

        ServiceBean.setResponse( given().spec( request.build() ).get( String.format("%s/%s", URL, idCarrinho) ) );

        log.info( "Retorno da API Buscar Carrinho por Id" );
        ServiceBean.getResponse().then().log().all();
    }

}
