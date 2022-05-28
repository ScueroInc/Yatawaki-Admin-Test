import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../commons/BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  apiURL: string = "api/v1/achievement"

  constructor(private http: HttpClient) { }

  getAchievements(): Observable<any> {
    return this.http.get<any>(BASE_URL+this.apiURL);
  }

  
  getAchievementById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL+this.apiURL}/${id}`);
  }

  createAchievement(achievement: Object): Observable<Object> {
    return this.http.post(BASE_URL+this.apiURL, achievement);
  }

  updateAchievement(achievement: Object): Observable<Object> {
    return this.http.patch(BASE_URL+this.apiURL, achievement);
  }

  changeAchievement(achievement: Object): Observable<Object> {
    return this.http.put(BASE_URL+this.apiURL, achievement);
  }

  deleteAchievement(id?: number): Observable<any> {
    return this.http.delete(`${BASE_URL+this.apiURL}/${id}`);
  }
}
