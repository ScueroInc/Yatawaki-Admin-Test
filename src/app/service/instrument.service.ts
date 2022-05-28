import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../commons/BaseUrl';


@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  
  apiURL: string = "api/v1/instrument"

  constructor(private http: HttpClient) { }

  getInstruments(): Observable<any> {
    return this.http.get<any>(BASE_URL+this.apiURL);
  }

  
  getInstrumentById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL+this.apiURL}/${id}`);
  }

  createInstrument(instrument: Object): Observable<Object> {
    //const url = '/api/v1/Instrument';
    return this.http.post(BASE_URL+this.apiURL, instrument);
  }

  changeInstrument(instrument: Object): Observable<Object> {
    return this.http.put(BASE_URL+this.apiURL, instrument);
  }

  deleteInstrument(id?: number): Observable<any> {
    return this.http.delete(`${BASE_URL+this.apiURL}/${id}`);
  }

  getInstrumentStatus(): Observable<any>{
    return this.http.get<any>(BASE_URL+this.apiURL + '/status');
  }
}
