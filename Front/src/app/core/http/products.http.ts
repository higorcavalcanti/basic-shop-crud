import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttp } from './base.http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttp extends BaseHttp<Product> {
  ENDPOINT = 'product';

  constructor( http: HttpClient ) {
    super(http);
  }
}
