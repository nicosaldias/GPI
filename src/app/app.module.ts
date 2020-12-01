import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NobleComponent } from './paginas/noble/noble.component';
import { CorsairComponent } from './paginas/corsair/corsair.component';
import { SharkoonComponent } from './paginas/sharkoon/sharkoon.component';
import { FormsModule } from '@angular/forms';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import { ModalModule } from '../app/paginas/_modal';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NobleComponent,
    CorsairComponent,
    SharkoonComponent,
    ClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
