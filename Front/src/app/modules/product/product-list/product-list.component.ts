import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseListComponent } from '../../../shared/base-components/base-list/base-list.component';
import { Product } from '../../../core/models/product';
import { ProductService } from '../../../core/http/product.service';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductsQuery } from '../../../core/query/product.query';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent extends BaseListComponent<Product> implements OnInit {

  formComponent = ProductFormComponent;
  displayedColumns = ['description', 'value', 'actions'];

  constructor(service: ProductService, matDialog: MatDialog, query: ProductsQuery) {
    super(service, matDialog, query);
  }
}
