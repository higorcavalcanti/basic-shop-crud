import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseListComponent } from '../../../shared/base-components/base-list/base-list.component';
import { Order } from '../../../core/models/order';
import { OrderFormComponent } from '../order-form/order-form.component';
import { OrderService } from '../../../core/http/order.service';
import { OrdersQuery } from '../../../core/query/order.query';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent extends BaseListComponent<Order> implements OnInit {

  formComponent = OrderFormComponent;
  displayedColumns = ['id', 'date', 'client', 'value', 'discount', 'total', 'actions'];

  constructor(service: OrderService, matDialog: MatDialog, query: OrdersQuery) {
    super(service, matDialog, query);
  }
}
