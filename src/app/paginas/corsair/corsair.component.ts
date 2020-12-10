import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-corsair',
  templateUrl: './corsair.component.html',
  styleUrls: ['./corsair.component.css']
})
export class CorsairComponent implements OnInit {

  miCorreo:any;
  idNombre:any;
  id_producto:any;
  stock:any;

  constructor(private loginService:LoginService ,private router:Router) {
    this.id_producto=2;
   }

  ngOnInit(): void {
    
    this.loginService.stock(this.id_producto).subscribe((resp:any)=>{
    this.stock = resp.usuario1[0].stock;
    //console.log(resp.stock)
    });
    }
  

  onClick(){
    this.router.navigate(['/login/']);
  }

}
