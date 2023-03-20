import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'practice';

  myobs = new Observable((observer) => {
    console.log("observal start")
    observer.next("hello i am observal ");
    observer.error("hello i am observal ");
    observer.complete();
  });

  ngOnInit() {
    this.myobs.subscribe((val) => {
        console.log(val)
    },
      (error) => {
        alert(error);
      },
      () => {
      alert("observable completing the task ")
    })
}

}
