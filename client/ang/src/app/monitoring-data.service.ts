import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SingleData } from './single-data';

@Injectable({
  providedIn: 'root'
})
export class MonitoringDataService {

  private dataUrl = 'api/data';
  httpOptions = {
    header: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getData(): Observable<SingleData> {
    return this.http.get<SingleData>(this.dataUrl).pipe(
      tap(_ => console.log("fetched data")),
      catchError(this.handleError<SingleData>('getData'))
    )
  }
  /**
   * Copied from Angular tutorial - better http error handling
   * would probably be using HttpInterceptor
   */
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
