import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.models';
import { DuenoModel } from 'src/app/models/dueno.models';
import { LoginService } from 'src/app/servicios/login.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cliente_registrado: LoginModel= new LoginModel();
  //dueno: DuenoModel = new DuenoModel();
  tokens:Object;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  buscarUsuarioDB(formulario:NgForm){
    this.loginService.buscarCliente(this.cliente_registrado).subscribe((resp:any)=>{

    this.tokens=resp.usuario[0].mail;
    localStorage.setItem('mail', resp.usuario[0].mail);
    this.router.navigate(['/cliente']);
    console.log(resp.usuario[0].mail)
      },
    )
  }

  ingresar(){
    this.router.navigate(['inicio'])
  }


}
