import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '../../../shared/base-components/base-list/base-list.component';
import { Client } from '../../../core/models/client';
import { ClientService } from '../../../core/http/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent extends BaseListComponent<Client> implements OnInit {

  constructor(service: ClientService) {
    super(service);
  }
}
