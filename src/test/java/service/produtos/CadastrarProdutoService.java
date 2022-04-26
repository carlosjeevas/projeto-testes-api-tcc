package service.produtos;

import bean.ServiceBean;
import dto.ProdutoDTO;
import dto.UsuarioDTO;
import io.restassured.builder.RequestSpecBuilder;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpHeaders;
import utils.PropertyReader;

import static io.restassured.RestAssured.given;

@Slf4j
public class CadastrarProdutoService {
    private final static String URL = PropertyReader.getProperty( "urlProdutos" );

    public void cadastrarProduto( ProdutoDTO produtoDTO ) {

        RequestSpecBuilder request = new RequestSpecBuilder();

        request.setAccept( "*/*" );
        request.setContentType( "application/json" );
        request.addHeader( HttpHeaders.AUTHORIZATION, String.format( ServiceBean.getToken() ) );

        ServiceBean.setResponse(
                given()
                        .log()
                        .all()
                        .spec( request.build() )
                        .body( produtoDTO )
                        .post( URL ) );

        log.info( "Retorno da API Cadastrar Produto" );
        ServiceBean.getResponse().then().log().all();
    }

    public void guardarIdProduto() {
        ServiceBean.setIdProduto( ServiceBean.getResponse().jsonPath().getString( "_id" ) );
    }
}
