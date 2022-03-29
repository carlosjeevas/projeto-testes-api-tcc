package steps.usuario;

import bean.ServiceBean;
import io.cucumber.java.pt.Quando;
import service.usuario.DeletarService;

public class DeletarSteps {
	
	DeletarService deletar = new DeletarService();
	
	@Quando("efetuar a exclusão do usuário")
	public void efetuarAExclusaoDoUsuario() {
		deletar.deletarUsuario();
		ServiceBean.getResponse();
	}
}