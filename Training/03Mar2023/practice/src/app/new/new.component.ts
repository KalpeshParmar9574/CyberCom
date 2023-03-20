import { Component , Input,OnInit, AfterContentInit,AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
  // passing data from parent to child also alias
export class NewComponent implements OnInit,AfterContentChecked,AfterContentInit {
  @Input('data') dataFromParent: string = ''
  constructor() {
     console.log("constructor method is called")
  }
  ngOnInit(): void {
    console.log("on init is called")
    console.log(this.dataFromParent)
  }
  ngAfterContentInit(): void {
    console.log(' called when content init ')
  }
  ngAfterContentChecked(): void {
    console.log(' called when content check ')
  }

}
