import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { error } from 'console';

class NovoCliente {
	public Nome: string;
	public Email: string;
}

@Component({
	selector: 'app-cadastro-cliente',
	templateUrl: './cadastro-cliente.component.html',
	styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

	form: FormGroup;

	clientesEmails: string[] = [];

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
		this.form = this.formBuilder.group({
			nome: ['', Validators.required],
			email:[ '',Validators.compose(
				[ Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),],
		});
	}

	ngOnInit() {
	
	}

	home(){
		this.router.navigate(['']);
	}

	onSubmit() {	

		let novoCliente = this.form.value as NovoCliente;

		this.http.post('http://localhost:49493/api/clientes/', JSON.stringify(novoCliente), this.httpOptions)
			.subscribe(data => {
				this.router.navigate(['clientes']);
			}, error => {
				eval('console').log('Error', error);
			});
	}
}
