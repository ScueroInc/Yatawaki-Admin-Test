import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../commons/BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class SymphonyInstrumentService {

  apiURL: string = "api/v1/symphony-instrument"

  constructor(private http: HttpClient) { }

  getSymphoniesInstrument(): Observable<any> {
    return this.http.get<any>(BASE_URL+this.apiURL);
  }

  
  getSymphonInstrumentyById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL+this.apiURL}/${id}`);
  }

  createSymphonyInstrument(symphonyInstrument: Object): Observable<Object> {
    //const url = '/api/v1/avatar';
    return this.http.post(BASE_URL+this.apiURL, symphonyInstrument);
  }


  changeSymphonyInstrument(symphonyInstrument: Object): Observable<Object> {
    return this.http.put(BASE_URL+this.apiURL, symphonyInstrument);
  }

  deleteSymphonyInstrument(id?: number): Observable<any> {
    return this.http.delete(`${BASE_URL+this.apiURL}/${id}`);
  }
}
