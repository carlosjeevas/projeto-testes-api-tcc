package steps.usuario;

import dto.UsuarioDTO;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import service.usuario.BuscarUsuarioService;

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

    @E( "pegar email e senha para login" )
    public void pegarEmailESenhaParaLogin() {
        buscar.pegarEmailESenhaDeFormaAleatoria();
    }
}