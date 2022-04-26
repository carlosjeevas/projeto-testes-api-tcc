package steps.produto;

import bean.ServiceBean;
import dto.ProdutoDTO;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Quando;
import io.restassured.builder.RequestSpecBuilder;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpHeaders;
import service.produtos.DeletarProdutoService;
import utils.PropertyReader;

import static io.restassured.RestAssured.given;

@Slf4j
public class DeletarProdutoSteps {

    private final static String URL = PropertyReader.getProperty( "urlProdutos" );

    DeletarProdutoService deletar = new DeletarProdutoService();

    @Quando( "envio os dados do produto cadastrado para a api de deleção" )
    public void envio_dados_para_api_de_delecao(  ) {
        deletar.deletarProdutoPorId( ServiceBean.getIdProduto() );
    }
}
