import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttp } from './base.http';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersHttp extends BaseHttp<Order> {
  ENDPOINT = 'order';

  constructor( http: HttpClient ) {
    super(http);
  }
}
