import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorsairComponent } from './paginas/corsair/corsair.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { NobleComponent } from './paginas/noble/noble.component';
import { SharkoonComponent } from './paginas/sharkoon/sharkoon.component';
import {ClienteComponent} from './paginas/cliente/cliente.component';
import {CompraComponent} from './paginas/compra/compra.component';
import {FinComponent} from './paginas/fin/fin.component';
import { RegistroComponent } from './paginas/registro/registro.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'noble', component: NobleComponent},
  {path: 'corsair', component: CorsairComponent},
  {path: 'sharkoon', component: SharkoonComponent},
  {path: 'cliente', component: ClienteComponent },
  {path: 'compra', component: CompraComponent},
  {path: 'felicitaciones', component: FinComponent},
  {path: 'registro', component: RegistroComponent},
  { path:'**', pathMatch:'full', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
