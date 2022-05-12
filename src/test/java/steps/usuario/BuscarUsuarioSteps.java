package steps.usuario;

import bean.ServiceBean;
import dto.UsuarioDTO;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Então;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.junit.Assert;
import service.usuario.BuscarUsuarioService;
@Slf4j
public class BuscarUsuarioSteps {

    UsuarioDTO usuario = new UsuarioDTO();
    BuscarUsuarioService buscar = new BuscarUsuarioService();

    @Dado( "que realiza a busca de usuario via api" )
    public void que_realiza_a_busca_de_usuario_via_api() {
        buscar.buscarUsuarios();
    }

    @Então( "validar lista de usuarios retornada" )
    public void validarListaDeUsuariosRetornada() {
        Assert.assertNotNull("Nenhum produto cadastrado", ServiceBean.getResponse().jsonPath().getString("usuarios"));
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

    @Dado( "que realiza a busca de usuario pelo numero de identificacao" )
    public void encontrarIdUsuario() {
        buscar.buscarUsuarios();

        JSONObject body = new JSONObject(ServiceBean.getResponse().asString().toString());

        buscar.buscarUsuarioPorId(body.getJSONArray("usuarios").getJSONObject(0).getString("_id"));
    }

    @Então( "validar que retornou o usuario" )
    public void valido_que_retornou_o_produto() {
        Assert.assertNotNull("Nenhum usuario encontrado", ServiceBean.getResponse().getBody().asString());
    }
}