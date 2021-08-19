import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttp } from './base.http';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsHttp extends BaseHttp<Client> {
  ENDPOINT = 'client';

  constructor( http: HttpClient ) {
    super(http);
  }
}
