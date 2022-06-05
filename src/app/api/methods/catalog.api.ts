import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {IPerson, IStatus} from "../models";

@Injectable()
export class CatalogApi {
  private api = `${environment.api.host}/api/v1/catalog`;

  public persons(): Observable<IPerson[]> {
    return this.http.get<IPerson[]>(`${this.api}/persons`);
  }

  public personFeedback(action: 'like' | 'dislike', personId: number): Observable<IStatus> {
    return this.http.post<IStatus>(`${this.api}/feedback/${action}`, {id: personId});
  }

  constructor(private http: HttpClient) {
  }
}
