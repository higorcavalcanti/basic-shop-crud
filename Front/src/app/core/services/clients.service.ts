import { Injectable } from '@angular/core';

import { BaseService } from './base.service';
import { Client } from '../models/client';
import { ClientsStore } from '../store/clients.store';
import { ClientsQuery } from '../query/clients.query';
import { ClientsHttp } from '../http/clients.http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService extends BaseService<Client> {
  constructor(http: ClientsHttp, store: ClientsStore, query: ClientsQuery ) {
    super(http, store, query);
  }
}
