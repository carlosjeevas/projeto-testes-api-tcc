package steps.carrinho;

import org.json.JSONObject;
import org.junit.Assert;

import bean.ServiceBean;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import service.carrinhos.BuscarCarrinhoService;

public class BuscarCarrinhoSteps {
	
	BuscarCarrinhoService carrinho = new BuscarCarrinhoService();
	
	
	@Dado("que realiza a busca de carrinho via api")
	public void queRealizaABuscaDeCarrinhoViaApi() {
		carrinho.buscarCarrinhos();	
	}
	
    @Então("validar lista de carrinho retornada")
    public void validarListaDeCarrinhoRetornada() {
    	Assert.assertNotNull("Nenhum carrinho cadastrado", ServiceBean.getResponse().jsonPath().getString("carrinhos"));
    }
    
    @Dado( "que realiza a busca de carrinho pelo numero de identificacao" )
    public void encontrarIdCarrinho() {
        carrinho.buscarCarrinhos();

        JSONObject body = new JSONObject(ServiceBean.getResponse().asString().toString());

        carrinho.buscarCarrinhoPorId(body.getJSONArray("carrinhos").getJSONObject(0).getString("_id"));
    }
    
    
    @Então( "validar que retornou o carrinho" )
    public void valido_que_retornou_o_produto() {
        Assert.assertNotNull("Nenhum carrinho encontrado", ServiceBean.getResponse().getBody().asString());
    }

}
