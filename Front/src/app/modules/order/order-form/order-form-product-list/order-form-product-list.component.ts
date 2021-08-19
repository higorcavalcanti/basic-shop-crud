import { Component, Injector, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { BaseInputComponent } from '../../../../shared/base-components/base-input/base-input.component';
import { Product } from '../../../../core/models/product';
import { ProductsHttp } from '../../../../core/http/products.http';

@Component({
  selector: 'app-order-form-product-list',
  templateUrl: './order-form-product-list.component.html',
  styleUrls: ['./order-form-product-list.component.scss']
})
export class OrderFormProductListComponent extends BaseInputComponent<Product[]> implements OnInit {

  formArray!: FormArray;

  get values(): Product[] | undefined {
    return this.control?.value;
  }

  constructor(
    protected formBuilder: FormBuilder,
    injector: Injector,
    protected service?: ProductsHttp,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    const controls = this.values?.map(product => this.groupFromProduct(product));
    this.formArray = this.formBuilder.array( controls ?? [] );

    this.formArray.valueChanges.subscribe(value => {
      this.control.setValue(value);
    });
  }

  groupFromProduct(product?: Product): FormGroup {
    return this.formBuilder.group({
      id: product?.id,
      value: product?.value,
      description: product?.description
    });
  }

  add() {
    this.formArray.insert(0, this.groupFromProduct());
  }

  remove(index: number) {
    this.formArray.removeAt(index);
  }

  groupAt(index: number): FormGroup {
    return this.formArray.at(index) as FormGroup;
  }

  productChanged(index: number, product: Product) {
    this.groupAt(index).get('value')?.setValue(product?.value);
  }
}
