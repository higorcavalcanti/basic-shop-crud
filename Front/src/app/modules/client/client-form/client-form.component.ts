import { Component } from '@angular/core';
import { BaseFormComponent } from '../../../shared/base-components/base-form/base-form.component';
import { Client } from '../../../core/models/client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent extends BaseFormComponent<Client> {

  constructor() {
    super();
  }
}
