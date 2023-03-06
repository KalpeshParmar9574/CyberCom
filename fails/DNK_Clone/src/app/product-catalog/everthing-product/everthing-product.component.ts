import { Component } from '@angular/core';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-everthing-product',
  templateUrl: './everthing-product.component.html',
  styleUrls: ['./everthing-product.component.css']
})
export class EverthingProductComponent {
  constructor(private productServices: ProductDataService) {};
  products: any[]=[];
  ngOnInit() {
    this.products = this.productServices.getProducts();
  }
}
