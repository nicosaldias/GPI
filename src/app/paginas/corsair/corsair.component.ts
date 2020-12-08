import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-corsair',
  templateUrl: './corsair.component.html',
  styleUrls: ['./corsair.component.css']
})
export class CorsairComponent implements OnInit {
  id_producto:any;
  stock:any;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id_producto=2;
  }

  onClick(){
    this.router.navigate(['/login/']);
  }
  

}
