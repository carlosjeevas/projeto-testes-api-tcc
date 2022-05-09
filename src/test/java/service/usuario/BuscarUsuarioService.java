package service.usuario;

import static io.restassured.RestAssured.given;

import java.util.Random;

import org.json.JSONObject;

import bean.ServiceBean;
import io.restassured.builder.RequestSpecBuilder;
import lombok.extern.slf4j.Slf4j;
import utils.PropertyReader;

@Slf4j
public class BuscarUsuarioService {

    private final static String URL = PropertyReader.getProperty( "urlUsuarios" );

    public void buscarUsuarios() {

        RequestSpecBuilder request = new RequestSpecBuilder();

        request.setAccept( "*/*" );
        request.setContentType( "application/json" );

        ServiceBean.setResponse( given().spec( request.build() ).get( URL ) );

        log.info( "Retorno da API Buscar Usuário" );
        ServiceBean.getResponse().then().log().all();
    }

    public void pegarIdDeFormaAleatoria() {

        Random numberRandom = new Random();
        JSONObject json = new JSONObject( ServiceBean.getResponse().asString().toString() );

        int quantidadeIndiceDeUsuarios = json.getJSONArray( "usuarios" ).length();
        int indiceUsuario = numberRandom.nextInt( quantidadeIndiceDeUsuarios );

        String idUsuario = json.getJSONArray( "usuarios" ).getJSONObject( indiceUsuario ).getString( "_id" );

        ServiceBean.setIdUsuario( idUsuario );
    }


	public void pegarEmailESenhaDeUsuarioComumEAdministrador(String tipoUsuario) {

		JSONObject json = new JSONObject(ServiceBean.getResponse().asString().toString());

		int quantidadeIndiceDeUsuarios = json.getJSONArray("usuarios").length();

		for (int i = 0; i < quantidadeIndiceDeUsuarios; i++) {
			String AdministradorOuComum = json.getJSONArray("usuarios").getJSONObject(i).getString("administrador");
			if (tipoUsuario.equals(AdministradorOuComum)) {
				String emailUsuario = json.getJSONArray("usuarios").getJSONObject(i).getString("email");
				String senhaUsuario = json.getJSONArray("usuarios").getJSONObject(i).getString("password");
				ServiceBean.setEmailUsuario(emailUsuario);
				ServiceBean.setPasswordUsuario(senhaUsuario);
				break;
			}
			}

		}
}