package service;

import bean.ServiceBean;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import utils.PropertyReader;

import static io.restassured.RestAssured.given;

@Slf4j
public class BuscarService {

    private final static String URL = PropertyReader.getProperty("urlUsuarios");

    @Getter
    private Response response;

    public void buscarUsuarios() {

        RequestSpecBuilder request = new RequestSpecBuilder();

        request.setAccept( "*/*" );
        request.setContentType( "application/json" );

        log.info( "Retorno da API Buscar" );
        response = given()
                .log()
                .all()
                .spec( request.build() )
                .get( URL );

        ServiceBean.setResponse( response );
    }

}
