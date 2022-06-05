import { TestBed } from '@angular/core/testing';

import { PersonActionsService } from './person-actions.service';

describe('PersonActionsService', () => {
  let service: PersonActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
