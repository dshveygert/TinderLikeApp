import { Injectable } from '@angular/core';
import { CatalogApi } from '../../api/methods';
import { IStatus } from '../../api/models';
import { Observable } from 'rxjs';

@Injectable()
export class PersonActionsService {
  public personFeedback(
    action: 'like' | 'dislike',
    personId: number
  ): Observable<IStatus> {
    return this.api.personFeedback(action, personId);
  }

  constructor(private api: CatalogApi) {}
}
