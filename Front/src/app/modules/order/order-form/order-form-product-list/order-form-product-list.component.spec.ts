import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormProductListComponent } from './order-form-product-list.component';

describe('OrderFormProductListComponent', () => {
  let component: OrderFormProductListComponent;
  let fixture: ComponentFixture<OrderFormProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFormProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
