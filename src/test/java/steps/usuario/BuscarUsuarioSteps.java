package steps.usuario;

import dto.UsuarioDTO;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import lombok.extern.slf4j.Slf4j;
import service.usuario.BuscarUsuarioService;
@Slf4j
public class BuscarUsuarioSteps {

    UsuarioDTO usuario = new UsuarioDTO();
    BuscarUsuarioService buscar = new BuscarUsuarioService();

    @Dado( "que realiza a busca de usuario via api" )
    public void que_realizo_a_busca_de_usuario_via_api() {
        buscar.buscarUsuarios();
    }

    @E( "identificar um id de forma aleatória" )
    public void identificoOIdAtravesDoNomeEDoEmail() {
        buscar.pegarIdDeFormaAleatoria();
    }
    
    @E("pegar email e senha para login de {string}")
    public void pegarEmailESenhaParaLogin(String tipoUsuario) {
    	
    	if(tipoUsuario.equals("comum")) {
    		tipoUsuario = "false";
    	}
    	else if(tipoUsuario.equals("administrador")) {
    		tipoUsuario = "true";
    	}
    	else {
    		log.info("Tipo Usuário incorreto");
    	}
    	
    	buscar.pegarEmailESenhaDeUsuarioComumEAdministrador(tipoUsuario);
    }
}