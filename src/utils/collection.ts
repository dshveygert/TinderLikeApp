import { Observable, ReplaySubject } from 'rxjs';
import { ICollection } from '../app/api/models';

export class Collection<T = any> implements ICollection<T> {
  _data: T;
  _data$: ReplaySubject<T> = new ReplaySubject<T>(1);

  get data(): T {
    return this._data;
  }

  set data(data: T) {
    this._data = data;
    this._data$.next(this._data);
  }

  get data$(): Observable<T> {
    return this._data$;
  }

  _loading: boolean;
  _loading$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  get loading(): boolean {
    return this._loading;
  }

  set loading(loading: boolean) {
    this._loading = loading;
    this._loading$.next(this._loading);
  }

  get loading$(): Observable<boolean> {
    return this._loading$;
  }

  public trackByFn = (i: number, item: { id: number }): number => item?.id ?? i;
}
