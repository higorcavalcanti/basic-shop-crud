import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseHttpService<Client> {
  ENDPOINT = 'client';
}
