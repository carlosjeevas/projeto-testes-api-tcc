package steps.produto;

import bean.ServiceBean;
import io.cucumber.java.pt.Quando;
import lombok.extern.slf4j.Slf4j;
import service.produtos.DeletarProdutoService;
import utils.PropertyReader;

@Slf4j
public class DeletarProdutoSteps {

    private final static String URL = PropertyReader.getProperty( "urlProdutos" );

    DeletarProdutoService deletar = new DeletarProdutoService();


    @Quando( "enviar os dados do produto cadastrado para a api de deleção" )
    public void envio_dados_para_api_de_delecao(  ) {
        deletar.deletarProdutoPorId( ServiceBean.getIdProduto() );
    }
}
