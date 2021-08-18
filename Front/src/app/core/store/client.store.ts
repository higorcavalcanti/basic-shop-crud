import { Injectable } from '@angular/core';
import { EntityState, EntityStore, EntityUIStore, StoreConfig } from '@datorama/akita';
import { Client } from '../models/client';

export type ClientUi = {
  selected?: boolean;
}

export interface ClientsState extends EntityState<Client> {}
export interface ClientsUiState extends EntityState<ClientUi> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'clients' })
export class ClientsStore extends EntityStore<ClientsState> {

  ui!: EntityUIStore<ClientsUiState>;

  constructor() {
    super();
    this.createUIStore().setInitialEntityState<ClientUi>(() => ({ selected: false }))
  }

  selectClient(client: Client, selected: boolean) {
    this.ui.update(client.id, { selected })
  }

  selectAllClients(selected: boolean) {
    const uiValues = this.ui.getValue();
    uiValues?.ids?.forEach(id => {
      this.ui.update(uiValues[ id ], { selected });
    });
  }
}
