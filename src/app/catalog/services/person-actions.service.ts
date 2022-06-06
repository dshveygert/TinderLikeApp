import { Injectable } from '@angular/core';
import { CatalogApi } from '../../api/methods';
import { IStatus } from '../../api/models';
import { catchError, Observable, of } from 'rxjs';
import { NotificationService } from '../../shared/services/notification.service';

@Injectable()
export class PersonActionsService {
  public personFeedback(
    action: 'like' | 'dislike',
    personId: number
  ): Observable<IStatus> {
    return this.api.personFeedback(action, personId).pipe(catchError(this.dataCatchError));
  }

  private dataCatchError = (error: Error): Observable<any> => {
    this.notification.notify('Unknown Error');
    return of({});
  };

  constructor(private api: CatalogApi, private notification: NotificationService) {}
}
