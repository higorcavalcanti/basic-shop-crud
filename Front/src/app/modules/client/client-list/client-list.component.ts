import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BaseListComponent } from '../../../shared/base-components/base-list/base-list.component';
import { Client } from '../../../core/models/client';
import { ClientService } from '../../../core/http/client.service';
import { ClientFormComponent } from '../client-form/client-form.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent extends BaseListComponent<Client> implements OnInit {

  formComponent = ClientFormComponent;
  displayedColumns = ['name', 'email', 'village', 'actions'];

  constructor(service: ClientService, matDialog: MatDialog) {
    super(service, matDialog);
  }
}
