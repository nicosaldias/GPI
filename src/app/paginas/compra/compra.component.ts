import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  prod_id:any;
  constructor(private route:ActivatedRoute,private router:Router,private http: HttpClient) {
    this.prod_id=parseInt(this.route.snapshot.paramMap.get('id_producto'));
   }

  ngOnInit(): void {
    console.log(this.prod_id)
  }

  


}
