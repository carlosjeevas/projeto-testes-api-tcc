package steps;

import java.util.List;
import java.util.Map;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.Dado;
import service.CadastrarService;

public class CadastrarSteps {
	
	CadastrarService cadastrar = new CadastrarService();
	
	@Dado("que quero cadastrar o usuario")
	public void queroCadastrarOUsuario(DataTable dados) {
		List<Map<String, String>> rows = dados.asMaps(String.class, String.class);
		for (Map<String, String> columns : rows) {
			cadastrar.dadosUsuario(columns.get("NOME"), columns.get("EMAIL"), columns.get("SENHA"), columns.get("ADMINISTRADOR"));
		}
		
	}

}
