import { NgModule , Injectable} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MenProductComponent } from './men-product/men-product.component';
import { WomenProductComponent } from './women-product/women-product.component';
import { AccessoriesProductComponent } from './accessories-product/accessories-product.component';
import { EverthingProductComponent } from './everthing-product/everthing-product.component';
import { ProductCardComponent } from './product-card/product-card.component';

@Injectable({
  providedIn:'root'
})


@NgModule({
  declarations: [
    MenProductComponent,
    WomenProductComponent,
    AccessoriesProductComponent,
    EverthingProductComponent,
  
  ],
  
  
  imports: [
    CommonModule,
    BrowserModule
    
  ],

 
  
})
 


export class ProductCatalogModule { 

  
    }
  


