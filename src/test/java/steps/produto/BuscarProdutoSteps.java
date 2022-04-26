package steps.produto;

import bean.ServiceBean;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import org.junit.Assert;
import service.produtos.BuscarProdutoService;

public class BuscarProdutoSteps {
	
	BuscarProdutoService buscarProduto = new BuscarProdutoService();

    @Dado( "que realizo a busca de produtos via api" )
    public void que_realizo_a_busca_de_produto_via_api() {
    	buscarProduto.buscarProduto();
    }

    @Dado( "que realizo a busca de produto pelo numero de identificacao {string}" )
    public void que_realizo_a_busca_de_produto_pelo_numero_de_identificacao( String id ) {
        buscarProduto.buscarProdutoPorId(id);
    }

    @Então( "valido a lista de produtos retornada" )
    public void valido_a_lista_de_produtos() {
        Assert.assertNotNull("Nenhum produto cadastrado", ServiceBean.getResponse().jsonPath().getString("produtos"));
    }

    @Então( "valido que retornou o produto" )
    public void valido_que_retornou_o_produto() {
        Assert.assertNotNull("Nenhum produto encontrado", ServiceBean.getResponse().getBody().asString());
    }

    @Então( "valido que o produto foi retornado com sucesso" )
    public void valido_que_o_produto_foi_retornado_com_sucesso() {

    }
}