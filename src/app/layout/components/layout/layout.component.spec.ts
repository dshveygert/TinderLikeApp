import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { PreferencesService } from '../../../profile/services/preferences.service';
import { ApiModule } from '../../../api/api.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiModule, MatSnackBarModule],
      declarations: [LayoutComponent],
      providers: [PreferencesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
