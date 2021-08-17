import { Component, Inject } from '@angular/core';
import { BaseFormComponent } from '../../../shared/base-components/base-form/base-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../../core/http/product.service';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent extends BaseFormComponent<Product> {

  constructor(
    protected formBuilder: FormBuilder,
    service: ProductService,
    matDialog: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) data: Product,
  ) {
    super(service, data, matDialog);
  }

  getFormGroup(): FormGroup {
    return this.formBuilder.group({
      description: [null, [Validators.required]],
      value: [null, [Validators.required, Validators.min(0)]],
    });
  }
}
