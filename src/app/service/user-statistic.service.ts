import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../commons/BaseUrl';


@Injectable({
  providedIn: 'root'
})
export class UserStatisticService {

  
  apiURL: string = "api/v1/user-statistics"

  constructor(private http: HttpClient) { }

  getUserStatistics(): Observable<any> {
    return this.http.get<any>(BASE_URL+this.apiURL);
  }

  
  getUserStatisticById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL+this.apiURL}/${id}`);
  }

  createUserStatistic(userStatistic: Object): Observable<Object> {
    return this.http.post(BASE_URL+this.apiURL, userStatistic);
  }

  changeUserStatistic(userStatistic: Object): Observable<Object> {
    return this.http.put(BASE_URL+this.apiURL, userStatistic);
  }

  deleteUserStatistic(id?: number): Observable<any> {
    return this.http.delete(`${BASE_URL+this.apiURL}/${id}`);
  }

  getUserStatisticStatus(): Observable<any>{
    return this.http.get<any>(BASE_URL+this.apiURL + '/status');
  }
}
