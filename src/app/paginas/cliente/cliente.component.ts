import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.models';
import { LoginService } from 'src/app/servicios/login.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  cliente_registrado: LoginModel= new LoginModel();
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

  logOut(){
    localStorage.removeItem('mail');
  }

}
