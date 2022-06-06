import { TestBed } from '@angular/core/testing';

import { PreferencesService } from './preferences.service';
import { ApiModule } from '../../api/api.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('PreferencesService', () => {
  let service: PreferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApiModule, MatSnackBarModule],
      providers: [PreferencesService],
    });
    service = TestBed.inject(PreferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
