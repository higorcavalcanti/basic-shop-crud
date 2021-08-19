import { Directive, OnInit } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialog } from '@angular/material/dialog';

import { filter, map, tap } from 'rxjs/operators';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseModel } from '../../../core/models/base-model';
import { ModalResponse } from '../../../core/models/modal-response';
import { BaseService } from '../../../core/services/base.service';

@Directive()
export abstract class BaseListComponent<T extends BaseModel> implements OnInit {

  displayedColumns: string[] = ['actions'];
  formComponent!: ComponentType<BaseFormComponent<T>>;

  data$ = this.service.all();
  loading$ = this.service.isLoading();
  error$ = this.service.hasError();

  protected constructor(
    protected service: BaseService<T>,
    protected matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.load();
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
