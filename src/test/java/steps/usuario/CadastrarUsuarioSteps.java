package steps.usuario;

import java.util.List;
import java.util.Map;

import com.github.javafaker.Faker;

import dto.UsuarioDTO;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Quando;
import lombok.extern.slf4j.Slf4j;
import service.login.LoginService;
import service.usuario.CadastrarUsuarioService;
@Slf4j
public class CadastrarUsuarioSteps {

	CadastrarUsuarioService cadastrar = new CadastrarUsuarioService();
	UsuarioDTO usuario = new UsuarioDTO();

	Faker faker = new Faker();

	@Dado("que queira cadastrar um usuario {string}")
	public void queroCadastrarOUsuario(String tipoUsuario) {

		usuario.setNome(faker.name().fullName());
		usuario.setEmail(faker.internet().emailAddress());
		usuario.setPassword(faker.internet().password());

		if (tipoUsuario.toLowerCase().equals("comum")) {
			usuario.setAdministrador("false");
		} else if (tipoUsuario.toLowerCase().equals("administrador")) {
			usuario.setAdministrador("true");
		} else {
			log.info("tipoUsuario não existe");
	}

	}

	@Dado("que queira cadastrar um usuario com dados inválidos")
	public void queroCadastrarOUsuarioComDadosInvalidos(DataTable dados) {

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
	}

	@Quando("enviar os dados para api de cadastro")
	public void envio_os_dados_para_a_api_de_cadastro() {
		cadastrar.cadastrarUsuario(usuario);
	}

	@Quando("enviar os dados em branco para a api de cadastro")
	public void envioOsDadosEmBrancoParaAApiDeCadastro() {
		usuario.setNome("");
		usuario.setEmail("");
		usuario.setPassword("");
		usuario.setAdministrador("");
		cadastrar.cadastrarUsuario(usuario);
	}
}
