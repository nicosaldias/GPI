import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-noble',
  templateUrl: './noble.component.html',
  styleUrls: ['./noble.component.css']
})
export class NobleComponent implements OnInit {
  id_producto:any;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id_producto=1;
  }

  onClick(){
    this.router.navigate(['/compra/']);
    console.log(this.id_producto);
  }

}
