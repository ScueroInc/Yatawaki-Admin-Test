import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../commons/BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class SymphonyGestureService {

  apiURL: string = "api/v1/symphony-gesture"

  constructor(private http: HttpClient) { }

  getSymphoniesGesture(): Observable<any> {
    return this.http.get<any>(BASE_URL+this.apiURL);
  }

  
  getSymphonGestureyById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL+this.apiURL}/${id}`);
  }

  createSymphonyGesture(symphonyGesture: Object): Observable<Object> {
    //const url = '/api/v1/avatar';
    return this.http.post(BASE_URL+this.apiURL, symphonyGesture);
  }


  changeSymphonyGesture(symphonyGesture: Object): Observable<Object> {
    return this.http.put(BASE_URL+this.apiURL, symphonyGesture);
  }

  deleteSymphonyGesture(id?: number): Observable<any> {
    return this.http.delete(`${BASE_URL+this.apiURL}/${id}`);
  }
}
