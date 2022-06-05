import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonItemEmptyComponent } from './person-item-empty.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PersonItemComponent', () => {
  let component: PersonItemEmptyComponent;
  let fixture: ComponentFixture<PersonItemEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PersonItemEmptyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonItemEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
