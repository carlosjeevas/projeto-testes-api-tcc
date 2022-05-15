package steps.carrinho;

import bean.ServiceBean;
import dto.CarrinhoDTO;
import dto.CarrinhoProdutoDTO;
import dto.ProdutoDTO;
import io.cucumber.java.pt.Quando;
import service.carrinhos.CadastrarCarrinhoService;

public class CadastrarCarrinhoSteps {
	
	CadastrarCarrinhoService cadastrar = new CadastrarCarrinhoService();
	CarrinhoDTO carrinho = new CarrinhoDTO();
	CarrinhoProdutoDTO produtos = new CarrinhoProdutoDTO();

	
	@Quando("cadastrar o carrinho")
	public void cadastrarOCarrinho() {
		
		produtos.setIdProduto(ServiceBean.getIdProduto());
		produtos.setQuantidade(1);

		carrinho.adicionarProduto(produtos);	
		
		cadastrar.cadastrarCarrinho(carrinho);
	}

}
