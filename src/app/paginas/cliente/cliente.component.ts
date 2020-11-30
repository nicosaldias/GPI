import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  miCorreo:any;
  id:any;
  constructor(private route: ActivatedRoute, private loginService:LoginService) { 
    this.miCorreo=localStorage.getItem('mail');
  }

  
  ngOnInit(): void {
  }


  logOut(){
    localStorage.removeItem('mail');
  }

}