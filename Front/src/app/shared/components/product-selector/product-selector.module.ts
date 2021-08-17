import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSelectorComponent } from './product-selector.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    ProductSelectorComponent
  ],
  exports: [
    ProductSelectorComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class ProductSelectorModule { }
