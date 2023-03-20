import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userData:any = []
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
  
}
