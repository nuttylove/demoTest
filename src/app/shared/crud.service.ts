import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // REST API
  endpoint = 'https://api.publicapis.org';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCategories(): Observable<any> {
    return this.httpClient.get<any>(this.endpoint + '/categories')
    .pipe(
      retry(1),
      catchError(this.processError)
    );
  }

  processError(err: any) {
    let message = err.error instanceof ErrorEvent ? err.error.message : `Error Code: ${err.status}\nMessage: ${err.message}`;
    console.log(message);
    return throwError(message);
  }

}
