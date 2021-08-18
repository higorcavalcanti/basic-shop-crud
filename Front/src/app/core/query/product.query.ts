import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProductsState, ProductsStore } from '../store/product.store';

@Injectable({ providedIn: 'root' })
export class ProductsQuery extends QueryEntity<ProductsState> {
  constructor(protected store: ProductsStore) {
    super(store);
  }
}
