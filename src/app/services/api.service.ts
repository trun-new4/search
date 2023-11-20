import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiDataStoreService, ApiStoreExpirySeconds } from './api.data.store.service';
import { environment } from 'src/environments/environment';

export interface ApiServiceGetRequest {
  endpoint: string;
  headers?: {[key: string]: string}[];
  payload?: any;
  cache?: {
    expiry: ApiStoreExpirySeconds
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  map = map;
  constructor(
    private httpClient: HttpClient,
    private apiDataStore: ApiDataStoreService) {}

  setHeaders(request: ApiServiceGetRequest): HttpHeaders{
    const requestHeaders: {[key: string]: string}[] = request.headers || [];
    let headers: HttpHeaders = new HttpHeaders();

    requestHeaders.forEach((requestHeader: {[key: string]: string}) => {
      const header: string = Object.keys(requestHeader)[0];
      const value: string = environment.api.companySearch.key;
      headers = new HttpHeaders().set(header, value);
    });


    return headers;

  }

  get(request: ApiServiceGetRequest): Observable<any> {
    const headers: HttpHeaders = this.setHeaders(request);
    return this.httpClient.get(request.endpoint, {headers: headers}).pipe(
      this.map(( data: any ) => {
        this.requestHandler(request, data);
        return data;
      })
    );
  }

  post(url: string, payload?: any): Observable<any> {
    return this.httpClient.post(url, payload);
  }

  put(url: string, payload: any): Observable<any> {
    return this.httpClient.put(url, payload);
  }

  patch(url: string, payload: any): Observable<any> {
    return this.httpClient.patch(url, payload);
  }

  delete(url: string): Observable<any> {
    return this.httpClient.delete(url);
  }

  requestHandler(request: ApiServiceGetRequest, data: any): void {
    if ( request.cache ) {
      this.storeRequest(request, data);
    }
  }

  storeRequest(request: ApiServiceGetRequest, data: any): void {
    this.apiDataStore.add({ url: request.endpoint, data, expiry: request.cache?.expiry});
  }
}
