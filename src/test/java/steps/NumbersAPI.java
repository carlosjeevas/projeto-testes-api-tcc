package steps;

import static io.restassured.RestAssured.given;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import junit.framework.Assert;
import utils.CodeBase;

public class NumbersAPI extends CodeBase {

	RequestSpecification request;
	Response response;
	
	
	@Given ("a api para realizar requisicao")
	public void que_estou_testando_a_api() {
		RestAssured.baseURI = "https://numbersapi.p.rapidapi.com";	
	}
	
	@Given("valido o keytoken")
	public void valido_o_keytoken() {
		request = given()
				  .header("x-rapidapi-host", "numbersapi.p.rapidapi.com")
				  .header("x-rapidapi-key", "179daf8b83mshb874fa933e84199p1ac02fjsnf569a3559ceb");
	}

	@Then("valido o status da requisicao")
	public void valido_o_status_da_requisicao() {
	    Assert.assertEquals(200, response.getStatusCode());;
	}

	@Given("capturo o retorno do body da api date")
	public void capturo_o_retorno_do_body() {
		response = request.get("/6/21/date?fragment=true&json=true").then().extract().response();
		response.print();
	}
	
	@Given("capturo o retorno do body da api math")
	public void capturo_o_retorno_do_math() {
		response = request.get("1729/math?fragment=true&json=true").then().extract().response();
		response.print();
	}
	
	@Given("capturo o retorno do body da api random")
	public void capturo_o_retorno_do_random() {
		response = request.get("random/trivia?min=10&max=20&fragment=true&json=true").then().extract().response();
		response.print();
	}
	
	@Given("capturo o retorno do body da api year")
	public void capturo_o_retorno_do_year() {
		response = request.get("/1492/year?fragment=true&json=true").then().extract().response();
		response.print();
	}
}
