package dto;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CarrinhoDTO {
	
	
	List<CarrinhoProdutoDTO> produtos;
	
	
	public void adicionarProduto(CarrinhoProdutoDTO produto) {
		
		produtos = new ArrayList<>();
		
		produtos.add(produto);
		
	}

}
 