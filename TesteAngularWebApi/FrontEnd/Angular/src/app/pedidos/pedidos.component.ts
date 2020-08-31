import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';


class Pedido {
	public Id: number;
	public IdCliente: number;
	public Data: Date;	
	public Valor: number;
	public Desconto: number;
	public ValorTotal: number;
}

class PedidoResumido{
	public Id: number;
	public Data: Date;

}

class Cliente {
	public Id: string;
	public Nome: string;
}

@Component({
	selector: 'app-pedidos',
	templateUrl: './pedidos.component.html',
	styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

	pedidos:Pedido[] = [];

	cliente: Cliente = new Cliente();

	idCliente: number;

	constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
		this.idCliente = this.activatedRoute.snapshot.params['id'];
	}

	ngOnInit() {

		this.http.get<Cliente>('http://localhost:49493/api/clientes/' + this.idCliente)
			.subscribe(x => this.cliente = x);

		this.http.get<Pedido[]>('http://localhost:49493/api/clientes/' + this.idCliente + '/pedidos')
			.subscribe(x => this.pedidos = x);
	}

	novoPedido() {
		this.router.navigate(['clientes/' + this.idCliente + '/pedidos/cadastro']);
	}

	home() {
		this.router.navigate(['']);
	}
}


