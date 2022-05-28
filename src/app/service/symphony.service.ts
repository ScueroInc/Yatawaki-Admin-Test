import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BASE_URL } from '../commons/BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class SymphonyService {

  apiURL: string = "api/v1/symphony"

  constructor(private http: HttpClient) { }

  
  getSymphonies(): Observable<any> {
    return this.http.get<any>(BASE_URL+this.apiURL);
  }

  
  getSymphonyById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL+this.apiURL}/${id}`);
  }

  createSymphony(symphony: Object): Observable<Object> {
    //const url = '/api/v1/avatar';
    return this.http.post(BASE_URL+this.apiURL, symphony);
  }


  changeSymphony(symphony: Object): Observable<Object> {
    return this.http.put(BASE_URL+this.apiURL, symphony);
  }

  deleteSymphony(id?: number): Observable<any> {
    return this.http.delete(`${BASE_URL+this.apiURL}/${id}`);
  }
}
