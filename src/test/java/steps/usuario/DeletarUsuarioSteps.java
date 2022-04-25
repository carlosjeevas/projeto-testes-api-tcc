package steps.usuario;

import bean.ServiceBean;
import io.cucumber.java.pt.Quando;
import service.usuario.DeletarUsuarioService;

public class DeletarUsuarioSteps {
	
	DeletarUsuarioService deletar = new DeletarUsuarioService();
	
	@Quando("efetuar a exclusão do usuário")
	public void efetuarAExclusaoDoUsuario() {
		deletar.deletarUsuario();
		ServiceBean.getResponse();
	}
}
