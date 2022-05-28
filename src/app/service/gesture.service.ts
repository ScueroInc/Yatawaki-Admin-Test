import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../commons/BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class GestureService {


  apiURL: string = "api/v1/gesture"

  constructor(private http: HttpClient) { }

  getGestures(): Observable<any> {
    return this.http.get<any>(BASE_URL+this.apiURL);
  }

  
  getGestureById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL+this.apiURL}/${id}`);
  }

  createGesture(gesture: Object): Observable<Object> {
    //const url = '/api/v1/Gesture';
    return this.http.post(BASE_URL+this.apiURL, gesture);
  }

  changeGesture(gesture: Object): Observable<Object> {
    return this.http.put(BASE_URL+this.apiURL, gesture);
  }

  deleteGesture(id?: number): Observable<any> {
    return this.http.delete(`${BASE_URL+this.apiURL}/${id}`);
  }

  getGestureStatus(): Observable<any>{
    return this.http.get<any>(BASE_URL+this.apiURL + '/status');
  }
}

