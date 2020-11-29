import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpParams ,HttpHeaders} from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  datos:any
  constructor(private http: HttpClient,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  onClick(numero){
    if(numero==1){
      this.router.navigate(['/noble']);
    }else if(numero==2){
      this.router.navigate(['/corsair']);
    }else if(numero==3){
      this.router.navigate(['sharkoon']);
    }
  }
  
  
}
