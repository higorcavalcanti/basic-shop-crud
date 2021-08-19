import { Directive, Injector, OnInit, Output, EventEmitter } from '@angular/core';

import { BaseInputComponent } from '../base-input/base-input.component';
import { BaseModel } from '../../../core/models/base-model';
import { BaseService } from '../../../core/services/base.service';

@Directive()
export abstract class BaseSelectorComponent<T extends BaseModel> extends BaseInputComponent<T> implements OnInit {

  options?: T[];

  @Output() selected = new EventEmitter<T>();

  protected constructor(
    injector: Injector,
    protected service: BaseService<T>,
  ) {
    super(injector);
  }

  ngOnInit() {
    this.service?.load();
    this.service.all().subscribe(data => this.options = data)
  }

  changed(value: any) {
    const option = this.options?.find(x => x.id === value);
    if ( option ) {
      this.selected.emit( option );
    }
  }
}
