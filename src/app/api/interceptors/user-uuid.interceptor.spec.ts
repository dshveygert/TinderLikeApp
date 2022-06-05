import { TestBed } from '@angular/core/testing';

import { UserUuidInterceptor } from './user-uuid.interceptor';

describe('UserUuidInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [UserUuidInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: UserUuidInterceptor =
      TestBed.inject(UserUuidInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
