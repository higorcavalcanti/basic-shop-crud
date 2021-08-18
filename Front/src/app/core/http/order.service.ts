import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { OrdersQuery } from '../query/order.query';
import { OrdersStore } from '../store/order.store';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseHttpService<Order> {
  ENDPOINT = 'order';

  constructor( http: HttpClient, store: OrdersStore, query: OrdersQuery ) {
    super(http, store, query);
  }
}
