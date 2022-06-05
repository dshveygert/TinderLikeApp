import { FormGroup } from '@angular/forms';

export function formGroupTrim(formGroup: FormGroup): void {
  for (const item in formGroup.controls) {
    if (formGroup.controls.hasOwnProperty(item)) {
      const { value } = formGroup.controls[item];
      if (typeof value === 'string') {
        formGroup.controls[item].setValue((value as string)?.trim());
      }
    }
  }
}
