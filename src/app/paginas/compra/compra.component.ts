import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { HttpParams ,HttpHeaders} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  formdata;
  constructor(private route:ActivatedRoute,private router:Router,private http: HttpClient) {
   }

  ngOnInit(): void {
    this.formdata=new FormGroup({
      nombre:new FormControl(""),
      comuna:new FormControl("",this.comunavalidation),
      calle:new FormControl("",this.callevalidation),
      numero:new FormControl("",this.numerovalidation),
      telefono:new FormControl("",this.telefonovalidation)
      });
  }

  comunavalidation(formcontrol){
    if(formcontrol.value.length<30){
      return{"comuna":true}
    }
  }
  callevalidation(formcontrol){
    if(formcontrol.value.length<30){
      return{"calle":true}
    }
  }
  numerovalidation(formcontrol){
    if(formcontrol.value.length<6){
      return{"numero":true}
    }
  }
  telefonovalidation(formcontrol){
    if(formcontrol.value.length<9){
      return{"numero_telefono":true}
    }
  }

  async onClickSubmit(){
    this.http.post<any>('http://localhost:8000/pedido',this.formdata.value,{  headers: new HttpHeaders({ 'Content-Type': 'application/json'})}).subscribe(
      (res ) =>{
        if(res==1){
          this.router.navigate(['/felicitaciones']);
        }else{
          location.reload();
        }
      }
    )
  }

  


}
