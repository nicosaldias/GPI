import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompraModel } from '../models/compra.models';
import { FormBuilder,FormGroup, FormControl,Validators, NgForm } from '@angular/forms';
@Injectable({
    providedIn: 'root'
  })
  export class CompraService {
  
    NewListaRecurrente: FormGroup;
  
    constructor(private http: HttpClient , private formBuilder: FormBuilder ) {
      this.NewListaRecurrente =  this.formBuilder.group({
        idd: new FormControl('',Validators.required),
        stockk: new FormControl('',Validators.required),
      });
     }
  
    procesarCompra(compra:CompraModel){
      return this.http.post('http://localhost:3000/comprar',compra);
    }
    
    actualizarstock(id:any, stock:any){
      console.log("wena");
      this.NewListaRecurrente.patchValue({
      idd: id,
      stockk: stock
    });
      return this.http.post('http://localhost:3000/actualizar/',this.NewListaRecurrente.value);
    }


    stock(id:any){
      return this.http.get(`http://localhost:3000/stockproducto/${id}`);
    }
  
  }
  