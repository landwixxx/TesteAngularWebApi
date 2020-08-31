import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { HttpHeaders, HttpClient } from '@angular/common/http';

class Produto{
	public Id: number;
	public Nome: string;
	public Valor: number;
	public Descricao: string;
	public Imagem: string;
}

class ItemPedido{
	public IdProduto: number;
	public Valor: number;
}

class NovoPedido {
	public IdCliente: number;
	public Data: Date;
	public Items: ItemPedido[];
	public Desconto: number;
	public ValorTotal: number;
}

class Cliente{
	public Id: number;
	public Nome: string;
}

@Component({
	selector: 'app-cadastro-pedido',
	templateUrl: './cadastro-pedido.component.html',
	styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent implements OnInit {

	form: FormGroup;

	idCliente = this.activatedRoute.snapshot.params['id'];

	cliente: Cliente;

	produtos: Produto[] = [];
	
	selectedProdutos: Produto[] = [];

	data = new Date();

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
		this.form = this.formBuilder.group({
			desconto: ['', Validators.min(0)],			
		});
	}

	ngOnInit() {
		this.http.get<Cliente>('http://localhost:49493/api/clientes/' + this.idCliente)
			.subscribe(clienteAtual => this.cliente = clienteAtual);

		this.http.get<Produto[]>('http://localhost:49493/api/produtos/')
			.subscribe(produtosEncontrados => {
				this.produtos = produtosEncontrados;
			});			
	}
	
	home(){
		this.router.navigate([''])
	}

	takeOff(produto: Produto){		
		var id = this.selectedProdutos.indexOf(produto);
		document.getElementById(id.toString()).remove();			
		this.selectedProdutos.splice(this.selectedProdutos.indexOf(produto),1)
		console.log(this.selectedProdutos)
	}

	add(produto: Produto){
		if(this.selectedProdutos.includes(produto))
		{
			window.alert("O produto " + produto.Nome + " já está no carrinho!")
		}else
		{
			this.selectedProdutos.push(produto);
		}
	}

	onSubmit() {
		
		var values = this.form.value;

		
		var itemsPedido: ItemPedido[] = [];
		var valorTotalPedido = 0;
		
		this.selectedProdutos.forEach(produtoSelecionado => {
			var novoItemPedido = new ItemPedido();
			novoItemPedido.IdProduto = produtoSelecionado.Id,
			novoItemPedido.Valor = produtoSelecionado.Valor,
			valorTotalPedido += novoItemPedido.Valor
			itemsPedido.push(novoItemPedido);
		});
		
		if (this.form.invalid || values > valorTotalPedido) {
			console.log("Invalido")
				return;
			}

		valorTotalPedido -= values.desconto;

		var novoPedido = new NovoPedido();
		novoPedido.IdCliente = this.idCliente;
		novoPedido.Items = itemsPedido;
		novoPedido.ValorTotal = valorTotalPedido;
		
		novoPedido.Data = new Date();
		
		this.http.post('http://localhost:49493/api/pedidos/', JSON.stringify(novoPedido), this.httpOptions)
			.subscribe(data => {
				this.router.navigate(['clientes/' + this.idCliente + '/pedidos']);
			}, error => {
				console.log('Error', error);
			});		
	}

}
