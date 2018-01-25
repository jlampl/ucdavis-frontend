import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchResultsService {

  searchURL: string = '';

  constructor(private http: Http) { }

  getResults(query: string): Observable<any> {
    return this.http.get(this.searchURL + query).map(res => {
      return res.json();
    });
  }

}
