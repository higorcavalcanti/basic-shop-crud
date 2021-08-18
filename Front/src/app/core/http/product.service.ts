import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { ProductsStore } from '../store/product.store';
import { ProductsQuery } from '../query/product.query';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseHttpService<Product> {
  ENDPOINT = 'product';

  constructor( http: HttpClient, store: ProductsStore, query: ProductsQuery ) {
    super(http, store, query);
  }
}
