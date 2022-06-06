import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogComponent } from './catalog.component';
import { PersonActionsService } from '../../services/person-actions.service';
import { PersonListService } from '../../services/person-list.service';
import { ApiModule } from '../../../api/api.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiModule, MatSnackBarModule],
      declarations: [CatalogComponent],
      providers: [PersonActionsService, PersonListService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
