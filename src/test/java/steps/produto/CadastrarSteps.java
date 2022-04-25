package steps.produto;

import dto.ProdutoDTO;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Quando;
import service.produtos.CadastrarProdutoService;

import java.util.List;
import java.util.Map;

public class CadastrarSteps {

    CadastrarProdutoService cadastrar = new CadastrarProdutoService();
    ProdutoDTO produtoDTO = new ProdutoDTO();

    @Dado( "que quero cadastrar o produto" )
    public void quero_cadastrar_o_produto( DataTable dados ) {

        List< Map< String, String > > rows = dados.asMaps( String.class, String.class );

        for( Map< String, String > columns : rows ) {
            produtoDTO.setNome( columns.get( "NOME" ) );
            produtoDTO.setPreco( columns.get( "PRECO" ) );
            produtoDTO.setDescricao( columns.get( "DESCRICAO" ) );
            produtoDTO.setQuantidade( columns.get( "QUANTIDADE" ) );
        }
    }

    @Quando( "envio os dados para a api de cadastro de produto" )
    public void envio_os_dados_para_a_api_de_cadastro() {
        cadastrar.cadastrarProduto( produtoDTO );
    }

//    @Quando( "envio os dados em branco para a api de cadastro" )
//    public void envioOsDadosEmBrancoParaAApiDeCadastro() {
//    	usuario.setNome("");
//    	usuario.setEmail("");
//    	usuario.setPassword("");
//    	usuario.setAdministrador("");
//        cadastrar.cadastrarUsuario( usuario );
//    }
}
