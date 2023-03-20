import { Component } from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';

  name: any = new FormControl('');
  testForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    age : new FormControl('')
  })

}
