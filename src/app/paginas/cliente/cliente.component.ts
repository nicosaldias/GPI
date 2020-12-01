import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.models';
import { DuenoModel } from 'src/app/models/dueno.models';
import { LoginService } from 'src/app/servicios/login.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente_registrado: LoginModel= new LoginModel();
  constructor() { }

  ngOnInit(): void {
  }

}
