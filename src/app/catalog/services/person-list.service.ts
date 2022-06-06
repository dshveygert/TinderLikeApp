import { Injectable } from '@angular/core';
import { Collection, fullUnsubscribe } from '../../../utils';
import { IPerson, IStatus } from '../../api/models';
import {
  catchError,
  combineLatest,
  finalize,
  map,
  Observable,
  of,
  ReplaySubject,
  startWith,
  SubscriptionLike,
  tap,
} from 'rxjs';
import { CatalogApi } from '../../api/methods';
import { NotificationService } from '../../shared/services/notification.service';

@Injectable()
export class PersonListService extends Collection<IPerson[]> {
  private dataSub: SubscriptionLike[] = [];
  private _currentIndex = 0;
  private _currentIndex$ = new ReplaySubject<number>(1);

  get currentIndex(): number {
    return this._currentIndex;
  }

  set currentIndex(n: number) {
    this._currentIndex = n;
    this._currentIndex$.next(this._currentIndex);
  }

  get currentIndex$(): Observable<number> {
    return this._currentIndex$.pipe(startWith(this._currentIndex));
  }

  get currentPerson$(): Observable<IPerson[]> {
    return combineLatest([this.data$, this.currentIndex$]).pipe(
      map(([data, index]) => {
        return !!data[index] ? [data[index]] : [];
      }),
      startWith([])
    );
  }

  private personsData(): Observable<IPerson[]> {
    return this.api.persons().pipe(
      tap(data => {
        this.data = data;
      }),
      catchError(this.dataCatchError),
      finalize(() => (this.loading = false))
    );
  }

  private dataCatchError = (error: Error): Observable<any> => {
    this.notification.notify('Unknown Error');
    return of({});
  };

  public init(): void {
    this.loading = true;
    this.dataSub.push(this.personsData().subscribe());
  }

  public destroy(): void {
    fullUnsubscribe(this.dataSub);
  }

  public updateMatches(id: number, status: IStatus): void {
    const index = this.data.findIndex(item => item.id === id);
    const newData = [...this.data];
    newData[index] = { ...this.data[index], status };
    this.data = newData;
  }

  public nextPerson(): void {
    this.currentIndex = this.currentIndex + 1;
  }

  public prevPerson(): void {
    this.currentIndex = this.currentIndex === 0 ? 0 : this.currentIndex - 1;
  }

  public resetCounter(): void {
    this.currentIndex = 0;
  }

  constructor(private api: CatalogApi, private notification: NotificationService) {
    super();
  }
}
