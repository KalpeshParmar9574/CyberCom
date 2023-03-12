import { Component } from '@angular/core';
import { IpInfoService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ipAddress: string = '';
  isIpAddressValid: boolean = true;
  ipDetails: any;


  title = 'ipFinder';

  constructor(private ipInfoService: IpInfoService) { }

  onSubmit() {
    // if (this.validateIpAddress(this.ipAddress)) {
      this.ipInfoService.getIpDetails(this.ipAddress)
      .subscribe((details) => {
        this.ipDetails = details;
      });
   
    // } else {
    //   // set error for invalid IP address
    //   this.isIpAddressValid = false;
    // }
  }
  // validateIpAddress(ipAddress: string): boolean {
  //   const pattern = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
  //   return pattern.test(ipAddress);
  // }
  
}
