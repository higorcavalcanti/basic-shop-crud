import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseModel } from '../models/base-model';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService<T extends BaseModel> {

  API = 'http://localhost:5000/api'
  ENDPOINT = '';

  constructor(
    protected http: HttpClient
  ) { }

  get(id: number) {
    return this.http.get<Response<T>>(this.url(id));
  }

  all() {
    return this.http.get<Response<T[]>>(this.url());
  }

  add(data: T) {
    return this.http.post<Response<T>>(this.url(), data);
  }

  edit(id: number, data: T) {
    return this.http.put<Response<T>>(this.url(id), data);
  }

  delete(id: number) {
    return this.http.delete<Response<T>>(this.url(id));
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
