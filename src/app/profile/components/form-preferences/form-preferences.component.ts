import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, SubscriptionLike, tap, isObservable} from 'rxjs';
import { formGroupTrim, fullUnsubscribe } from 'src/utils';
import { IPreferences } from "../../../api/models";

@Component({
  selector: 'app-form-preferences',
  templateUrl: './form-preferences.component.html',
  styleUrls: ['./form-preferences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormPreferencesComponent implements OnInit, OnDestroy {
  @Input() data: Observable<IPreferences>;
  @Output() formSubmit = new EventEmitter<IPreferences>();
  public formGroup: FormGroup;
  private dataSub: SubscriptionLike[] = [];

  get isDisabled(): boolean {
    return this.formGroup.disabled || this.formGroup.invalid || this.formGroup.pristine;
  }

  submitForm(): void {
    formGroupTrim(this.formGroup);
    if (this.formGroup.valid) {
      this.formSubmit.emit(this.formGroup.value);
      this.formGroup.markAsPristine();
      this.formGroup.markAsUntouched();
    }
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      gender: ['not_specified'],
      age: [25, [Validators.required, Validators.min(18), Validators.max(100)]],
      height: [175, [Validators.required, Validators.min(1), Validators.max(300)]],
      weight: [50, [Validators.required, Validators.min(1), Validators.max(500)]],
      match_accuracy: [75, [Validators.required, Validators.min(1), Validators.max(100)]],
      is_clear: [false, [Validators.requiredTrue]]
    });
    if (isObservable(this.data)) {
      this.dataSub.push(this.data.pipe(tap(match => {
        this.formGroup.patchValue(match);
      })).subscribe());
    }
  }

  ngOnDestroy(): void {
    fullUnsubscribe(this.dataSub);
  }

  constructor(private fb: FormBuilder) {
  }
}
