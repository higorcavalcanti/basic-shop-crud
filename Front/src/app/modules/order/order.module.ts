import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderFormComponent } from './order-form/order-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { OrderListComponent } from './order-list/order-list.component';
import { MatTableModule } from '@angular/material/table';
import { ClientSelectorModule } from '../../shared/components/client-selector/client-selector.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    OrderFormComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    ClientSelectorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
  ]
})
export class OrderModule { }
