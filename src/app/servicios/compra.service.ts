import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompraModel } from '../models/compra.models';

@Injectable({
    providedIn: 'root'
  })
  export class CompraService {
  
  
  
    constructor(private http: HttpClient) { }
  
    procesarCompra(compra:CompraModel){
      return this.http.post('http://localhost:4200/comprar',compra);
  
    }
  
  
  }
  