package steps.login;

import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Map;

import org.json.JSONObject;

import bean.ServiceBean;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import service.login.LoginService;

public class LoginSteps {

	LoginService login = new LoginService();

	@Dado("que tento realizar login com os dados")
	public void realizoOLoginComOsDados(DataTable dados) {

		List<Map<String, String>> rows = dados.asMaps(String.class, String.class);

		for (Map<String, String> columns : rows) {
			login.verificarUsuario(columns.get("EMAIL"), columns.get("SENHA"));
		}

		ServiceBean.setToken( ServiceBean.getResponse().jsonPath().getString("authorization") );
	}
	
	@Quando("realizar o login")
	public void realizarOLogin() {
		login.verificarUsuario(ServiceBean.getEmailUsuario(), ServiceBean.getPasswordUsuario());
		
		ServiceBean.setToken( ServiceBean.getResponse().jsonPath().getString("authorization") );
	}
	
	@Entao("validar que foi retornado um token de acesso")
		public void validoQueFoiRetornadoUmTokenDeAcesso() {
			JSONObject json = new JSONObject(ServiceBean.getResponse().asString().toString());
			
			boolean token = json.has("authorization");
			
			assertTrue(token);
		}
	}

