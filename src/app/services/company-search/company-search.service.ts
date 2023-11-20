import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, map, of } from 'rxjs';
import { ApiService, ApiServiceGetRequest } from '@services/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanySearchService {
  env = environment;
  constructor(private apiService: ApiService) {}

  search(searchTerm: string): Observable<any> {
    const apiKey: string = this.env.api.companySearch.key;
    const endpoint: string = this.env.api.companySearch.endpoint + searchTerm +'&page=2';

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