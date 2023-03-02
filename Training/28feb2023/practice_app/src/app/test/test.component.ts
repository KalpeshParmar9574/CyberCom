import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  user = [1, 2, 2];
  person = [
    {
      name: "kalpesh",
      age: 22,
      DOB:"1/Dec/2001"
    }
    ,
    {
      name: "meet",
      age: 21,
      DOB:"15/feb/2002"
    }


  ]
}
