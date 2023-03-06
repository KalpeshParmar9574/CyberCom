import { Component, Input ,OnInit} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input()prodData: any[] = [];
  
  OnInit() {
    console.log(this.prodData);
   }
}
