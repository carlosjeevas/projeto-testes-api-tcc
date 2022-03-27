package steps;

import java.util.List;
import java.util.Map;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Então;
import service.BuscarService;

public class BuscarSteps {
	
	BuscarService buscar = new BuscarService();

    @Dado( "que realizo a busca de usuario via api" )
    public void que_realizo_a_busca_de_usuario_via_api() {
    	buscar.buscarUsuarios();
    }
    

    @Dado( "que realizo a busca de usuario pelo numero de identificacao {string}" )
    public void que_realizo_a_busca_de_usuario_pelo_numero_de_identificacao( String id ) {

    }

    @Então( "valido a lista de usuarios retornada" )
    public void valido_a_lista_de_usuarios() {

    }

    @Então( "valido que o usuario foi retornado com sucesso" )
    public void valido_que_o_usuario_foi_retornado_com_sucesso() {

    }
    
    @E("identifico o id através do nome e do email")
    public void identificoOIdAtravesDoNomeEDoEmail(DataTable dados) {
    	
    	List< Map< String, String > > rows = dados.asMaps( String.class, String.class );
    	
    	for( Map< String, String > columns : rows ) {
    		buscar.pegarIdAtravesDoNomeEDoEmail(columns.get( "NOME" ), columns.get( "EMAIL" ));
    		
    	}

}

}