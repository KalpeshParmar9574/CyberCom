import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { UserModel } from 'src/Model/user.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = environment.baseURL;

  usersURL = environment.addUserURL;
 

  constructor(private http: HttpClient) { }

  pushData(body: any) {
    try {
      console.log("api is called");
      return this.http.post<any>(this.baseURL + this.usersURL, body);


    } catch (error: any) {
      console.log("getting error");

      return throwError(() => new Error(error))
    }
  }

  getData() {
    try {
      return this.http.get<any>(this.baseURL + this.usersURL);
    } catch (error: any) {
      return throwError(() => new Error(error))
    }
  }
   

  updateUser( userId:string, body:UserModel) {
    try {
      return this.http.put<any>(this.baseURL+this.usersURL+"/"+userId,body)
      
    } catch (error:any) {
      return throwError(()=> new Error(error))
    }
  }

  getUserData(id:string) {
    try {
      console.log("api is called");
      
      return this.http.get<any>(this.baseURL+this.usersURL+"/"+id)
    } catch (error:any) {
      return throwError(()=> new Error(error))
      
    }
  }
  deleteUser(id:string) {
    try {
      console.log("delete method is called now ");
      
      return this.http.delete<any>(this.baseURL+this.usersURL+"/"+id)
    } catch (error:any) {
      return throwError(()=> new Error(error))
    }
  }

}
