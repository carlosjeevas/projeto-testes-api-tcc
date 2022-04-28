package service.usuario;

import static io.restassured.RestAssured.given;

import bean.ServiceBean;
import dto.UsuarioDTO;
import io.restassured.builder.RequestSpecBuilder;
import lombok.extern.slf4j.Slf4j;
import utils.PropertyReader;

@Slf4j
public class EditarUsuarioService {

    private final static String URL = PropertyReader.getProperty( "urlUsuarios" );

    public void editarUsuario( UsuarioDTO usuario ) {

        RequestSpecBuilder request = new RequestSpecBuilder();

        request.setAccept( "*/*" );
        request.setContentType( "application/json" );

        log.info( "Retorno da API Editar" );

        ServiceBean.setResponse(
                given()
                        .log()
                        .all()
                        .spec( request.build() )
                        .body( usuario )
                        .put( URL + "/" + ServiceBean.getIdUsuario() ) );
    }
}
