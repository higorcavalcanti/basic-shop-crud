import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BaseModel } from '../models/base-model';
import { HttpResponse } from '../models/http-response';
import { cacheable, EntityState, EntityStore, QueryEntity, setLoading } from '@datorama/akita';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService<T extends BaseModel> {

  API = 'http://localhost:5000/api'
  ENDPOINT = '';

  constructor(
    protected http: HttpClient,
    protected store: EntityStore<EntityState<T>>,
    protected query: QueryEntity<EntityState<T>>,
  ) { }

  get(id: number) {
    return this.http.get<HttpResponse<T>>(this.url(id));
  }

  all() {
    const request$ = this.http.get<HttpResponse<T[]>>(this.url()).pipe(
      setLoading(this.store),
      tap(resp => this.store?.set(resp?.data ?? [])),
      catchError((error: HttpErrorResponse) => {
        this.store.setError<Response>(error?.error);
        return throwError(error);
      })
    );
    return cacheable(this.store, request$);
  }

  add(data: T) {
    return this.http.post<HttpResponse<T>>(this.url(), data).pipe(
      tap(resp => {
        if ( resp?.data && resp?.hasError === false ) {
          this.store?.add(resp.data);
        }
      })
    );
  }

  edit(id: number, data: T) {
    return this.http.put<HttpResponse<T>>(this.url(id), data).pipe(
      tap(resp => {
        if ( !resp?.hasError && resp?.data ) {
          this.store?.update(id, resp.data);
        }
      })
    )
  }

  delete(id: number) {
    return this.http.delete<HttpResponse<T>>(this.url(id)).pipe(
      tap(resp => {
        if ( !resp.hasError ) {
          this.store?.remove(id);
        }
      })
    )
  }

  protected url(...args: any[]): string {
    let url = this.API + '/';

    if ( this.ENDPOINT ) {
      url += this.ENDPOINT + '/';
    }

    args.forEach(arg => {
      url += arg + '/';
    });
    return url;
  }

  protected getParams(object?: any): HttpParams {
    return new HttpParams({ fromObject: object });
  }
}
