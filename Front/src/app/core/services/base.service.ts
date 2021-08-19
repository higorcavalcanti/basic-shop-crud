import { Injectable } from '@angular/core';
import { BaseHttp } from '../http/base.http';
import { cacheable, EntityState, EntityStore, QueryEntity, setLoading } from '@datorama/akita';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  constructor(
    public http: BaseHttp<T>,
    public store: EntityStore<EntityState<T>>,
    public query: QueryEntity<EntityState<T>>,
  ) { }

  load(): void {
    const request$ = this.http.all().pipe(
      setLoading(this.store),
      tap(resp => this.store?.set(resp?.data ?? [])),
      catchError((error: HttpErrorResponse) => {
        this.store.setError<Response>(error?.error);
        return throwError(error);
      })
    );
    cacheable(this.store, request$).subscribe();
  }

  all() {
    return this.query.selectAll();
  }

  get(id: number) {
    return this.http.get(id);
  }

  add(data: T) {
    return this.http.add(data).pipe(
      tap(resp => {
        if ( resp?.data && resp?.hasError === false ) {
          this.store?.add(resp.data);
        }
      })
    );
  }

  edit(id: number, data: T) {
    return this.http.edit(id, data).pipe(
      tap(resp => {
        if ( !resp?.hasError && resp?.data ) {
          this.store?.update(id, resp.data);
        }
      })
    )
  }

  delete(id: number) {
    return this.http.delete(id).pipe(
      tap(resp => {
        if ( !resp.hasError ) {
          this.store?.remove(id);
        }
      })
    );
  }

  isLoading() {
    return this.query.selectLoading();
  }

  hasError() {
    return this.query.selectError();
  }
}
