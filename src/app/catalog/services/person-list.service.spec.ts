import { TestBed } from '@angular/core/testing';

import { PersonListService } from './person-list.service';
import { ApiModule } from '../../api/api.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('PersonListService', () => {
  let service: PersonListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApiModule, MatSnackBarModule],
      providers: [PersonListService],
    });
    service = TestBed.inject(PersonListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
