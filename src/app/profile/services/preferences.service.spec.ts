import { TestBed } from '@angular/core/testing';

import { PreferencesService } from './preferences.service';
import { ApiModule } from "../../api/api.module";

describe('PreferencesService', () => {
  let service: PreferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ApiModule ],
      providers: [ PreferencesService ]
    });
    service = TestBed.inject(PreferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
