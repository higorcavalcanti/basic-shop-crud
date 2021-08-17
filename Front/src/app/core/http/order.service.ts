import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseHttpService<Order> {
  ENDPOINT = 'order';
}
