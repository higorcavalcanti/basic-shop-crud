import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { BaseFormComponent } from '../../../shared/base-components/base-form/base-form.component';
import { Order } from '../../../core/models/order';
import { OrderService } from '../../../core/http/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent extends BaseFormComponent<Order> {

  constructor(
    protected formBuilder: FormBuilder,
    service: OrderService,
    matDialog: MatDialogRef<OrderFormComponent>,
    @Inject(MAT_DIALOG_DATA) data: Order,
  ) {
    super(service, data, matDialog);
    // super(service, undefined, undefined);
  }

  getFormGroup(): FormGroup {
    return this.formBuilder.group({
      date: null,
      client: null,
      value: null,
      discount: null,
      total: null,
    });
  }
}
