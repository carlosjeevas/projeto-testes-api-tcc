package logic;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;

public class CadastrarLogic {

	public void dadosUsuario(String nome, String email, String senha, Boolean administrador) {

		RestAssured.given()
		.body(
				"{\n" + 
				"	\"nome\":" + nome + ",\n" + 
				"	\"email\":" + email +",\n" +
				"	\"senha\":" + senha + ",\n" +
				"	\"administrador\":" + administrador +",\n" +
				"}")
		.contentType(ContentType.JSON)
		.when()
		.post("/usuarios");

	}

}
