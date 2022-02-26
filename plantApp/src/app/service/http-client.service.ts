import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient : HttpClient) { }

  getfilename(query: any) {
    return this.httpClient.post<any>(`${environment.apiBaseUrl}/predict`, query);
  }
}
