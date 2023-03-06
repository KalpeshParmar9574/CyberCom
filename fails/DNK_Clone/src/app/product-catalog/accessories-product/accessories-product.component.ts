import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';



@Component({
  selector: 'app-accessories-product',
  templateUrl: './accessories-product.component.html',
  styleUrls: ['./accessories-product.component.css']
 
})
export class AccessoriesProductComponent implements OnInit {
  products: any[]=[];

  constructor(private productServices: ProductDataService) {};

  ngOnInit() {
    this.products = this.productServices.getProducts().filter(product => product.category === "accessories")
    console.log(typeof (this.products));
    this.products.forEach((prod) => {
      console.log(prod.name, prod.category, prod.price, prod.imgUrl);
   })

  }
}
