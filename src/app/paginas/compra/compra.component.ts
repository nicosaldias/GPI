import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CompraModel } from '../../models/compra.models';
import { CompraService } from 'src/app/servicios/compra.service';
import { FormBuilder,FormGroup, FormControl,Validators, NgForm } from '@angular/forms';
import { HttpParams ,HttpHeaders} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  info_pedido: CompraModel= new CompraModel();
  miCorreo:any;
  number:any;
  silla:any;
  stockactual:any;
  uno : number;
  
  constructor(private route:ActivatedRoute,private router:Router, private formBuilder: FormBuilder, private http: HttpClient,private compraService: CompraService) {
    this.miCorreo=localStorage.getItem('mail');
    this.info_pedido.mail = this.miCorreo;
    this.number = Math.floor(Math.random() * 10000) + 1;
    this.info_pedido.id = this.number;
    //this.uno = 1;
    this.silla = localStorage.getItem('idsilla');
   }

 ngOnInit(){
  this.compraService.stock(this.silla).subscribe((resp:any)=>{
    this.stockactual = resp.usuario1[0].stock;
    console.log(this.stockactual);
  }
  ); 
   }


  registrarcompraDB(formulario: NgForm){
    this.compraService.procesarCompra(this.info_pedido).subscribe(resp=>{
      console.log(resp)
    });
    
    

    //this.compraService.actualizarstock(this.silla, this.stockactual).subscribe(resp2=>{
    //console.log(resp2)
    //});
    
    this.router.navigate(['/felicitaciones']);
      }
    
  
}
