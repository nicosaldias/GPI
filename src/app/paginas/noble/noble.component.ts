import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-noble',
  templateUrl: './noble.component.html',
  styleUrls: ['./noble.component.css']
})
export class NobleComponent implements OnInit {

  miCorreo:any;
  idNombre:any;
  id_producto:any;
  stock:any;

  constructor(private loginService:LoginService ,private router:Router) {
    this.id_producto=1;
   }
  
   ngOnInit(): void {
    this.loginService.stock(this.id_producto).subscribe((resp:any)=>{
      this.stock = resp.usuario1[0].stock;
      //console.log(resp.stock)
      });
  }

  onClick(){
    this.router.navigate(['/login/']);
    console.log(this.id_producto);
  }

   
  
}
