import { Component } from '@angular/core';
import {FormGroup , FormBuilder, Validators, FormArray} from '@angular/forms'
@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {
  constructor(private fb: FormBuilder) {
   
   }

  form = this.fb.group({
    password: ['', Validators.required],
    email: this.fb.array([])
  })
  
  get emails() {
    return this.form.controls["email"] as FormArray;

  }

  addEmail() {
    console.log("method is called");
    
    const email = this.fb.group({
      email: ['', Validators.required]
    });
    this.emails.push(email);

    
  }
}
