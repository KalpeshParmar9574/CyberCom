import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EverthingProductComponent } from './product-catalog/everthing-product/everthing-product.component';
import { MenProductComponent } from './product-catalog/men-product/men-product.component';
import { WomenProductComponent } from './product-catalog/women-product/women-product.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessoriesProductComponent } from './product-catalog/accessories-product/accessories-product.component';

const routes: Routes = [

  { path: 'everthing', component: EverthingProductComponent },
  { path: 'men', component: MenProductComponent },
  { path: 'women', component: WomenProductComponent },
  { path: 'accessories', component: AccessoriesProductComponent },
  { path: '', pathMatch: 'full', redirectTo: 'AppComponent' },
  {path:"**", component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
