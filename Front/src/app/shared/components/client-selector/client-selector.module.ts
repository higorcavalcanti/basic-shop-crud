import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSelectorComponent } from './client-selector.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



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
    MatInputModule
  ]
})
export class ClientSelectorModule { }
