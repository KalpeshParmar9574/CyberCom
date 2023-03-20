import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = environment.baseURL;
 
  usersURL = environment.addUserURL;

  constructor(private http: HttpClient) { }
  
  pushData(body:any) {
    try {
      console.log("api is called");
      return this.http.post<any>(this.baseURL + this.usersURL, body);
    
      
    } catch (error: any)
    {
      console.log("getting error");
      
      return throwError(()=> new Error(error))
    }
  }

  getData() {
    try {
      return this.http.get(this.baseURL + this.usersURL);
    } catch (error: any) {
      return throwError(() => new Error(error))
    }
   }

}
