import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../commons/BaseUrl';


@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  apiURL: string = "api/v1/concert"

  constructor(private http: HttpClient) { }

  getConcerts(): Observable<any> {
    return this.http.get<any>(BASE_URL+this.apiURL);
  }

  
  getConcertById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL+this.apiURL}/${id}`);
  }

  createConcert(concert: Object): Observable<Object> {
    return this.http.post(BASE_URL+this.apiURL, concert);
  }

  changeConcert(concert: Object): Observable<Object> {
    return this.http.put(BASE_URL+this.apiURL, concert);
  }

  deleteConcert(id?: number): Observable<any> {
    return this.http.delete(`${BASE_URL+this.apiURL}/${id}`);
  }

  getConcertStatus(): Observable<any>{
    return this.http.get<any>(BASE_URL+this.apiURL + '/status');
  }

}
