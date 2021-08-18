import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BaseListComponent } from '../../../shared/base-components/base-list/base-list.component';
import { Client } from '../../../core/models/client';
import { ClientService } from '../../../core/http/client.service';
import { ClientFormComponent } from '../client-form/client-form.component';
import { ClientsQuery } from '../../../core/query/client.query';
import { ClientsStore } from '../../../core/store/client.store';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent extends BaseListComponent<Client> implements OnInit {

  formComponent = ClientFormComponent;
  displayedColumns = ['name', 'email', 'village', 'actions'];

  // isAllSelected$ = this.query.selectIsAllSelected();

  constructor(
    protected service: ClientService,
    protected matDialog: MatDialog,
    protected query: ClientsQuery,
    protected store: ClientsStore,
  ) {
    super(service, matDialog, query);
  }

  // selectItem(client: Client, selected: boolean) {
  //   return this.store.selectClient(client, selected);
  // }
  //
  // isSelected(client: Client) {
  //   return this.query.selectIsClientSelected(client);
  // }
  //
  // selectAllItems(selected: boolean) {
  //   this.store.selectAllClients(selected);
  // }
}
