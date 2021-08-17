import { Directive, Injector, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Directive()
export abstract class BaseInputComponent<T = any> implements ControlValueAccessor {

  @Input() value?: T;
  @Input() disabled = false;

  get control(): FormControl {
    return this._ngControl?.control as FormControl;
  }

  protected readonly _ngControl!: NgControl;
  protected constructor(injector: Injector) {
    try {
      this._ngControl = injector.get(NgControl);
      this._ngControl.valueAccessor = this;
    } catch (e) {}
  }

  modelChange = (_: T) => {};
  modelTouched = () => {};


  registerOnChange(fn: any): void {
    this.modelChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.modelTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.onDisabledChange(isDisabled);
  }

  writeValue(obj: T): void {
    this.value = obj;
    this.onWriteValue( obj );
  }

  onWriteValue(_value: T): void { }
  onDisabledChange(_disabled: boolean): void { }
}
