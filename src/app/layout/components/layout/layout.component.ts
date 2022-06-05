import {Component, OnDestroy, OnInit} from '@angular/core';
import { PreferencesService } from "../../../profile/services/preferences.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    this.preferences.init();
  }
  ngOnDestroy(): void {
    this.preferences.destroy();
  }

  constructor(private preferences: PreferencesService) { }
}
