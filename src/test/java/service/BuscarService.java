package service;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

@Slf4j
public class BuscarService {

    @Getter
    private Response response;

    public void buscarUsuarios() {

        RequestSpecBuilder request = new RequestSpecBuilder();

        request.setAccept( "*/*" );
        request.setContentType( "application/json" );

        log.info( "return api buscar" );
        response = given()
                .log()
                .all()
                .spec( request.build() )
                .get( "https://serverest.dev/usuarios" );
    }

}
