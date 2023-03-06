import { Component } from '@angular/core';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-women-product',
  templateUrl: './women-product.component.html',
  styleUrls: ['./women-product.component.css']
})
export class WomenProductComponent {
  constructor(private productServices: ProductDataService) {};
  products: any[]=[];
  ngOnInit() {
    this.products = this.productServices.getProducts().filter(product => product.category === "accessories")
    console.log(this.products);;
  }
}
