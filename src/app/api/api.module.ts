import { NgModule, Provider } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CatalogApi, ProfileApi } from './methods';
import { UserUuidInterceptor } from "./interceptors/user-uuid.interceptor";

const api = [CatalogApi, ProfileApi];
const API_INTERCEPTOR: Provider = {provide: HTTP_INTERCEPTORS, useClass: UserUuidInterceptor, multi: true};

@NgModule({
  imports: [HttpClientModule],
  providers: [...api, API_INTERCEPTOR]
})
export class ApiModule {
}
