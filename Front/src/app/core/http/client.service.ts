import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from './base-http.service';
import { Client } from '../models/client';
import { ClientsStore } from '../store/client.store';
import { ClientsQuery } from '../query/client.query';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseHttpService<Client> {
  ENDPOINT = 'client';

  constructor( http: HttpClient, store: ClientsStore, query: ClientsQuery ) {
    super(http, store, query);
  }
}
