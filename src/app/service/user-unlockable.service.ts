import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../commons/BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class UserUnlockableService {

  apiURL: string = "api/v1/user-unlockable"

  constructor(private http: HttpClient) { }

  getUserUnlockables(): Observable<any> {
    return this.http.get<any>(BASE_URL+this.apiURL);
  }

  
  getUserUnlockableById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL+this.apiURL}/${id}`);
  }

  createUserUnlockable(userUnlockable: Object): Observable<Object> {
    return this.http.post(BASE_URL+this.apiURL, userUnlockable);
  }

  changeUserUnlockable(userUnlockable: Object): Observable<Object> {
    return this.http.put(BASE_URL+this.apiURL, userUnlockable);
  }

  deleteUserUnlockable(id?: number): Observable<any> {
    return this.http.delete(`${BASE_URL+this.apiURL}/${id}`);
  }
}
