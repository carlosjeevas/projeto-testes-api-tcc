package service.usuario;

import static io.restassured.RestAssured.given;

import bean.ServiceBean;
import io.restassured.builder.RequestSpecBuilder;
import lombok.extern.slf4j.Slf4j;
import utils.PropertyReader;
@Slf4j
public class DeletarUsuarioService {

	private final static String URL = PropertyReader.getProperty("urlUsuarios");

	public void deletarUsuario( ) {

		RequestSpecBuilder request = new RequestSpecBuilder();

		request.setAccept( "*/*" );
		request.setContentType( "application/json" );

		log.info( "Retorno da API Deletar" );
		
		ServiceBean.setResponse( 
				given()
				.log()
				.all()
				.spec( request.build() )
				.delete( URL+"/"+ServiceBean.getIdUsuario()));
	}
}

