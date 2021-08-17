import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { BaseFormComponent } from '../../../shared/base-components/base-form/base-form.component';
import { Order } from '../../../core/models/order';
import { OrderService } from '../../../core/http/order.service';
import { Product } from '../../../core/models/product';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent extends BaseFormComponent<Order> implements OnInit {

  constructor(
    protected formBuilder: FormBuilder,
    service: OrderService,
    matDialog: MatDialogRef<OrderFormComponent>,
    @Inject(MAT_DIALOG_DATA) data: Order,
  ) {
    super(service, data, matDialog);
    // super(service, undefined, undefined);
  }

  ngOnInit() {
    super.ngOnInit();

    const controlValue = this.form.get('value')!;
    const controlDiscount = this.form.get('discount')!;
    const controlTotal = this.form.get('total')!;

    this.form.get('products')?.valueChanges.subscribe((products: Product[]) => {
      const value = products?.map(x => x.value as number)
        ?.filter(x => x != null)
        ?.reduce((acc, cur) => acc + cur, 0);

      controlValue?.setValue(value);
    });

    combineLatest(controlValue.valueChanges, controlDiscount.valueChanges).subscribe(
      ([value, discount]) => controlTotal.setValue(value + discount)
    )
  }

  getFormGroup(): FormGroup {
    return this.formBuilder.group({
      date: null,
      clientId: null,
      value: [{ value: null, disabled: true }],
      discount: null,
      total: [{ value: null, disabled: true }],
      products: null,
    });
  }
}
