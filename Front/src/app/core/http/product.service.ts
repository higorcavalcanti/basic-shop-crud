import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseHttpService<Product> {
  ENDPOINT = 'product';
}
