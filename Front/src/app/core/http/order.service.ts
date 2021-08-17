import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Order } from '../models/order';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseHttpService<Order> {
  ENDPOINT = 'order';

  all() {
    return super.all().pipe(
      map(req => {
        req.data?.map(order => {
          order.products = [
            { id: 1, value: 1, description: 'Produto Mock 1' },
            { id: 2, value: 2, description: 'Produto Mock 2' },
            { id: 3, value: 3, description: 'Produto Mock 3' },
            { id: 4, value: 4, description: 'Produto Mock 4' },
          ]
        });
        return req;
      })
    )
  }
}
