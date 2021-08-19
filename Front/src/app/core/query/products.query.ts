import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProductState, ProductsStore } from '../store/products.store';

@Injectable({ providedIn: 'root' })
export class ProductsQuery extends QueryEntity<ProductState> {
  constructor(protected store: ProductsStore) {
    super(store);
  }
}
