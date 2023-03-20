import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { UserModel } from 'src/Model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  dataForm!: FormGroup ;
  userID!: string;
  constructor(private formBuilder: FormBuilder,private apiServce:ApiService , private router:Router,private route:ActivatedRoute ) {
    this.userID = this.route.snapshot.params["id"] || "";
    console.log(this.userID);
    if (this.userID) {
      this.getUserData();

    }
    
  }






  ngOnInit() {
    this.initForm()
  }
  initForm() {
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

    if (this.userID) {
      this.apiServce.updateUser(this.userID, body).subscribe((response) => {
        if (response) {
          alert("hello dear" + this.userID + "your data is updated")
          this.router.navigate(['/users'])
        }
      })
    }

    else {
      this.apiServce.pushData(body).subscribe((response) => {
        console.log("response", response);
        if (response) {
          alert("success")
          this.router.navigate(['/users'])
        }
        
      }, (error) => {
        console.log("error",error);
        
      })
    }
   

  }
  getUserData() {
    this.apiServce.getUserData(this.userID).subscribe((response) => {
      console.log("response", response);
      if (response) {
        const data = response;
        this.dataForm.setValue({
          userName: data.userName || "",
          email: data.email || ""
          })
      }
      
    })
  }
}
