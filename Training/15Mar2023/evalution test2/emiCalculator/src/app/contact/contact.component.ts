import { Component, Input } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 @Input() form: FormGroup ;
  
  constructor() {
    this.form = new FormGroup({
      firstName : new FormControl('', Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('' ,[Validators.required,Validators.email]),
      message : new FormControl('' , Validators.required),
      
    })
  }
  submit() {
    
   console.log(this.form)
 }

}
