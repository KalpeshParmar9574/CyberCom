import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { UserModel } from 'src/Model/user.model';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  dataForm: FormGroup;
  router: any;

  constructor(private formBuilder: FormBuilder,private apiServce:ApiService ) {
    this.dataForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email:["", Validators.required]
    })
  }
  addData() {
    console.log("methodn started");
    
    const formValue = this.dataForm.getRawValue();
    console.log(formValue);
    const body: UserModel = {
      email: formValue.email || "",
      userName: formValue.userName || ""
    }
    this.apiServce.pushData(body).subscribe((response) => {
      console.log("response", response);
      if (response) {
        alert("success")
      }
      
    }, (error) => {
      console.log("error",error);
      
    })

}
}
