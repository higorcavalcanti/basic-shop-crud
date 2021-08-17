import { Component, Injector } from '@angular/core';
import { BaseSelectorComponent } from '../../base-components/base-selector/base-selector.component';
import { Product } from '../../../core/models/product';
import { ProductService } from '../../../core/http/product.service';

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.scss']
})
export class ProductSelectorComponent extends BaseSelectorComponent<Product> {

  constructor(injector: Injector, service: ProductService) {
    super(injector, service);
  }

  displayFn(data: Product): string {
    return data?.description ?? '';
  }
}
