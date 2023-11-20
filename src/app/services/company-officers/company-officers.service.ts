import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, map, of } from 'rxjs';
import { ApiService, ApiServiceGetRequest } from '@services/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyofficersService {
  env = environment;
  constructor(private apiService: ApiService) {}

  fetch(companyNumber: string): Observable<any> {
    const apiKey: string = this.env.api.companyOfficers.key;
    const endpoint: string = this.env.api.companyOfficers.endpoint + companyNumber;

    const request: ApiServiceGetRequest = { 
      endpoint,
      headers: [
        {'x-api-key': apiKey}
      ]
    };
    console.log(request);
    return this.apiService.get(request);
  }
}