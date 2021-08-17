import { Directive, Injector, OnInit } from '@angular/core';

import { BaseInputComponent } from '../base-input/base-input.component';
import { BaseHttpService } from '../../../core/http/base-http.service';
import { Observable } from 'rxjs';
import { map, mergeMap, startWith } from 'rxjs/operators';
import { BaseModel } from '../../../core/models/base-model';

@Directive()
export abstract class BaseSelectorComponent<T extends BaseModel> extends BaseInputComponent<T> implements OnInit {

  options?: T[];
  options$?: Observable<T[] | undefined>;

  protected constructor(injector: Injector, protected service?: BaseHttpService<T>) {
    super(injector);
  }

  ngOnInit() {
    this.options$ = this.service?.all().pipe(
      map(req => req?.data),
      mergeMap(options => {
        return this.control.valueChanges.pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : this.displayFn(value)),
          map(name => name ? this.filter(options, name) : options?.slice())
        )
      })
    )
  }

  displayFn(data: T): string {
    return data?.id?.toString() ?? '';
  }

  filter(options: T[] | undefined, value: string): T[] {
    const filterValue = value.toLowerCase();
    return options?.filter(option => this.displayFn(option)?.toString().toLowerCase().includes(filterValue)) ?? [];
  }

}
