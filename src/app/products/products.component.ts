import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  constructor(private service:ProjectService) {}
  products:Product[] = [
    {title:'ASUS Laptop - 5GB RAM',price:'$999',
    imageUrl:"https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750967/Ecommerce/ef192a21ec96.jpg",
    shippingCharges:'Free Shipping'}
  ]
  ngOnInit(): void {
    this.service.getProducts().subscribe((data)=>{
      console.log(data);
      this.products= <any>data;
      console.log(this.products);
    });
  }

}


class Product {  
  title : string;  
  price : string;  
  imageUrl : string;  
  shippingCharges : string;  
} 