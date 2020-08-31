import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImports } from './MaterialImports';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PedidosComponent} from './pedidos/pedidos.component';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component'
import { CadastroProdutoComponent} from './cadastro-produto/cadastro-produto.component';

import {MatButtonModule} from '@angular/material/button';


const appRoutes: Routes = [
	{ path: 'clientes', component: ClientesComponent},
	{ path: 'clientes/cadastro', component: CadastroClienteComponent },
	{ path: 'clientes/:id/pedidos', component: PedidosComponent},	
	{ path: 'clientes/:id/pedidos/cadastro', component: CadastroPedidoComponent },
	{ path: 'produtos', component: CadastroProdutoComponent},
	{ path: '', redirectTo: '/clientes', pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,
		CadastroClienteComponent,
		ClientesComponent,
		PedidosComponent,
		CadastroPedidoComponent,
		CadastroProdutoComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		HttpClientModule,
		BrowserAnimationsModule,
		MaterialImports,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
