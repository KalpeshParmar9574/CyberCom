import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'practice';
  text: string = '';
  newDate = new Date();
  fontSize = 30;
  blueClass = false;

  onChange(e:KeyboardEvent) {
    this.text = (e.target as HTMLInputElement).value
    console.log(this.text);
  }
  
}
