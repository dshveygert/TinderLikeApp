import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar/snack-bar-config';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private viewDuration = 5000;
  private label = 'Close';
  private config: MatSnackBarConfig = {
    verticalPosition: 'top',
    duration: this.viewDuration
  };

  public notify(message: string): void {
    this.matSnackbar.open(message, this.label, this.config);
  }

  constructor(private matSnackbar: MatSnackBar) { }
}
