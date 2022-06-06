import { Injectable } from '@angular/core';
import {
  catchError,
  finalize,
  first,
  Observable,
  of,
  SubscriptionLike,
  tap,
} from 'rxjs';
import { Collection, fullUnsubscribe } from 'src/utils';
import { IPreferences } from '../../api/models';
import { ProfileApi } from '../../api/methods';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../../shared/services/notification.service';

@Injectable({ providedIn: 'root' })
export class PreferencesService extends Collection<IPreferences> {
  private dataSub: SubscriptionLike[] = [];
  private initialData: IPreferences = {
    gender: 'not_specified',
    age: 25,
    height: 175,
    weight: 50,
    match_accuracy: 50,
  };

  private preferencesData(): Observable<IPreferences> {
    return this.api.preferences().pipe(
      tap(data => {
        this.data = data;
      }),
      catchError(this.dataCatchError),
      finalize(() => (this.loading = false))
    );
  }

  private dataCatchError = (error: Error): Observable<any> => {
    if (error instanceof HttpErrorResponse && error?.status === 404) {
      if (error.error?.code === 100001) {
        this.data = this.initialData;
        this.notification.notify(
          'Your profile has been set to default preferences.'
        );
      }
    } else {
      this.notification.notify('Unknown Error');
    }
    return of({});
  };

  public savePreferences(preferences: IPreferences): void {
    this.loading = true;
    this.dataSub.push(
      this.api
        .preferencesSave(preferences)
        .pipe(
          tap(data => {
            this.data = data;
          }),
          first(),
          finalize(() => (this.loading = false))
        )
        .subscribe()
    );
  }

  public init(): void {
    this.loading = true;
    this.dataSub.push(this.preferencesData().subscribe());
  }

  public destroy(): void {
    fullUnsubscribe(this.dataSub);
  }

  constructor(
    private api: ProfileApi,
    private notification: NotificationService
  ) {
    super();
  }
}
