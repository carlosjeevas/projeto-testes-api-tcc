package steps.produto;

import dto.ProdutoDTO;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Quando;
import service.produtos.CadastrarProdutoService;

import java.util.List;
import java.util.Map;

import com.github.javafaker.Faker;

public class CadastrarProdutoSteps {

	CadastrarProdutoService cadastrar = new CadastrarProdutoService();
	ProdutoDTO produtoDTO = new ProdutoDTO();
	Faker faker = new Faker();

	@Dado("que queira cadastrar o produto")
	public void quero_cadastrar_o_produto() {
		produtoDTO.setNome(faker.commerce().productName());
		produtoDTO.setPreco(30);
		produtoDTO.setDescricao(faker.lorem().sentence());
		produtoDTO.setQuantidade(faker.number().digit());
	}

	@Quando("enviar os dados para a api de cadastro de produto")
	public void envio_os_dados_para_a_api_de_cadastro() {
		cadastrar.cadastrarProduto(produtoDTO);
	}

	@E("guardar o id do produto cadastrado")
	public void guardo_id_produto() {
		cadastrar.guardarIdProduto();
	}

}
