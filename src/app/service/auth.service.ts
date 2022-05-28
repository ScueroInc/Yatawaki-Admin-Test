import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../commons/BaseUrl';
const AUTH_API = 'api/v1/authenticate';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );

  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    console.log("Iniciando login")
    return this.http.post(BASE_URL+AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);

  }
  login2(loginData: any): Observable<any> {
    console.log("Iniciando login")
    return this.http.post(BASE_URL+AUTH_API, loginData,httpOptions);

  }
  register(username: string, password: string): Observable<any> {
    return this.http.post(BASE_URL+AUTH_API + 'signup', {
      username,
      password
    }, httpOptions);
  }
}
