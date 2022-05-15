package steps.carrinho;

import io.cucumber.java.pt.Então;
import service.carrinhos.DeletarCarrinhoService;

public class DeletarCarrinhoSteps {
	
	DeletarCarrinhoService deletar = new DeletarCarrinhoService();
	
	@Então("deletar o carrinho apos {string} a compra")
	public void deletarOCarrinhoAposFinalizarCompra(String cancelarOuConcluir) {
		deletar.deletarCarrinho(cancelarOuConcluir);
	}

}
