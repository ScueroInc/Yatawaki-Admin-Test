import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../commons/BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class UserRankService {

  apiURL: string = "api/v1/user-rank"

  constructor(private http: HttpClient) { }

  getUserRanks(): Observable<any> {
    return this.http.get<any>(BASE_URL+this.apiURL);
  }

  
  getUserRankById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL+this.apiURL}/${id}`);
  }

  createUserRank(userRank: Object): Observable<Object> {
    return this.http.post(BASE_URL+this.apiURL, userRank);
  }

  changeUserRank(userRank: Object): Observable<Object> {
    return this.http.put(BASE_URL+this.apiURL, userRank);
  }

  deleteUserRank(id?: number): Observable<any> {
    return this.http.delete(`${BASE_URL+this.apiURL}/${id}`);
  }

  getUserRankStatus(): Observable<any>{
    return this.http.get<any>(BASE_URL+this.apiURL + '/status');
  }

}
