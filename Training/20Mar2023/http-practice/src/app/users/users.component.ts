import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserModel } from 'src/Model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userData:any = []
  router: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.apiService.getData().subscribe((response) => {
      if (response && response.length > 0) {
        this.userData = response || [];
        }
    })
  }
  edit(user: UserModel) {
    console.log(user);
    this.router.navigate(['/edit-user', user.id]);
  }


  delete(user: UserModel) {
    console.log("delete event is fire");
    this.apiService.deleteUser(user.id).subscribe((response) => {
      if (response) {
        this.userData.splice(user.id-1, 1);
        console.log(this.userData);
        
      }
    })
  }
}
