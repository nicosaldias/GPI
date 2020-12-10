import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login.models';
import { DuenoModel } from '../models/dueno.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  buscarCliente(login:LoginModel){
    return this.http.post('http://localhost:3000/loginCliente',login);
  }

  buscarID(id:string){
    return this.http.get(`http://localhost:3000/profile/${id}`);
  }

  //buscarDuenoDB(dueno:DuenoModel) {
    //return this.http.post('http://localhost:3000/loginDueno',dueno);

  //} 


  stock(id:any){
    return this.http.get(`http://localhost:3000/stockproducto/${id}`);
  }

}