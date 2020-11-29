import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorsairComponent } from './corsair/corsair.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NobleComponent } from './noble/noble.component';
import { SharkoonComponent } from './sharkoon/sharkoon.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'noble', component: NobleComponent},
  {path: 'corsair', component: CorsairComponent},
  {path: 'sharkoon', component: SharkoonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
