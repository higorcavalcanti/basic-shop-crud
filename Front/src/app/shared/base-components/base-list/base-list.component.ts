import { Directive, OnInit } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialog } from '@angular/material/dialog';

import { filter, map, tap } from 'rxjs/operators';
import { EntityState, QueryEntity } from '@datorama/akita';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseModel } from '../../../core/models/base-model';
import { BaseHttpService } from '../../../core/http/base-http.service';
import { ModalResponse } from '../../../core/models/modal-response';

@Directive()
export abstract class BaseListComponent<T extends BaseModel> implements OnInit {

  displayedColumns: string[] = ['actions'];
  formComponent!: ComponentType<BaseFormComponent<T>>;

  data$ = this.query.selectAll();
  loading$ = this.query.selectLoading();
  error$ = this.query.selectError();

  protected constructor(
    protected service: BaseHttpService<T>,
    protected matDialog: MatDialog,
    protected query: QueryEntity<EntityState<T>>,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.all().subscribe();
  }

  add() {
    this.matDialog.open(this.formComponent).afterClosed().pipe(
      map(x => x as ModalResponse<T>),
      filter(x => x?.success === true),
      tap(() => this.loadData())
    ).subscribe();
  }

  edit(item: T) {
    this.matDialog.open(this.formComponent, { data: item }).afterClosed().pipe(
      map(x => x as ModalResponse<T>),
      filter(x => x?.success === true),
      tap(() => this.loadData())
    ).subscribe();
  }

  remove(item: T) {
    const id = item!.id!;
    const confirm = window.confirm('Tem certeza deletar esse item?');
    if ( confirm ) {
      this.service.delete(id).subscribe(
        () => this.loadData(),
      );
    }
  }
}
