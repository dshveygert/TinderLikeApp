import { TestBed } from '@angular/core/testing';

import { PersonActionsService } from './person-actions.service';
import { ApiModule } from '../../api/api.module';

describe('PersonActionsService', () => {
  let service: PersonActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApiModule],
      providers: [PersonActionsService],
    });
    service = TestBed.inject(PersonActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
