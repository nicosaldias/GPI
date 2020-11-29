import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NobleComponent } from './noble/noble.component';
import { CorsairComponent } from './corsair/corsair.component';
import { SharkoonComponent } from './sharkoon/sharkoon.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NobleComponent,
    CorsairComponent,
    SharkoonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
