import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { FormPreferencesComponent } from './components/form-preferences/form-preferences.component';

const components = [PreferencesComponent, FormPreferencesComponent];
const routes: Routes = [{ path: '', component: PreferencesComponent }];

@NgModule({
  declarations: [components],
  imports: [RouterModule.forChild(routes), SharedModule]
})
export class ProfileModule {}
