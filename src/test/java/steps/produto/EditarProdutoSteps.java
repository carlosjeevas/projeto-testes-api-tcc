package steps.produto;

import bean.ServiceBean;
import dto.ProdutoDTO;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.Quando;
import lombok.extern.slf4j.Slf4j;
import service.produtos.EditarProdutoService;
import utils.PropertyReader;

import java.util.List;
import java.util.Map;

@Slf4j
public class EditarProdutoSteps {

    EditarProdutoService editar = new EditarProdutoService();
    ProdutoDTO produto = new ProdutoDTO();

    @Quando( "enviar os dados para edição" )
    public void enviar_dados_para_api_de_delecao( DataTable dados ) {

        List< Map< String, String > > rows = dados.asMaps( String.class, String.class );

        for( Map< String, String > columns : rows ) {
            produto.setNome( columns.get( "NOME" ) );
            produto.setPreco( Integer.parseInt(columns.get( "PRECO" )) );
            produto.setDescricao( columns.get( "DESCRICAO" ) );
            produto.setQuantidade( Integer.parseInt(columns.get( "QUANTIDADE" )) );

            editar.editarProdutoPorId( produto );
        }
    }
}
