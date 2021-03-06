package service.login;

import static io.restassured.RestAssured.given;

import org.json.JSONObject;

import bean.ServiceBean;
import dto.UsuarioDTO;
import io.restassured.builder.RequestSpecBuilder;
import lombok.extern.slf4j.Slf4j;
import utils.PropertyReader;

@Slf4j
public class LoginService {

    private final static String URL = PropertyReader.getProperty( "urlLogin" );

    public void verificarUsuario( String email, String senha ) {

        RequestSpecBuilder request = new RequestSpecBuilder();

        request.setAccept( "*/*" );
        request.setContentType( "application/json" );

        log.info( "Request para API de Login" );

        ServiceBean.setResponse(
                given()
                        .log()
                        .all()
                        .spec( request.build() )
                        .body( "{\n"
                                + "  \"email\":\"" + email + "\",\n"
                                + "  \"password\":\"" + senha + "\"\n"
                                + "}" )
                        .post( URL ) );

        log.info( "Retorno da API de Login" );
        ServiceBean.getResponse().then().log().all();
    }

    public void validarToken() {

        JSONObject json = new JSONObject( ServiceBean.getResponse() );
        ServiceBean.setToken( json.getString( "authorization" ) );
    }
}
	