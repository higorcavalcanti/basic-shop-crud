import { Directive, OnInit } from '@angular/core';
import { BaseModel } from '../../../core/models/base-model';
import { BaseHttpService } from '../../../core/http/base-http.service';

@Directive()
export abstract class BaseListComponent<T extends BaseModel> implements OnInit {

  data: T[] = [];
  displayedColumns: string[] = ['name', 'email', 'village', 'actions'];

  protected constructor(
    protected service: BaseHttpService<T>,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.all().subscribe(
      response => this.data = response?.data ?? []
    );
  }

  add() {

  }

  edit(item: T) {

  }

  remove(item: T) {

  }
}
