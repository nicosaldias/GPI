import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SigninModel } from '../models/signin.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SigninService {



  constructor(private http: HttpClient) { }

  crearUsuario(login:SigninModel){
    return this.http.post('http://localhost:3000/crear',login);

  }


}
