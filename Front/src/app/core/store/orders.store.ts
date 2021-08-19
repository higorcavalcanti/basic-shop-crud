import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Order } from '../models/order';

export interface OrdersState extends EntityState<Order, number> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'orders' })
export class OrdersStore extends EntityStore<OrdersState> {

  constructor() {
    super();
  }
}
