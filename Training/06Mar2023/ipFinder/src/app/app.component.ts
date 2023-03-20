import { Component } from '@angular/core';
import { IpInfoService } from './apiservice.service';
import { HttpClient } from '@angular/common/http';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";

import { SocialUser } from "@abacritt/angularx-social-login";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  
  user: SocialUser = new SocialUser;
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

 
  
}
