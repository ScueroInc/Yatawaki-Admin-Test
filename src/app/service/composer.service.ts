import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../commons/BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  apiURL: string = "api/v1/composer"

  constructor(private http: HttpClient) { }


  getComposers(): Observable<any> {
    return this.http.get<any>(BASE_URL+this.apiURL);
  }

  
  getComposerById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL+this.apiURL}/${id}`);
  }

  createComposer(composer: Object): Observable<Object> {
    //const url = '/api/v1/Composer';
    return this.http.post(BASE_URL+this.apiURL, composer);
  }

  changeComposer(composer: Object): Observable<Object> {
    return this.http.put(BASE_URL+this.apiURL, composer);
  }

  deleteComposer(id?: number): Observable<any> {
    return this.http.delete(`${BASE_URL+this.apiURL}/${id}`);
  }
}
