import { Component, Injector } from '@angular/core';
import { BaseSelectorComponent } from '../../base-components/base-selector/base-selector.component';
import { Client } from '../../../core/models/client';
import { ClientService } from '../../../core/http/client.service';

@Component({
  selector: 'app-client-selector',
  templateUrl: './client-selector.component.html',
  styleUrls: ['./client-selector.component.scss']
})
export class ClientSelectorComponent extends BaseSelectorComponent<Client> {

  constructor(injector: Injector, service: ClientService) {
    super(injector, service);
  }
}
