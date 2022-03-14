package steps;

import java.util.List;
import java.util.Map;

import dto.UsuarioDTO;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Quando;
import service.CadastrarService;

public class CadastrarSteps {

    CadastrarService cadastrar = new CadastrarService();
    UsuarioDTO usuario = new UsuarioDTO();

    @Dado( "que quero cadastrar o usuario" )
    public void queroCadastrarOUsuario( DataTable dados ) {

        List< Map< String, String > > rows = dados.asMaps( String.class, String.class );

        for( Map< String, String > columns : rows ) {
            usuario.setNome( columns.get( "NOME" ) );
            usuario.setEmail( columns.get( "EMAIL" ) );
            usuario.setPassword( columns.get( "SENHA" ) );

            if( columns.get( "ADMINISTRADOR" ).toUpperCase().equals( "SIM" ) ) {
                usuario.setAdministrador( "true" );
            } else
                usuario.setAdministrador( "false" );
        }
    }

    @Quando( "envio os dados para a api de cadastro" )
    public void envio_os_dados_para_a_api_de_cadastro() {
        cadastrar.cadastrarUsuario( usuario );
    }
}
