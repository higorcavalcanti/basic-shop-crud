import { Directive, Injector, OnInit, Output, EventEmitter } from '@angular/core';

import { BaseInputComponent } from '../base-input/base-input.component';
import { BaseHttpService } from '../../../core/http/base-http.service';
import { BaseModel } from '../../../core/models/base-model';
import { map } from 'rxjs/operators';

@Directive()
export abstract class BaseSelectorComponent<T extends BaseModel> extends BaseInputComponent<T> implements OnInit {

  options?: T[];

  @Output() selected = new EventEmitter<T>();

  protected constructor(injector: Injector, protected service?: BaseHttpService<T>) {
    super(injector);
  }

  ngOnInit() {
    this.service?.all().pipe(
      map(req => req?.data)
    ).subscribe(data => this.options = data)
  }

  changed(value: any) {
    const option = this.options?.find(x => x.id === value);
    if ( option ) {
      this.selected.emit( option );
    }
  }
}
