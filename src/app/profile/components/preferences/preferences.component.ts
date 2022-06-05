import { Component } from '@angular/core';
import { PreferencesService } from '../../services/preferences.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
})
export class PreferencesComponent {
  constructor(public preferences: PreferencesService) {}
}
