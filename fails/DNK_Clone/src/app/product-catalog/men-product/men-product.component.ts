import { Component } from '@angular/core';
import { ProductDataService } from '../product-data.service';
@Component({
  selector: 'app-men-product',
  templateUrl: './men-product.component.html',
  styleUrls: ['./men-product.component.css']
})
export class MenProductComponent {
  constructor(private productServices: ProductDataService) {};
  products: any[]=[];
  ngOnInit() {
    this.products = this.productServices.getProducts();
    console.log(this.products);;
  }
}
