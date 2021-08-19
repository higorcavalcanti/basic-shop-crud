import { Component, Inject } from '@angular/core';
import { BaseFormComponent } from '../../../shared/base-components/base-form/base-form.component';
import { Client } from '../../../core/models/client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientsService } from '../../../core/services/clients.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent extends BaseFormComponent<Client> {

  constructor(
    protected formBuilder: FormBuilder,
    service: ClientsService,
    matDialog: MatDialogRef<ClientFormComponent>,
    @Inject(MAT_DIALOG_DATA) data: Client,
  ) {
    super(service, data, matDialog);
  }

  getFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      village: [null, [Validators.required]]
    });
  }
}
