import { Directive, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseHttpService } from '../../../core/http/base-http.service';
import { BaseModel } from '../../../core/models/base-model';
import { ModalResponse } from '../../../core/models/modal-response';
import { MatDialogRef } from '@angular/material/dialog';

@Directive()
export abstract class BaseFormComponent<T extends BaseModel> implements OnInit {

  form!: FormGroup;

  get isEdit(): boolean {
    return this.data != null;
  }

  protected constructor(
    protected service: BaseHttpService<T>,
    protected data?: T,
    protected dialogRef?: MatDialogRef<BaseFormComponent<T>>
  ) { }

  abstract getFormGroup(): FormGroup;

  ngOnInit() {
    this.form = this.getFormGroup();
    if ( this.data ) {
      this.form.patchValue(this.data);
    }
  }

  getAddObservable(data: T) {
    return this.service.add(data);
  }

  getEditObservable(id: number, data: T) {
    data.id = id;
    return this.service.edit(id, data);
  }

  getObservable() {
    const data = this.form.getRawValue();
    if ( this.isEdit ) {
      return this.getEditObservable(this.data!.id!, data);
    }
    return this.getAddObservable(data);
  }

  save() {
    this.getObservable().subscribe(
      req => this.close({ success: true, data: req?.data })
    )
  }

  cancel() {
    this.close({ success: false });
  }

  close(data: ModalResponse<T>) {
    this.dialogRef?.close(data);
  }

}
