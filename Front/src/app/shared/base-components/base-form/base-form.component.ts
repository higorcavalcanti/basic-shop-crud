import { Directive } from '@angular/core';
import { BaseModel } from '../../../core/models/base-model';

@Directive()
export abstract class BaseFormComponent<T extends BaseModel> {

  protected constructor() { }

}
