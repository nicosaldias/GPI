import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { LoginService } from 'src/app/servicios/login.service';
=======
import { ActivatedRoute, Router } from '@angular/router';
>>>>>>> c9bfd6db774d1cbe21081d4c53c23700c1b0619f

@Component({
  selector: 'app-noble',
  templateUrl: './noble.component.html',
  styleUrls: ['./noble.component.css']
})
export class NobleComponent implements OnInit {
<<<<<<< HEAD

  miCorreo:any;
  idNombre:any;

  constructor(private loginService:LoginService) {
    this.miCorreo=localStorage.getItem('mail');
   }
=======
  id_producto:any;
  stock:any;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id_producto=1;
  }

  onClick(){
    this.router.navigate(['/login/']);
    console.log(this.id_producto);
  }
>>>>>>> c9bfd6db774d1cbe21081d4c53c23700c1b0619f

   ngOnInit(): void {

    this.loginService.buscarID(this.miCorreo).subscribe((resp:any)=>{
      this.idNombre=resp.usuario[0].nombre;
      console.log(this.idNombre);
    })
  }
  
}
