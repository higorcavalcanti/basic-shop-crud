import { BaseModel } from './base-model';
import { Client } from './client';
import { Product } from './product';

export class Order extends BaseModel {
  date?: string;
  value?: number;
  discount?: number;
  total?: number;

  clientId?: number;
  client?: Client;

  products?: Product[];
}
