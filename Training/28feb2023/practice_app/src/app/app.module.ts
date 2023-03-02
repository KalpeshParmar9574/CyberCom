import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
 
export class AppModule { }
  
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { TestComponent } from './test/test.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     TestComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {


//  }
