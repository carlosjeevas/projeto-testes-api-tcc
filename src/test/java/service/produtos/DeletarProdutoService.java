package service.produtos;

import bean.ServiceBean;
import io.restassured.builder.RequestSpecBuilder;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpHeaders;
import utils.PropertyReader;

import static io.restassured.RestAssured.given;

@Slf4j
public class DeletarProdutoService {

    private final static String URL = PropertyReader.getProperty( "urlProdutos" );

    public void deletarProdutoPorId( String idProduto ) {
        RequestSpecBuilder request = new RequestSpecBuilder();

        request.setAccept( "*/*" );
        request.setContentType( "application/json" );
        request.addHeader( HttpHeaders.AUTHORIZATION, String.format( ServiceBean.getToken() ) );

        ServiceBean.setResponse(
                given()
                        .log()
                        .all()
                        .spec( request.build() )
                        .delete( String.format( "%s/%s", URL, idProduto ) ) );

        log.info( "Retorno da API Deletar Produto" );
        ServiceBean.getResponse().then().log().all();
    }
}
