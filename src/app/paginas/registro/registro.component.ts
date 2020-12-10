import { Component, OnInit } from '@angular/core';
import { SigninModel } from '../../models/signin.models';
import { DuenoModel } from 'src/app/models/dueno.models';
import { SigninService } from 'src/app/servicios/signin.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nuevo_cliente: SigninModel= new SigninModel();

  constructor(private signinService: SigninService,private router: Router) { }

  ngOnInit(): void {
  }

  guardarUsuarioDB(formulario: NgForm){
    this.signinService.crearUsuario(this.nuevo_cliente).subscribe(
      resp=>{
        console.log(resp)
        this.router.navigate(['/inicio']);
      }
    );
  }
}
