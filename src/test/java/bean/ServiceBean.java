package bean;

import io.restassured.response.Response;
import lombok.Getter;
import lombok.Setter;

public class ServiceBean {
	
	@Getter
	@Setter
	private static Response response;

	@Getter
	@Setter
	private static String token;

	@Getter
	@Setter
	private static String idUsuario;

	@Getter
	@Setter
	private static String idProduto;
	
	@Getter
	@Setter
	private static String passwordUsuario;
	
	@Getter
	@Setter
	private static String emailUsuario;
	
}
