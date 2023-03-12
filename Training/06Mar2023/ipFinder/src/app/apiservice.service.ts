import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpInfoService {
  private apiUrl = 'https://ipinfo.io';

  constructor(private http: HttpClient) { }

  getIpDetails(ipAddress: string): Observable<any> {
    const url = `${this.apiUrl}/${ipAddress}/geo`;
    return this.http.get<any>(url);
  }
}