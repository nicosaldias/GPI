import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sharkoon',
  templateUrl: './sharkoon.component.html',
  styleUrls: ['./sharkoon.component.css']
})
export class SharkoonComponent implements OnInit {

  miCorreo:any;
  idNombre:any;
  id_producto:any;
  stock:any;
  constructor(private loginService:LoginService ,private router:Router ) {
    this.id_producto=3;
   }

   ngOnInit(): void {
    
    this.loginService.stock(this.id_producto).subscribe((resp:any)=>{
      this.stock = resp.usuario1[0].stock;
      //console.log(resp.stock)
      });
}
 
onClick(id:any){
  localStorage.setItem('idsilla', id);
  this.router.navigate(['/login/']);
}
}
