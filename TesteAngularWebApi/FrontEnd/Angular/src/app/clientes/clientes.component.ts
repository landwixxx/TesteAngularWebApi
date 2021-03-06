import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

class Cliente {
	public Id: number;
	public Nome: string;
	public Email: string;
	public Pedidos: null;	
}

@Component({
	selector: 'app-clientes',
	templateUrl: './clientes.component.html',
	styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

	
	clientes: Cliente[] = [];

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	constructor(private http: HttpClient, private router: Router) { }

	ngOnInit() {
	
		this.http.get<Cliente[]>('http://localhost:49493/api/clientes/')
			.subscribe(novosClientes => {
				this.clientes = novosClientes;
			});			
	}

	novo() {
		this.router.navigate(['clientes/cadastro']);
	}

	pedidos(cliente: Cliente) {
		this.router.navigate(['clientes/' + cliente.Id + '/pedidos']);
	}

	produtos(){
		this.router.navigate(['/produtos'])
	}

}


