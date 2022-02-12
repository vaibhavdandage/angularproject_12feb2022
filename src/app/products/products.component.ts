import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:ProjectService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((data)=>{
      console.log(data)
    })
  }

}
