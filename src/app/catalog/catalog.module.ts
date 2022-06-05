import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SharedModule } from "../shared/shared.module";
import {PersonListService} from "./services/person-list.service";
import {PersonItemComponent} from "./components/person-item/person-item.component";
import {PersonActionsService} from "./services/person-actions.service";
import {PersonItemEmptyComponent} from "./components/person-item-empty/person-item-empty.component";

const components = [CatalogComponent, PersonItemComponent, PersonItemEmptyComponent];
const routes: Routes = [
  {path: '', component: CatalogComponent}
];

@NgModule({
  declarations: components,
  imports: [RouterModule.forChild(routes), SharedModule],
  providers: [PersonListService, PersonActionsService]
})
export class CatalogModule { }
