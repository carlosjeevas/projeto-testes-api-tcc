package steps.usuario;

import java.util.List;
import java.util.Map;

import com.github.javafaker.Faker;

import dto.UsuarioDTO;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.E;
import service.usuario.EditarUsuarioService;

public class EditarUsuarioSteps {

	EditarUsuarioService editar = new EditarUsuarioService();
	UsuarioDTO usuario = new UsuarioDTO();
	Faker faker = new Faker();

	@E("enviar os dados para edição do usuário")
	public void EnvioOsDadosParaEdicao() {

		usuario.setNome(faker.name().fullName());
		usuario.setEmail(faker.internet().emailAddress());
		usuario.setPassword(faker.internet().password());
		usuario.setAdministrador("false");

		editar.editarUsuario(usuario);
	}
	
	@E("enviar os dados inválidos para edição do usuário")
	public void EnviarOsDadosInvalidosParaEdicaoDoUsuario(DataTable dados) {
		
		List<Map<String, String>> rows = dados.asMaps(String.class, String.class);

		for (Map<String, String> columns : rows) {
			usuario.setNome(columns.get("NOME"));
			usuario.setEmail(columns.get("EMAIL"));
			usuario.setPassword(columns.get("SENHA"));

			if (columns.get("ADMINISTRADOR").toUpperCase().equals("SIM")) {
				usuario.setAdministrador("true");
			} else
				usuario.setAdministrador("false");
		}
		editar.editarUsuario(usuario);
	}
		
	}
	
	
