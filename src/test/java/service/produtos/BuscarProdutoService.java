package service.produtos;

import bean.ServiceBean;
import io.restassured.builder.RequestSpecBuilder;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import utils.PropertyReader;

import static io.restassured.RestAssured.given;

@Slf4j
public class BuscarProdutoService {

    private final static String URL = PropertyReader.getProperty( "urlProdutos" );

    public void buscarProduto() {

        RequestSpecBuilder request = new RequestSpecBuilder();

        request.setAccept( "*/*" );
        request.setContentType( "application/json" );

        ServiceBean.setResponse(
                given()
                        .log()
                        .all()
                        .spec( request.build() )
                        .get( URL ) );

        log.info( "Retorno da API de Produtos" );
        ServiceBean.getResponse().then().log().all();
    }

    public void buscarProdutoPorId( String id ) {

        RequestSpecBuilder request = new RequestSpecBuilder();

        request.setAccept( "*/*" );
        request.setContentType( "application/json" );

        ServiceBean.setResponse(
                given()
                        .log()
                        .all()
                        .spec( request.build() )
                        .get( String.format( "%s/%s", URL, id ) ) );

        log.info( "Retorno da API de Produtos" );
        ServiceBean.getResponse().then().log().all();
    }
}
