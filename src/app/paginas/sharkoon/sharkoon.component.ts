import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-sharkoon',
  templateUrl: './sharkoon.component.html',
  styleUrls: ['./sharkoon.component.css']
})
export class SharkoonComponent implements OnInit {

  miCorreo:any;
  idNombre:any;

  constructor(private loginService:LoginService) {
    this.miCorreo=localStorage.getItem('mail');
   }

   ngOnInit(): void {

    this.loginService.buscarID(this.miCorreo).subscribe((resp:any)=>{
      this.idNombre=resp.usuario[0].nombre;
      console.log(this.idNombre);
    })
  }
}
