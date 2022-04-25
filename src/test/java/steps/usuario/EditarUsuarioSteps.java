package steps.usuario;

import java.util.List;
import java.util.Map;

import dto.UsuarioDTO;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.E;
import service.usuario.EditarUsuarioService;

public class EditarUsuarioSteps {

	EditarUsuarioService editar = new EditarUsuarioService();
	UsuarioDTO usuario = new UsuarioDTO();

	@E("envio os dados para edicao")
	public void EnvioOsDadosParaEdicao(DataTable dados) {

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
