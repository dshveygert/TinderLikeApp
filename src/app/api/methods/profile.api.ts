import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IPreferences } from '../models';

@Injectable()
export class ProfileApi {
  private api = `${environment.api.host}/api/v1/profile`;

  public preferences(): Observable<IPreferences> {
    return this.http.get<IPreferences>(`${this.api}/preferences`);
  }

  public preferencesSave(data: IPreferences): Observable<IPreferences> {
    return this.http.post<IPreferences>(`${this.api}/preferences`, data);
  }

  constructor(private http: HttpClient) {}
}
