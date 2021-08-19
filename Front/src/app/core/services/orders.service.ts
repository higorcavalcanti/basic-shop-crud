import { Injectable } from '@angular/core';

import { BaseService } from './base.service';
import { Order } from '../models/order';
import { OrdersStore } from '../store/orders.store';
import { OrdersQuery } from '../query/orders.query';
import { OrdersHttp } from '../http/orders.http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseService<Order> {
  constructor(http: OrdersHttp, store: OrdersStore, query: OrdersQuery ) {
    super(http, store, query);
  }
}
