import { TestBed } from '@angular/core/testing';

import { PersonListService } from './person-list.service';
import { ApiModule } from '../../api/api.module';

describe('PersonListService', () => {
  let service: PersonListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApiModule],
      providers: [PersonListService],
    });
    service = TestBed.inject(PersonListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
