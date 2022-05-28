import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../commons/BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class RankService {

  apiURL: string = "api/v1/rank"

  constructor(private http: HttpClient) { }

  getRanks(): Observable<any> {
    return this.http.get<any>(BASE_URL+this.apiURL);
  }

  
  getRankById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL+this.apiURL}/${id}`);
  }

  createRank(rank: Object): Observable<Object> {
    return this.http.post(BASE_URL+this.apiURL, rank);
  }

  changeRank(rank: Object): Observable<Object> {
    return this.http.put(BASE_URL+this.apiURL, rank);
  }

  deleteRank(id?: number): Observable<any> {
    return this.http.delete(`${BASE_URL+this.apiURL}/${id}`);
  }

  getRankStatus(): Observable<any>{
    return this.http.get<any>(BASE_URL+this.apiURL + '/status');
  }

}
