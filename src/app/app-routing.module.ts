import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from "./shared/shared.module";
import { LayoutComponent } from "./layout/components/layout/layout.component";
import { NavigationComponent } from "./layout/components/navigation/navigation.component";
import { NotFoundPage } from './layout/components/not-found/not-found.page';

const components = [LayoutComponent, NavigationComponent, NotFoundPage];
const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
      {path: 'catalog', loadChildren: () => import(`./catalog/catalog.module`).then(m => m.CatalogModule)},
      {path: 'profile', loadChildren: () => import(`./profile/profile.module`).then(m => m.ProfileModule)},
      {path: '', redirectTo: 'catalog', pathMatch: 'full'},
      {path: '**', component: NotFoundPage}
  ]}
];

@NgModule({
  declarations: components,
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
