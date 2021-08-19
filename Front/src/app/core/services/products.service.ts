import { Injectable } from '@angular/core';

import { BaseService } from './base.service';
import { Product } from '../models/product';
import { ProductsStore } from '../store/products.store';
import { ProductsQuery } from '../query/products.query';
import { ProductsHttp } from '../http/products.http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<Product> {
  constructor(http: ProductsHttp, store: ProductsStore, query: ProductsQuery ) {
    super(http, store, query);
  }
}
