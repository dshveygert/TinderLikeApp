import { TestBed } from '@angular/core/testing';

import { PersonActionsService } from './person-actions.service';
import { ApiModule } from '../../api/api.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('PersonActionsService', () => {
  let service: PersonActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApiModule, MatSnackBarModule],
      providers: [PersonActionsService],
    });
    service = TestBed.inject(PersonActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
