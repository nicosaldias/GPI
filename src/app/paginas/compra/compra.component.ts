import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CompraModel } from '../../models/compra.models';
import { CompraService } from 'src/app/servicios/compra.service';
import { FormGroup, FormControl,Validators, NgForm } from '@angular/forms';
import { HttpParams ,HttpHeaders} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  info_pedido: CompraModel= new CompraModel();
  ayb:any;
  constructor(private route:ActivatedRoute,private router:Router,private http: HttpClient,private compraService: CompraService) {
   }

  ngOnInit(): void {
    this.ayb = localStorage.getItem('mail')
  }

  registrarcompraDB(formulario: NgForm){
    this.compraService.procesarCompra(this.info_pedido).subscribe(
      resp=>{
        console.log(resp)
        this.router.navigate(['/felicitaciones']);
      }
    );
  }
}
