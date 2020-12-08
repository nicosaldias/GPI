import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sharkoon',
  templateUrl: './sharkoon.component.html',
  styleUrls: ['./sharkoon.component.css']
})
export class SharkoonComponent implements OnInit {
  id_producto:any;
  stock:any;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id_producto=3;
  }
  
  onClick(){
    this.router.navigate(['/login/']);
    console.log(this.id_producto);
  }
}
