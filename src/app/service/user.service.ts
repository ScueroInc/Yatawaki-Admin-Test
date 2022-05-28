import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../commons/BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: string = "api/v1/user"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(BASE_URL+this.apiURL);
  }

  
  getUserById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL+this.apiURL}/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(BASE_URL+this.apiURL, user);
  }

  changeUser(user: Object): Observable<Object> {
    return this.http.put(BASE_URL+this.apiURL, user);
  }

  deleteUser(id?: number): Observable<any> {
    return this.http.delete(`${BASE_URL+this.apiURL}/${id}`);
  }

  getUserStatus(): Observable<any>{
    return this.http.get<any>(BASE_URL+this.apiURL + '/status');
  }

  getUserRole(): Observable<any>{
    return this.http.get<any>(BASE_URL+this.apiURL + '/roles');
  }
}
