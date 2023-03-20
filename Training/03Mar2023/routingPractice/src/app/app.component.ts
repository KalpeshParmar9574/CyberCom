import { Component } from '@angular/core';
import { Router,ActivatedRoute,ParamMap} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  department = [
    { "id": 1, "name": "sales" },
    { "id":2 , "name": "dev" },
    

]

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
 
  }
  select(id: number) {
    console.log(id);

    this.router.navigate(['/department', id]);
  }
}
