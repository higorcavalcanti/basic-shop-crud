import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _header = new BehaviorSubject<string>('Início');
  header$ = this._header.asObservable();

  constructor() { }

  setHeader(title: string) {
    this._header.next(title);
  }
}
