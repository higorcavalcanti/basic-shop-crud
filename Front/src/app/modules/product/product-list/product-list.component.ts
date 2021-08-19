import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BaseListComponent } from '../../../shared/base-components/base-list/base-list.component';
import { Product } from '../../../core/models/product';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent extends BaseListComponent<Product> implements OnInit {

  formComponent = ProductFormComponent;
  displayedColumns = ['description', 'value', 'actions'];

  constructor(service: ProductsService, matDialog: MatDialog) {
    super(service, matDialog);
  }
}
