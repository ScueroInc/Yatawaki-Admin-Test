import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../commons/BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class UnlockableService {

  apiURL: string = "api/v1/unlockable"

  constructor(private http: HttpClient) { }
  getUnlockables(): Observable<any> {
    return this.http.get<any>(BASE_URL+this.apiURL);
  }

  getUnlockableStatus(): Observable<any>{
    return this.http.get<any>(BASE_URL+this.apiURL + '/status');
  }

  getUnlockerTypes(): Observable<any>{
    return this.http.get<any>(BASE_URL+this.apiURL + '/unlocker-types');
  }

  getUnlockerRareness(): Observable<any>{
    return this.http.get<any>(BASE_URL+this.apiURL + '/rareness');
  }

  getUnlockableById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL+this.apiURL}/${id}`);
  }

  deleteUnlockable(id?: number): Observable<any> {
    return this.http.delete(`${BASE_URL+this.apiURL}/${id}`);
  }

}
