package steps.produto;

import bean.ServiceBean;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Então;
import org.junit.Assert;
import service.produtos.BuscarProdutoService;

import java.util.List;
import java.util.Map;

public class BuscarSteps {
	
	BuscarProdutoService buscarProduto = new BuscarProdutoService();

    @Dado( "que realizo a busca de produtos via api" )
    public void que_realizo_a_busca_de_produto_via_api() {
    	buscarProduto.buscarProduto();
    }
    

    @Dado( "que realizo a busca de produto pelo numero de identificacao {string}" )
    public void que_realizo_a_busca_de_usuario_pelo_numero_de_identificacao( String id ) {

    }

    @Então( "valido a lista de produtos retornada" )
    public void valido_a_lista_de_produtos() {
        Assert.assertNotNull("Nenhum produto cadastrado", ServiceBean.getResponse().jsonPath().getString("produtos"));
    }

    @Então( "valido que o produto foi retornado com sucesso" )
    public void valido_que_o_produto_foi_retornado_com_sucesso() {

    }
    
    @E("identifico o id do produto através do nome e do email")
    public void identificoOIdDoProdutoAtravesDoNomeEDoEmail(DataTable dados) {
    	
    	List< Map< String, String > > rows = dados.asMaps( String.class, String.class );
    	
    	for( Map< String, String > columns : rows ) {
    		buscarProduto.pegarIdAtravesDoNomeEDoEmail(columns.get( "NOME" ), columns.get( "EMAIL" ));
    	}
    }
}