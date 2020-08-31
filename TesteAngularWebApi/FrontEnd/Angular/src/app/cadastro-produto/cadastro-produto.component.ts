import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

class Produto{
	public Id: number;
	public Nome: string;
	public Valor: number;
	public Descricao: string;
	public Imagem: string;
}

class NovoProduto {
	public Nome: string;
	public Valor: Number;
	public Descricao: string;
	public Imagem: string;
}

@Component({
	selector: 'app-cadastro-prduto',
	templateUrl: './cadastro-produto.component.html',
	styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

	produtos:Produto[] = [] ; 

	form: FormGroup;

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
		this.form = this.formBuilder.group({
			nome: ['', Validators.required],
			valor: [ '', Validators.compose([ Validators.required, Validators.min(1)]),],
			descricao: ['', Validators.required],
			imagem: ['', Validators.required]
		});
	}

	ngOnInit() {

		this.http.get<Produto[]>('http://localhost:49493/api/produtos')
			.subscribe(x => this.produtos = x);
	}

	home(){
		this.router.navigate([''])
	}

	onSubmit() {

		if (this.form.invalid) {
			console.log("inválido, segue os dados")			
			console.log(this.form.get('nome'))
			console.log(this.form.get('valor'))
			console.log(this.form.get('descricao'))
			console.log(this.form.get('imagem'))
			return;
		}

		let novoPedido = this.form.value as NovoProduto;		

		this.http.post('http://localhost:49493/api/produtos/', JSON.stringify(novoPedido), this.httpOptions)
			.subscribe(data => {
				this.router.navigate(['produtos/']);
				this.http.get<Produto[]>('http://localhost:49493/api/produtos')
			.subscribe(x => this.produtos = x);
			}, error => { 
				console.log('Error', error);
			});

	}

}
