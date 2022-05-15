package service.carrinhos;

import static io.restassured.RestAssured.given;

import org.apache.http.HttpHeaders;

import bean.ServiceBean;
import dto.CarrinhoDTO;
import io.restassured.builder.RequestSpecBuilder;
import lombok.extern.slf4j.Slf4j;
import utils.PropertyReader;


@Slf4j
public class DeletarCarrinhoService {
	
	private final static String URL = PropertyReader.getProperty( "urlCarrinhos" );
	
    public void deletarCarrinho(String cancelarOuConcluir) {

        RequestSpecBuilder request = new RequestSpecBuilder();

        request.setAccept( "*/*" );
        request.setContentType( "application/json" );
        request.addHeader( HttpHeaders.AUTHORIZATION, String.format( ServiceBean.getToken() ) );

        ServiceBean.setResponse(
                given()
                        .log()
                        .all()
                        .spec( request.build() )
                        .delete(String.format("%s/%s%s", URL, cancelarOuConcluir, "-compra")));

        log.info( "Retorno da API Deletar Carrinho" );
        ServiceBean.getResponse().then().log().all();
    }


}
