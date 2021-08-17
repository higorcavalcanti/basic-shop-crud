import { Component, Inject } from '@angular/core';
import { BaseFormComponent } from '../../../shared/base-components/base-form/base-form.component';
import { Client } from '../../../core/models/client';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../../../core/http/client.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent extends BaseFormComponent<Client> {

  constructor(
    protected formBuilder: FormBuilder,
    service: ClientService,
    matDialog: MatDialogRef<ClientFormComponent>,
    @Inject(MAT_DIALOG_DATA) data: Client,
  ) {
    super(service, data, matDialog);
  }

  getFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: null,
      email: null,
      village: null
    });
  }
}
