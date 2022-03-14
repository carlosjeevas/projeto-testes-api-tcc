package service;

import bean.ServiceBean;
import dto.UsuarioDTO;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import utils.PropertyReader;

import static io.restassured.RestAssured.given;

@Slf4j
public class CadastrarService {

	private final static String URL = PropertyReader.getProperty("urlUsuarios");

	@Getter
	private Response response;

	public void cadastrarUsuario( UsuarioDTO usuario ) {

		RequestSpecBuilder request = new RequestSpecBuilder();

		request.setAccept( "*/*" );
		request.setContentType( "application/json" );

		log.info( "Retorno da API Cadastrar" );
		response = given()
				.log()
				.all()
				.spec( request.build() )
				.body( usuario )
				.post( URL );

		ServiceBean.setResponse( response );
	}
}
