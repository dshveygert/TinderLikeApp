import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { localStorageGetItem, localStorageSetItem } from '../../../utils';
import { ELocalStorage } from '../models';

@Injectable()
export class UserUuidInterceptor implements HttpInterceptor {
  private localKey = ELocalStorage.uuid;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes('/api/v1')) {
      return next.handle(this.addUUIDToRequest(request));
    }
    return next.handle(request);
  }

  private addUUIDToRequest = (request: HttpRequest<any>): HttpRequest<any> => {
    let headers = request.headers;
    headers = headers.set('TinderUserUUID', this.getUUID);
    return request.clone({ headers });
  };

  get getUUID(): string {
    const uuid = localStorageGetItem(this.localKey);
    if (!uuid) {
      const newUUID = `${new Date().getTime()}-Tin-${UserUuidInterceptor.getRandomIntInclusive(
        1,
        10000
      )}-deR-${UserUuidInterceptor.getRandomIntInclusive(1, 10000)}-uuid`;
      localStorageSetItem(this.localKey, newUUID);
      return newUUID;
    }
    return uuid;
  }

  private static getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  constructor() {}
}
