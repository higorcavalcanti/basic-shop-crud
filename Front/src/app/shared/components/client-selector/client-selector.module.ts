import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSelectorComponent } from './client-selector.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    ClientSelectorComponent
  ],
  exports: [
    ClientSelectorComponent,
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ]
})
export class ClientSelectorModule { }
