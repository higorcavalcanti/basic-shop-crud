import { Injectable } from '@angular/core';
import { EntityUIQuery, QueryEntity } from '@datorama/akita';
import { ClientsState, ClientsStore, ClientsUiState } from '../store/client.store';
import { Client } from '../models/client';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ClientsQuery extends QueryEntity<ClientsState> {

  ui!: EntityUIQuery<ClientsUiState>;

  constructor(protected store: ClientsStore) {
    super(store);
    this.createUIQuery();
  }

  selectIsAllSelected() {
    return this.ui.selectAll().pipe(
      map(data => data.every(client => client.selected))
    );
  }

  selectIsClientSelected(client: Client) {
    return this.ui.selectEntity(client.id, x => x?.selected === true)
  }
}
